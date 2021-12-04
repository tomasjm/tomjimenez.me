//Generate a text input component using tailwindcss
interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
const TextInput: React.FC<TextInputProps> = ({ label, ...props }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...props}
      />
    </div>
  );
};

export default TextInput;
