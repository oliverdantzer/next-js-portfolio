import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oliver Dantzer Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${inter.className} overflow-hidden`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
