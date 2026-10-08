import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lokesh Sannidhi",
  description:
    "Portfolio of Lokesh Sannidhi, a data analyst and aspiring data scientist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
