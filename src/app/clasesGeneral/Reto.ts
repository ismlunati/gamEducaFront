import { Asignatura } from "../asignatura/asignatura";
import { Logro } from "./Logro";
import { Tema } from "./Tema";

export interface Reto {
    id:number;
    nombre:string;
    descripcion:string;
    puntosOtorgados:number;
    logro:Logro;
    tema:Tema;
    asignatura:Asignatura;


}
