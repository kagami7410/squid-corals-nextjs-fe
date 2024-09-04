'use client'
import LandingPage from './components/LandingPage/LandingPage'
import { useEffect, useState } from 'react';

export default function Home() {
  const [addToCartClicked, setAddToCartClicked] = useState(false)


  useEffect(() => {
    const basketItemCount = localStorage.getItem('basketItemCount');
    if(basketItemCount === "undefined"){
      localStorage.setItem('basketItemCount', 0);
    }
  }, []);




  return (
    
    <main>
    <LandingPage />
    </main>

  )
}
