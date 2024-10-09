import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import type { Metadata } from "next";
import Providers from "@/modules/providers";
import Script from "next/script";
import { WebMetadata } from "@/common/consts";

export const metadata: Metadata = {
  title: WebMetadata(process.env.TENANT).title,
  description: WebMetadata(process.env.TENANT).description,
  icons: process.env.FILE_URL + "images/favicon.ico",
  viewport: "width=device-width, initial-scale=1.0, user-scalable=0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
      <Script src={process.env.FILE_URL + "js/bootstrap.bundle.min.js"} />
    </html>
  );
}
