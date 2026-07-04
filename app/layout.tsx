import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CULT OPTIC — Cold Luxury Eyewear",
  description: "Premium eyewear and snow goggles engineered for alpine performance and outdoor culture. Sport Tech, Snow Goggles, and Lifestyle collections.",
  keywords: "eyewear, snow goggles, sport optics, premium sunglasses, MTB, surf, kite, alpine",
  openGraph: {
    title: "CULT OPTIC — Cold Luxury Eyewear",
    description: "Premium eyewear engineered for alpine performance and outdoor culture.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CULT OPTIC",
    description: "Cold Luxury Eyewear",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
