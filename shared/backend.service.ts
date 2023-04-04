import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.baseUrl,{ withCredentials: true });
  }

  getOne(id: string): Observable<Appointment>{
    return this.http.get<Appointment>(this.baseUrl + '/' + id);
  }

  update(id: string, data: Appointment): Observable<Appointment> {
    return this.http.patch<Appointment>(this.baseUrl + '/' + id, data);
  }

  deleteOne(id: string): Observable<any>{
    return this.http.delete<any>(this.baseUrl + '/' + id, {observe: 'response'});
  } 
}