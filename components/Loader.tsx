import { AiOutlineLoading } from "react-icons/ai";
const Loader = () => (
  <div className="flex justify-center">
    <AiOutlineLoading
      className="animate-spin text-green-400 dark:text-white"
      size={50}
    />
  </div>
);

export default Loader;
