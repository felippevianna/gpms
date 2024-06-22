package com.example._UFF.Models;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonBackReference;
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
    private User usuario;

    @ManyToOne
    @JoinColumn(name = "carona_id")
    @JsonBackReference
    private Ride carona;

    private String status;

    @PrePersist
    public void prePersist() {
        if (status == null) {
            status = "PENDENTE"; // Define o valor padrão para o campo status
        }
    }

    @JsonProperty("usuario_id")
    public Long getUserId() {
        return (this.usuario != null) ? this.usuario.getId() : null;
    }

    @JsonProperty("carona_id")
    public Long getRideId() {
        return (this.carona != null) ? this.carona.getId() : null;
    }
}
