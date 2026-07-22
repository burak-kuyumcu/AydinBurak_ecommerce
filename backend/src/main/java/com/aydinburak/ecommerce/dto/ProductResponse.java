package com.aydinburak.ecommerce.dto;

import com.aydinburak.ecommerce.entity.Category;
import com.aydinburak.ecommerce.entity.Product;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.math.BigDecimal;
import java.util.List;

public record ProductResponse(
        Long id,
        String name,
        String description,
        BigDecimal price,
        Integer stock,

        @JsonProperty("sell_count")
        Integer sellCount,

        Double rating,

        @JsonProperty("category_id")
        Long categoryId,

        CategoryResponse category,
        List<String> images
) {

    public static ProductResponse from(Product product) {
        return new ProductResponse(
                product.getId(),
                product.getName(),
                product.getDescription(),
                product.getPrice(),
                product.getStock(),
                product.getSellCount(),
                product.getRating(),
                product.getCategory().getId(),
                CategoryResponse.from(product.getCategory()),
                product.getImages()
        );
    }

    public record CategoryResponse(
            Long id,
            String code,
            String title,
            String img,
            Double rating,
            String gender
    ) {

        public static CategoryResponse from(Category category) {
            return new CategoryResponse(
                    category.getId(),
                    category.getCode(),
                    category.getTitle(),
                    category.getImg(),
                    category.getRating(),
                    category.getGender()
            );
        }
    }
}