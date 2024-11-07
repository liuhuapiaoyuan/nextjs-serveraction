import { SubmitButton } from "@/components/ui/SubmitButton";
import { addGoods } from "../../action";
import { Modal } from "../../modal";

export default function CreatePage() {
  return (
    <Modal title="添加商品">
      <form className="grid gap-5" action={addGoods}>
        <label>商品名称</label>
        <input className="input" type="text" name="name" />
        <label>商品价格</label>
        <input className="input" type="number" name="price" />
        <SubmitButton />
      </form>
    </Modal>
  );
}
