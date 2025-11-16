import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'My AI Girlfriend 💕',
  description: 'A special message from your loving AI girlfriend',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-['Poppins']">
        {children}
      </body>
    </html>
  )
}
