import { Montserrat } from 'next/font/google';
import './globals.css';
import Star from '@/components/Star/Star';

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Explore NASA',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-192.png" />
      </head>
      <body className={montserrat.className}>
        <Star />
        {children}
      </body>
    </html>
  );
}
