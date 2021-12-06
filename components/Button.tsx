interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  secondary?: boolean;
  ariaLabel: string;
}

const Button: React.FC<ButtonProps> = ({
  secondary,
  children,
  ariaLabel,
  className,
  ...props
}) => {
  const customClasses = `${
    secondary
      ? "bg-gray-500 hover:bg-gray-600 text-white dark:bg-gray-600 dark:hover:bg-gray-700"
      : "bg-green-500 hover:bg-green-600 text-white dark:bg-purple-700 dark:hover:bg-purple-900"
  } ${className}`;
  return (
    <button
      {...props}
      className={`px-3 py-1 rounded ${customClasses}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
