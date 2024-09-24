'use client'
import React from 'react'
import { useBasket } from '@/app/components/BasketContext/BasketContext';

const page = () => {
    const { basket } = useBasket();
    const returnBasketItems = basket.map(eachItem => {
        return <>
        <div className='flex flex-col w-5/6 border  '>
            <h1>{eachItem.title}</h1>
            {/* <Image src={`${title}-${code}`} alt="Example" /> */}
            <h3>£{eachItem.price}</h3>
            <h4 className='border w-3/4 text-center m-1 text-stone-100 text-xs'>{eachItem.code}</h4>
            <h4 className='border w-3/4 text-center m-1 text-stone-100 text-xs'> Quantity: {eachItem.quantity}</h4>
        </div>


        </>
    })

  return (
    <div className='flex flex-wrap border justify-center '>
        <div className='flex flex-col w-5/6 border items-center  '>
        <h1>Basket</h1>
        {returnBasketItems}

        </div>



      
    </div>
  )
}

export default page
