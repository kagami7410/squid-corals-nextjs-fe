import Image from 'next/image';
import React from 'react'



const EachItem = (title, code, description, price) => {
  return (
    <div className='flex flex-col border'>
    <div>
        <h2 className='text-cyan-50'>lol</h2>
        <h1 className='text-center text-2xl sm:text-3xl'>SPS Corals</h1>
    </div>
    <div className='flex flex-wrap border justify-center my-4'>
        <div className='flex flex-col w-1/4 border m-3 p-3'>
            <h1>{title}</h1>
            <Image src={`${title}-${code}`} alt="Example" />
            <h3>{price}</h3>
        </div>
     </div>    
</div>


  )
}

export default EachItem
