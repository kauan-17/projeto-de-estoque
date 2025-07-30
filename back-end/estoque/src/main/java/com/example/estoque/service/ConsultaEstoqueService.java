package com.example.estoque.service;

import com.example.estoque.dto.ProdutoDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.client.HttpClientErrorException;

import java.util.HashMap;
import java.util.Map;

@Service
public class ConsultaEstoqueService {

    @Value("${servicoA.url}")
    private String servicoAUrl;

    private final RestTemplate restTemplate = new RestTemplate();

    public Map<String, Object> consultarEstoque(Long id) {
        try {
            ProdutoDTO produto = restTemplate.getForObject(servicoAUrl + "/" + id, ProdutoDTO.class);
            Map<String, Object> resposta = new HashMap<>();
            resposta.put("produto", produto);
            resposta.put("estoqueBaixo", produto.getQuantidadeEstoque() < 10);
            return resposta;
        } catch (HttpClientErrorException.NotFound e) {
            throw new RuntimeException("Produto não encontrado no serviço A");
        }
    }
}
