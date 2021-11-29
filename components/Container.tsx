const Container: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen  mb-10 px-8">
      <div className="max-w-screen-md mx-auto  ">{children}</div>
    </div>
  );
};

export default Container;
