import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Mesa } from '../models/mesa';
import { environment } from 'src/environments/environment.development';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  constructor(private http: HttpClient) { }
  findAll(): Observable<Mesa[]> {
    return this.http.get<Mesa[]>(environment.baseUrl + 'GetAllMesas').pipe(
      catchError(this.handleError)
    );
  }

  delete(id: string): Observable<string> {
    return this.http.delete(environment.baseUrl + '/mesa/delete/' + id, {responseType: 'text'});
  }

  create(mesa: Mesa): Observable<string> {
    return this.http.post(environment.baseUrl + 'InsertMesa', mesa, {responseType: 'text'});
  }

  get(id: string): Observable<Mesa> {
    const url = `${environment.baseUrl}GetMesa?id=${id}`;
    return this.http.get<Mesa>(url);
  }

  update(mesa: Mesa): Observable<string> {
    return this.http.post(environment.baseUrl + 'ModifyMesa', mesa, {responseType: 'text'});
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 200) {
      Swal.fire('Sucesso', 'Mesa excluida com sucesso.', 'success');
    }
    if (error.status === 404) {
      Swal.fire('Erro', 'Não existem mesas na base de dados', 'error');
    } 
    return throwError(() => new Error(''));
  }

  message(msg: string): void {
    console.log(msg);
  }

  successNotification() {
    Swal.fire('Sucesso', 'Mesa excluida com sucesso.', 'success');
  }

  errorNotification() {
    Swal.fire('Erro', 'Ocorreu um erro ao excluir a mesa.', 'error');
  }

  errornothingonDatabaseNotification() {
    Swal.fire('Erro', 'Não existem mesas na base de dados', 'error');
  }

}
