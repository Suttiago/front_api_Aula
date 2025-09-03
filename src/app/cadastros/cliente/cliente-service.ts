import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlCliente: string = "http://localhost:8080/v1/cliente"

  constructor(private httpCliente: HttpClient){}

  listarClientes(){
    return this.httpCliente.get<any[]>(`this.urlCliente/listar`);
    }
  
}
