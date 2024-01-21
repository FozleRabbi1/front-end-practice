import { useFormContext } from "react-hook-form";

const InputField = () => {
  const { register } = useFormContext();
  //   const { register, watch } = useFormContext();
  //   console.log(watch("somthing"));
  return (
    <div>
      <input type="text" {...register("somthing")} />
    </div>
  );
};

export default InputField;
