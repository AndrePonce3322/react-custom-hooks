export interface hook {
  nombre: string;
  funcionalidad: string;
}

export interface CustomHooksType {
  "Hooks Básicos": hook[];
  "Hooks Adicionales": hook[];
  "Hooks Personalizados": hook[];
  "Hooks de Comportamiento (Librerías Externas)": hook[];
}