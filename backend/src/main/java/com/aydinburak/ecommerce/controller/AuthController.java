package com.aydinburak.ecommerce.controller;

import com.aydinburak.ecommerce.dto.LoginRequest;
import com.aydinburak.ecommerce.dto.SignupRequest;
import com.aydinburak.ecommerce.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.Authentication;

import java.util.Map;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signup")
    @ResponseStatus(HttpStatus.CREATED)
    public Map<String, Object> signup(
            @Valid @RequestBody SignupRequest request
    ) {
        return authService.signup(request);
    }

    @PostMapping("/login")
    public Map<String, Object> login(
            @Valid @RequestBody LoginRequest request
    ) {
        return authService.login(request);
    }
    @GetMapping("/verify")
public Map<String, Object> verify(Authentication authentication) {
    return authService.verify(authentication.getName());
}
}