import { Asignatura } from "../asignatura/asignatura";
import { Logro } from "./Logro";
import { Tema } from "./Tema";

export interface Reto {
    id:number;
    nombre:string;
    descripcion:string;
    puntosOtorgados:number;
    temporal:boolean;
    fechaInicio: Date;
    fechaFin: Date;
    logro:Logro;
    tema:Tema;
    asignatura:Asignatura;


}
