package com.aydinburak.ecommerce.service;

import com.aydinburak.ecommerce.dto.CardRequest;
import com.aydinburak.ecommerce.dto.CardResponse;
import com.aydinburak.ecommerce.entity.PaymentCard;
import com.aydinburak.ecommerce.entity.User;
import com.aydinburak.ecommerce.repository.PaymentCardRepository;
import com.aydinburak.ecommerce.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.Year;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PaymentCardService {

    private final PaymentCardRepository paymentCardRepository;
    private final UserRepository userRepository;

    @Transactional(readOnly = true)
    public List<CardResponse> getCards(String email) {

        return paymentCardRepository
                .findAllByUserEmailOrderByIdAsc(email)
                .stream()
                .map(CardResponse::from)
                .toList();
    }

    @Transactional
    public CardResponse createCard(
            String email,
            CardRequest request
    ) {

        User user = getUser(email);

        validateExpirationDate(request);

        PaymentCard card = new PaymentCard();

        copyRequestToCard(request, card);
        card.setUser(user);

        PaymentCard savedCard =
                paymentCardRepository.save(card);

        return CardResponse.from(savedCard);
    }

    @Transactional
    public CardResponse updateCard(
            String email,
            CardRequest request
    ) {

        if (request.getId() == null) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Card id is required"
            );
        }

        PaymentCard card = paymentCardRepository
                .findByIdAndUserEmail(request.getId(), email)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Card not found"
                ));

        validateExpirationDate(request);
        copyRequestToCard(request, card);

        PaymentCard updatedCard =
                paymentCardRepository.save(card);

        return CardResponse.from(updatedCard);
    }

    @Transactional
    public void deleteCard(
            String email,
            Long cardId
    ) {

        PaymentCard card = paymentCardRepository
                .findByIdAndUserEmail(cardId, email)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Card not found"
                ));

        paymentCardRepository.delete(card);
    }

    private User getUser(String email) {
        return userRepository
                .findByEmailIgnoreCase(email)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.UNAUTHORIZED,
                        "User not found"
                ));
    }

    private void copyRequestToCard(
            CardRequest request,
            PaymentCard card
    ) {

        String digits = request
                .getCardNo()
                .replaceAll("\\D", "");

        if (digits.length() < 4 || digits.length() > 19) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Card number must contain between 4 and 19 digits"
            );
        }

        String lastFour =
                digits.substring(digits.length() - 4);

        card.setCardLastFour(lastFour);
        card.setExpireMonth(request.getExpireMonth());
        card.setExpireYear(request.getExpireYear());
        card.setNameOnCard(
                request.getNameOnCard().trim()
        );
    }

    private void validateExpirationDate(
            CardRequest request
    ) {

        int currentYear = Year.now().getValue();

        if (request.getExpireYear() < currentYear) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Card expiration year is invalid"
            );
        }
    }
}