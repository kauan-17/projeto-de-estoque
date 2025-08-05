package com.example.retirar.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;
import com.example.retirar.dto.ProdutoDTO;




@FeignClient(name = "produtoClient", url = "${servico.produtos.url}/api/produtos")
public interface ProdutoClient {

    @GetMapping("/{id}")
    ProdutoDTO buscarPorId(@PathVariable Long id);

    @PutMapping("/{id}")
    ProdutoDTO atualizar(@PathVariable Long id, @RequestBody ProdutoDTO produto);

    @DeleteMapping("/{id}")
    void deletar(@PathVariable Long id);
}
