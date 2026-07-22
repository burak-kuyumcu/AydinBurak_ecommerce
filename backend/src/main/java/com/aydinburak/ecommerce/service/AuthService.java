package com.aydinburak.ecommerce.service;

import com.aydinburak.ecommerce.dto.LoginRequest;
import com.aydinburak.ecommerce.dto.SignupRequest;
import com.aydinburak.ecommerce.entity.Role;
import com.aydinburak.ecommerce.entity.User;
import com.aydinburak.ecommerce.repository.RoleRepository;
import com.aydinburak.ecommerce.repository.UserRepository;
import com.aydinburak.ecommerce.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.Locale;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @Transactional
    public Map<String, Object> signup(SignupRequest request) {

        String normalizedEmail = request
                .getEmail()
                .trim()
                .toLowerCase(Locale.ROOT);

        if (userRepository.existsByEmailIgnoreCase(normalizedEmail)) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    "This email is already registered"
            );
        }

        Role role = roleRepository
                .findById(request.getRole_id())
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.BAD_REQUEST,
                        "Role not found"
                ));

        User user = new User();
        user.setName(request.getName().trim());
        user.setEmail(normalizedEmail);
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setEnabled(true);
        user.setRole(role);

        User savedUser = userRepository.save(user);

        return Map.of(
                "message", "User created successfully",
                "user_id", savedUser.getId()
        );
    }

    public Map<String, Object> login(LoginRequest request) {

        String normalizedEmail = request
                .getEmail()
                .trim()
                .toLowerCase(Locale.ROOT);

        User user = userRepository
                .findByEmailIgnoreCase(normalizedEmail)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.UNAUTHORIZED,
                        "Email or password is incorrect"
                ));

        boolean passwordMatches = passwordEncoder.matches(
                request.getPassword(),
                user.getPassword()
        );

        if (!passwordMatches) {
            throw new ResponseStatusException(
                    HttpStatus.UNAUTHORIZED,
                    "Email or password is incorrect"
            );
        }

        if (!user.isEnabled()) {
            throw new ResponseStatusException(
                    HttpStatus.FORBIDDEN,
                    "User account is disabled"
            );
        }

        String token = jwtService.generateToken(user);

        return Map.of(
                "id", user.getId(),
                "name", user.getName(),
                "email", user.getEmail(),
                "role", Map.of(
                        "id", user.getRole().getId(),
                        "name", user.getRole().getName()
                ),
                "token", token
        );
    }

    public Map<String, Object> verify(String email) {

        User user = userRepository
                .findByEmailIgnoreCase(email)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.UNAUTHORIZED,
                        "User not found"
                ));

        if (!user.isEnabled()) {
            throw new ResponseStatusException(
                    HttpStatus.FORBIDDEN,
                    "User account is disabled"
            );
        }

        return Map.of(
                "id", user.getId(),
                "name", user.getName(),
                "email", user.getEmail(),
                "role", Map.of(
                        "id", user.getRole().getId(),
                        "name", user.getRole().getName()
                )
        );
    }
}