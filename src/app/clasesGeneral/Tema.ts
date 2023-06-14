import { Asignatura } from "../asignatura/asignatura";
import { Reto } from "./Reto";

export interface Tema {
    id:number;
    nombre:string;
    descripcion:string;
    asignatura:Asignatura;
    reto:Reto[];

}
