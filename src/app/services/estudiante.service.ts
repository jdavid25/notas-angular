import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Estudiante } from '../models/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getEstudiantes(): Observable<Estudiante[]> {
    return this.http.get(this.url).pipe(
      map(data => data as Estudiante[])
    );
  }

  getEstudiante(id: number): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.url}/${id}`);
  }
}
