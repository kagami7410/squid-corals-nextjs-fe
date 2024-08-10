'use client'
import NavBar from '../components/NavBar/NavBar'
import NavBar2 from '../components/NavBar2/NavBar2'
import Image from 'next/image'
import EachItem from '../components/EachItem/EachItem'
import { useEffect, useState } from 'react';




const page = () => {
    const [allItems, setAllItems] = useState([null])

    useEffect(() =>{
        const fetchData = async () => {
            const res = await fetch('http://localhost:9080/backend/items/getAll');
            const result = await res.json();
            setAllItems(result)
            return result;
          };

          fetchData()


    }, [])

    console.log(allItems)
    

    const returnedAllItems = allItems.map(eachItem => {
        return <EachItem title={eachItem.title}
                  code={eachItem.code}
                  description={eachItem.description}
                  price={eachItem.price}
            />
    })
 

    
    return (

        <div>
            <NavBar />
            <NavBar2 />
            {returnedAllItems}

        </div>
    )
}

export default page
