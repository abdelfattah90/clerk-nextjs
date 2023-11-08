import { Cairo } from 'next/font/google'
// import AuthProvider from "./(components)/AuthProvider";
// import Nav from "./(components)/Nav";
import './globals.css'

const cairo = Cairo({ subsets: ['latin'] })

export const metadata = {
  title: 'Next-Authjs',
  description: 'Next.js, Auth.js Authentication',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={cairo.className}>
        {children}

        {/* <AuthProvider>
        <body className="bg-gray-100">
          <Nav />
          <div className="m-2">{children}</div>
        </body>
      </AuthProvider> */}
      </body>
    </html>
  )
}
