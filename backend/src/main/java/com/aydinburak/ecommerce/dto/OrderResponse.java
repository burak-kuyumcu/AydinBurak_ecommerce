package com.aydinburak.ecommerce.dto;

import com.aydinburak.ecommerce.entity.CustomerOrder;
import com.aydinburak.ecommerce.entity.OrderItem;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;

public record OrderResponse(

        Long id,

        @JsonProperty("order_date")
        Instant orderDate,

        @JsonProperty("address_id")
        Long addressId,

        @JsonProperty("card_no")
        String cardNo,

        @JsonProperty("card_name")
        String cardName,

        BigDecimal price,

        List<OrderProductResponse> products
) {

    public static OrderResponse from(CustomerOrder order) {

        List<OrderProductResponse> productResponses =
                order.getItems()
                        .stream()
                        .map(OrderProductResponse::from)
                        .toList();

        return new OrderResponse(
                order.getId(),
                order.getOrderDate(),
                order.getAddressId(),
                order.getCardLastFour(),
                order.getCardName(),
                order.getPrice(),
                productResponses
        );
    }

    public record OrderProductResponse(

            @JsonProperty("product_id")
            Long productId,

            String detail,

            Integer count,

            @JsonProperty("unit_price")
            BigDecimal unitPrice,

            @JsonProperty("line_total")
            BigDecimal lineTotal
    ) {

        public static OrderProductResponse from(OrderItem item) {
            return new OrderProductResponse(
                    item.getProductId(),
                    item.getDetail(),
                    item.getQuantity(),
                    item.getUnitPrice(),
                    item.getLineTotal()
            );
        }
    }
}