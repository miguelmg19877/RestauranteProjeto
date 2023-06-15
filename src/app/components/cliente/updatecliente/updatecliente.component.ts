import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-update',
  templateUrl: './updatecliente.component.html',
  styleUrls: ['./updatecliente.component.css']
})
export class UpdateclienteComponent implements OnInit {

  clienteForm: FormGroup = this.fb.group({
    id: [''],
    nome: [''],
    telefone: ['']
  });

    constructor (private router: Router, private service: ClienteService, private route: ActivatedRoute, private fb: FormBuilder) {}
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');

      if (id) {
        this.service.get(id).subscribe((cliente) => {
          this.clienteForm.patchValue(cliente);
        });
      }
    }
    onSubmit(): void {
      if (this.clienteForm.valid) {
        const cliente: Cliente = this.clienteForm.value;
        this.service.update(cliente).subscribe((resposta) => {
          this.service.message(resposta);
          this.router.navigate(['clientes']);
        });
      }
    }
    cancel (): void {
      this.router.navigate(['clientes']);
    }
}