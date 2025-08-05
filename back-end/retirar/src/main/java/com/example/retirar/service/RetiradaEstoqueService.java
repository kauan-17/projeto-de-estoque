package com.example.retirar.service;

import org.springframework.stereotype.Service;
import com.example.retirar.client.ProdutoClient;
import com.example.retirar.dto.ProdutoDTO;

@Service
public class RetiradaEstoqueService {

    private final ProdutoClient produtoClient;

    public RetiradaEstoqueService(ProdutoClient produtoClient) {
        this.produtoClient = produtoClient;
    }

    public String retirar(Long id, int quantidade) {
        ProdutoDTO produto = produtoClient.buscarPorId(id);

        if (quantidade > produto.getQuantidadeEstoque()) {
            throw new IllegalArgumentException("Quantidade solicitada excede o estoque.");
        }

        int novoEstoque = produto.getQuantidadeEstoque() - quantidade;

        if (novoEstoque == 0) {
            produtoClient.deletar(id);
            return "Produto retirado completamente e removido do sistema.";
        } else {
            produto.setQuantidadeEstoque(novoEstoque);
            produtoClient.atualizar(id, produto);
            return "Produto atualizado com nova quantidade em estoque: " + novoEstoque;
        }
    }
}
