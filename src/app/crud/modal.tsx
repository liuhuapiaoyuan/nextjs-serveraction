"use client";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

export function Modal({
  children,
  title,
}: PropsWithChildren<{ title?: string }>) {
  const router = useRouter();
  function onDismiss() {
    router.back();
  }

  return (
    <div className="modal-backdrop fixed inset-0 backdrop-blur flex items-center justify-center">
      <dialog
        className=" border shadow grid p-2 rounded-md min-w-96"
        onClose={onDismiss}
      >
        <div className="flex border-b-[1px] p-2">
          <div className="flex-1">{title}</div>
          <button onClick={onDismiss} className="close-button">
            关闭
          </button>
        </div>
        {children}
      </dialog>
    </div>
  );
}
