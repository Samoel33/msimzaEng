import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mshimza Engineering",
  description: "Mshimza Egnineering Services at level best",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`inter.className flex flex-col min-h-screen`}>
        <Navigation/>
       <main className="overflow-x-hidden">
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}