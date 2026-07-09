import './globals.css';

export const metadata = {
  title: 'NetAITools | Find the Best AI Tools',
  description: 'Compare AI tools, read reviews, and discover the best AI software for writing, coding, design, marketing, productivity, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
