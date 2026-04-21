import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const signifier = localFont({
  src: [
    { path: "../../fonts/Signifier/Signifier-Regular.otf", weight: "400", style: "normal" },
    { path: "../../fonts/Signifier/Signifier-RegularItalic.otf", weight: "400", style: "italic" },
    { path: "../../fonts/Signifier/Signifier-Medium.otf", weight: "500", style: "normal" },
    { path: "../../fonts/Signifier/Signifier-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "../../fonts/Signifier/Signifier-Bold.otf", weight: "700", style: "normal" },
    { path: "../../fonts/Signifier/Signifier-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "../../fonts/Signifier/Signifier-Light.otf", weight: "300", style: "normal" },
    { path: "../../fonts/Signifier/Signifier-LightItalic.otf", weight: "300", style: "italic" },
  ],
  variable: "--font-signifier",
  display: "swap",
});

const retniSans = localFont({
  src: [
    {
      path: "../../fonts/RetniSans/RetniSans[wght].ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../fonts/RetniSans/RetniSans-Italic[wght].ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-retni-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Revenue Operations Inc — Recruiting Exercise",
  description: "Design a sub-agent system that decides who reaches out and what they say.",
  icons: { icon: "/icon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${signifier.variable} ${retniSans.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
