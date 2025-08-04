import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto, Estoque } from './product.model';

@Injectable({
  providedIn: 'root' 
})
export class ProductService {

  private produtosApiUrl = 'http://localhost:8081/api/produtos';

  
      private estoqueApiUrl = 'http://localhost:8082/api/estoque';

  constructor(private http: HttpClient) { }

 
  listarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.produtosApiUrl);
  }

  cadastrarProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.produtosApiUrl, produto);
  }

 
  consultarEstoque(id: number): Observable<Estoque> {
    return this.http.get<Estoque>(`${this.estoqueApiUrl}/${id}`);
  }

  retirarProduto(id: number, quantidade: number): Observable<any> {
  return this.http.put(`${this.produtosApiUrl}/${id}/retirar`, null, {
    params: { quantidade: quantidade.toString() },
    responseType: 'text' // ou 'json', dependendo da resposta do backend
  });
}
}
