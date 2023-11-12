
import NavLink from "../../components/menu/NavLink"
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'RESTAURANTE MENU',
  description: 'O MELHOR RESTAURANTE DE MAPUT',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
const links = [
  {label: '🏡 Home', path: '/menu', targetSegment: null}, 
  {label: '📦 lanches', path: '/menu/lanches', targetSegment: 'lanches'},
  {label: '📘 About', path: '/about', targetSegment: 'about'}


]





  return (
    <html lang="pt-br">
      <body>
      {links.map ( (l, i) => 
      
      <NavLink key={i}  {...l}/>
      )}

        <main> {children}</main>
      </body>
    </html>
  )
}
