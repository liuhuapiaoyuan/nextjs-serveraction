"use client";
import { PageContainer } from "@/components/ui/PageContainer";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { useMutation, useQuery } from "@tanstack/react-query";
import { get, send } from "./action";
import Code from "./code.mdx";

export default function Page() {
  const messages = useQuery({ queryKey: ["messages"], queryFn: get });
  const mutation = useMutation({
    mutationFn: send,
    onSettled: () => messages.refetch(),
  });

  return (
    <PageContainer title="通过react-query调用Server Action">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <Code />
        </div>
        <div className="flex flex-col gap-2">
          <div> 预览:</div>
          <ul>
            {messages.data?.map((m, i) => (
              <li key={i}> {m.message} </li>
            ))}
          </ul>
          <form
            action={async (data) =>
              mutation.mutate(data.get("message")!.toString())
            }
          >
            <input className="input" type="text" name="message" />
            <SubmitButton />
          </form>
        </div>
      </div>
    </PageContainer>
  );
}
