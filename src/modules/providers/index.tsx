"use client";
import { AppContextProvider } from "@/lib/context/app-context";
import { ModalContextProvider } from "@/lib/context/modal-context";
import { ToastContextProvider } from "@/lib/context/toast-context";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <AppContextProvider>
        <ToastContextProvider>
          <ModalContextProvider>{children}</ModalContextProvider>
        </ToastContextProvider>
      </AppContextProvider>
    </AppRouterCacheProvider>
  );
}
