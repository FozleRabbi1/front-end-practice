import { createContext } from "react";
import cn from "../../Utils/cn";
import { TForm } from "../../types/Form.types";
export const FromElementContext = createContext<{ double: boolean } | null>(
  null
);

export const Form = ({ children, onSubmit, double = false }: TForm) => {
  return (
    <FromElementContext.Provider value={{ double }}>
      <form
        onSubmit={onSubmit}
        className={cn("border border-gray-300 p-5 mx-auto mt-10", {
          "max-w-5xl": double,
          "max-w-md": !double,
        })}
      >
        {children}
      </form>
    </FromElementContext.Provider>
  );
};
