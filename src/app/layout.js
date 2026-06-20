import dns from 'node:dns';
dns.setServers(["8.8.8.8" , "8.8.4.4"])

import { Geist, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata = {
  title: "Dragon News",
  description: "Best News Portal in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className="h-full antialiased">
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}