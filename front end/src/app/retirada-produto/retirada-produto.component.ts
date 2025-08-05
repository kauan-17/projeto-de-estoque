import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Produto } from '../product.model';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-retirada-produto',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './retirada-produto.component.html',
  styleUrls: ['./retirada-produto.component.css']
})
export class RetiradaProdutoComponent implements OnInit {
  produtoId!: number;
  produto!: Produto;
  quantidadeRetirada: number = 0;
  mensagem: string = '';
  erro: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.produtoId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.buscarProdutoPorId(this.produtoId).subscribe({
      next: (res: Produto) => this.produto = res,
      error: () => this.erro = 'Produto não encontrado.'
    });
  }

  retirar(): void {
    if (this.quantidadeRetirada <= 0) {
      this.erro = 'Quantidade inválida.';
      return;
    }

    this.http.post(`http://localhost:8083/api/retirada/${this.produtoId}/retirar`, null, {
      params: { quantidade: this.quantidadeRetirada },
      responseType: 'text'
    }).subscribe({
      next: (mensagem: string) => {
        this.mensagem = mensagem;
        setTimeout(() => this.router.navigate(['/produtos']), 2000);
      },
      error: (err) => {
        this.erro = err.error || 'Erro ao retirar produto.';
      }
    });
  }
}
