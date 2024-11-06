'use server'
import { CreateUserSchema } from './ValidateError';




export  async function createUser(formData: FormData) {
  const validatedFields = CreateUserSchema.safeParse({
    email: formData.get('email'),
  })
  await new Promise((resolve) => setTimeout(resolve, 1000))
  if (!validatedFields.success) {
    return {error:validatedFields.error.format()}
  }
  return {data:formData.get('email')?.toString()}

}