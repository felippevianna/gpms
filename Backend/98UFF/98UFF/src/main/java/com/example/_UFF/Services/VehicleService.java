package com.example._UFF.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example._UFF.Models.Vehicle;
import com.example._UFF.Repositories.VehicleRepository;

import java.util.List;
import java.util.Optional;

@Service
public class VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    public Optional<Vehicle> getVehicleById(Long id) {
        return vehicleRepository.findById(id);
    }

    public Vehicle createVehicle(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    public Vehicle updateVehicle(Long id, Vehicle vehicleDetails) {
        Vehicle vehicle = vehicleRepository.findById(id).orElseThrow(() -> new RuntimeException("Vehicle not found"));
        vehicle.setMarca(vehicleDetails.getMarca());
        vehicle.setModelo(vehicleDetails.getModelo());
        vehicle.setPlaca(vehicleDetails.getPlaca());
        vehicle.setCor(vehicleDetails.getCor());
        vehicle.setAno(vehicleDetails.getAno());
        return vehicleRepository.save(vehicle);
    }

    public void deleteVehicle(Long id) {
        vehicleRepository.deleteById(id);
    }
}

