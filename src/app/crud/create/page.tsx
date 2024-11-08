import { PageContainer } from "@/components/ui/PageContainer";
import { addGoods } from "../action";
import { CreateForm } from "../create-form";

export default function CreatePage() {
  return (
    <PageContainer title="创建商品" backRef="/crud">
      <CreateForm create={addGoods} />
    </PageContainer>
  );
}
