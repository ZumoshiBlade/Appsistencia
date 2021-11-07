import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Usua{
  id?: string;
  nombre: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API = 'http://localhost:1337/alumnos'

  constructor(private http: HttpClient) { }

  ShowUsers(){
    return this.http.get('http://localhost:1337/alumnos');
  }

  createUser(nombre:string, password:string){
    return this.http.post(this.API, {nombre, password})
  }
}
