import { Alumno } from "./Alumno";

export interface Tier{
    id:number;
    nombre:string;
    color:string;
    alumnos:Alumno[];


}