import { Asignatura } from "../asignatura/asignatura";
import { Usuario } from "../usuario/clases/Usuario.interface";

export interface Profesor {

    usuario:Usuario;
    asignaturas:Asignatura[];


}
