import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto-service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-produto-listar',
  standalone: true,
  imports: [TableModule],
  templateUrl: './produto-listar.html',
  styleUrl: './produto-listar.scss'
})
export class ProdutoListar implements OnInit {

  produtos: any[] = [];

  constructor(
    private readonly produtoService: ProdutoService,
    private readonly detectorMudanca: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.produtoService.listarProdutos().subscribe({
      next: (listaProdutos: any[]) => {
        this.produtos = listaProdutos;
        console.log(this.produtos);
        this.detectorMudanca.detectChanges();
      },
      error: (error) => {
        console.log('Erro ao buscar produtos');
        console.log(error);
      }
    });
  }

}
