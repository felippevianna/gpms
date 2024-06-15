package com.example._UFF.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example._UFF.Models.RideRequest;
import com.example._UFF.Services.RideRequestService;

import java.util.List;

@RestController
@RequestMapping("/api/ride-requests")
public class RideRequestController {

    @Autowired
    private RideRequestService rideRequestService;

    @GetMapping
    public List<RideRequest> getAllRideRequests() {
        return rideRequestService.getAllRideRequests();
    }

    @GetMapping("/{id}")
    public ResponseEntity<RideRequest> getRideRequestById(@PathVariable Long id) {
        return rideRequestService.getRideRequestById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public RideRequest createRideRequest(@RequestBody RideRequest rideRequest) {
        return rideRequestService.createRideRequest(rideRequest);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RideRequest> updateRideRequest(@PathVariable Long id, @RequestBody RideRequest rideRequestDetails) {
        return ResponseEntity.ok(rideRequestService.updateRideRequest(id, rideRequestDetails));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRideRequest(@PathVariable Long id) {
        rideRequestService.deleteRideRequest(id);
        return ResponseEntity.noContent().build();
    }
}

