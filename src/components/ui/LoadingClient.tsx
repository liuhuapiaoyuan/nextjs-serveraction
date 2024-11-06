'use client'
import { useState } from "react";


export function LoadingClient(props: { onCall: () => Promise<void> }) {
  const [loading, setLoading] = useState(false)


  return <button disabled={loading}
    className="btn"
    onClick={async () => {
      setLoading(true)
      try {
        await props.onCall()
      } finally {
        setLoading(false)
      }
    }}>{loading ? "Loading..." : "Call Server Action"}
  </button>
}
