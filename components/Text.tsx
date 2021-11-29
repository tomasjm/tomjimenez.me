interface TextProps extends React.ParamHTMLAttributes<HTMLParagraphElement> {}
const Text: React.FC<TextProps> = ({ children, className, ...props }) => {
  return (
    <p {...props} className={`${className} font-inter dark:text-white`}>
      {children}
    </p>
  );
};

export default Text;
