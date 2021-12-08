import AppLayout from "../../../components/apps/notas/AppLayout";
import Heading from "../../../components/Heading";
import Text from "../../../components/Text";
import NotasContext from "../../../context/apps/NotasContext";
import React from "react";
import { NotasState } from "../../../context/apps/Notas.types";
import { initialState } from "../../../context/apps/NotasContext";

const NotasPage = () => {
  const [state, setState] = React.useState<NotasState>(initialState);
  return (
    <>
      <Heading>Notas</Heading>
      <Text>
        Esta aplicación sirve para calcular notas para aprobar algún curso, esta
        herramienta permite obtener la ponderación final de la asignatura o la
        nota faltante para aprobar el mismo.
      </Text>
      <Text>
        Pronto la aplicación ofrecerá configuración para distintos casos.
      </Text>
      <NotasContext.Provider value={{ state, setState }}>
        <AppLayout />
      </NotasContext.Provider>
    </>
  );
};

export default NotasPage;
