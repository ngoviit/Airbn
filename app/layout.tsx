import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import ToasterProvider from './components/providers/ToasterProvider'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './components/modals/RentModal'
export const metadata = {
  title: 'Aribnb',
  description: 'Aribnb clone',
}

const font = Nunito({
  subsets: ['latin', 'vietnamese']
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider/>  
          <RegisterModal/>
          <LoginModal/>
          <RentModal/>  
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
