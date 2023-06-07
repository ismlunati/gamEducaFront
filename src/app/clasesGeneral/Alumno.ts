import { Usuario } from './../usuario/clases/Usuario.interface';
import { AlumnoAsignatura } from "./AlumnoAsignatura";

export interface Alumno {

    id:number;
    usuario:Usuario;
    alumnoAsignaturas:AlumnoAsignatura;


}
