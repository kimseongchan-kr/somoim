import './globals.css';
import Providers from '@/app/Providers';
import Script from 'next/script';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>소모임</title>
      </head>
      <body>
        <Script
          src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=bjxx1czzob"
          strategy="beforeInteractive"
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
