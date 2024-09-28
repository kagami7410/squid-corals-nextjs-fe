'use client'
import { PageNotFoundError } from 'next/dist/shared/lib/utils';
import React from 'react'
import {notFound} from 'next/navigation'

import { useBasket } from '@/app/components/BasketContext/BasketContext';

interface BasketItem {
    id: string;
    title: string;
    price: boolean;
    code: string;
    description: string;
    quantity: number;
  }

  interface CoralItem {
    title: string;
    price: boolean;
    code: string;
    description: string;
}


const Page = async ({ params }: { params: { coralType: string } }) => {

    const { addItemToBasket } = useBasket();

    const handleAddToBasket = ( item: BasketItem) => {
        addItemToBasket(item);
      };
    

    const vaildPaths = ["allCorals", "SPS", "LPS", "SOFT"]


    async function getItems() {
        if(vaildPaths.includes(params.coralType)){
            if(params.coralType === "allCorals"){
                const res = await fetch('/api/getAllCorals');
                const data = await res.json();
                console.log(data)
                return data
    
            }
            else{
                const res = await fetch(`/api/getCoralType?coralType=${params.coralType}`);
                const data = await res.json();
                console.log(data)
                return data
            }
        }

        else{
               notFound()
        }

    }


    const returnedAllItems:BasketItem[] = await getItems()

    const jsxreturnedAllItems = returnedAllItems.map(eachItem => {
    return (
        <div className='flex flex-col w-3/4 border m-3 p-3 lg:w-1/4'>
            <h1>{eachItem.title}</h1>
            {/* <Image src={`${title}-${code}`} alt="Example" /> */}
            <h3>£{eachItem.price}</h3>
            <h4 className='border w-1/4 text-center m-1 text-stone-100 text-xs'>{eachItem.code}</h4>
            <button onClick={() =>{handleAddToBasket(eachItem)}} className='btn w-1/2'> Add To Cart</button>
        </div>
    )
})
return (
    <div >
        <h1 className='text-center text-2xl sm:text-3xl'>{params.coralType} Corals</h1>
        <div className='flex justify-center'>
            <div className='flex flex-wrap border justify-center my-4 '>

                {jsxreturnedAllItems}

            </div>

        </div>

    </div>
)
}

export default Page
