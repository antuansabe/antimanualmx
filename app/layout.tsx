import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import { NavigationAdaptive, SwipeNavigationWrapper } from "@/shared/ui";
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
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🛡️</text></svg>',
    apple: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🛡️</text></svg>',
  },
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
        <NavigationAdaptive />
        <SwipeNavigationWrapper>
          <main className="min-h-screen">
            {children}
          </main>
        </SwipeNavigationWrapper>
      </body>
    </html>
  );
}
