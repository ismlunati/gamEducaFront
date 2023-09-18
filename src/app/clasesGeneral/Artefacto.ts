import { Asignatura } from "../asignatura/asignatura";
import { ArtefactoLogro } from "./ArtefactoLogro";
import { Logro } from "./Logro";

export interface Artefacto {
    id:number;
    nombre:string;
    descripcion:string;
    costePuntos:number;
    estado:string;
    temporal:boolean;
    repetible:boolean;
    fechaInicio: Date;
    fechaFin: Date;
    asignatura: Asignatura;
    artefactoLogros:ArtefactoLogro[];

}
