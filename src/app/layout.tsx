import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Shreya Maurya",
    default: "Shreya Maurya"
  },
  description: "Check out my portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        
        <main className="mx-auto max-w-3xl px-3 py-10 ">
        {children}
        </main>
        </body>
    </html>
  );
}
