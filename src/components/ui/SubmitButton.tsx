'use client'
import { useFormStatus } from "react-dom"

export function SubmitButton() {
  const { pending } = useFormStatus()
  return <button type="submit" className="btn" disabled={pending}>
    {pending ? "Submitting..." : "提交"}
  </button>
}
