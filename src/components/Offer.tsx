import React from 'react'
import Image from "next/image";

const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url("/temporary/offerBg.png")] md:h-[70vh]'>
        {/* TEXT CONTAINER */}
        <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6'>
            <h1 className='text-white text-5xl font-bold xl:text-6xl'>Delicious Burgers & French Fries</h1>
            <p className='text-white xl:text-xl'>
              Savor the satisfaction of our Delicious Burgers & French Fries- crafted with premium 
              ingredients and bursting with irresistible flavour.
            </p>
            <button className='bg-red-400 text-white rounded py-3 px-6'>Order Now</button>
        </div>
        {/* IMAGE CONTAINER */}
        <div className='flex-1 w-full relative md:h-full'>
            <Image src="/temporary/offerProduct.png" alt="" fill className='object-contain'/>
        </div>
    </div>
  )
}

export default Offer