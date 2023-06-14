import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadMesaComponent } from './read-mesa/read-mesa.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { ReadClientesComponent } from './read-clientes/read-clientes.component';
import { Create2Component } from './components/cliente/create/create.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
