import React from "react";
import { Nota, NotasState } from "../../../context/apps/Notas.types";
import TextInput from "../../TextInput";
import { TiDelete } from "react-icons/ti";
interface NotaInput {
  idx: number;
  nota: Nota;
  handleValue: React.Dispatch<React.SetStateAction<NotasState>>;
}
const NotaInput = ({ idx, nota, handleValue }: NotaInput) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValue((state) => {
      return {
        notas: [
          ...state.notas.slice(0, idx),
          {
            ...state.notas[idx],
            [e.target.name]: e.target.value,
          },
          ...state.notas.slice(idx + 1),
        ],
      };
    });
  };
  const selfDelete = () => {
    handleValue((state) => {
      return {
        notas: [...state.notas.slice(0, idx), ...state.notas.slice(idx + 1)],
      };
    });
  };

  return (
    <div className="flex flex-row w-full gap-2 justify-between items-center rounded shadow px-12 py-3 mb-5">
      <div className="mt-3 flex items-center py-4">
        <div className="flex items-center justify-center border-4 border-green-500 font-bold dark:border-gray-800 rounded-full h-10 w-10">
          {idx + 1}
        </div>
      </div>
      <TextInput
        name="nota"
        onChange={handleChange}
        placeholder="0.0"
        value={nota.nota}
        label="Nota"
      />
      <TextInput
        name="porcentaje"
        onChange={handleChange}
        placeholder="0%"
        value={nota.porcentaje}
        label="Porcentaje"
      />
      <div className="mt-4">
        <button onClick={() => selfDelete()}>
          <TiDelete className="text-gray-800 hover:text-gray-600" size={56} />
        </button>
      </div>
    </div>
  );
};

export default NotaInput;
