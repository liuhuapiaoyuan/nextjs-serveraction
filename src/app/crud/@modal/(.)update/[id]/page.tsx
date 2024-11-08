import { Modal } from "../../../modal";

import { UpdateForm } from "@/app/crud/update-form";
import { getGoodsById, updateGoods } from "../../../action";

export default async function UpdateGoodsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <Modal title="更新商品">
      <UpdateForm update={updateGoods} item={getGoodsById(id)} />
    </Modal>
  );
}
