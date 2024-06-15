package com.example._UFF.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example._UFF.Models.Ride;
import com.example._UFF.Services.RideService;

import java.util.List;

@RestController
@RequestMapping("/api/rides")
public class RideController {

    @Autowired
    private RideService rideService;

    @GetMapping
    public List<Ride> getAllRides() {
        return rideService.getAllRides();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ride> getRideById(@PathVariable Long id) {
        return rideService.getRideById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Ride createRide(@RequestBody Ride ride) {
        return rideService.createRide(ride);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Ride> updateRide(@PathVariable Long id, @RequestBody Ride rideDetails) {
        return ResponseEntity.ok(rideService.updateRide(id, rideDetails));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRide(@PathVariable Long id) {
        rideService.deleteRide(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{rideId}/accept")
    public ResponseEntity<Void> acceptRideRequest(@PathVariable Long rideId, @RequestParam Long userId) {
        rideService.acceptRideRequest(rideId, userId);
        return ResponseEntity.ok().build();
    }
}
