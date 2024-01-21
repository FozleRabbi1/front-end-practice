import { useContext } from "react";
import cn from "../../Utils/cn";
import Button from "../Button/Button";
import { FromElementContext } from ".";

export const FormSubmit = () => {
  const { double } = useContext(FromElementContext);
  return (
    <div
      className={cn(
        " rounded-lg shadow-sm grid grid-cols-1  gap-5 p-2 justify-items-center ",
        {
          "md:grid-cols-2": double,
        }
      )}
    >
      <div className="w-full  max-w-md col-start-1 md:col-start-2 flex justify-end">
        <Button className="w-full md:w-fit" type="submit" variant="outline">
          Submit
        </Button>
      </div>
    </div>
  );
};
