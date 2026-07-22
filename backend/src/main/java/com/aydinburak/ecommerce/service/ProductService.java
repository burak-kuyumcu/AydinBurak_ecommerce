package com.aydinburak.ecommerce.service;

import com.aydinburak.ecommerce.dto.ProductResponse;
import com.aydinburak.ecommerce.entity.Product;
import com.aydinburak.ecommerce.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Locale;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public Map<String, Object> getProducts(
            Integer limit,
            Integer offset,
            Long category,
            String sort,
            String filter
    ) {

        int safeLimit = limit == null
                ? 25
                : Math.min(Math.max(limit, 1), 100);

        int safeOffset = offset == null
                ? 0
                : Math.max(offset, 0);

        Specification<Product> specification =
                (root, query, criteriaBuilder) ->
                        criteriaBuilder.conjunction();

        if (category != null) {
            specification = specification.and(
                    (root, query, criteriaBuilder) ->
                            criteriaBuilder.equal(
                                    root.get("category").get("id"),
                                    category
                            )
            );
        }

        if (filter != null && !filter.isBlank()) {
            String searchValue =
                    "%" + filter.trim().toLowerCase(Locale.ROOT) + "%";

            specification = specification.and(
                    (root, query, criteriaBuilder) ->
                            criteriaBuilder.or(
                                    criteriaBuilder.like(
                                            criteriaBuilder.lower(root.get("name")),
                                            searchValue
                                    ),
                                    criteriaBuilder.like(
                                            criteriaBuilder.lower(root.get("description")),
                                            searchValue
                                    )
                            )
            );
        }

        Sort productSort = createSort(sort);

        int pageNumber = safeOffset / safeLimit;

        PageRequest pageRequest = PageRequest.of(
                pageNumber,
                safeLimit,
                productSort
        );

        Page<Product> productPage = productRepository.findAll(
                specification,
                pageRequest
        );

        List<ProductResponse> products = productPage
                .getContent()
                .stream()
                .map(ProductResponse::from)
                .toList();

        return Map.of(
                "total", productPage.getTotalElements(),
                "products", products
        );
    }

    public ProductResponse getProductById(Long productId) {
        Product product = productRepository
                .findById(productId)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Product not found"
                ));

        return ProductResponse.from(product);
    }

    private Sort createSort(String sortValue) {

        if (sortValue == null || sortValue.isBlank()) {
            return Sort.by(Sort.Direction.ASC, "id");
        }

        return switch (sortValue.toLowerCase(Locale.ROOT)) {
            case "price:asc" ->
                    Sort.by(Sort.Direction.ASC, "price");

            case "price:desc" ->
                    Sort.by(Sort.Direction.DESC, "price");

            case "rating:asc" ->
                    Sort.by(Sort.Direction.ASC, "rating");

            case "rating:desc" ->
                    Sort.by(Sort.Direction.DESC, "rating");

            default ->
                    Sort.by(Sort.Direction.ASC, "id");
        };
    }
}