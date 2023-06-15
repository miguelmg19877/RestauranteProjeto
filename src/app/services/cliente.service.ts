import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Cliente } from '../models/cliente';
import { environment } from 'src/environments/environment.development';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }
  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(environment.baseUrl + 'GetAllClientesFunction').pipe(
        catchError(this.handleError)
      );
  }

  delete(id: string): Observable<string> {
    return this.http.delete(`${environment.baseUrl}cliente/delete/${id}`, {responseType: 'text'}).pipe(
        catchError(this.handleError)
        );
  }

  create(cliente: Cliente): Observable<string> {
    return this.http.post(environment.baseUrl + 'InsertClienteFunction', cliente, {responseType: 'text'});
  }

  get(id: string): Observable<Cliente> {
    const url = `${environment.baseUrl}GetClienteFunction?id=${id}`;
    return this.http.get<Cliente>(url);
  }

  update(cliente: Cliente): Observable<string> {
    return this.http.post(environment.baseUrl + 'ModifyCliente', cliente, {responseType: 'text'});
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.status);
    if (error.status === 404) {
        Swal.fire('Erro', 'Não existem clientes na base de dados', 'error');
    } 
    if (error.status === 400) {
        Swal.fire('Erro', 'Cliente ainda tem reservas.', 'error');
    }
    return throwError(() => new Error(''));
  }

  message(msg: string): void {
    console.log(msg);
  }

    successNotification() {
        Swal.fire('Sucesso', 'Cliente excluido com sucesso.', 'success');
    }


}
