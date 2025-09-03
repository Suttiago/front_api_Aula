import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente-service';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-cliente-listar',
  imports: [TableModule],
  standalone: true,
  providers: [],
  templateUrl: './cliente-listar.html',
  styleUrl: './cliente-listar.scss'
})
export class ClienteListar implements OnInit{

  clientes: any[] = [];

  constructor(private readonly clienteService: ClienteService, private readonly detetorMudanca: ChangeDetectorRef) {
    
  }

  ngOnInit(): void {
    this.clienteService.listarClientes().subscribe({
      next:(listaClientes:any[])=> {
          this.clientes = listaClientes;
          console.log(this.clientes)
          this.detetorMudanca.detectChanges();
      },
      error: error=>{
        console.log("erro ao buscar clientes");
        console.log(error);
      }
    });
  }


}
