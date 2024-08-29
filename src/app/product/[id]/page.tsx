import React from 'react'
import Image from 'next/image'
import Price from '@/src/components/Price'
import { ProductType } from '@/src/types/types'
import DeleteButton from '@/src/components/DeleteButton'

const getData = async (id: string) => {
    
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      cache:"no-store"
  })

  if(!res.ok){
      throw new Error("Failed!")
  }

  return res.json()
}


const SingleProductPage = async ({ params }: { params: { id: string} }) => {

  const singleProduct: ProductType = await getData(params.id)

  return (
    <div className='p-4 lg:px-20 xl:px-40 xl:py-20 h-screen flex flex-col justify-around text-red-400 md:flex-row md:gap-8 md:itens-center relative'>
      {/* IMAGE CONTAINER */}
      {singleProduct.img && 
        <div className='relative w-full h-1/2 md:h-[70%]'>
          <Image src={singleProduct.img} alt="" className='object-contain' fill/>
        </div>
      }
      {/* TEXT CONTAINER */}
      <div className='h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8'>
        <h1 className='text-3xl text-bold uppercase xl:text-5xl'>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>   
        <Price product={singleProduct}/>
      </div>
      <DeleteButton id={singleProduct.id}/>
    </div>
  )
}

export default SingleProductPage