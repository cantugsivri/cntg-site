import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CNTG Growth Partners",
  description:
    "HORECA kanalı için bölgesel büyüme, saha operasyonu ve ticari takip çözümleri.",
  openGraph: {
    title: "CNTG Growth Partners",
    description:
      "HORECA kanalında doğru nokta, doğru teklif ve sürdürülebilir operasyon.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
