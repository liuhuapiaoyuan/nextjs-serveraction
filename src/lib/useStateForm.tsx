import { useActionState } from "react";

export type State<T, E> = {
  data?: T | undefined;
  error?: E | undefined;
};
/**
 * 简化版的useStateForm，只返回data和error
 * @param action
 * @returns
 */
export function useStateForm<T, E>(
  action: (formData: FormData) => Promise<State<T, E>>,
  permalink?: string
) {
  return useActionState<State<T, E>, FormData>(
    async (_pre, formData) => {
      const result = await action(formData);
      return result;
    },
    [undefined, undefined] as State<T, E>,
    permalink
  );
}
