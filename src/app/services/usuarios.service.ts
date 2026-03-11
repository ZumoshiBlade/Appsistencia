import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// import { HttpClient } from '@angular/common/http'; // Descomentar al conectar backend real

export interface Usua {
  id?: string;
  nombre: string;
  password: string;
}

/**
 * NOTA: Este servicio usa datos en memoria (mock) para poder ejecutar la app en local
 * sin necesidad de un backend corriendo.
 *
 * Para conectar al backend real (Strapi en http://localhost:1337):
 *  1. Instala y levanta el backend Strapi con las colecciones "alumnos" y "fechas"
 *  2. Descomentar las líneas marcadas con "BACKEND REAL"
 *  3. Comentar o eliminar los métodos mock y la constante MOCK_USERS
 *  4. Descomentar HttpClientModule en app.module.ts
 */

// Usuarios de prueba para ejecución local
const MOCK_USERS: Usua[] = [
  { id: '1', nombre: 'admin', password: '1234' },
  { id: '2', nombre: 'alumno', password: 'pass123' },
];

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  // BACKEND REAL: private API = 'http://localhost:1337/alumnos';
  private mockUsers: Usua[] = [...MOCK_USERS];

  constructor(/* private http: HttpClient */) { } // BACKEND REAL: habilitar HttpClient

  ShowUsers(): Observable<Usua[]> {
    // BACKEND REAL: return this.http.get<Usua[]>(this.API);
    return of(this.mockUsers);
  }

  createUser(nombre: string, password: string): Observable<Usua> {
    // BACKEND REAL: return this.http.post<Usua>(this.API, { nombre, password });
    const newUser: Usua = { id: String(Date.now()), nombre, password };
    this.mockUsers.push(newUser);
    return of(newUser);
  }
}
