import './globals.css';

export const metadata = {
  metadataBase: new URL('https://netaitools.com'),
  title: 'NetAITools | Find the Best AI Tools',
  description: 'Compare AI tools, read reviews, and discover the best AI software for writing, coding, design, marketing, productivity, and more.',
  verification: {
    google: 'yOkADuJjZCJXAl211loOqeSjK-uDvD6u5lw4wj37fG4',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
