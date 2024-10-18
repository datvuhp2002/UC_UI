import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import Providers from "@/modules/providers";
import Script from "next/script";
import { WebMetadata } from "@/common/consts";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/modules/theme";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

// Metadata configuration
export const metadata: Metadata = {
  title: WebMetadata(process.env.TENANT).title,
  description: WebMetadata(process.env.TENANT).description,
  icons: {
    icon: process.env.FILE_URL + "images/favicon.ico",
  },
};

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
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
      </head>
      <body>
        <Providers>
          <main className={inter.className}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </main>
        </Providers>

        {/* Ensure jQuery loads first */}
        <Script
          src="https://code.jquery.com/jquery-3.7.1.min.js"
          strategy="beforeInteractive"
        />

        {/* Bootstrap Bundle */}
        <Script
          src={process.env.FILE_URL + "js/bootstrap.bundle.min.js"}
          strategy="beforeInteractive"
        />

        {/* DataTables and Plugins Scripts */}
        <Script
          src="https://cdn.datatables.net/2.1.8/js/jquery.dataTables.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.datatables.net/fixedcolumns/5.0.3/js/dataTables.fixedColumns.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.datatables.net/responsive/3.0.3/js/dataTables.responsive.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.datatables.net/buttons/3.1.2/js/dataTables.buttons.min.js"
          strategy="afterInteractive"
        />

        {/* ApexCharts Scripts */}
        <Script
          src="https://cdn.jsdelivr.net/npm/apexcharts"
          strategy="lazyOnload"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/react-apexcharts"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
