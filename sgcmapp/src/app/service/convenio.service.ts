import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Convenio } from '../model/convenio';
import { IService } from './i-service';

@Injectable({
  providedIn: 'root'
})
export class ConvenioService implements IService<Convenio> {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl: string = environment.API_URL + '/convenio/';
  jsonFileUrl: string = 'assets/json/convenios.json';

  get(termoBusca?: string | undefined): Observable<Convenio[]> {
    return this.http.get<Convenio[]>(this.jsonFileUrl);
  }

  getById(id: number): Observable<Convenio> {
    return this.http.get<Convenio[]>(this.jsonFileUrl).pipe(
      map(objetos => objetos.find(a => a.id === id) as Convenio)
    );
  }

  save(objeto: Convenio): Observable<Convenio> {
    return of(objeto);
  }

  delete(id: number): Observable<void> {
    return of(undefined);
  }

}
