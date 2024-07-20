import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import NavBar2 from '../components/NavBar2/NavBar2'
import Image from 'next/image'

const page = () => {
    return (

        <div>
            <NavBar />
            <NavBar2 />
            <div className='flex flex-col border'>
                <div>
                    <h1 className='text-center text-2xl sm:text-3xl'>SPS Corals</h1>
                </div>
                <div className='flex flex-wrap border justify-center my-4'>
                    <div className='flex flex-col w-1/4 border m-3 p-3'>
                        <h1>Zoa</h1>
                        <Image src={''} alt="Example" />
                        <h3>$12.00</h3>
                    </div>


                    <div className='flex flex-col w-1/4 border m-3 p-3'>
                        <h1>Zoa</h1>
                        <Image src={''} alt="Example" />
                        <h3>$12.00</h3>
                    </div>


                    <div className='flex flex-col w-1/4 border m-3 p-3'>
                        <h1>Zoa</h1>
                        <Image src={''} alt="Example" />
                        <h3>$12.00</h3>
                    </div>


                    <div className='flex flex-col w-1/4 border m-3 p-3'>
                        <h1>Zoa</h1>
                        <Image src={''} alt="Example" />
                        <h3>$12.00</h3>
                    </div>


                    <div className='flex flex-col w-1/4 border m-3 p-3'>
                        <h1>Zoa</h1>
                        <Image src={''} alt="Example" />
                        <h3>$12.00</h3>
                    </div>


                    <div className='flex flex-col w-1/4 border m-3 p-3'>
                        <h1>Zoa</h1>
                        <Image src={''} alt="Example" />
                        <h3>$12.00</h3>
                    </div>


                    <div className='flex flex-col w-1/4 border m-3 p-3'>
                        <h1>Zoa</h1>
                        <Image src={''} alt="Example" />
                        <h3>$12.00</h3>
                    </div>


                    <div className='flex flex-col w-1/4 border m-3 p-3'>
                        <h1>Zoa</h1>
                        <Image src={''} alt="Example" />
                        <h3>$12.00</h3>
                    </div>


                    <div className='flex flex-col w-1/4 border m-3 p-3'>
                        <h1>Zoa</h1>
                        <Image src={''} alt="Example" />
                        <h3>$12.00</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page
