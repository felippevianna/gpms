package com.example._UFF.Models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

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
    @JsonIgnore
    private User usuario;

    private String marca;
    private String modelo;
    private String placa;
    private String cor;
    private Integer ano;

    @JsonProperty("usuario_id")
    public Long getUserId() {
        return (this.usuario != null) ? this.usuario.getId() : null;
    }
}
