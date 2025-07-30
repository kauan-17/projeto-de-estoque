package com.exemplo.produtos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.exemplo.produtos.model.Produto;

import java.util.Optional;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    Optional<Produto> findByNome(String nome);
}
