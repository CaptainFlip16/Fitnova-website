import type { Metadata } from "next";
import "./globals.css";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "FitNova | Premium Fitness Training",
  description: "Redefining high-performance athleticism through science-backed training and premium lifestyle integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800;900&family=Manrope:wght@400;500;600;700&family=Newsreader:ital,wght@1,400;1,500;1,600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#F5F5F5] font-body-md text-on-background selection:bg-primary-container selection:text-on-primary antialiased min-h-screen flex flex-col">
        <MobileNav />
        {children}
      </body>
    </html>
  );
}
