import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "World Payment Map",
  description: "Interactive map of payment methods used around the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
