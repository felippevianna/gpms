package com.example._UFF.Models;

import jakarta.persistence.*;
import java.time.LocalDateTime;
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
    private User usuario;

    private String origem;
    private String destino;
    private LocalDateTime dataHoraPartida;
    private LocalDateTime dataHoraChegada;
    private String status;

    // Getters and Setters
}
