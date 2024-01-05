import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Portfolio",
   description: "Portfolio Website",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <link rel="shortcut icon" href="/static/favicon.png" />
         <body className={inter.className}>{children}</body>
      </html>
   );
}
