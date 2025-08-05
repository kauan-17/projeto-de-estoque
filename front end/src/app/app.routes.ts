import { Routes } from '@angular/router';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ConsultaEstoqueComponent } from './consulta-estoque/consulta-estoque.component';
import { RetiradaProdutoComponent } from './retirada-produto/retirada-produto.component';

// Define as rotas da aplicação
export const routes: Routes = [
  { path: 'produtos', component: ListaProdutosComponent },
  { path: 'produtos/novo', component: CadastroProdutoComponent },
  { path: 'estoque/:id', component: ConsultaEstoqueComponent },
  { path: 'estoque/retirar/:id', component: RetiradaProdutoComponent }, // ← corrigido aqui!
  { path: '', redirectTo: '/produtos', pathMatch: 'full' },
  { path: '**', redirectTo: '/produtos' }
];
