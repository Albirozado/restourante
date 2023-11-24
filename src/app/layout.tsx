import './globals.css'
import type { Metadata } from 'next'
import NavBar from "../components/Home/NavBar"
import Footer from "../components/Home/Footer"

export const metadata: Metadata = {
  title: 'RESTAURANTE',
  description: 'O MELHOR RESTAURANTE DE MAPUT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
       <header><NavBar sobre = "#sobre" reserva = "#reserva" especial = "#especial"/></header>
        <main style={{minHeight: "30vh"}}>{children}</main>
      </body>
    </html>
  )
}
