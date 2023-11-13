import { FC } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto lg:px-8 px-6">{children}</div>
    </>
  );
};

export default Wrapper;