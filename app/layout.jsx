import localFont from 'next/font/local';
import './globals.css';

// Components
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';

const terminus = localFont({
  src: './fonts/TerminusTTFWindows-4.49.3.ttf',
  variable: '--font-terminus',
  weight: '100 200 300 400 500 600 700 800 900',
});
const hack = localFont({
  src: './fonts/Hack-Regular.ttf',
  variable: '--font-hack',
  weight: '100 200 300 400 500 600 700 800 900',
});

export const metadata = {
  title: 'Stephen Weaver',
  description: 'Stephen Weaver Portfolio and Blog',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${hack.variable} ${terminus.variable} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition />
        {children}
      </body>
    </html>
  );
}
