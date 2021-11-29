interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`bg-green-500 dark:bg-gray-900 ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
