import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstadisticasPreguntasPorTemasDTO } from '../clasesGeneral/EstadisticasPreguntasPorTemasDTO';
import { Observable } from 'rxjs';
import { EstadisticasPreguntasPorAlumnosDTO } from '../clasesGeneral/EstadisticasPreguntasPorAlumnosDTO';
import { EstadisticasTestPorTestDTO } from '../clasesGeneral/EstadisticasTestPorTestDTO';
import { EstadisticasTestPorAlumnosDTO } from '../clasesGeneral/EstadisticasTestPorAlumnosDTO';
import { EstadisticasReportesAlumnosDTO } from '../clasesGeneral/EstadisticasReportesAlumnosDTO';
import { TierList } from '../clasesGeneral/TierList';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  private urlApi='http://localhost:8081/asignaturas';


  constructor(private http: HttpClient) { }


  getEstadisticasPreguntaPorTemas(idAsignatura:number): Observable<EstadisticasPreguntasPorTemasDTO[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<EstadisticasPreguntasPorTemasDTO[]>(`${this.urlApi}/${idAsignatura}/estadisticas/preguntasPorTemas`, httpOptions); // Asegúrate de usar tu URL correcta
  }

  getEstadisticasPreguntaPorAlumnos(idAsignatura:number): Observable<EstadisticasPreguntasPorAlumnosDTO[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<EstadisticasPreguntasPorAlumnosDTO[]>(`${this.urlApi}/${idAsignatura}/estadisticas/preguntasPorAlumnos`, httpOptions); // Asegúrate de usar tu URL correcta
  }

  getEstadisticasTestPorTest(idAsignatura:number): Observable<EstadisticasTestPorTestDTO[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<EstadisticasTestPorTestDTO[]>(`${this.urlApi}/${idAsignatura}/estadisticas/testPorTest`, httpOptions); // Asegúrate de usar tu URL correcta
  }

  getEstadisticasTestPorAlumnos(idAsignatura:number): Observable<EstadisticasTestPorAlumnosDTO[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<EstadisticasTestPorAlumnosDTO[]>(`${this.urlApi}/${idAsignatura}/estadisticas/testPorAlumnos`, httpOptions); // Asegúrate de usar tu URL correcta
  }




  getEstadisticasReportesAlumnos(idAsignatura:number, tipoReporte:string): Observable<EstadisticasReportesAlumnosDTO[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<EstadisticasReportesAlumnosDTO[]>(`${this.urlApi}/${idAsignatura}/estadisticas/${tipoReporte}`, httpOptions); // Asegúrate de usar tu URL correcta
  }



  
  postTierList(idAsignatura:number, tierList:FormData): Observable<TierList> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.post<TierList>(`${this.urlApi}/${idAsignatura}/estadisticas/tierList`, tierList, httpOptions); // Asegúrate de usar tu URL correcta
  }
}
