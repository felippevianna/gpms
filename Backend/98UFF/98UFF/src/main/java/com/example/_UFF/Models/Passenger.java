package com.example._UFF.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

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
    @JsonIgnore
    private Ride carona;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    @JsonIgnore
    private User usuario;

    private String status;

    @JsonProperty("usuario_id")
    public Long getUserId() {
        return (this.usuario != null) ? this.usuario.getId() : null;
    }

    @JsonProperty("carona_id")
    public Long getRideId() {
        return (this.carona != null) ? this.carona.getId() : null;
    }
}
