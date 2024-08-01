import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../model/usuario';
import { IService } from './i-service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements IService<Usuario> {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl: string = environment.API_URL + '/config/usuario/';
  jsonFileUrl: string = 'assets/json/usuarios.json';

  get(termoBusca?: string | undefined): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.jsonFileUrl);
  }

  getById(id: number): Observable<Usuario> {
    return this.http.get<Usuario[]>(this.jsonFileUrl).pipe(
      map(objetos => objetos.find(a => a.id === id) as Usuario)
    );
  }

  save(objeto: Usuario): Observable<Usuario> {
    return of(objeto);
  }

  delete(id: number): Observable<void> {
    return of(undefined);
  }

  updateStatus(id: number): Observable<Usuario> {
    throw new Error('Method not implemented.');
  }

}
