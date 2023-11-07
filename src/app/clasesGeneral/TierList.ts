import { Asignatura } from "../asignatura/asignatura";
import { AsignaturaAnadirComponent } from "../asignatura/asignatura-anadir/asignatura-anadir.component";
import { Tier } from "./Tier";

export interface TierList{


    nombre:string;
    descripcion:string;
    asignatura:Asignatura;
    tier:Tier[];


}