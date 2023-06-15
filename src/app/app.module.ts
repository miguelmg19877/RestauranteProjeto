import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/footer/footer.component';
import { ReadMesaComponent } from './read-mesa/read-mesa.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './components/create/create.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { UpdateComponent } from './components/update/update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReadClientesComponent } from './read-clientes/read-clientes.component';
import { Create2Component } from './components/cliente/create/create.component';
import { UpdateclienteComponent } from './components/cliente/updatecliente/updatecliente.component';
import { CreatereservaComponent } from './components/reservas/createreserva/createreserva.component';
import { UpdatereservaComponent } from './components/reservas/updatereserva/updatereserva.component';
import { ReadReservasComponent } from './read-reservas/read-reservas.component';
import { HomeComponent } from './components/home/home.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReadMesaComponent,
    CreateComponent,
    UpdateComponent,
    ReadClientesComponent,
    Create2Component,
    UpdateclienteComponent,
    CreatereservaComponent,
    UpdatereservaComponent,
    ReadReservasComponent,
    HomeComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
