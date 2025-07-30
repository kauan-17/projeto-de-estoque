import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CadastroProdutoComponent {
  produtoForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    preco: new FormControl(0, [Validators.required, Validators.min(0)]),
    quantidadeEstoque: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.pattern(/^[0-9]*$/)
    ])
  });

  constructor(
    private productService: ProductService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  salvarProduto(): void {
    if (this.produtoForm.valid) {
      this.productService.cadastrarProduto(this.produtoForm.value as any).subscribe({
        next: () => {
          this.router.navigate(['/produtos']);
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Erro ao salvar produto:', err);
          this.cdr.detectChanges();
        }
      });
    }
  }

  voltar(): void {
    this.router.navigate(['/produtos']);
  }
}
