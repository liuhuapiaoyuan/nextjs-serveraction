import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h4>盘点`ServerAction`的各种玩法：</h4>
      <ol>
        <li>
          <Link href='/server-component'>在`ReactServerComponent`中使用`ServerAction`</Link>
          <ul>
            <li>
              <Link href="/server-component/form">1. 在`Form`中是用</Link>
            </li>
            <li>
              <Link href="/server-component/use-in-button">2. 在 `Button`等客户端组件中使用</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href='/client--component'>在`ClientComponent`中使用`ServerAction`</Link>
        </li>
      </ol>
    </div>
  );
}
