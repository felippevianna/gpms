package com.example._UFF.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example._UFF.Models.Passenger;

@Repository
public interface PassengerRepository extends JpaRepository<Passenger, Long> {
}

