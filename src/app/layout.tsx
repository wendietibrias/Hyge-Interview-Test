import type { Metadata } from "next";
import { Geist, Geist_Mono,Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
   subsets:['latin']
});

export const metadata: Metadata = {
  title: "LifetimeArt",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
