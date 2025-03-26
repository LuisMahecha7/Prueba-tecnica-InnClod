import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api'; // Ajusta la URL según tu configuración

  constructor(private http: HttpClient) {}
  /* SE IMPLEMENTARAN igual que este docuemnto, LAS PETICIONES EN SERVICIOS SEPARADOS,con el Objetivo de EN ELIMINAR LA REDUNDANCIA*/
  // Método para obtener el usuario autenticado           Este Servicio Esta creado pero no implementa ninguna funcionalidad.. por ahora.
  getUser(): Observable<any> {
    const token = localStorage.getItem('auth_token');
    if (!token) return new Observable(observer => observer.error('No hay token almacenado'));

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/user`, { headers });
  }
}
