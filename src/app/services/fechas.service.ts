import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 

export interface Fech{
  id?: string;
  fecha: string;
  descripcion:string;
}

@Injectable({
  providedIn: 'root'
})
export class FechasService {
  API = 'http://localhost:1337/fechas'
  constructor(private http: HttpClient) { 
    
  }

  getFecha() {
    return this.http.get(this.API)
  }

  getFechaById(id: string) {
    return this.http.get<Fech>(`${this.API}/${id}`);
  }

  createFecha(fecha: string, descripcion: string) {
    return this.http.post(this.API, {
      fecha, descripcion
    })
  }

  updateFecha(id: string, date: Fech) {
    return this.http.put(`${this.API}/${id}`, date);
  }

  deleteFecha(id: string) {
    return this.http.delete(`${this.API}/${id}`)
  }
}
