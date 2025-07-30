// Define a interface para o modelo de Produto
export interface Produto {
  id?: number; // O ID é opcional, pois não estará presente ao cadastrar um novo produto
  nome: string;
  preco: number;
  quantidadeEstoque: number;
}

// Define a interface para o modelo de Estoque (retorno do Serviço B)
export interface Estoque {
  nome: string;
  preco: number;
  quantidadeEstoque: number;
  estoqueBaixo: boolean;
}
