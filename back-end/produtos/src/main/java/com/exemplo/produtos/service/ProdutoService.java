package com.exemplo.produtos.service;

import org.springframework.stereotype.Service;

import com.exemplo.produtos.model.Produto;
import com.exemplo.produtos.repository.ProdutoRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {
    
    private final ProdutoRepository repository;

    public ProdutoService(ProdutoRepository repository) {
        this.repository = repository;
    }

    public List<Produto> listarTodos() {
        return repository.findAll();
    }

    public Optional<Produto> buscarPorId(Long id) {
        return repository.findById(id);
    }

    public Produto salvar(Produto produto) {
        Optional<Produto> produtoExistente = repository.findByNome(produto.getNome());

        if (produtoExistente.isPresent()) {
            Produto existente = produtoExistente.get();
            // Soma o estoque
            Integer novaQuantidade = existente.getQuantidadeEstoque() + produto.getQuantidadeEstoque();
            existente.setQuantidadeEstoque(novaQuantidade);

            // Atualiza outros dados se desejar
            existente.setDescricao(produto.getDescricao());
            existente.setPreco(produto.getPreco());

            return repository.save(existente);
        } else {
            return repository.save(produto);
        }
    }

    public Produto atualizar(Long id, Produto novoProduto) {
        return repository.findById(id)
            .map(produto -> {
                produto.setNome(novoProduto.getNome());
                produto.setDescricao(novoProduto.getDescricao());
                produto.setPreco(novoProduto.getPreco());
                produto.setQuantidadeEstoque(novoProduto.getQuantidadeEstoque());
                return repository.save(produto);
            })
            .orElseThrow(() -> new RuntimeException("Produto não encontrado"));
    }

    public Produto retirar(Long id, int quantidade) {
    return repository.findById(id)
        .map(produto -> {
            int estoqueAtual = produto.getQuantidadeEstoque();
            if (quantidade > estoqueAtual) {
                throw new IllegalArgumentException("Quantidade solicitada excede o estoque disponível.");
            }

            int novoEstoque = estoqueAtual - quantidade;

            if (novoEstoque == 0) {
                repository.deleteById(id);
                return null; // produto excluído
            } else {
                produto.setQuantidadeEstoque(novoEstoque);
                return repository.save(produto);
            }
        })
        .orElseThrow(() -> new RuntimeException("Produto não encontrado"));
}


    public void deletar(Long id) {
        repository.deleteById(id);
    }

}
