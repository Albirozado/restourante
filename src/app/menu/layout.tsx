
import NavBar from '@/components/Home/NavBar'
import type { Metadata } from 'next'
import dynamic from "next/dynamic"
const NavLink = dynamic(() => import('../../components/menu/NavLink'), { ssr: false })
export const metadata: Metadata = {
  title: 'RESTAURANTE MENU',
  description: 'O MELHOR RESTAURANTE DE MAPUT',
}
export default function MenuLayout({
  children,
}: {
  children: React.ReactNode
}) {






  return (
    <html lang="pt-br">
      <body >    
          <header>
            <NavBar/>
            <NavLink/>
          </header>
        <main> {children}</main>
      </body>
    </html>
  )
}

 /* 


*/

