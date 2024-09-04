import { PageNotFoundError } from 'next/dist/shared/lib/utils';
import React from 'react'
import {notFound} from 'next/navigation'



const page = async ({ params }: { params: { coralType: string } }) => {
    
    interface CoralItem {
        title: string;
        price: boolean;
        code: string;
        description: string;
    }

    const vaildPaths = ["allCorals", "SPS", "LPS", "SOFT"]


    async function getItems() {
        if(vaildPaths.includes(params.coralType)){
            if(params.coralType === "allCorals"){
                const res = await fetch('http://localhost:9080/backend/items/getAll');
                const data = await res.json();
                console.log(data)
                return data
    
            }
            else{
             // Replace the URL with your API endpoint
            const res = await fetch(`http://localhost:9080/backend/items/getByType?coralType=${params.coralType}`);
            const data = await res.json();
            console.log(data)
        
            // Pass the data to the page via props
            return data
    
            }
        }

        else{
               notFound()
        }

    }
    



    const returnedAllItems:CoralItem[] = await getItems()

    const jsxreturnedAllItems = returnedAllItems.map(eachItem => {
    return (
        <div className='flex flex-col w-3/4 border m-3 p-3 lg:w-1/4'>
            <h1>{eachItem.title}</h1>
            {/* <Image src={`${title}-${code}`} alt="Example" /> */}
            <h3>£{eachItem.price}</h3>
            <h4 className='border w-1/4 text-center m-1 text-stone-100 text-xs'>{eachItem.code}</h4>
            <div className='btn w-1/2'> Add To Cart</div>
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

export default page
