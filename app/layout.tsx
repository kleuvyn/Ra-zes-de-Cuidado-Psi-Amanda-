import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Raízes de Cuidado',
  description: 'Created with Beatryz Kleuvyn',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
