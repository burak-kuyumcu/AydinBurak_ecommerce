package com.aydinburak.ecommerce.controller;

import com.aydinburak.ecommerce.dto.OrderRequest;
import com.aydinburak.ecommerce.dto.OrderResponse;
import com.aydinburak.ecommerce.service.OrderService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @GetMapping
    public List<OrderResponse> getOrders(
            Authentication authentication
    ) {
        return orderService.getOrders(
                authentication.getName()
        );
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public OrderResponse createOrder(
            Authentication authentication,
            @Valid @RequestBody OrderRequest request
    ) {
        return orderService.createOrder(
                authentication.getName(),
                request
        );
    }
}