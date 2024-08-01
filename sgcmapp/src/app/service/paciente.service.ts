import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Paciente } from '../model/paciente';
import { IService } from './i-service';

@Injectable({
  providedIn: 'root'
})
export class PacienteService implements IService<Paciente> {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl: string = environment.API_URL + '/paciente/';
  jsonFileUrl: string = 'assets/json/pacientes.json';

  get(termoBusca?: string | undefined): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.jsonFileUrl);
  }

  getById(id: number): Observable<Paciente> {
    return this.http.get<Paciente[]>(this.jsonFileUrl).pipe(
      map(objetos => objetos.find(a => a.id === id) as Paciente)
    );
  }

  save(objeto: Paciente): Observable<Paciente> {
    return of(objeto);
  }

  delete(id: number): Observable<void> {
    return of(undefined);
  }

  updateStatus(id: number): Observable<Paciente> {
    throw new Error('Method not implemented.');
  }

}
