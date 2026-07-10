import './globals.css';

export const metadata = {
  metadataBase: new URL('https://netaitools.com'),
  title: 'NetAITools | Find the Best AI Tools',
  description: 'Compare AI tools, read reviews, and discover the best AI software for writing, coding, design, marketing, productivity, and more.',
  verification: {
    google: 'yOkADuJjZCJXAl211loOqeSjK-uDvD6u5lw4wj37fG4',
    other: {
      'impact-site-verification': '27fe0c48-c3e2-4bb0-a4a5-7dd7da6dc786',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
