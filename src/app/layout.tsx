import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Election Process Education",
    template: "%s | Election Process Education",
  },
  description:
    "An educational resource that helps users understand the general election process, voter registration, voting, vote counting, and election terminology.",
  applicationName: "Election Process Education",
  keywords: [
    "election process",
    "voter registration",
    "voting process",
    "vote counting",
    "election terminology",
    "civic education",
    "democratic elections",
    "voting guide",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
