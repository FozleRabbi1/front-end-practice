import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full max-w-[1250px] mx-auto ">{children}</div>
  );
};

export default Container;
