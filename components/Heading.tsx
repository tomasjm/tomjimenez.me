interface HeadingProps
  extends React.ParamHTMLAttributes<HTMLParagraphElement> {}
const Heading: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <h1
      {...props}
      className={`text-4xl ${className} font-bold font-cal dark:text-white mb-3`}
    >
      {children}
    </h1>
  );
};

export default Heading;
