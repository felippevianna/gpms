package com.example._UFF.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example._UFF.Models.Passenger;
import com.example._UFF.Repositories.PassengerRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PassengerService {

    @Autowired
    private PassengerRepository passengerRepository;

    public List<Passenger> getAllPassengers() {
        return passengerRepository.findAll();
    }

    public Optional<Passenger> getPassengerById(Long id) {
        return passengerRepository.findById(id);
    }

    public Passenger createPassenger(Passenger passenger) {
        return passengerRepository.save(passenger);
    }

    public Passenger updatePassenger(Long id, Passenger passengerDetails) {
        Passenger passenger = passengerRepository.findById(id).orElseThrow(() -> new RuntimeException("Passenger not found"));
        passenger.setStatus(passengerDetails.getStatus());
        return passengerRepository.save(passenger);
    }

    public void deletePassenger(Long id) {
        passengerRepository.deleteById(id);
    }
}
