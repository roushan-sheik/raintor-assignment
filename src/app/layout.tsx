import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";


 
export const metadata: Metadata = {
  title: "Raintor Portfolio",
  description: "Raintor Portfolio description",
};

const SportingGrotesque= localFont({
  variable: '--sporting-grotesque',
  display: 'swap',
  src: [
    {
      path: '../../public/fonts/SportingGrotesque-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/fonts/SportingGrotesque-Regular.ttf',
      weight: '400',
      style: 'regular',
    },
  ],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={SportingGrotesque.className}
      >
        {/* <Layout> */}
        {children}
        {/* </Layout> */}
      </body>
    </html>
  );
}
