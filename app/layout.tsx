import './style/globals.css'
import { NavBar } from './_component/Navbar'

export const metadata = {
  title: 'CalorieTracker.co',
  description: 'WebApp to calculate calories in your meal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-green-50 min-h-screen'>
        <NavBar/>
        {children}
        
        </body>
    </html>
  )
}
