import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Reserva } from '../models/reserva';
import { ReservaService } from '../services/reserva.service';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-read-reservas',
  templateUrl: './read-reservas.component.html',
  styleUrls: ['./read-reservas.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        //style transform and opacity
        style({transform: 'translateY(100%)', opacity: 0.2}),
        animate('500ms ease-in', style({transform: 'translateY(0%)', opacity: 1}))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({transform: 'translateY(100%)', opacity: 0}))
      ])
    ])
  ]
})
export class ReadReservasComponent implements OnInit{
  
    list: Reserva[] = [];

    constructor(private service: ReservaService) { }
  
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
        this.service.message('Reserva excluída com sucesso!');
        this.findAll();
      })
    }

}
