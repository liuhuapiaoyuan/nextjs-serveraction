import { PageContainer } from "@/components/ui/PageContainer";
import Link from "next/link";
import { getGoodsById, updateGoods } from "../../action";
import { UpdateForm } from "../../update-form";
export const runtime = "nodejs";
export default async function UpdateGoodsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getGoodsById(id);
  return (
    <PageContainer title="更新商品" backRef="/crud">
      {item ? (
        <UpdateForm update={updateGoods} item={item} />
      ) : (
        <div>
          商品不存在
          <Link href="/crud">返回</Link>
        </div>
      )}
    </PageContainer>
  );
}
