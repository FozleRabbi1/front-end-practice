import { FieldValues, FormProvider, useForm } from "react-hook-form";
import cn from "../../Utils/cn";
import Button from "../Button/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, TNormalForm } from "./validation";
import InputField from "./InputField";

const NormalForm = () => {
  const methods = useForm<TNormalForm>({
    resolver: zodResolver(SignUpSchema),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  console.log(watch("name"));
  const double = true;

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={cn("border border-gray-300 p-5 mx-auto mt-10", {
            "max-w-5xl": double,
            "max-w-md": !double,
          })}
        >
          <div
            className={cn(
              " rounded-lg shadow-sm grid grid-cols-1 gap-5 p-2 justify-items-center ",
              {
                "md:grid-cols-2": double,
              }
            )}
          >
            <div className="w-full max-w-md ">
              <label htmlFor="name" className="block">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
              />
              {errors?.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>

            <div className="w-full max-w-md ">
              <label htmlFor="somthing" className="block">
                Inport Name Fild
              </label>
              <InputField></InputField>
              {errors?.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>

            <div className="w-full max-w-md">
              <label htmlFor="email" className="block">
                Email
              </label>
              <input type="text" id="email" {...register("email")} />
              {errors?.email && (
                <span className="text-red-500">{errors?.email?.message}</span>
              )}
            </div>
            <div className="w-full max-w-md">
              <label htmlFor="password" className="block">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { minLength: 8 })}
              />
              {errors.password && (
                <span className="text-red-500">
                  {errors?.password?.message}
                </span>
              )}
            </div>
          </div>

          <div
            className={cn(
              " rounded-lg shadow-sm grid grid-cols-1  gap-5 p-2 justify-items-center ",
              {
                "md:grid-cols-2": double,
              }
            )}
          >
            <div className="w-full  max-w-md col-start-1 md:col-start-2 flex justify-end">
              <Button
                className="w-full md:w-fit"
                type="submit"
                variant="outline"
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default NormalForm;
