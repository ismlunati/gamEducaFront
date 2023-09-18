export interface Pregunta {
  id: number;
  enunciado: string;
  respuestas: Respuesta[];
  // otros campos si es necesario
}

export interface Respuesta {
  id: number;
  texto: string;
  esCorrecta: boolean;
  // otros campos si es necesario
}
  