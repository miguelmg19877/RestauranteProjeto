import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mesa } from '../models/mesa';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  constructor(private http: HttpClient) { }
  findAll(): Observable<Mesa[]> {
    return this.http.get<Mesa[]>(environment.baseUrl + 'GetAllMesas')
  }

  delete(id: string): Observable<string> {
    const url = `${environment.baseUrl}mesa/delete/${id}`;
    return this.http.delete<string>(url);
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

  message(msg: string): void {
    console.log(msg);
  }
}
