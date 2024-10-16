import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import type { Metadata } from "next";
import Providers from "@/modules/providers";
import Script from "next/script";
import { WebMetadata } from "@/common/consts";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

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
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.datatables.net/2.1.8/css/dataTables.dataTables.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.datatables.net/responsive/3.0.3/css/responsive.dataTables.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.datatables.net/buttons/3.1.2/css/buttons.dataTables.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.datatables.net/fixedcolumns/5.0.3/css/fixedColumns.dataTables.min.css"
        />
        <script src="https://cdn.datatables.net/2.1.8/js/dataTables.min.js"></script>
        <script src="https://cdn.datatables.net/fixedcolumns/5.0.3/js/dataTables.fixedColumns.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
        <script src="https://cdn.jsdelivr.net/npm/react-apexcharts"></script>
      </head>
      <body>
        <Providers>
          <main className={inter.className}>{children}</main>
        </Providers>
      </body>
      <Script src={process.env.FILE_URL + "js/bootstrap.bundle.min.js"} />
    </html>
  );
}
