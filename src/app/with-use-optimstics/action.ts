"use server";

import { revalidatePath, revalidateTag } from "next/cache";
export type Message = {
  message: string;
  state?: "loading";
};

/* 扩展global类型 */
declare global {
  /* eslint-disable no-var */
  var messages: Message[];
  /* eslint-enable no-var */
}

global.messages = global.messages ?? ([] as Message[]);

export async function send(message: string) {
  await new Promise((resolve) =>
    setTimeout(resolve, 1000 + Math.random() * 1000)
  );
  global.messages.push({ message });
  revalidatePath("/with-use-optimstics");
  revalidateTag("messages");
}

export async function get() {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return global.messages;
}
