package com.aydinburak.ecommerce.repository;

import com.aydinburak.ecommerce.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AddressRepository extends JpaRepository<Address, Long> {

    List<Address> findAllByUserEmailOrderByIdAsc(String email);

    Optional<Address> findByIdAndUserEmail(
            Long addressId,
            String email
    );
}