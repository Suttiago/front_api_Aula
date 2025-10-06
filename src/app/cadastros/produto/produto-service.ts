import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../model/produto/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private urlProduto: string = 'http://localhost:8080/api/v1/produtos';

  constructor(private readonly httpProduto: HttpClient) {}

  listarProdutos() {
    return this.httpProduto.get<Produto[]>(`${this.urlProduto}/listar`);
  }

  salvarProduto(produto: Produto) {
    return this.httpProduto.post<Produto>(
      `${this.urlProduto}/salvar`,
      produto
    );
  }

  buscarProdutoPorId(id: string) {
    return this.httpProduto.get<Produto>(`${this.urlProduto}/buscar-Produto/${id}`);
  }

  atualizarProduto(id: string, produto: Produto) {
    return this.httpProduto.put<Produto>(
      `${this.urlProduto}/atualizar-Produto/${id}`,
      produto
    );
  }

  deletarProduto(id: string) {
    return this.httpProduto.delete(`${this.urlProduto}/deletar-Produto/${id}`);
  }
}
