import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asignatura } from './asignatura';
import { Alumno } from '../clasesGeneral/Alumno';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  private urlApi='http://localhost:8081/asignaturas';

  constructor(private http: HttpClient) { }

  getAsignaturas(): Observable<Asignatura[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<Asignatura[]>(this.urlApi, httpOptions); // Asegúrate de usar tu URL correcta
  }

  getAsignaturaListaSolicitudes(idAsignatura: number): Observable<Alumno[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<Alumno[]>(`${this.urlApi}/${idAsignatura}/listaSolicitudesPendientes`, httpOptions); // Asegúrate de usar tu URL correcta
  }

  getAsignaturaPorId(idAsignatura: number): Observable<Asignatura> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<Asignatura>(`${this.urlApi}/${idAsignatura}`, httpOptions); // Asegúrate de usar tu URL correcta
  }



//BBBB222

  aceptarAlumno(idAsignatura: number, idAlumno: number): Observable<any> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.post<any>(`${this.urlApi}/${idAsignatura}/${idAlumno}/aceptar`, {}, httpOptions);
  }


  rechazarAlumno(idAsignatura: number, idAlumno: number): Observable<any> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.post<any>(`${this.urlApi}/${idAsignatura}/${idAlumno}/aceptar`, {}, httpOptions);
  }

  enviarCodigo(codigo: string): Observable<any> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    

    return this.http.post<any>(this.urlApi+'/acceder',  codigo , httpOptions);
  }



  
  crearAsignatura(asignatura: Asignatura): Observable<Asignatura> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    
    return this.http.post<Asignatura>(`${this.urlApi}`, asignatura, httpOptions);
  }


  borrarAsignatura(idAsignatura: number): Observable<any> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.delete(`${this.urlApi}/${idAsignatura}`, httpOptions);
  }

}
