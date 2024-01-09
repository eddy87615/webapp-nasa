import { Montserrat } from 'next/font/google';
import './globals.css';
import Star from '@/components/Star/Star';

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: '',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Star />
        {children}
      </body>
    </html>
  );
}
