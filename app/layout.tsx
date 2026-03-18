import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Netflix Clone",
  description: "Netflix UI Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="light" lang="en">
      <body  className={`${inter.className} antialiased`}>
        <ThemeProvider>  
          <Navbar />
                {children}
          </ThemeProvider>

      </body>
    </html>
  );
}