import { Asignatura } from "../asignatura/asignatura";
import { Alumno } from "./Alumno";

export interface AlumnoAsignatura {

    estado:string;
    puntos:number;
    alumno:Alumno;
    asingatura:Asignatura;


}
