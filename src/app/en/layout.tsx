import "./globals.css";
import { dir } from "i18next";
import { Inter } from "next/font/google";

const languages = ["en", "de"];

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oliver Dantzer Portfolio",
  description: "My Portfolio",
};

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng}>
      <body className={inter.className}>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
