import { PageContainer } from "@/components/ui/PageContainer";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { addGoods } from "../action";

export default function CreatePage() {
  return (
    <PageContainer title="创建商品" backRef="/crud/list">
      <form className="grid gap-5" action={addGoods}>
        <label>商品名称</label>
        <input className="input" type="text" name="name" />
        <label>商品价格</label>
        <input className="input" type="number" name="price" />
        <SubmitButton />
      </form>
    </PageContainer>
  );
}
