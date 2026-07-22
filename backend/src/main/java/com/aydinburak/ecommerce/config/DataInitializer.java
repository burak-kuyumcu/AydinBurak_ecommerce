package com.aydinburak.ecommerce.config;

import com.aydinburak.ecommerce.entity.Category;
import com.aydinburak.ecommerce.entity.Role;
import com.aydinburak.ecommerce.repository.CategoryRepository;
import com.aydinburak.ecommerce.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;

@Configuration
@RequiredArgsConstructor
public class DataInitializer {

    private final RoleRepository roleRepository;
    private final CategoryRepository categoryRepository;

    @Bean
    @Order(1)
    public CommandLineRunner initializeData() {
        return args -> {
            initializeRoles();
            initializeCategories();
        };
    }

    private void initializeRoles() {
        ensureRole("customer");
        ensureRole("store");
    }

    private void ensureRole(String roleName) {
        boolean roleExists = roleRepository
                .findAll()
                .stream()
                .anyMatch(role ->
                        role.getName().equalsIgnoreCase(roleName)
                );

        if (!roleExists) {
            roleRepository.save(
                    new Role(null, roleName)
            );
        }
    }

    private void initializeCategories() {
        ensureCategory(
                "k:elbise",
                "Kadın Elbise",
                "/Home3.jpg",
                4.8,
                "k"
        );

        ensureCategory(
                "k:ayakkabi",
                "Kadın Ayakkabı",
                "/Home5.jpg",
                4.7,
                "k"
        );

        ensureCategory(
                "k:canta",
                "Kadın Çanta",
                "/Home4.jpg",
                4.6,
                "k"
        );

        ensureCategory(
                "e:gomlek",
                "Erkek Gömlek",
                "/Home2.jpg",
                4.8,
                "e"
        );

        ensureCategory(
                "e:pantolon",
                "Erkek Pantolon",
                "/Home7.jpg",
                4.7,
                "e"
        );

        ensureCategory(
                "e:ayakkabi",
                "Erkek Ayakkabı",
                "/Home6.jpg",
                4.6,
                "e"
        );
    }

    private void ensureCategory(
            String code,
            String title,
            String image,
            Double rating,
            String gender
    ) {
        Category category = categoryRepository
                .findByCodeIgnoreCase(code)
                .orElseGet(Category::new);

        category.setCode(code);
        category.setTitle(title);
        category.setImg(image);
        category.setRating(rating);
        category.setGender(gender);

        categoryRepository.save(category);
    }
}