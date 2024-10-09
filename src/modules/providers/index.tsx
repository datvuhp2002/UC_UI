"use client"
import { AppContextProvider } from "@/lib/context/app-context";
import { ModalContextProvider } from "@/lib/context/modal-context";
import { ToastContextProvider } from "@/lib/context/toast-context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
      <AppContextProvider>
        <ToastContextProvider>
          <ModalContextProvider>
            {children}
          </ModalContextProvider>
        </ToastContextProvider>
      </AppContextProvider>
    )
  }