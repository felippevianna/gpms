package com.example._UFF.Models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "passageiros")
public class Passenger {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "carona_id")
    private Ride carona;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private User usuario;

    private String status;

    // Getters and Setters
}
