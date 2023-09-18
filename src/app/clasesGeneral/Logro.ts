import { ArtefactoLogro } from "./ArtefactoLogro";
import { Reto } from "./Reto";

export interface Logro {
    id:number;
    nombre:string;
    descripcion:string;
    imagen?:string;
    retos:Reto[];
    artefactoLogros:ArtefactoLogro


}
