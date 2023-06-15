import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/services/reserva.service';


import { v4 as uuidv4 } from 'uuid';

@Component({

  selector: 'app-createreserva',

  templateUrl: './createreserva.component.html',

  styleUrls: ['./createreserva.component.css']

})

export class CreatereservaComponent implements OnInit {

  reserva: Reserva = {
    id: uuidv4(),
    clienteid: '',
    mesaid: '',
    capacidade: 0,
    data: '',

  }

    constructor (private router: Router, private service: ReservaService) {}
    ngOnInit(): void {
    }
    create(): void {
      this.service.create(this.reserva).subscribe((resposta) => {
        this.service.message('Reserva inserida com sucesso!');
        this.router.navigate(['reservas']);
      });
    }
    cancel (): void {
      this.router.navigate(['reservas']);
    }

  
}