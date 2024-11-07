"use client";
import { useFormStatus } from "react-dom";

export function SubmitButton(props: { title?: string }) {
  const { pending } = useFormStatus();
  const { title } = props;
  return (
    <button type="submit" className="btn" disabled={pending}>
      {pending ? "Submitting..." : title ?? "Submit"}
    </button>
  );
}
