import { z } from "zod";

export const CreateUserSchema = z.object({
  email: z.string().email({
    message: '邮箱格式不正确',
  }),
})


export type State<T, E> = {
  data?:T|undefined;
  error?:E|undefined;
}

 