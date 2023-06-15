import { Artefacto } from "./Artefacto";
import { Reto } from "./Reto";

export interface Logro {
    id:number;
    nombre:string;
    descripcion:string;
    beneficio:number;
    estado:boolean;
    retos:Reto[];
    artefacto:Artefacto;
    artefactosDesbloqueados:Artefacto[];


}
