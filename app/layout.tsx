import type { Metadata } from "next";
import { Poppins, Playfair_Display, Dancing_Script } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollExtras from "@/components/ScrollExtras";
import type { ReactNode } from "react";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-poppins" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-playfair" });
const script = Dancing_Script({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-dancing" });

export const metadata: Metadata = {
  title: { default: "TourAvibe | Explore • Discover • Belong", template: "%s | TourAvibe" },
  description: "Discover breathtaking destinations, unforgettable experiences and memories that last a lifetime with TourAvibe.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable} ${script.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollExtras />
      </body>
    </html>
  );
}
