import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import { ExpedienteNav, Stamp } from "@/shared/ui";
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

const navItems = [
  { href: '/', label: 'INICIO' },
  { href: '/herramientas', label: 'HERRAMIENTAS', stamped: true },
  { href: '/red', label: 'RED DE APOYO' },
  { href: '/academia', label: 'ACADEMIA' },
  { href: '/contacto', label: 'CONTACTO', classified: true }
];

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
        <ExpedienteNav 
          items={navItems}
          logo={<Stamp size="sm">ANTIMANUAL</Stamp>}
        />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
