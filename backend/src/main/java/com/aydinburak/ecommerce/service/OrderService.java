package com.aydinburak.ecommerce.service;

import com.aydinburak.ecommerce.dto.OrderProductRequest;
import com.aydinburak.ecommerce.dto.OrderRequest;
import com.aydinburak.ecommerce.dto.OrderResponse;
import com.aydinburak.ecommerce.entity.*;
import com.aydinburak.ecommerce.repository.AddressRepository;
import com.aydinburak.ecommerce.repository.CustomerOrderRepository;
import com.aydinburak.ecommerce.repository.ProductRepository;
import com.aydinburak.ecommerce.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.Instant;
import java.time.Year;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final CustomerOrderRepository customerOrderRepository;
    private final ProductRepository productRepository;
    private final AddressRepository addressRepository;
    private final UserRepository userRepository;

    @Transactional
    public OrderResponse createOrder(
            String email,
            OrderRequest request
    ) {

        User user = userRepository
                .findByEmailIgnoreCase(email)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.UNAUTHORIZED,
                        "User not found"
                ));

        addressRepository
                .findByIdAndUserEmail(request.addressId(), email)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.BAD_REQUEST,
                        "Selected address was not found"
                ));

        validateCardExpiration(request);

        CustomerOrder order = new CustomerOrder();

        order.setOrderDate(Instant.now());
        order.setAddressId(request.addressId());
        order.setCardLastFour(
                extractLastFour(request.cardNo())
        );
        order.setCardName(request.cardName().trim());
        order.setCardExpireMonth(
                request.cardExpireMonth()
        );
        order.setCardExpireYear(
                request.cardExpireYear()
        );
        order.setUser(user);

        BigDecimal calculatedTotal = BigDecimal.ZERO;

        for (OrderProductRequest requestedProduct
                : request.products()) {

            Product product = productRepository
                    .findById(requestedProduct.productId())
                    .orElseThrow(() -> new ResponseStatusException(
                            HttpStatus.NOT_FOUND,
                            "Product not found: "
                                    + requestedProduct.productId()
                    ));

            int requestedCount = requestedProduct.count();

            if (product.getStock() < requestedCount) {
                throw new ResponseStatusException(
                        HttpStatus.CONFLICT,
                        "Not enough stock for product: "
                                + product.getName()
                );
            }

            BigDecimal unitPrice = product.getPrice();

            BigDecimal lineTotal = unitPrice.multiply(
                    BigDecimal.valueOf(requestedCount)
            );

            OrderItem orderItem = new OrderItem();

            orderItem.setProductId(product.getId());
            orderItem.setDetail(
                    requestedProduct.detail() == null
                            || requestedProduct.detail().isBlank()
                            ? product.getName()
                            : requestedProduct.detail().trim()
            );
            orderItem.setQuantity(requestedCount);
            orderItem.setUnitPrice(unitPrice);
            orderItem.setLineTotal(lineTotal);

            order.addItem(orderItem);

            calculatedTotal =
                    calculatedTotal.add(lineTotal);

            product.setStock(
                    product.getStock() - requestedCount
            );

            int currentSellCount =
                    product.getSellCount() == null
                            ? 0
                            : product.getSellCount();

            product.setSellCount(
                    currentSellCount + requestedCount
            );
        }

        order.setPrice(
                calculatedTotal.setScale(
                        2,
                        RoundingMode.HALF_UP
                )
        );

        CustomerOrder savedOrder =
                customerOrderRepository.save(order);

        return OrderResponse.from(savedOrder);
    }

    @Transactional(readOnly = true)
    public List<OrderResponse> getOrders(String email) {

        return customerOrderRepository
                .findAllByUserEmailOrderByOrderDateDesc(email)
                .stream()
                .map(OrderResponse::from)
                .toList();
    }

    private String extractLastFour(String cardNumber) {

        String digits = cardNumber.replaceAll("\\D", "");

        if (digits.length() < 4) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Card number must contain at least 4 digits"
            );
        }

        return digits.substring(digits.length() - 4);
    }

    private void validateCardExpiration(
            OrderRequest request
    ) {

        int currentYear = Year.now().getValue();

        if (request.cardExpireYear() < currentYear) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Card expiration year is invalid"
            );
        }
    }
}