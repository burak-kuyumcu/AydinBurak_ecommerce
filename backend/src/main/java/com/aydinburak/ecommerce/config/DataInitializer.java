package com.aydinburak.ecommerce.config;

import com.aydinburak.ecommerce.entity.Category;
import com.aydinburak.ecommerce.entity.Role;
import com.aydinburak.ecommerce.repository.CategoryRepository;
import com.aydinburak.ecommerce.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
@RequiredArgsConstructor
public class DataInitializer {

    private final RoleRepository roleRepository;
    private final CategoryRepository categoryRepository;

    @Bean
    public CommandLineRunner initializeData() {
        return args -> {

            initializeRoles();
            initializeCategories();
        };
    }

    private void initializeRoles() {

        if (roleRepository.count() == 0) {
            roleRepository.saveAll(
                    List.of(
                            new Role(null, "customer"),
                            new Role(null, "store")
                    )
            );
        }
    }

    private void initializeCategories() {

        if (categoryRepository.count() == 0) {
            categoryRepository.saveAll(
                    List.of(
                            new Category(
                                    null,
                                    "k:elbise",
                                    "Kadın Elbise",
                                    "https://placehold.co/600x400?text=Kadin+Elbise",
                                    4.8,
                                    "k"
                            ),
                            new Category(
                                    null,
                                    "k:ayakkabi",
                                    "Kadın Ayakkabı",
                                    "https://placehold.co/600x400?text=Kadin+Ayakkabi",
                                    4.7,
                                    "k"
                            ),
                            new Category(
                                    null,
                                    "k:canta",
                                    "Kadın Çanta",
                                    "https://placehold.co/600x400?text=Kadin+Canta",
                                    4.6,
                                    "k"
                            ),
                            new Category(
                                    null,
                                    "e:gomlek",
                                    "Erkek Gömlek",
                                    "https://placehold.co/600x400?text=Erkek+Gomlek",
                                    4.8,
                                    "e"
                            ),
                            new Category(
                                    null,
                                    "e:pantolon",
                                    "Erkek Pantolon",
                                    "https://placehold.co/600x400?text=Erkek+Pantolon",
                                    4.7,
                                    "e"
                            ),
                            new Category(
                                    null,
                                    "e:ayakkabi",
                                    "Erkek Ayakkabı",
                                    "https://placehold.co/600x400?text=Erkek+Ayakkabi",
                                    4.6,
                                    "e"
                            )
                    )
            );
        }
    }
}