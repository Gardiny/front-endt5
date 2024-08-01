import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Unidade } from '../model/unidade';
import { IService } from './i-service';

@Injectable({
  providedIn: 'root'
})
export class UnidadeService implements IService<Unidade> {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl: string = environment.API_URL + '/config/unidade/';
  jsonFileUrl: string = 'assets/json/unidades.json';

  get(termoBusca?: string | undefined): Observable<Unidade[]> {
    return this.http.get<Unidade[]>(this.jsonFileUrl);
  }

  getById(id: number): Observable<Unidade> {
    return this.http.get<Unidade[]>(this.jsonFileUrl).pipe(
      map(objetos => objetos.find(a => a.id === id) as Unidade)
    );
  }

  save(objeto: Unidade): Observable<Unidade> {
    return of(objeto);
  }

  delete(id: number): Observable<void> {
    return of(undefined);
  }

  updateStatus(id: number): Observable<Unidade> {
    throw new Error('Method not implemented.');
  }

}
