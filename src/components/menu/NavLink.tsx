// app/NavLink.js
'use client'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'


export default function NavLink() {
    const activeSegment = useSelectedLayoutSegment()
    return (
        <div className='flex justify-center pt-20'>
            <ul className='inline-flex bg-orange-50 justify-center rounded-sm  '>
                <li>
                    <Link className='text-base inline-block font-semibold rounded-l-sm px-3' style={{
                        padding: '0.5rem',
                        backgroundColor: (activeSegment === null) ? '#ffedd5' : '',
                        
                        
                        }} 
                        href="/menu">
                        Cafe
                    </Link>
                </li>
                <li>

                <Link  className='text-base inline-block font-semibold' style={{
                    backgroundColor: (activeSegment === "entrada") ? '#ffedd5' : '',
                    padding: '0.5rem',

                    }} 
                    href="/menu/entrada">
                    Entradas
                </Link>
                </li>
                <li>

                <Link  className='text-base inline-block font-semibold' style={{
                    backgroundColor: (activeSegment === "pratoprincipal") ? '#ffedd5' : '',
                    padding: '0.5rem',

                    }} 
                    href="/menu/pratoprincipal">
                    Prato Principal
                </Link>
                </li>
                <li>

                <Link  className='text-base inline-block font-semibold' style={{
                    backgroundColor: (activeSegment === "sobremesa") ? '#ffedd5' : '',
                    padding: '0.5rem',

                    }} 
                    href="/menu/sobremesa">
                    Sobremesa
                </Link>
                </li>
                
                
            </ul>
        </div>
        
        )
}