import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-read-cliente',
  templateUrl: './read-clientes.component.html',
  styleUrls: ['./read-clientes.component.css']
})
export class ReadClientesComponent implements OnInit{
  
    list: Cliente[] = [];

    constructor(private service: ClienteService) { }
  
    ngOnInit(): void {
      this.findAll();
    }

    findAll(): void {
      this.service.findAll().subscribe(resposta => {
        console.log(resposta);
        this.list = resposta;
      })
    }

    delete(id: string): void {
      this.service.delete(id).subscribe((resposta) => {
        this.service.message('Cliente excluída com sucesso!');
        this.findAll();
      })
    }

}
