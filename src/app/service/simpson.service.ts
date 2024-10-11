import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimpsonService {

  private apiUrl = 'https://apisimpsons.fly.dev/api/personajes?limit=850';
  constructor(private http: HttpClient) { }
  getPersonajes(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response: { docs: any; }) => response.docs) // Extraemos los personajes del objeto de respuesta
    );
  }
}
