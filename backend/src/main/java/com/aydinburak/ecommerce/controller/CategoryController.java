package com.aydinburak.ecommerce.controller;

import com.aydinburak.ecommerce.entity.Category;
import com.aydinburak.ecommerce.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryRepository categoryRepository;

    @GetMapping
    public List<Category> getCategories() {
        return categoryRepository.findAll(
                Sort.by(
                        Sort.Order.asc("gender"),
                        Sort.Order.asc("id")
                )
        );
    }
}