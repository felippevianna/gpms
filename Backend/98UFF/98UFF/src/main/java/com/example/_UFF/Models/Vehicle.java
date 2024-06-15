package com.example._UFF.Models;
import jakarta.persistence.*;

import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
@Table(name = "veiculos")
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private User usuario;

    private String marca;
    private String modelo;
    private String placa;
    private String cor;
    private Integer ano;

    // Getters and Setters
}
