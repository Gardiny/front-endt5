import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Profissional } from '../model/profissional';
import { IService } from './i-service';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService implements IService<Profissional> {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl: string = environment.API_URL + '/profissional/';
  jsonFileUrl: string = 'assets/json/profissionais.json';

  get(termoBusca?: string | undefined): Observable<Profissional[]> {
    return this.http.get<Profissional[]>(this.jsonFileUrl);
  }

  getById(id: number): Observable<Profissional> {
    return this.http.get<Profissional[]>(this.jsonFileUrl).pipe(
      map(objetos => objetos.find(a => a.id === id) as Profissional)
    );
  }

  save(objeto: Profissional): Observable<Profissional> {
    return of(objeto);
  }

  delete(id: number): Observable<void> {
    return of(undefined);
  }

  updateStatus(id: number): Observable<Profissional> {
    throw new Error('Method not implemented.');
  }

}
