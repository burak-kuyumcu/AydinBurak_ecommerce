package com.aydinburak.ecommerce.repository;

import com.aydinburak.ecommerce.entity.CustomerOrder;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomerOrderRepository
        extends JpaRepository<CustomerOrder, Long> {

    @EntityGraph(attributePaths = "items")
    List<CustomerOrder> findAllByUserEmailOrderByOrderDateDesc(
            String email
    );
}