package com.aydinburak.ecommerce.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public record OrderProductRequest(

        @NotNull(message = "Product id is required")
        @JsonProperty("product_id")
        Long productId,

        @NotNull(message = "Product count is required")
        @Min(value = 1, message = "Product count must be at least 1")
        Integer count,

        String detail
) {
}