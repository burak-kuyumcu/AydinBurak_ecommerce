package com.aydinburak.ecommerce.repository;

import com.aydinburak.ecommerce.entity.PaymentCard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PaymentCardRepository
        extends JpaRepository<PaymentCard, Long> {

    List<PaymentCard> findAllByUserEmailOrderByIdAsc(
            String email
    );

    Optional<PaymentCard> findByIdAndUserEmail(
            Long cardId,
            String email
    );
}