import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
 
});

export const metadata: Metadata = {
  title: "Ivantage Banking",
  description: "Banking Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable}  antialiased`}>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}