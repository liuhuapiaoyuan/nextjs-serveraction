import { LoadingClient } from "@/components/ui/LoadingClient";
import { PageContainer } from "@/components/ui/PageContainer";
import { redirect } from "next/navigation";
import Code from './code.mdx';

export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string>> }) {
  const params = await searchParams;
  const username = params['username']
  const onCall = async () => {
    'use server';
    console.log('submitting form');
    await new Promise(resolve => setTimeout(resolve, 200));
    redirect(`/server-component/button?username=${Math.random()}`);
  };
  return <PageContainer
    title="在`ReactServerComponent/客户端组件`中使用"
  >

    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div>
        <Code />
      </div>
      <div className="flex flex-col gap-2" >
        <div> 预览:</div>
        {username && <div className="p-2">请求数据：{username}</div>}
        <LoadingClient onCall={onCall} />
        <button className='btn' onClick={onCall} >
          直接通过button调用
        </button>
      </div>
    </div>
  </PageContainer>
}
