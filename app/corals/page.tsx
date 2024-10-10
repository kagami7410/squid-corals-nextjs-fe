'use client';
import React from 'react'
import Link from 'next/link'

import GoldToarchImage from '/public/landingPageAssets/torch1-no-bg.png'
import ClovePolypImage from '/public/landingPageAssets/clove-polyp.png'
import SPS1 from '/public/landingPageAssets/sps1.png'

import Image from 'next/image'

const Page = () => {


  return (
    <div>
      <div className='flex flex-col px-2 items-center '>
        <div className='mt-4 sm:mt-8'>
          <h1 className=' text-center text-3xl'>SELECT CORALS TYPE</h1>
        </div>

        <div className='flex flex-col items-center justify-center mt-4 sm:flex-row  sm:px-16 sm:mt-8'>

          <div className='flex border flex-col items-center justify-center w-3/4 mt-8 card sm:mx-8'>
            <Link href={'corals/SPS'} className='flex  low-opacity-border rounded-md w-3/4 justify-center m-4'>
              <Image className='coralsImage' src={SPS1} alt="Example" />
            </Link>
            <Link href={'corals/SPS'} className="btn  bg-stone-800 opacity-90 btn-lg  border">SPS Corals</Link>
          </div>

          <div className='flex border flex-col items-center justify-center w-3/4 mt-8 card sm:mx-8'>
            <Link href={'corals/LPS'} className='flex  low-opacity-border rounded-md w-3/4 justify-center m-4'>
              <Image className='coralsImage' src={GoldToarchImage} alt="Example" />
            </Link>
            <Link href='corals/LPS' className="btn  bg-stone-800 opacity-90 btn-lg  border">LPS Corals</Link>
          </div>

          <div className='flex border flex-col items-center justify-center w-3/4 mt-8 card sm:mx-8'>
            <Link href={'corals/SOFT'} className='flex  low-opacity-border rounded-md w-3/4 justify-center m-4'>
              <Image className='coralsImage' src={ClovePolypImage} alt="Example" />
            </Link>
            <Link href='corals/SOFT' className="btn bg-stone-800  bg-stone-800 opacity-90 btn-lg  border">Soft Corals</Link>
          </div>
        </div>

        <div className='flex  flex-col items-center justify-center w-3/4 mt-16 '>
        <Link href='/corals/allCorals' className="btn  bg-stone-800 opacity-90 btn-lg   border-amber-400">View All</Link>
        </div>



      </div>

    </div>
    
  )
}

export default Page
