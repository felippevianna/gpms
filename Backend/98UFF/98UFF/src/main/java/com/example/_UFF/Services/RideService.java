package com.example._UFF.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example._UFF.Models.Ride;
import com.example._UFF.Repositories.RideRepository;

import java.util.List;
import java.util.Optional;

@Service
public class RideService {

    @Autowired
    private RideRepository rideRepository;

    public List<Ride> getAllRides() {
        return rideRepository.findAll();
    }

    public Optional<Ride> getRideById(Long id) {
        return rideRepository.findById(id);
    }

    public Ride createRide(Ride ride) {
        return rideRepository.save(ride);
    }

    public Ride updateRide(Long id, Ride rideDetails) {
        Ride ride = rideRepository.findById(id).orElseThrow(() -> new RuntimeException("Ride not found"));
        ride.setOrigem(rideDetails.getOrigem());
        ride.setDestino(rideDetails.getDestino());
        ride.setDataHoraPartida(rideDetails.getDataHoraPartida());
        ride.setDataHoraChegada(rideDetails.getDataHoraChegada());
        ride.setVagasDisponiveis(rideDetails.getVagasDisponiveis());
        ride.setAceiteAutomatico(rideDetails.getAceiteAutomatico());
        ride.setStatus(rideDetails.getStatus());
        return rideRepository.save(ride);
    }

    public void deleteRide(Long id) {
        rideRepository.deleteById(id);
    }

    public void acceptRideRequest(Long rideId, Long userId) {
        Ride ride = rideRepository.findById(rideId).orElseThrow(() -> new RuntimeException("Ride not found"));
        // Lógica para aceitar solicitação de carona e adicionar passageiro à carona
    }
}

