import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HD Audio | Professional Audio Speaker Manufacturer",
  description: "HD Audio provides high-performance loudspeaker systems, subwoofers and customized audio solutions for distributors and system integrators worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}