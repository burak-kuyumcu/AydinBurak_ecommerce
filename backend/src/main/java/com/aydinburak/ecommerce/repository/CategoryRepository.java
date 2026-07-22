package com.aydinburak.ecommerce.repository;

import com.aydinburak.ecommerce.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    Optional<Category> findByCodeIgnoreCase(String code);

    boolean existsByCodeIgnoreCase(String code);
}