import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Reserva } from '../models/reserva';
import { environment } from 'src/environments/environment.development';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) { }
  findAll(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(environment.baseUrl + 'GetAllReservas').pipe(
        catchError(this.handleError)
      );
  }

  delete(id: string): Observable<string> {
    return this.http.delete(`${environment.baseUrl}reservas/delete/${id}`, {responseType: 'text'}).pipe(
        catchError(this.handleError)
      );
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

  private handleError(error: HttpErrorResponse) {
    console.log(error.status);
    if (error.status === 404) {
        Swal.fire('Erro', 'Não existem reservas na base de dados', 'error');
    } 
    if (error.status === 400) {
        Swal.fire('Erro', 'Reserva não pode ser eliminada.', 'error');
    }
    return throwError(() => new Error(''));
  }

  message(msg: string): void {
    console.log(msg);
  }

    successNotification() {
        Swal.fire('Sucesso', 'Reserva excluida com sucesso.', 'success');
    }
}
