import './globals.css'
import { Cairo } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { light } from '@clerk/themes'
import Header from './components/Header'

const cairo = Cairo({ subsets: ['latin'] })

export const metadata = {
  title: 'Nextjs Clerk App',
  description: 'nextjs clerk app',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: light,
        elements: {
          footer: 'hidden',
        },
      }}
    >
      <html lang='en'>
        <body className={cairo.className}>
          <Header />
          <main className='container mx-auto'>
            <div className='flex items-start justify-center min-h-screen'>
              <div className='mt-20'>{children}</div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
