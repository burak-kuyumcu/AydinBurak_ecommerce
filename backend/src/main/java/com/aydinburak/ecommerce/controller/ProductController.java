package com.aydinburak.ecommerce.controller;

import com.aydinburak.ecommerce.dto.ProductResponse;
import com.aydinburak.ecommerce.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public Map<String, Object> getProducts(
            @RequestParam(required = false) Integer limit,
            @RequestParam(required = false) Integer offset,
            @RequestParam(required = false) Long category,
            @RequestParam(required = false) String sort,
            @RequestParam(required = false) String filter
    ) {
        return productService.getProducts(
                limit,
                offset,
                category,
                sort,
                filter
        );
    }

    @GetMapping("/{productId}")
    public ProductResponse getProductById(
            @PathVariable Long productId
    ) {
        return productService.getProductById(productId);
    }
}