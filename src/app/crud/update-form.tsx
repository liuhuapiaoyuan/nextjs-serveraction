import { SubmitButton } from "@/components/ui/SubmitButton";
import { Goods } from "@/service/goods.service";

export function UpdateForm(props: {
  item?: Goods;
  update: (data: FormData) => Promise<void>;
}) {
  const item = props.item;
  if (!item) {
    return null;
  }
  return (
    <form className="grid gap-5" action={props.update}>
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
  );
}
