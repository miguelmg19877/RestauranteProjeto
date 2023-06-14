import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

import { v4 as uuidv4 } from 'uuid';

@Component({

  selector: 'app-create',

  templateUrl: './create.component.html',

  styleUrls: ['./create.component.css']

})

export class Create2Component implements OnInit {

  cliente: Cliente = {
    id: uuidv4(),
    nome: '',
    telefone: '',
  }

    constructor (private router: Router, private service: ClienteService) {}
    ngOnInit(): void {
    }
    create(): void {
      this.service.create(this.cliente).subscribe((resposta) => {
        this.service.message('Cliente inserido com sucesso!');
        this.router.navigate(['clientes']);
      });
    }
    cancel (): void {
      this.router.navigate(['clientes']);
    }
}