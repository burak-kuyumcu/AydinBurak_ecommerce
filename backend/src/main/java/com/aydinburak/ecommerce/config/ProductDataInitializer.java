package com.aydinburak.ecommerce.config;

import com.aydinburak.ecommerce.entity.Category;
import com.aydinburak.ecommerce.entity.Product;
import com.aydinburak.ecommerce.repository.CategoryRepository;
import com.aydinburak.ecommerce.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;
import java.util.List;

@Configuration
@RequiredArgsConstructor
public class ProductDataInitializer {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    @Bean
    public CommandLineRunner initializeProducts() {
        return args -> {

            if (productRepository.count() > 0) {
                return;
            }

            Category womenDress = getCategory("k:elbise");
            Category womenShoes = getCategory("k:ayakkabi");
            Category womenBag = getCategory("k:canta");
            Category menShirt = getCategory("e:gomlek");
            Category menPants = getCategory("e:pantolon");
            Category menShoes = getCategory("e:ayakkabi");

            productRepository.saveAll(
                    List.of(
                            createProduct(
                                    "Çiçek Desenli Kadın Elbise",
                                    "Günlük kullanım için rahat ve şık kadın elbisesi.",
                                    "899.90",
                                    35,
                                    120,
                                    4.8,
                                    womenDress,
                                    "https://placehold.co/800x1000?text=Kadin+Elbise"
                            ),
                            createProduct(
                                    "Kadın Günlük Spor Ayakkabı",
                                    "Hafif tabanlı ve konforlu kadın spor ayakkabısı.",
                                    "1299.90",
                                    42,
                                    95,
                                    4.7,
                                    womenShoes,
                                    "https://placehold.co/800x1000?text=Kadin+Ayakkabi"
                            ),
                            createProduct(
                                    "Kadın Omuz Çantası",
                                    "Günlük kullanıma uygun geniş omuz çantası.",
                                    "749.90",
                                    28,
                                    80,
                                    4.6,
                                    womenBag,
                                    "https://placehold.co/800x1000?text=Kadin+Canta"
                            ),
                            createProduct(
                                    "Erkek Klasik Gömlek",
                                    "Pamuklu kumaştan klasik kesim erkek gömleği.",
                                    "699.90",
                                    50,
                                    150,
                                    4.8,
                                    menShirt,
                                    "https://placehold.co/800x1000?text=Erkek+Gomlek"
                            ),
                            createProduct(
                                    "Erkek Slim Fit Pantolon",
                                    "Günlük ve klasik kombinlere uygun erkek pantolonu.",
                                    "999.90",
                                    44,
                                    110,
                                    4.7,
                                    menPants,
                                    "https://placehold.co/800x1000?text=Erkek+Pantolon"
                            ),
                            createProduct(
                                    "Erkek Günlük Ayakkabı",
                                    "Şehir yaşamı için rahat erkek ayakkabısı.",
                                    "1499.90",
                                    30,
                                    70,
                                    4.6,
                                    menShoes,
                                    "https://placehold.co/800x1000?text=Erkek+Ayakkabi"
                            )
                    )
            );
        };
    }

    private Category getCategory(String code) {
        return categoryRepository
                .findByCodeIgnoreCase(code)
                .orElseThrow(() -> new IllegalStateException(
                        "Category not found: " + code
                ));
    }

    private Product createProduct(
            String name,
            String description,
            String price,
            Integer stock,
            Integer sellCount,
            Double rating,
            Category category,
            String imageUrl
    ) {
        Product product = new Product();

        product.setName(name);
        product.setDescription(description);
        product.setPrice(new BigDecimal(price));
        product.setStock(stock);
        product.setSellCount(sellCount);
        product.setRating(rating);
        product.setCategory(category);
        product.setImages(List.of(imageUrl));

        return product;
    }
}