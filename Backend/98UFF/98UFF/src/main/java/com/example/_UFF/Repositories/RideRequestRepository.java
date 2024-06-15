package com.example._UFF.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example._UFF.Models.RideRequest;

@Repository
public interface RideRequestRepository extends JpaRepository<RideRequest, Long> {
}

