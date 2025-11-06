import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'مجموعة واتساب - انضم الآن',
  description: 'انضم لأعضاء المجموعة وشارك المحتوى',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-arabic bg-white text-gray-900">{children}</body>
    </html>
  )
}

