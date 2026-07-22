package com.aydinburak.ecommerce.controller;

import com.aydinburak.ecommerce.entity.Role;
import com.aydinburak.ecommerce.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/roles")
@RequiredArgsConstructor
public class RoleController {

    private final RoleRepository roleRepository;

    @GetMapping
    public List<Role> getRoles() {
        return roleRepository.findAll(Sort.by("id"));
    }
}