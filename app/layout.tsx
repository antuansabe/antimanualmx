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
  keywords: ["seguridad digital", "derechos humanos", "activismo digital", "privacidad", "México", "resistencia digital", "defensa digital"],
  authors: [{ name: "Antimanual MX" }],
  creator: "Antimanual MX",
  publisher: "Antimanual MX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Antimanual MX - Resistencia Digital",
    description: "Guía de seguridad digital y activismo para defensores de derechos humanos en México",
    url: "https://antimanual.mx",
    siteName: "Antimanual MX",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antimanual MX - Resistencia Digital",
    description: "Guía de seguridad digital y activismo para defensores de derechos humanos en México",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7Y6JK735QQ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7Y6JK735QQ');
            `,
          }}
        />
      </head>
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
