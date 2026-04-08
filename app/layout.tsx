import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AIRYSys Pvt Ltd | Build Intelligence",
    template: "%s | AIRYSys",
  },
  description:
    "AIRYSys is a next-generation IT solutions company specializing in AI-driven platforms, web & mobile development, machine learning, and intelligent automation.",
  keywords: [
    "AI solutions",
    "web development",
    "mobile development",
    "machine learning",
    "agentic AI",
    "IT company India",
    "software development",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AIRYSys Pvt Ltd",
    title: "AIRYSys Pvt Ltd | Build Intelligence",
    description:
      "Transforming ideas into future-ready technology with AI-driven solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
