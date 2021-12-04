interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`${className} bg-green-500 hover:bg-green-600 text-white dark:bg-purple-700 dark:hover:bg-purple-900 px-3 py-1 rounded  `}
    >
      {children}
    </button>
  );
};

export default Button;
