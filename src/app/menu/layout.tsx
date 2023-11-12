
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
  {id: 1, label: '🏡 Home', path: '/menu', targetSegment: null}, 
  {id: 2, label: '📦 lanches', path: '/menu/lanches', targetSegment: 'lanches'},
  {id: 3, label: '📘 About', path: '/about', targetSegment: 'about'}


]





  return (
    <html lang="pt-br">
      <body>
      {links.map ( (l) => 
      
      <NavLink key={l.id}  {...l}/>
      )}

        <main> {children}</main>
      </body>
    </html>
  )
}
