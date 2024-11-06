'use client'
import { PageContainer } from "@/components/ui/PageContainer";
import { useState } from "react";
import { getUsers } from "./action";
import Code from './code.mdx';



export default function Page() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<{ name: string }[]>([])
  return <PageContainer title="在`use client`客户端页面中使用" >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div>
        <Code />
      </div>
      <div className="flex flex-col gap-2" >
        <div> 预览:</div>
        <button disabled={loading}
          className="btn"
          onClick={async () => {
            setLoading(true)
            try {
              setData(await getUsers())
            } finally {
              setLoading(false)
            }
          }}>{loading ? "Loading..." : "Call Server Action"}
        </button>
        <div>datas:{data.map((item, index) => <div key={index}>{item.name}</div>)}</div>
      </div>
    </div>
  </PageContainer>
}
