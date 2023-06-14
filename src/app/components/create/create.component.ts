import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mesa } from 'src/app/models/mesa';
import { MesaService } from 'src/app/services/mesa.service';
import { v4 as uuidv4 } from 'uuid';

@Component({

  selector: 'app-create',

  templateUrl: './create.component.html',

  styleUrls: ['./create.component.css']

})

export class CreateComponent implements OnInit {

  mesa: Mesa = {
    id: uuidv4(),
    capacidade: 0
  }

    constructor (private router: Router, private service: MesaService) {}
    ngOnInit(): void {
    }
    create(): void {
      this.service.create(this.mesa).subscribe((resposta) => {
        this.service.message('Mesa criado com sucesso!');
        this.router.navigate(['']);
      });
    }
    cancel (): void {
      this.router.navigate(['']);
    }
}