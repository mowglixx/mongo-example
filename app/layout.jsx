import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
  charSet: "utf-8"
}

export const viewport = {
  viewport: "width=device-width, initial-scale=1"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className='brand'><h1>Brand</h1></div>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/login">Login</Link></li>
              <li><Link href="/register">Register</Link></li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
