import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Exam Portal',
  description: 'Central hub for 11+, GCSE and A Level exam resources with study planner',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}