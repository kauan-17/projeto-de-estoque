import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { Estoque } from '../product.model';

@Component({
  selector: 'app-consulta-estoque',
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './consulta-estoque.component.html', // Referencia o arquivo HTML externo
  styleUrls: ['./consulta-estoque.component.css'] // Referencia o arquivo CSS externo
})
export class ConsultaEstoqueComponent implements OnInit {
  estoque: Estoque | undefined;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        const id = +idParam;
        this.consultarEstoque(id);
      } else {
        console.warn('ID do produto não fornecido na rota.');
      }
    });
  }

  consultarEstoque(id: number): void {
    this.isLoading = true;
    this.productService.consultarEstoque(id).subscribe({
      next: (data: any) => {
        this.estoque = {
          nome: data.produto.nome,
          preco: data.produto.preco,
          quantidadeEstoque: data.produto.quantidadeEstoque,
          estoqueBaixo: data.estoqueBaixo
        };
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erro ao consultar estoque:', err);
        this.estoque = undefined;
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  voltar(): void {
    this.router.navigate(['/produtos']);
  }
}
