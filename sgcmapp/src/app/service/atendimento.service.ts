import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Atendimento } from '../model/atendimento';
import { IService } from './i-service';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService implements IService<Atendimento> {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl: string = environment.API_URL + '/atendimento/';
  jsonFileUrl: string = 'assets/json/atendimentos.json';

  get(termoBusca?: string | undefined): Observable<Atendimento[]> {
    return this.http.get<Atendimento[]>(this.jsonFileUrl);
  }

  getById(id: number): Observable<Atendimento> {
    return this.http.get<Atendimento[]>(this.jsonFileUrl).pipe(
      map(objetos => objetos.find(a => a.id === id) as Atendimento)
    );
  }

  save(objeto: Atendimento): Observable<Atendimento> {
    return of(objeto);
  }

  delete(id: number): Observable<void> {
    return of(undefined);
  }

  updateStatus(id: number): Observable<Atendimento> {
    throw new Error('Method not implemented.');
  }

}
