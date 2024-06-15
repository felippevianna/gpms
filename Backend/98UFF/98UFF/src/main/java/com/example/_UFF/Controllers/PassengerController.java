package com.example._UFF.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example._UFF.Models.Passenger;
import com.example._UFF.Services.PassengerService;

import java.util.List;

@RestController
@RequestMapping("/api/passengers")
public class PassengerController {

    @Autowired
    private PassengerService passengerService;

    @GetMapping
    public List<Passenger> getAllPassengers() {
        return passengerService.getAllPassengers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Passenger> getPassengerById(@PathVariable Long id) {
        return passengerService.getPassengerById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Passenger createPassenger(@RequestBody Passenger passenger) {
        return passengerService.createPassenger(passenger);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Passenger> updatePassenger(@PathVariable Long id, @RequestBody Passenger passengerDetails) {
        return ResponseEntity.ok(passengerService.updatePassenger(id, passengerDetails));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePassenger(@PathVariable Long id) {
        passengerService.deletePassenger(id);
        return ResponseEntity.noContent().build();
    }
}

