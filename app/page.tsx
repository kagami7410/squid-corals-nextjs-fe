'use client'
import Link from 'next/link'
import ProductCard from './components/ProductCart/ProductCard'
import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import NavBar2 from './components/NavBar2/NavBar2'

export default function Home() {




  return (
    
    <main>
    <NavBar/>
    <NavBar2/>
    <LandingPage/>
    <Link href='/users'> users </Link>
    <ProductCard/>
    </main>

  )
}
