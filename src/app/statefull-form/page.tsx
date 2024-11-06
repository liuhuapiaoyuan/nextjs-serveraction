'use client'

import { PageContainer } from "@/components/ui/PageContainer"
import { SubmitButton } from "@/components/ui/SubmitButton"
import { useStateForm } from "@/lib/useStateForm"
import createUser from "./action"
import Code from './code.mdx'

export default function Page() {
  const [{ error, data }, submit] = useStateForm(createUser)
  return <PageContainer
    title="在`ReactServerComponent/Form`中使用"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div>
        <Code />
      </div>
      <div >
        <div> 预览:</div>
        <form className=" flex flex-col gap-2" action={submit}>
          <label className="flex items-center" >
            <div className="px-2 w-[100px]">邮箱：</div>
            <input type="text" name="email" className="input" />
          </label>
          {
            data && <div> 提交数据:{data} </div>
          }
          {
            error && <div> 提交数据:{error.message} </div>
          }
          <SubmitButton />

        </form>
      </div>
    </div>
  </PageContainer >


}
