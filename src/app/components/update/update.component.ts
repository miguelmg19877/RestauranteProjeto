import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mesa } from 'src/app/models/mesa';
import { MesaService } from 'src/app/services/mesa.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  mesaForm: FormGroup = this.fb.group({
    id: [''],
    capacidade: ['']
  });

    constructor (private router: Router, private service: MesaService, private route: ActivatedRoute, private fb: FormBuilder) {}
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');

      if (id) {
        this.service.get(id).subscribe((mesa) => {
          this.mesaForm.patchValue(mesa);
        });
      }
    }
    onSubmit(): void {
      if (this.mesaForm.valid) {
        const mesa: Mesa = this.mesaForm.value;
        this.service.update(mesa).subscribe((resposta) => {
          this.service.message(resposta);
          this.router.navigate(['mesas']);
        });
      }
    }
    cancel (): void {
      this.router.navigate(['mesas']);
    }
}