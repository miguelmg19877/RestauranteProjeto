import { Component, OnInit } from '@angular/core';

import { Carro } from '../../module/carro';
import { CarroService } from 'src/app/services/carro.service';


@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {
  list: Carro[] = [
    {id: '1', marca: 'Fiat', tipo: 'Uno'},
    {id: '2', marca: 'Ferrari', tipo: 'Palio'},
    {id: '3', marca: 'Fiat', tipo: 'Argo'},
  ]
  constructor(private service: CarroService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.list = resposta;
    })

}

}

