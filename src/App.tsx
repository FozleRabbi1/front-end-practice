import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "./Components/ReusableForm";
import Container from "./Components/UI/Container";
import { z } from "zod";

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TTest>();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const TestSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8, { message: "" }),
  });

  type TTest = z.infer<typeof TestSchema>;

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
        <FormSection>
          <Input
            label="name"
            register={register("name")}
            type="text"
            errors={errors}
          ></Input>
          <Input
            label="email"
            register={register("email")}
            type="text"
            errors={errors}
          ></Input>

          <Input
            label="password"
            register={register("password")}
            type="password"
            errors={errors}
          ></Input>
        </FormSection>
        <FormSubmit></FormSubmit>
      </Form>
    </Container>
  );
}

export default App;
