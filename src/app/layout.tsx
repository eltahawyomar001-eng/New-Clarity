import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "New Clarity | AI Strategy & Transformation Partners",
  description: "Strategic plans, technical implementation, and transformational leadership to help you simplify complexity and drive measurable ROI through AI transformation.",
  keywords: ["AI transformation", "AI consulting", "AI strategy", "digital transformation", "AI implementation"],
  authors: [{ name: "New Clarity" }],
  openGraph: {
    title: "New Clarity | AI Strategy & Transformation Partners",
    description: "Strategic plans, technical implementation, and transformational leadership.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-nc-black text-white min-h-screen">
        <LoadingScreen />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
