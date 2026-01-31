import React from "react";

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[90%] mx-auto lg:max-w-[85%]">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
