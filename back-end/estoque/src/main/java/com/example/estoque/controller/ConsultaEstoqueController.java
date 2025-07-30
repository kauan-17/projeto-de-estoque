package com.example.estoque.controller;

import com.example.estoque.service.ConsultaEstoqueService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/estoque")
public class ConsultaEstoqueController {

    private final ConsultaEstoqueService service;

    public ConsultaEstoqueController(ConsultaEstoqueService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> consultar(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(service.consultarEstoque(id));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
