package com.example._UFF.Models;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
@Table(name = "caronas")
public class Ride {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "motorista_id")
    private User motorista;

    private String origem;
    private String destino;
    private LocalDateTime dataHoraPartida;
    private LocalDateTime dataHoraChegada;
    private Integer vagasDisponiveis;
    private Boolean aceiteAutomatico;
    private String status;

    @OneToMany(mappedBy = "carona")
    @JsonManagedReference
    private Set<Passenger> passageiros;

    @JsonProperty("motorista_id")
    public Long getUserId() {
        return (this.motorista != null) ? this.motorista.getId() : null;
    }
}

