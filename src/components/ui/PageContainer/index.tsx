import Link from "next/link";
import { PropsWithChildren, ReactNode } from "react";


export function PageContainer({ children, title }: PropsWithChildren<{
  title?: ReactNode
}>) {
  return <div className="border p-2 grid gap-2  rounded-md">
    <div className="p-2 flex items-center gap-2 border-0 border-b">
      <div className="flex-1 font-bold">{title}</div>
      <div>
        <Link href="/" className="text-blue-500 hover:text-blue-700">返回主页</Link>
      </div>
    </div>
    <div>
      {children}
    </div>
  </div>
}
