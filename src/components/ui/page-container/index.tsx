import { PropsWithChildren, ReactNode } from "react";


export function PageContainer({ children, title }: PropsWithChildren<{
  title?: ReactNode
}>) {
  return <div className="border p-2 grid gap-2  rounded-md">
    {title && <div className="p-2 border-0 border-b">
      {title}
    </div>}
    <div>
      {children}
    </div>
  </div>
}
