package com.aydinburak.ecommerce.config;

import com.aydinburak.ecommerce.entity.Category;
import com.aydinburak.ecommerce.entity.Product;
import com.aydinburak.ecommerce.repository.CategoryRepository;
import com.aydinburak.ecommerce.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;

import java.math.BigDecimal;
import java.util.List;

@Configuration
@RequiredArgsConstructor
public class ProductDataInitializer {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    @Bean
    @Order(2)
    public CommandLineRunner initializeProducts() {
        return args -> {

            Category womenDress = getCategory("k:elbise");
            Category womenShoes = getCategory("k:ayakkabi");
            Category womenBag = getCategory("k:canta");
            Category menShirt = getCategory("e:gomlek");
            Category menPants = getCategory("e:pantolon");
            Category menShoes = getCategory("e:ayakkabi");

            ensureProduct(
                    "Çiçek Desenli Kadın Elbise",
                    "Günlük kullanım için rahat ve şık kadın elbisesi.",
                    "899.90",
                    35,
                    120,
                    4.8,
                    womenDress,
                    "/Home3.jpg"
            );

            ensureProduct(
                    "Kadın Günlük Spor Ayakkabı",
                    "Hafif tabanlı ve konforlu kadın spor ayakkabısı.",
                    "1299.90",
                    42,
                    95,
                    4.7,
                    womenShoes,
                    "/Home5.jpg"
            );

            ensureProduct(
                    "Kadın Omuz Çantası",
                    "Günlük kullanıma uygun geniş omuz çantası.",
                    "749.90",
                    28,
                    80,
                    4.6,
                    womenBag,
                    "/Home4.jpg"
            );

            ensureProduct(
                    "Erkek Klasik Gömlek",
                    "Pamuklu kumaştan klasik kesim erkek gömleği.",
                    "699.90",
                    50,
                    150,
                    4.8,
                    menShirt,
                    "/Home2.jpg"
            );

            ensureProduct(
                    "Erkek Slim Fit Pantolon",
                    "Günlük ve klasik kombinlere uygun erkek pantolonu.",
                    "999.90",
                    44,
                    110,
                    4.7,
                    menPants,
                    "/Home7.jpg"
            );

            ensureProduct(
                    "Erkek Günlük Ayakkabı",
                    "Şehir yaşamı için rahat erkek ayakkabısı.",
                    "1499.90",
                    30,
                    70,
                    4.6,
                    menShoes,
                    "/Home6.jpg"
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

    private void ensureProduct(
            String name,
            String description,
            String price,
            Integer initialStock,
            Integer initialSellCount,
            Double rating,
            Category category,
            String imageUrl
    ) {
        Product product = productRepository
                .findAll()
                .stream()
                .filter(existingProduct ->
                        existingProduct
                                .getName()
                                .equalsIgnoreCase(name)
                )
                .findFirst()
                .orElseGet(Product::new);

        boolean isNewProduct = product.getId() == null;

        product.setName(name);
        product.setDescription(description);
        product.setPrice(new BigDecimal(price));
        product.setRating(rating);
        product.setCategory(category);
        product.setImages(List.of(imageUrl));

        if (isNewProduct) {
            product.setStock(initialStock);
            product.setSellCount(initialSellCount);
        }

        productRepository.save(product);
    }
}