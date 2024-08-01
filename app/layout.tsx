import type { Metadata } from "next";
import { Londrina_Solid, PT_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ProviderMoralis from "@/components/ProviderMoralis";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

const londrinaSolid: NextFontWithVariable = Londrina_Solid({
  subsets: ["latin"],
  weight: ["100", "300", "400", "900"],
  display: "swap",
  variable: "--font-londrinasolid",
});

const ptSans: NextFontWithVariable = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-ptsans",
});

export const metadata: Metadata = {
  title: "Yuan DAO",
  description: "Join the best Decentralized Autonomous Organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${londrinaSolid.variable} ${ptSans.variable}`}>
        <ProviderMoralis>
          <Header />
          {children}
        </ProviderMoralis>
      </body>
    </html>
  );
}
