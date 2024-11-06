import { PageContainer } from "@/components/ui/PageContainer";
import { redirect } from "next/navigation";
import Code from './code.mdx';

export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string>> }) {
  const params = await searchParams;
  const username = params['username']
  return <PageContainer
    title="在`ReactServerComponent/Form`中使用"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div>
        <Code />
      </div>
      <div >
        <div> 预览:</div>
        <form className="grid   gap-2" action={async (data: FormData) => {
          'use server'
          console.log('submitting form')
          await new Promise(resolve => setTimeout(resolve, 200))
          redirect(`/server-component/form?username=${data.get('username')?.toString()}`)
        }}>
          <label className="flex items-center" >
            <div className="px-2 w-[100px]">用户名：</div>
            <input type="text" name="username" className="input" />
          </label>
          <label className="flex items-center" >
            <div className="px-2 w-[100px]">密码：</div>
            <input type="password" name="password" className="input" />
          </label>
          {username && username.length > 0 && <div>提交数据：{username}</div>}
          <button
            data-loading="false"
            className="btn" type="submit">提交</button>
        </form>
      </div>
    </div>
  </PageContainer>
}
