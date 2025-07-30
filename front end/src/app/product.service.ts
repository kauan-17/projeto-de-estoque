import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto, Estoque } from './product.model';

@Injectable({
  providedIn: 'root' // Este serviço será um singleton e estará disponível em toda a aplicação
})
export class ProductService {
  // URL base para o Serviço A (Produtos)
  private produtosApiUrl = 'http://localhost:8081/api/produtos'; // Ajuste a porta se necessário

  
      private estoqueApiUrl = 'http://localhost:8082/api/estoque';

  constructor(private http: HttpClient) { } // Injeta o HttpClient

  /**
   * Lista todos os produtos do Serviço A.
   * @returns Um Observable contendo uma lista de Produtos.
   */
  listarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.produtosApiUrl);
  }

  /**
   * Cadastra um novo produto no Serviço A.
   * @param produto O objeto Produto a ser cadastrado.
   * @returns Um Observable contendo o Produto cadastrado.
   */
  cadastrarProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.produtosApiUrl, produto);
  }

  /**
   * Consulta o estoque de um produto específico no Serviço B.
   * @param id O ID do produto a ser consultado.
   * @returns Um Observable contendo os detalhes do Estoque.
   */
  consultarEstoque(id: number): Observable<Estoque> {
    return this.http.get<Estoque>(`${this.estoqueApiUrl}/${id}`);
  }
}
