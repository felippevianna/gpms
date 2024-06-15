package com.example._UFF.Models;

import jakarta.persistence.*;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "solicitacoes_carona")
public class RideRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    @JsonIgnore
    private User usuario;

    private String origem;
    private String destino;
    private LocalDateTime dataHoraPartida;
    private LocalDateTime dataHoraChegada;
    private String status;

    @JsonProperty("usuario_id")
    public Long getUserId() {
        return (this.usuario != null) ? this.usuario.getId() : null;
    }
}
