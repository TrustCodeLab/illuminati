import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

// Gothic/serif display font for headings
const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Monospace font for "classified file" body text
const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: " Illuminati | They Were Always Watching",
    template: "%s | Illuminat",
  },
  description:
    "A foundation devoted to sight. To memory. To those who refused to look away. Classified materials authorised access only.",
  keywords: ["illum", "the foundation", "the archive", "classified"],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${monoFont.variable}`}>
      <body className="antialiased bg-background text-foreground min-h-screen">
        <Nav />
        {/* pt-14 offsets fixed nav; pb-8 offsets fixed footer */}
        <div className="pt-14 pb-8">{children}</div>
        <WhatsAppButton />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
