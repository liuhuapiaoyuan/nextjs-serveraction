import Link from "next/link";

export default function Home() {
  return (
    <div className="p-2 md:p-5">
      <h4>盘点`ServerAction`的各种玩法：</h4>
      <ol>
        <li>
          <Link href="/server-component/form">
            在`ReactServerComponent`中使用`ServerAction`
          </Link>
          <ul>
            <li>
              <Link href="/server-component/form">
                1. 在`Form`中是直接使用异步函数
              </Link>
            </li>
            <li>
              <Link href="/server-component/submit-button">
                2. 封装`SubmitButton`组件，追踪加载状态
              </Link>
            </li>
            <li>
              <Link href="/server-component/button">
                3. 在 `Button`/`自定义客户端组件`等客户端组件中使用
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/client-component">
            在`ClientComponent`中使用`ServerAction`
          </Link>
          <ul>
            <li>
              <Link href="/client-component">
                1. 在`use client`客户端页面中使用
              </Link>
            </li>
            <li>
              <Link href="/client-component/use-query">
                2. 在` @tanstack/react-query`中使用`ServerAction`
              </Link>
            </li>
            <li>
              <Link href="/client-component/use-mutation">
                3. 在` @tanstack/react-query/mutation`中使用`ServerAction`
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/statefull-form">
            使用`StateFullForm`简化{" "}
            <span className="text-red-800 font-bold">服务端数据校验</span>
          </Link>
        </li>
        <li>
          <Link href="/with-use-optimstics">
            配合`useOptimistic`实现更好的UI交互体验
          </Link>
        </li>
        <li>
          <Link href="/crud">
            <span className="px-1 mr-2  border-[3px] bg-red-500 text-white border-yellow-500">
              实战
            </span>
            抛弃`API`,实现一个完整的`CRUD`
          </Link>
        </li>
      </ol>
    </div>
  );
}
