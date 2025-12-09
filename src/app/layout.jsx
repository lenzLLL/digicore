'use client';

import { usePathname } from 'next/navigation';
import { QueryProvider } from './query-provider';
import Providers from './providers';
import { CartProvider } from '../context/CartContext';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./global.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  return (
    <html lang="fr">
      <body>
        <Providers>
          <QueryProvider>
            <CartProvider>
              {!isAdmin && <Header />}
              <main>{children}</main>
              {!isAdmin && <Footer />}
            </CartProvider>
          </QueryProvider>
        </Providers>
      </body>
    </html>
  );
}
