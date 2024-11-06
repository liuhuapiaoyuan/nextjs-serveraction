'use client'
import { PageContainer } from "@/components/ui/PageContainer";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../action";
import Code from './code.mdx';



export default function Page() {
  const query = useQuery({ queryKey: ['users'], queryFn: getUsers })

  return <PageContainer title="通过react-query调用Server Action" >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div> <Code /> </div>
      <div className="flex flex-col gap-2" >
        <div> 预览:</div>
        <button disabled={query.isLoading}
          className="btn"
          onClick={() => query.refetch()}>{query.isLoading ? "Loading..." : "Call Server Action"}
        </button>
        <div>datas:{query.data?.map((item, index) => <div key={index}>{item.name}</div>)}</div>
      </div>
    </div>
  </PageContainer>
}
