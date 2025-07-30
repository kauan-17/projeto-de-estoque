import { Routes } from '@angular/router';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ConsultaEstoqueComponent } from './consulta-estoque/consulta-estoque.component';


// Define as rotas da aplicação
export const routes: Routes = [
  { path: 'produtos', component: ListaProdutosComponent }, // Rota para listar produtos
  { path: 'produtos/novo', component: CadastroProdutoComponent }, // Rota para cadastrar um novo produto
  { path: 'estoque/:id', component: ConsultaEstoqueComponent }, // Rota para consultar estoque por ID
  { path: '', redirectTo: '/produtos', pathMatch: 'full' }, // Redireciona a rota raiz para /produtos
  { path: '**', redirectTo: '/produtos' } // Redireciona rotas não encontradas para /produtos
];
