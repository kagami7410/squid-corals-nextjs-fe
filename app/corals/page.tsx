import React from 'react'
import NavBar2 from '../components/NavBar2/NavBar2'
import NavBar from '../components/NavBar/NavBar'
import Link from 'next/link'

import MultiColouredHammerImage from '/public/landingPageAssets/hammer-no-bg.png'
import GoldToarchImage from '/public/landingPageAssets/torch1-no-bg.png'
import GreenToarchImage from '/public/landingPageAssets/greenToarch-no-bg.jpg'
import RedBlueScolyToarchImage from '/public/landingPageAssets/scoly-red-blue.png'
import Zoa1Image from '/public/landingPageAssets/zoa1-removebg.png'
import Zoa2Image from '/public/landingPageAssets/zoa2.png'
import Zoa3Image from '/public/landingPageAssets/zoa3.png'
import ClovePolypImage from '/public/landingPageAssets/clove-polyp.png'
import SPS1 from '/public/landingPageAssets/sps1.png'

import Image from 'next/image'

const page = () => {
  return (
    <div>
      <NavBar />
      <NavBar2 />
      <div className='flex flex-col px-2 items-center '>
        <div className='mt-4 sm:mt-8'>
          <h1 className=' text-center text-3xl'>SELECT CORALS TYPE</h1>
        </div>

        <div className='flex flex-col items-center justify-center mt-4 sm:flex-row  sm:px-16 sm:mt-8'>

          <div className='flex border flex-col items-center justify-center w-3/4 mt-8 card sm:mx-8'>
            <Link href={'/spsPage'} className='flex  low-opacity-border rounded-md w-3/4 justify-center m-4'>
              <Image className='coralsImage' src={SPS1} alt="Example" />
            </Link>
            <Link href='/corals' className="btn  bg-stone-800 opacity-90 btn-lg  border">SPS Corals</Link>
          </div>

          <div className='flex border flex-col items-center justify-center w-3/4 mt-8 card sm:mx-8'>
            <Link href={''} className='flex  low-opacity-border rounded-md w-3/4 justify-center m-4'>
              <Image className='coralsImage' src={GoldToarchImage} alt="Example" />
            </Link>
            <Link href='/corals' className="btn  bg-stone-800 opacity-90 btn-lg  border">LPS Corals</Link>
          </div>

          <div className='flex border flex-col items-center justify-center w-3/4 mt-8 card sm:mx-8'>
            <Link href={''} className='flex  low-opacity-border rounded-md w-3/4 justify-center m-4'>
              <Image className='coralsImage' src={ClovePolypImage} alt="Example" />
            </Link>
            <Link href='/corals' className="btn bg-stone-800  bg-stone-800 opacity-90 btn-lg  border">Soft Corals</Link>
          </div>
        </div>

        <div className='flex  flex-col items-center justify-center w-3/4 mt-16 '>
        <Link href='/corals' className="btn  bg-stone-800 opacity-90 btn-lg   border-amber-400">View All</Link>
        </div>



      </div>

    </div>
    
  )
}

export default page
