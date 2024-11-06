
import { useActionState } from 'react'

/**
 * StateFull Form的Action
 */
export type ActionResponse<T = null> = {
  error?: Error
  data?: T
}

/**
 * 简化版的useStateForm，只返回data和error 
 * @param action
 * @returns
 */
export function useStateForm<T, E extends Error>(action: (formData: FormData) => Promise<T>, permalink?: string,) {
  return useActionState(
    async (_pre: ActionResponse<T>, formData: FormData) => {
      try {
        const data = await action(formData)
        return { data }
      } catch (error) {
        return {
          error: error as E,
        }
      }
    },
    {} as ActionResponse<T>,
    permalink,
  )
}
