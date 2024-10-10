'use client'
import { PageNotFoundError } from 'next/dist/shared/lib/utils';
import React, { useEffect, useState } from 'react'
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



const Page = ({ params }: { params: { coralType: string } }) => {
    const [coralItems, setCoralItems] = useState<BasketItem[]>([]); 

    const { addItemToBasket } = useBasket();

    const handleAddToBasket = ( item: BasketItem) => {
        addItemToBasket(item);
      };
    

    const vaildPaths = ["allCorals", "SPS", "LPS", "SOFT"]

    useEffect(()=> {
        getItems()
    }, [])


     function getItems() {
        if(vaildPaths.includes(params.coralType)){
            if(params.coralType === "allCorals"){
                fetch('/api/getAllCorals')
                .then(res => res.json())
                .then(data => setCoralItems(data))
            }
            else{
                fetch(`/api/getCoralType?coralType=${params.coralType}`)
                .then(res => res.json())
                .then(data => setCoralItems(data))
            }
        }

        else{
                notFound()
        }
     }



    const jsxreturnedAllItems = coralItems.map(eachItem => {

    return (
        <div key={eachItem.id} className='flex flex-col w-3/4 border m-3 p-3 lg:w-1/4'>

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
