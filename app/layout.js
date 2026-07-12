import './globals.css';
import Script from 'next/script';

const GA_ID = 'G-WXPP6NFWQL';

export const metadata = {
  metadataBase: new URL('https://www.netaitools.com'),
  title: 'NetAITools | Find the Best AI Tools',
  description: 'Compare AI tools, read reviews, and discover the best AI software for writing, coding, design, marketing, productivity, and more.',
  verification: {
    google: 'yOkADuJjZCJXAl211loOqeSjK-uDvD6u5lw4wj37fG4',
    other: {
      'impact-site-verification': '27fe0c48-c3e2-4bb0-a4a5-7dd7da6dc786',
      'p:domain_verify': 'c7a932a7379212a7a156b90832277ff3',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
