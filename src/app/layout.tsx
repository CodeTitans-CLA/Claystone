import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/HeaderFooter/Header';
import Footer from '@/components/HeaderFooter/Footer';
import { Poppins, Montserrat, Roboto } from "next/font/google";


// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

const headingFont = Roboto({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "800"
  
});

const subheadingFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-subheading",
  weight: "600"
});

const bodyFont = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: "400"
});

export const metadata: Metadata = {
  title: 'Claystone Agency',
  description: 'We transform architectural vision into immersive digital experiences.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`{${headingFont.variable} ${subheadingFont.variable} ${bodyFont.variable} h-full antialiased}`}>
      <Header />
      <body className="min-h-full flex flex-col">{children}</body>
      <Footer />
    </html>
  );
}
