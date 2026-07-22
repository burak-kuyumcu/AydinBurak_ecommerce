package com.aydinburak.ecommerce.service;

import com.aydinburak.ecommerce.dto.AddressRequest;
import com.aydinburak.ecommerce.dto.AddressResponse;
import com.aydinburak.ecommerce.entity.Address;
import com.aydinburak.ecommerce.entity.User;
import com.aydinburak.ecommerce.repository.AddressRepository;
import com.aydinburak.ecommerce.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AddressService {

    private final AddressRepository addressRepository;
    private final UserRepository userRepository;

    @Transactional(readOnly = true)
    public List<AddressResponse> getAddresses(String email) {

        return addressRepository
                .findAllByUserEmailOrderByIdAsc(email)
                .stream()
                .map(AddressResponse::from)
                .toList();
    }

    @Transactional
    public AddressResponse createAddress(
            String email,
            AddressRequest request
    ) {

        User user = getUser(email);

        Address address = new Address();

        copyRequestToAddress(request, address);
        address.setUser(user);

        Address savedAddress = addressRepository.save(address);

        return AddressResponse.from(savedAddress);
    }

    @Transactional
    public AddressResponse updateAddress(
            String email,
            AddressRequest request
    ) {

        if (request.getId() == null) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Address id is required"
            );
        }

        Address address = addressRepository
                .findByIdAndUserEmail(request.getId(), email)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Address not found"
                ));

        copyRequestToAddress(request, address);

        Address updatedAddress = addressRepository.save(address);

        return AddressResponse.from(updatedAddress);
    }

    @Transactional
    public void deleteAddress(
            String email,
            Long addressId
    ) {

        Address address = addressRepository
                .findByIdAndUserEmail(addressId, email)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Address not found"
                ));

        addressRepository.delete(address);
    }

    private User getUser(String email) {
        return userRepository
                .findByEmailIgnoreCase(email)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.UNAUTHORIZED,
                        "User not found"
                ));
    }

    private void copyRequestToAddress(
            AddressRequest request,
            Address address
    ) {
        address.setTitle(request.getTitle().trim());
        address.setName(request.getName().trim());
        address.setSurname(request.getSurname().trim());
        address.setPhone(request.getPhone().trim());
        address.setCity(request.getCity().trim());
        address.setDistrict(request.getDistrict().trim());
        address.setNeighborhood(request.getNeighborhood().trim());
    }
}