package com.aydinburak.ecommerce.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CardRequest {

    private Long id;

    @NotBlank(message = "Card number is required")
    @JsonProperty("card_no")
    private String cardNo;

    @NotNull(message = "Expiration month is required")
    @Min(value = 1, message = "Expiration month must be between 1 and 12")
    @Max(value = 12, message = "Expiration month must be between 1 and 12")
    @JsonProperty("expire_month")
    private Integer expireMonth;

    @NotNull(message = "Expiration year is required")
    @JsonProperty("expire_year")
    private Integer expireYear;

    @NotBlank(message = "Name on card is required")
    @JsonProperty("name_on_card")
    private String nameOnCard;
}