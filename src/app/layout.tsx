import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clonet Dashboard",
  description: "A modern dashboard application",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/ghost-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/ibrand.otf?v=1" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{
          __html: `
            // Enhanced font loading with cache busting
            (function() {
              // Force font reload
              var fontUrl = '/fonts/ibrand.otf?v=' + Date.now();
              var font = new FontFace('ibrand', 'url(' + fontUrl + ')');
              
              font.load().then(function(loadedFont) {
                document.fonts.add(loadedFont);
                console.log('✅ ibrand font loaded successfully');
                
                // Force re-render of clonet logo
                var logoElements = document.querySelectorAll('.clonet-logo, [data-font="ibrand"]');
                logoElements.forEach(function(el) {
                  el.style.fontFamily = 'ibrand';
                  el.style.fontFamily = 'ibrand !important';
                });
              }).catch(function(error) {
                console.log('❌ ibrand font failed to load:', error);
              });
              
              // Also check if font is available
              document.fonts.ready.then(function() {
                if (document.fonts.check('1em ibrand')) {
                  console.log('✅ ibrand font is available');
                } else {
                  console.log('❌ ibrand font not available');
                }
              });
            })();
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
