import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstadisticasPreguntasPorTemasDTO } from '../clasesGeneral/EstadisticasPreguntasPorTemasDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  private urlApi='http://localhost:8081/asignaturas';


  constructor(private http: HttpClient) { }


  getEstadisticas(idAsignatura:number): Observable<EstadisticasPreguntasPorTemasDTO[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<EstadisticasPreguntasPorTemasDTO[]>(`${this.urlApi}/${idAsignatura}/estadisticas/preguntasPorTemas`, httpOptions); // Asegúrate de usar tu URL correcta
  }





}
