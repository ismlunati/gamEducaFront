import { Asignatura } from "../asignatura/asignatura";
import { Logro } from "./Logro";

export interface Artefacto {

    nombre:string;
    descripcion:string;
    costePuntos:number;
    estado:string;
    temporal:boolean;
    fechaInicio: Date;
    fechaFin: Date;
    asignatura: Asignatura;
    logro:Logro;

}
