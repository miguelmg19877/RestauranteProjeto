import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Mesa } from '../models/mesa';
import { MesaService } from '../services/mesa.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-read-mesa',
  templateUrl: './read-mesa.component.html',
  styleUrls: ['./read-mesa.component.css'],
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
export class ReadMesaComponent implements OnInit{
  
    list: Mesa[] = [];

    constructor(private service: MesaService, private dialog: MatDialog) { }
  
    ngOnInit(): void {
      this.findAll();
    }

    findAll(): void {
      this.service.findAll().subscribe(resposta => {
        this.list = resposta;
      })
    }

    openConfirmationDialog(mesa: Mesa): void {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '250px',
        data: {
          title: 'Confirmação',
          message: 'Tem a certeza que deseja excluir a mesa ' + mesa.id + '?'
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.service.delete(mesa.id).subscribe((resposta) => {
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
