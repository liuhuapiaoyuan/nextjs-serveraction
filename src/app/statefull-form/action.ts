'use server'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email({
    message: '邮箱格式不正确',
  }),
})

export default async function createUser(formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
  })
  await new Promise((resolve) => setTimeout(resolve, 1000))
  if (!validatedFields.success) {
    throw new Error(validatedFields.error.toString())
  }
  return formData.get('email')?.toString()
}
