package com.example._UFF.Controllers;

import com.example._UFF.Models.User;
import com.example._UFF.Repositories.UserRepository;
import com.example._UFF.Auth.AuthRequest;
import com.example._UFF.Auth.AuthResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest loginRequest) {
        Optional<User> userOptional = userRepository.findByEmail(loginRequest.getUsername());

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (user.getSenha().equals(loginRequest.getPassword())) {
                // Autenticação bem-sucedida, retorna o token (UUID) e o ID do usuário
                String token = UUID.randomUUID().toString();
                return ResponseEntity.ok().body(Map.of("token", token, "userId", user.getId()));
            }
        }
        
        // Credenciais inválidas
        return ResponseEntity.status(401).body("Credenciais inválidas");
    }
}

