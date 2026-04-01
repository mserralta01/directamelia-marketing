import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Direct Amelia — AI-Powered Flight Department Management | Part 91 & Part 135",
  description: "The AI Director of Aviation that runs your entire flight department. Six specialist agents handle briefings, crew scheduling, fleet management, safety, compliance, and analytics. Built for Part 91 flight departments and Part 135 charter operators.",
  keywords: ["aviation management software", "flight department management", "AI flight operations", "Part 91 software", "Part 135 operations", "crew scheduling aviation", "flight safety management system", "aircraft maintenance tracking", "aviation compliance", "mission briefing AI"],
  openGraph: {
    title: "Direct Amelia — AI-Powered Flight Department Management",
    description: "Six AI specialists run your entire flight department — briefings, crew scheduling, fleet management, safety, compliance, and analytics.",
    url: "https://directamelia.com",
    siteName: "Direct Amelia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Direct Amelia — AI-Powered Flight Department Management",
    description: "Six AI specialists run your entire flight department — briefings, crew scheduling, fleet management, safety, compliance, and analytics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
