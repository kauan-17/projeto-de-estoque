import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { Produto } from '../product.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css'] 
})
export class ListaProdutosComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.productService.listarProdutos().subscribe({
      next: (data) => {
        this.produtos = data;
        this.cdr.detectChanges(); // Força a detecção de mudanças para atualizar a UI
      },
      error: (err) => {
        console.error('Erro ao carregar produtos:', err);
        this.cdr.detectChanges(); // Força a detecção de mudanças mesmo em caso de erro
      }
    });
  }

  cadastrarProduto(): void {
    this.router.navigate(['/produtos/novo']);
  }

  consultarEstoque(id: number): void {
    this.router.navigate(['/estoque', id]);
  }

retirar(id: number): void {
  this.router.navigate(['/estoque/retirar', id]);
  console.log('Retirar clicado');
}


}
