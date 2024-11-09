import { Modal } from "../../../modal";

import { UpdateForm } from "@/app/crud/update-form";
import Link from "next/link";
import { getGoodsById, updateGoods } from "../../../action";

export default async function UpdateGoodsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getGoodsById(id);
  if (!item) {
    return (
      <div>
        商品不存在
        <Link href="/crud">返回</Link>
      </div>
    );
  }
  return (
    <Modal title="更新商品">
      <UpdateForm update={updateGoods} item={item} />
    </Modal>
  );
}
