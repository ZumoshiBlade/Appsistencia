import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// import { HttpClient } from '@angular/common/http'; // Descomentar al conectar backend real

export interface Fech {
  id?: string;
  fecha: string;
  descripcion: string;
}

/**
 * NOTA: Este servicio usa datos en memoria (mock) para poder ejecutar la app en local
 * sin necesidad de un backend corriendo.
 *
 * Para conectar al backend real (Strapi en http://localhost:1337):
 *  1. Instala y levanta el backend Strapi con las colecciones "alumnos" y "fechas"
 *  2. Descomentar las líneas marcadas con "BACKEND REAL"
 *  3. Comentar o eliminar los métodos mock y la constante MOCK_FECHAS
 *  4. Descomentar HttpClientModule en app.module.ts
 */

// Fechas de prueba para ejecución local
const MOCK_FECHAS: Fech[] = [
  { id: '1', fecha: '2024-03-15', descripcion: 'Clase de Programación Móvil' },
  { id: '2', fecha: '2024-03-20', descripcion: 'Clase de Arquitectura de Software' },
  { id: '3', fecha: '2024-03-25', descripcion: 'Examen de Calidad de Software' },
];

@Injectable({
  providedIn: 'root'
})
export class FechasService {

  // BACKEND REAL: private API = 'http://localhost:1337/fechas';
  private mockFechas: Fech[] = [...MOCK_FECHAS];

  constructor(/* private http: HttpClient */) { } // BACKEND REAL: habilitar HttpClient

  getFecha(): Observable<Fech[]> {
    // BACKEND REAL: return this.http.get<Fech[]>(this.API);
    return of([...this.mockFechas]);
  }

  getFechaById(id: string): Observable<Fech> {
    // BACKEND REAL: return this.http.get<Fech>(`${this.API}/${id}`);
    const fecha = this.mockFechas.find(f => f.id === id) || { id, fecha: '', descripcion: '' };
    return of(fecha);
  }

  createFecha(fecha: string, descripcion: string): Observable<Fech> {
    // BACKEND REAL: return this.http.post<Fech>(this.API, { fecha, descripcion });
    const newFecha: Fech = { id: String(Date.now()), fecha, descripcion };
    this.mockFechas.push(newFecha);
    return of(newFecha);
  }

  updateFecha(id: string, date: Fech): Observable<Fech> {
    // BACKEND REAL: return this.http.put<Fech>(`${this.API}/${id}`, date);
    const idx = this.mockFechas.findIndex(f => f.id === id);
    if (idx !== -1) {
      this.mockFechas[idx] = { ...date, id };
    }
    return of({ ...date, id });
  }

  deleteFecha(id: string): Observable<unknown> {
    // BACKEND REAL: return this.http.delete(`${this.API}/${id}`);
    this.mockFechas = this.mockFechas.filter(f => f.id !== id);
    return of(null);
  }
}
