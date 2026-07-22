package com.aydinburak.ecommerce.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;

public record OrderRequest(

        @NotNull(message = "Address id is required")
        @JsonProperty("address_id")
        Long addressId,

        @JsonProperty("order_date")
        Instant orderDate,

        @NotBlank(message = "Card number is required")
        @JsonProperty("card_no")
        String cardNo,

        @NotBlank(message = "Card name is required")
        @JsonProperty("card_name")
        String cardName,

        @NotNull(message = "Card expiration month is required")
        @Min(value = 1, message = "Expiration month must be between 1 and 12")
        @Max(value = 12, message = "Expiration month must be between 1 and 12")
        @JsonProperty("card_expire_month")
        Integer cardExpireMonth,

        @NotNull(message = "Card expiration year is required")
        @JsonProperty("card_expire_year")
        Integer cardExpireYear,

        @JsonProperty("card_cvv")
        Integer cardCvv,

        BigDecimal price,

        @NotEmpty(message = "Order must contain at least one product")
        List<@Valid OrderProductRequest> products
) {
}