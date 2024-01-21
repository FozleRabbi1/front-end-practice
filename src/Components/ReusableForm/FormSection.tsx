import { useContext } from "react";
import cn from "../../Utils/cn";
import { FromElementContext } from ".";

export const FormSection = ({ children }) => {
  const { double } = useContext(FromElementContext);
  return (
    <div
      className={cn(
        " rounded-lg shadow-sm grid grid-cols-1 gap-5 p-2 justify-items-center ",
        {
          "md:grid-cols-2": double,
        }
      )}
    >
      {children}
    </div>
  );
};
