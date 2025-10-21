import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { getNonce } from "@/lib/nonce";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MUI X Charts CSP Nonce Demo",
  description:
    "Demonstrating CSP nonce support for MUI X Charts export functionality",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nonce = await getNonce();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true, nonce }}>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
