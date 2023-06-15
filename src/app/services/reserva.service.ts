import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from '../models/reserva';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) { }
  findAll(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(environment.baseUrl + 'GetAllReservas')
  }

  delete(id: string): Observable<string> {
    const url = `${environment.baseUrl}reserva/delete/${id}`;
    return this.http.delete<string>(url);
  }

  create(reserva: Reserva): Observable<string> {
    return this.http.post(environment.baseUrl + 'InsertReserva', reserva, {responseType: 'text'});
  }

  get(id: string): Observable<Reserva> {
    const url = `${environment.baseUrl}GetReserva?id=${id}`;
    return this.http.get<Reserva>(url);
  }

  update(reserva: Reserva): Observable<string> {
    return this.http.post(environment.baseUrl + 'ModifyReservas', reserva, {responseType: 'text'});
  }

  message(msg: string): void {
    console.log(msg);
  }
}
