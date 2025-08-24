// D:\fritado\tapglobal360(next)\app\layout.js
import { Inter } from 'next/font/google';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TAP Global 360',
  description: 'Business consulting services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}