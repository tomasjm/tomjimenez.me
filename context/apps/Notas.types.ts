export interface Nota {
  nota: string;
  porcentaje: string;
}
export interface NotasState {
  notas: Nota[];
}
export interface NotasContext {
  state: NotasState;
  setState: React.Dispatch<React.SetStateAction<NotasState>>;
}
