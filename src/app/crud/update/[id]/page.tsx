import { PageContainer } from "@/components/ui/PageContainer";
import { getGoodsById, updateGoods } from "../../action";
import { UpdateForm } from "../../update-form";

export default async function UpdateGoodsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <PageContainer title="更新商品" backRef="/crud">
      <UpdateForm update={updateGoods} item={getGoodsById(id)} />
    </PageContainer>
  );
}
