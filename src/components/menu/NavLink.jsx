// app/NavLink.js
'use client'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function NavLink() {
    const activeSegment = useSelectedLayoutSegment()
    return (
        <>
        <Link style={{
            textDecoration: (activeSegment === null) ? 'underline' : 'none',
            padding: '0.5rem'
            }} 
            href="/menu">
            Home
        </Link>
         <Link style={{
            textDecoration: (activeSegment === "lanches") ? 'underline' : 'none',
            padding: '0.5rem'
            }} 
            href="/menu/lanches">
            Lanches
        </Link>
        </>
        
        )
}