import { addGoods } from "../../action";
import { CreateForm } from "../../create-form";
import { Modal } from "../../modal";

export default function CreatePage() {
  return (
    <Modal title="添加商品">
      <CreateForm create={addGoods} />
    </Modal>
  );
}
