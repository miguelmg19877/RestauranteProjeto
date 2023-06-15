import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadMesaComponent } from './read-mesa/read-mesa.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { ReadClientesComponent } from './read-clientes/read-clientes.component';
import { Create2Component } from './components/cliente/create/create.component';
import { UpdateclienteComponent } from './components/cliente/updatecliente/updatecliente.component';
import { ReadReservasComponent } from './read-reservas/read-reservas.component';
import { CreatereservaComponent } from './components/reservas/createreserva/createreserva.component';
import { UpdatereservaComponent } from './components/reservas/updatereserva/updatereserva.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'mesas',
    component: ReadMesaComponent
  },
  {
    path: 'clientes',
    component: ReadClientesComponent
  },
  {
    path: 'mesas/create',
    component: CreateComponent
  },
  {
    path: 'clientes/create',
    component: Create2Component
  },
  {
    path: 'mesas/update/:id',
    component: UpdateComponent
  },
  {
    path: 'clientes/update/:id',
    component: UpdateclienteComponent
  },
  {
    path: 'reservas',
    component: ReadReservasComponent
  },
  {
    path: 'reservas/create',
    component: CreatereservaComponent
  },
  {
    path: 'reservas/update/:id',
    component: UpdatereservaComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
