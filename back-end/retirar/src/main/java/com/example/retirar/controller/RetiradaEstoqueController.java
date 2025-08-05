package com.example.retirar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.retirar.service.RetiradaEstoqueService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/retirada")
public class RetiradaEstoqueController {

    @Autowired
    private RetiradaEstoqueService service;

    @PostMapping("/{id}/retirar")
    public ResponseEntity<String> retirar(
            @PathVariable Long id,
            @RequestParam int quantidade) {

        String resultado = service.retirar(id, quantidade);
        return ResponseEntity.ok(resultado);
    }
}
