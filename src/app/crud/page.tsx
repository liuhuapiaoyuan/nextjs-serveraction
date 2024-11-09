import { PageContainer } from "@/components/ui/PageContainer";
import { SubmitButton } from "@/components/ui/SubmitButton";
import Link from "next/link";
import { deleteGoods, getGoodsList } from "./action";
export const runtime = "nodejs";

export default async function Page() {
  const goodsList = await getGoodsList();
  return (
    <PageContainer title="商品列表">
      <Link className="btn" href="/crud/create">
        创建
      </Link>
      <table>
        <thead>
          <tr>
            <th className="w-[120px]">ID</th>
            <th>Name</th>
            <th>Price</th>
            <th className="w-[300px]">操作</th>
          </tr>
        </thead>
        <tbody>
          {goodsList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td className="flex gap-2">
                <Link className="btn" href={`/crud/update/${item.id}`}>
                  编辑商品
                </Link>

                <form action={deleteGoods}>
                  <input type="hidden" name="id" value={item.id} />
                  <SubmitButton title="删除" />
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </PageContainer>
  );
}
