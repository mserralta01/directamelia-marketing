import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Direct Amelia — AI-Powered Flight Operations",
  description: "The AI Director of Aviation that runs your flight department. Multi-agent intelligence for safer, smarter aviation operations.",
  keywords: ["aviation", "flight operations", "AI", "flight planning", "Part 91", "Part 135", "safety"],
  openGraph: {
    title: "Direct Amelia — AI-Powered Flight Operations",
    description: "The AI Director of Aviation that runs your flight department.",
    url: "https://directamelia.com",
    siteName: "Direct Amelia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Direct Amelia — AI-Powered Flight Operations",
    description: "The AI Director of Aviation that runs your flight department.",
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
