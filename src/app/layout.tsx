import type { Metadata } from "next";
import { Fraunces, Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  weight: "variable",
});
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree", weight: ["400", "500", "600"] });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://isievetech.com"),
  title: {
    default: "i‑sieve technologies — Beyond impressions",
    template: "%s — i‑sieve technologies",
  },
  description:
    "Sentiment analysis and total brand exposure tracking across text, video, audio and print. We find out what people really think about your company, your campaigns and your competitors — and deliver the data.",
  openGraph: {
    title: "i‑sieve technologies — Beyond impressions",
    description: "Sentiment analysis and total exposure tracking for brands, agencies, media and policy makers.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${figtree.variable} ${jetbrains.variable}`}>
      <body className="grain min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
