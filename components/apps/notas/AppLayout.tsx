import { useContext } from "react";
import NotasContext from "../../../context/apps/NotasContext";
import Text from "../../../components/Text";
import NotaInput from "./NotaInput";
import Button from "../../Button";
import { AiFillPlusCircle } from "react-icons/ai";
const AppLayout = () => {
  const { state, setState } = useContext(NotasContext);
  console.log(state);
  return (
    <div className="flex flex-col items-center mt-14 ">
      {state.notas.map((nota, index) => (
        <NotaInput idx={index} nota={nota} handleValue={setState} />
      ))}
      <div className="mt-3">
        <button
          onClick={() => {
            setState({ notas: [...state.notas, { nota: "", porcentaje: "" }] });
          }}
          aria-label="Añadir una nota más"
        >
          <AiFillPlusCircle
            className="text-green-500 hover:text-green-600 "
            size={64}
          />
        </button>
      </div>
      <div className="mt-3">
        <Button ariaLabel="Calcular nota botón">Calcular nota</Button>
      </div>
    </div>
  );
};

export default AppLayout;
