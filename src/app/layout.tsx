import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Freedom Horizon Financial",
    template: "%s | Freedom Horizon Financial",
  },
  description:
    "Freedom Horizon Financial is a financial education and services company dedicated to erasing financial illiteracy so families can dream again and build lasting wealth.",
  keywords: [
    "financial education",
    "financial literacy",
    "financial services",
    "wealth building",
    "financial freedom",
    "Freedom Horizon Financial",
  ],
  authors: [{ name: "Freedom Horizon Financial" }],
  creator: "Freedom Horizon Financial",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Freedom Horizon Financial",
    title: "Freedom Horizon Financial",
    description:
      "Erasing financial illiteracy so families can dream again and build lasting wealth.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freedom Horizon Financial",
    description: "Erasing financial illiteracy so families can dream again.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${plusJakarta.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <style>{`.material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }`}</style>
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
