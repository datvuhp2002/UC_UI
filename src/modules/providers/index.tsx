"use client";
import { AppContextProvider } from "@/lib/context/app-context";
import { ModalContextProvider } from "@/lib/context/modal-context";
import { ToastContextProvider } from "@/lib/context/toast-context";
import { AntdRegistry } from "@ant-design/nextjs-registry";
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AntdRegistry>
      <AppContextProvider>
        <ToastContextProvider>
          <ModalContextProvider>{children}</ModalContextProvider>
        </ToastContextProvider>
      </AppContextProvider>
    </AntdRegistry>
  );
}
