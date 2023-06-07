import { AlumnoAsignatura } from "../clasesGeneral/AlumnoAsignatura";
import { Artefacto } from "../clasesGeneral/Artefacto";
import { Profesor } from "../clasesGeneral/Profesor";
import { Reto } from "../clasesGeneral/Reto";
import { Tema } from "../clasesGeneral/Tema";

export interface Asignatura {
    id:number;
    nombre:string;
    descripcion:string;
    curso:string;
    codigo?:string;
    profesor?:Profesor;
    artefactos?: Artefacto;
    temas?: Tema;
    alumnoAsignaturas?: AlumnoAsignatura;
    retos?:Reto;

}
