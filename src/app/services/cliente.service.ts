import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }
  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(environment.baseUrl + 'GetAllClientesFunction')
  }

  delete(id: string): Observable<string> {
    const url = `${environment.baseUrl}cliente/delete/${id}`;
    return this.http.delete<string>(url);
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

  message(msg: string): void {
    console.log(msg);
  }
}
