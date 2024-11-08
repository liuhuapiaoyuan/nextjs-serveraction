"use client";

import { SubmitButton } from "@/components/ui/SubmitButton";
import { use, useOptimistic } from "react";
import { Message, send } from "./action";

export function Thread(props: { messages: Promise<Message[]> }) {
  const messages = use(props.messages);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<
    Message[],
    string
  >(messages, (state, newMessage) => [
    ...state,
    { message: newMessage, state: "loading" },
  ]);

  const formAction = async (formData: FormData) => {
    const message = formData.get("message") as string;
    addOptimisticMessage(message);
    await send(message);
  };

  return (
    <div>
      <ul>
        {optimisticMessages.map((m, i) => (
          <li key={i}>
            {m.message}
            {m.state && `(${m.state})`}
          </li>
        ))}
      </ul>
      <form action={formAction}>
        <input className="input" type="text" name="message" />
        <SubmitButton />
      </form>
    </div>
  );
}
