package com.example._UFF.Models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Set;


import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Getter
@Setter
@Table(name = "usuarios")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String email;
    private String senha;
    private String telefone;
    private Double reputacao;
    private LocalDate dataCadastro;

    @OneToMany(mappedBy = "usuario")
    @JsonManagedReference
    private Set<Vehicle> veiculos;

}
