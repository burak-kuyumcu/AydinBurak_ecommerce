package com.aydinburak.ecommerce.controller;

import com.aydinburak.ecommerce.dto.AddressRequest;
import com.aydinburak.ecommerce.dto.AddressResponse;
import com.aydinburak.ecommerce.service.AddressService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user/address")
@RequiredArgsConstructor
public class AddressController {

    private final AddressService addressService;

    @GetMapping
    public List<AddressResponse> getAddresses(
            Authentication authentication
    ) {
        return addressService.getAddresses(
                authentication.getName()
        );
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public AddressResponse createAddress(
            Authentication authentication,
            @Valid @RequestBody AddressRequest request
    ) {
        return addressService.createAddress(
                authentication.getName(),
                request
        );
    }

    @PutMapping
    public AddressResponse updateAddress(
            Authentication authentication,
            @Valid @RequestBody AddressRequest request
    ) {
        return addressService.updateAddress(
                authentication.getName(),
                request
        );
    }

    @DeleteMapping("/{addressId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteAddress(
            Authentication authentication,
            @PathVariable Long addressId
    ) {
        addressService.deleteAddress(
                authentication.getName(),
                addressId
        );
    }
}