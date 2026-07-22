package com.aydinburak.ecommerce.dto;

import com.aydinburak.ecommerce.entity.PaymentCard;
import com.fasterxml.jackson.annotation.JsonProperty;

public record CardResponse(
        Long id,

        @JsonProperty("card_no")
        String cardNo,

        @JsonProperty("expire_month")
        Integer expireMonth,

        @JsonProperty("expire_year")
        Integer expireYear,

        @JsonProperty("name_on_card")
        String nameOnCard
) {

    public static CardResponse from(PaymentCard card) {
        return new CardResponse(
                card.getId(),
                card.getCardLastFour(),
                card.getExpireMonth(),
                card.getExpireYear(),
                card.getNameOnCard()
        );
    }
}