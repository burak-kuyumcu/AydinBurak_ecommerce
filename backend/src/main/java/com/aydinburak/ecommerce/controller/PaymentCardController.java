package com.aydinburak.ecommerce.controller;

import com.aydinburak.ecommerce.dto.CardRequest;
import com.aydinburak.ecommerce.dto.CardResponse;
import com.aydinburak.ecommerce.service.PaymentCardService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user/card")
@RequiredArgsConstructor
public class PaymentCardController {

    private final PaymentCardService paymentCardService;

    @GetMapping
    public List<CardResponse> getCards(
            Authentication authentication
    ) {
        return paymentCardService.getCards(
                authentication.getName()
        );
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CardResponse createCard(
            Authentication authentication,
            @Valid @RequestBody CardRequest request
    ) {
        return paymentCardService.createCard(
                authentication.getName(),
                request
        );
    }

    @PutMapping
    public CardResponse updateCard(
            Authentication authentication,
            @Valid @RequestBody CardRequest request
    ) {
        return paymentCardService.updateCard(
                authentication.getName(),
                request
        );
    }

    @DeleteMapping("/{cardId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCard(
            Authentication authentication,
            @PathVariable Long cardId
    ) {
        paymentCardService.deleteCard(
                authentication.getName(),
                cardId
        );
    }
}