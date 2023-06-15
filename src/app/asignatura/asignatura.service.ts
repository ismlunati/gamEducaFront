import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asignatura } from './asignatura';
import { Alumno } from '../clasesGeneral/Alumno';
import { Tema } from '../clasesGeneral/Tema';
import { Logro } from '../clasesGeneral/Logro';
import { Reto } from '../clasesGeneral/Reto';
import { Artefacto } from '../clasesGeneral/Artefacto';

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

  getLogroPorId(idAsignatura: number, idLogro: number): Observable<Logro> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<Logro>(`${this.urlApi}/${idAsignatura}/logros/${idLogro}`, httpOptions); // Asegúrate de usar tu URL correcta
  }

  getTemaPorId(idAsignatura: number, idTema:number): Observable<Tema> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<Tema>(`${this.urlApi}/${idAsignatura}/temas/${idTema}`, httpOptions); // Asegúrate de usar tu URL correcta
  }


  getArtefactoPorId(idAsignatura: number, idArtefacto:number): Observable<Artefacto> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<Artefacto>(`${this.urlApi}/${idAsignatura}/artefactos/${idArtefacto}`, httpOptions); // Asegúrate de usar tu URL correcta
  }

  getRetoPorId(idAsignatura: number, idReto:number): Observable<Reto> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<Reto>(`${this.urlApi}/${idAsignatura}/retos/${idReto}`, httpOptions); // Asegúrate de usar tu URL correcta
  }


  getTemasPorAsignatura(idAsignatura: number): Observable<Tema[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<Tema[]>(`${this.urlApi}/${idAsignatura}/temas`, httpOptions); // Asegúrate de usar tu URL correcta
  }


  

  getArtefactosPorAsignatura(idAsignatura: number): Observable<Artefacto[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<Artefacto[]>(`${this.urlApi}/${idAsignatura}/artefactos`, httpOptions); // Asegúrate de usar tu URL correcta
  }


  getLogrosPorAsignatura(idAsignatura: number): Observable<Logro[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<Logro[]>(`${this.urlApi}/${idAsignatura}/logros`, httpOptions); // Asegúrate de usar tu URL correcta
  }


  getRetosPorAsignatura(idAsignatura: number): Observable<Reto[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<Reto[]>(`${this.urlApi}/${idAsignatura}/retos`, httpOptions); // Asegúrate de usar tu URL correcta
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


  crearTema(tema: Tema, id:number): Observable<Tema> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    
    return this.http.post<Tema>(`${this.urlApi}/${id}/temas`, tema, httpOptions);
  }

  crearArtefacto(artefacto: Artefacto, id:number): Observable<Artefacto> {

    const token = sessionStorage.getItem('token');
     // Recupera el token desde donde lo tengas almacenado
    console.log("Estoy enviando este artefacto:", artefacto );
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    
    return this.http.post<Artefacto>(`${this.urlApi}/${id}/artefactos`, artefacto, httpOptions);
  }


  crearLogro(logro: Logro, id:number): Observable<Logro> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    
    return this.http.post<Logro>(`${this.urlApi}/${id}/logros`, logro, httpOptions);
  }

  crearReto(reto: Reto, id:number): Observable<Reto> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    
    return this.http.post<Reto>(`${this.urlApi}/${id}/retos`, reto, httpOptions);
  }

  actualizarAsignatura(asignatura: Asignatura): Observable<Asignatura> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    console.log("Imprimo asignatura actualizandose", asignatura);
    
    return this.http.put<Asignatura>(`${this.urlApi}/${asignatura.id}`, asignatura, httpOptions);
  }


  actualizarTema(tema: Tema, idAsignatura:number): Observable<Tema> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    console.log("Imprimo tema actualizandose", tema);
    
    return this.http.put<Tema>(`${this.urlApi}/${idAsignatura}/temas/${tema.id}`, tema, httpOptions);
  }
  actualizarLogro(logro: Logro, idAsignatura:number): Observable<Logro> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    console.log("Imprimo logro actualizandose", logro);
    
    return this.http.put<Logro>(`${this.urlApi}/${idAsignatura}/logros/${logro.id}`, logro, httpOptions);
  }

  actualizarArtefacto(artefacto: Artefacto, idAsignatura:number): Observable<Artefacto> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    console.log("Imprimo logro actualizandose", artefacto);
    
    return this.http.put<Artefacto>(`${this.urlApi}/${idAsignatura}/artefactos/${artefacto.id}`, artefacto, httpOptions);
  }

  actualizarReto(reto: Reto, idAsignatura:number): Observable<Reto> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    console.log("Imprimo logro actualizandose", reto);
    
    return this.http.put<Reto>(`${this.urlApi}/${idAsignatura}/retos/${reto.id}`, reto, httpOptions);
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

  borrarTema(idAsignatura: number, idTema: number): Observable<any> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.delete(`${this.urlApi}/${idAsignatura}/temas/${idTema}`, httpOptions);
  }

  borrarReto(idAsignatura: number, idReto: number): Observable<any> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.delete(`${this.urlApi}/${idAsignatura}/retos/${idReto}`, httpOptions);
  }


  borrarLogro(idAsignatura: number, idLogro: number): Observable<any> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.delete(`${this.urlApi}/${idAsignatura}/logros/${idLogro}`, httpOptions);
  }

}
