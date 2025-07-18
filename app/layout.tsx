import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";

const urbanist = Urbanist({
  subsets: ["latin"],
  
  weight: ["400", "500", "600", "700"],
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
    
      <body className={`${urbanist.className} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}