import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Safety Traffic Holland B.V. — Professionele Verkeersbegeleiding",
  description:
    "Safety Traffic Holland verzorgt professionele verkeersbegeleiding voor werkzaamheden, evenementen en calamiteiten door heel Nederland. VCA-gecertificeerd.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
