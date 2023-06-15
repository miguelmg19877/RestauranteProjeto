import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-update',
  templateUrl: './updatereserva.component.html',
  styleUrls: ['./updatereserva.component.css']
})
export class UpdatereservaComponent implements OnInit {

  reservaForm: FormGroup = this.fb.group({
    id: [''],
    clienteid: [''],
    mesaid: [''],
    capacidade: [''],
    data: ['']
  });

    constructor (private router: Router, private service: ReservaService, private route: ActivatedRoute, private fb: FormBuilder) {}
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');

      if (id) {
        this.service.get(id).subscribe((reserva) => {
          this.reservaForm.patchValue(reserva);
        });
      }
    }
    onSubmit(): void {
      if (this.reservaForm.valid) {
        const reserva: Reserva = this.reservaForm.value;
        this.service.update(reserva).subscribe((resposta) => {
          this.service.message(resposta);
          this.router.navigate(['reservas']);
        });
      }
    }
    cancel (): void {
      this.router.navigate(['reservas']);
    }
}