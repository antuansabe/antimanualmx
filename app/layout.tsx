import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

const courierPrime = Courier_Prime({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: "--font-oficial",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antimanual MX - Resistencia Digital",
  description: "Guía de seguridad digital y activismo para defensores de derechos humanos en México",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${courierPrime.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
