import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Queue Calculator - Calculate your queue time',
  description:
    'A simple and efficient calculator to help you estimate queue processing times and manage your queues better',
  keywords: [
    'queue calculator',
    'queue time',
    'queue management',
    'processing time',
    'queue estimation',
  ],
  authors: [{ name: 'pedr.augustobarbosa.aparecido@gmail.com' }],
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950">{children}</body>
    </html>
  )
}
