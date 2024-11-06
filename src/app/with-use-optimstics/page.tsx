import { PageContainer } from "@/components/ui/PageContainer";
import { get } from "./action";
import Code from "./code.mdx";
import { Thread } from "./Thread";

export default async function Page() {
  const messages = await get();
  return (
    <PageContainer title="配合useOptimistic，实现更好的用户体验">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <Code />
        </div>
        <div>
          <div> 预览:</div>
          <Thread messages={messages} />
        </div>
      </div>
    </PageContainer>
  );
}
