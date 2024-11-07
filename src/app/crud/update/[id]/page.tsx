import { PageContainer } from "@/components/ui/PageContainer";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { redirect } from "next/navigation";
import { getGoodsById, updateGoods } from "../../action";

export default async function UpdateGoodsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getGoodsById(id);
  if (!item) {
    redirect("/crud");
  }
  return (
    <PageContainer title="更新商品">
      <form className="grid gap-5" action={updateGoods}>
        <label>商品名称</label>
        <input defaultValue={item.id} type="hidden" name="id" />
        <input
          className="input"
          defaultValue={item.name}
          type="text"
          name="name"
        />
        <label>商品价格</label>
        <input
          defaultValue={item.price}
          className="input"
          type="number"
          name="price"
        />
        <SubmitButton />
      </form>
    </PageContainer>
  );
}
