import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../services/cliente.service';
import { trigger, transition, animate, style } from '@angular/animations'
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-read-cliente',
  templateUrl: './read-clientes.component.html',
  styleUrls: ['./read-clientes.component.css'],
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
export class ReadClientesComponent implements OnInit{
  
    list: Cliente[] = [];

    constructor(private service: ClienteService, private dialog: MatDialog) { }
  
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

    openConfirmationDialog(cliente: Cliente): void {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '250px',
        data: {
          title: 'Confirmação',
          message: 'Tem a certeza que deseja excluir o cliente ' + cliente.id + '?'
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.service.delete(cliente.id).subscribe((resposta) => {
            this.service.successNotification();
            this.findAll();
          })
        } else {
          // User clicked "No" or closed the dialog
          // Handle accordingly
        }
      });
    }

}
