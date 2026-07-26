import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CNTG Growth Partners | Saha Satış, Otomasyon & Büyüme Danışmanlığı",
  description:
    "Saha satış ve operasyon hizmetleri, iş süreçleri otomasyonu, verimlilik analizleri ve stratejik büyüme & kurumsallığa geçiş danışmanlığı.",
  openGraph: {
    title: "CNTG Growth Partners | Saha Satış, Otomasyon & Büyüme Danışmanlığı",
    description:
      "Sahada büyüme sistemleri, dijital süreç otomasyonu ve kurumsallığa geçiş danışmanlığı ile sürdürülebilir başarı.",
    type: "website"
  }
};

import ScrollToTop from "./ScrollToTop";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
