import { SubmitButton } from "@/components/ui/SubmitButton";

export function CreateForm(props: {
  create: (data: FormData) => Promise<void>;
}) {
  return (
    <form className="grid gap-5" action={props.create}>
      <label>商品名称</label>
      <input className="input" type="text" name="name" />
      <label>商品价格</label>
      <input className="input" type="number" name="price" />
      <SubmitButton />
    </form>
  );
}
