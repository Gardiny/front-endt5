import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Especialidade } from '../model/especialidade';
import { IService } from './i-service';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService implements IService<Especialidade> {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl: string = environment.API_URL + '/config/especialidade/';
  jsonFileUrl: string = 'assets/json/especialidades.json';

  get(termoBusca?: string | undefined): Observable<Especialidade[]> {
    return this.http.get<Especialidade[]>(this.jsonFileUrl);
  }

  getById(id: number): Observable<Especialidade> {
    return this.http.get<Especialidade[]>(this.jsonFileUrl).pipe(
      map(objetos => objetos.find(a => a.id === id) as Especialidade)
    );
  }

  save(objeto: Especialidade): Observable<Especialidade> {
    return of(objeto);
  }

  delete(id: number): Observable<void> {
    return of(undefined);
  }

  updateStatus(id: number): Observable<Especialidade> {
    throw new Error('Method not implemented.');
  }

}
