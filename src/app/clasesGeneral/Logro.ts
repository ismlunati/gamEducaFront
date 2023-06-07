import { Artefacto } from "./Artefacto";
import { Reto } from "./Reto";

export interface Logro {

    nombre:string;
    descripcion:string;
    beneficio:number;
    estado:boolean;
    retos:Reto[];
    artefactosDesbloqueados:Artefacto[];


}
