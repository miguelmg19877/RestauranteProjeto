import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Mesa } from '../models/mesa';
import { MesaService } from '../services/mesa.service';

@Component({
  selector: 'app-read-mesa',
  templateUrl: './read-mesa.component.html',
  styleUrls: ['./read-mesa.component.css']
})
export class ReadMesaComponent implements OnInit{
  
    list: Mesa[] = [];

    constructor(private service: MesaService) { }
  
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
        this.service.message('Mesa excluída com sucesso!');
        this.findAll();
      })
    }

}
