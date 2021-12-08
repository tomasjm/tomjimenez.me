import React from "react";
import { NotasState, NotasContext } from "./Notas.types";

export const initialState: NotasState = {
  notas: [{ nota: "", porcentaje: "" }],
};
const NotasContext = React.createContext<NotasContext>({
  state: initialState,
  setState: () => null,
});
export default NotasContext;
