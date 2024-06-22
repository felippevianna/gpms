package com.example._UFF.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example._UFF.Models.RideRequest;
import com.example._UFF.Repositories.RideRequestRepository;

import java.util.List;
import java.util.Optional;

@Service
public class RideRequestService {

    @Autowired
    private RideRequestRepository rideRequestRepository;

    public List<RideRequest> getAllRideRequests() {
        return rideRequestRepository.findAll();
    }

    public Optional<RideRequest> getRideRequestById(Long id) {
        return rideRequestRepository.findById(id);
    }

    public RideRequest createRideRequest(RideRequest rideRequest) {
        return rideRequestRepository.save(rideRequest);
    }

    public RideRequest updateRideRequest(Long id, RideRequest rideRequestDetails) {
        RideRequest rideRequest = rideRequestRepository.findById(id).orElseThrow(() -> new RuntimeException("RideRequest not found"));
        rideRequest.setStatus(rideRequestDetails.getStatus());
        return rideRequestRepository.save(rideRequest);
    }

    public void deleteRideRequest(Long id) {
        rideRequestRepository.deleteById(id);
    }
}

