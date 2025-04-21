import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import FashionBackground from './components/FashionBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Outfit Accessory Recommender',
  description: 'Get personalized accessory recommendations for your outfit using AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-500`}>
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0 bg-[radial-gradient(#ff3b3b_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <FashionBackground />
        <main className="container relative z-10 mx-auto px-4 py-8">
          {children}
        </main>
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#1a1a1a',
              color: '#fff',
              border: '1px solid #333',
            },
            success: {
              iconTheme: {
                primary: '#ff3b3b',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ff3b3b',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  )
} 