"use client"

import React, {useState, useEffect} from 'react'
import { ProductType } from '../types/types'
import { useCartStore } from '../utils/store'
import { toast } from 'react-toastify'

const Price = ({ product } : { product: ProductType }) => {
    const [total, setTotal] = useState(product.price)
    const [quantity, setQuantity] = useState(1)
    const [selected, setSelected] = useState(0)

    const { addToCart } = useCartStore()

    useEffect(()=>{
        useCartStore.persist.rehydrate()
    }, [])

    useEffect(() => {

        let totalPrice = +product.price; 

        if (product.options?.length) {
            totalPrice += +product.options[selected].additionalPrice;
        }

        totalPrice *= quantity;

        setTotal(totalPrice);
    }, [quantity, selected, product])

    const handleCart = () => {
        addToCart({
            id: product.id,
            title: product.title,
            img: product.img,
            price: total,
            ...(product.options?.length && {optionTitle: product.options[selected].title}),
            quantity: quantity,
        })
        toast.success("Product added to the cart!")
    }

  return (
    <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>${total}</h2>
        {/* OPTIONS CONTAINER */}
        <div className='flex gap-4'>
            {product.options?.length && product.options?.map((option, index) =>(
                <button 
                    key={option.title} 
                    className='min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md'
                    style={{
                        background: selected === index ? "rgb(248 113 113)" : "white",
                        color: selected === index ? "white" : "rgb(248 113 113)"
                    }}
                    onClick={() => setSelected(index)}
                >
                    {option.title}
                </button>
            ))}
        </div>
        {/* QUANTITY AND ADD BUTTON CONTAINER */}
        <div className='flex justify-between items-center'>
            {/* QUANTITY */}
            <div className='flex justify-between w-full p-3 ring-1 ring-red-400'>
                <span>Quantity</span>
                <div className='flex gap-4 items-center'>
                    <button onClick={() => setQuantity((prev) => (prev > 1 ? prev-1 : 1))}>{'<'}</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity((prev) => (prev < 9 ? prev+1 : 9))}>{'>'}</button>
                </div>
            </div>
            {/* CART BUTTON*/}
            <button 
                className='uppercase w-56 text-white bg-red-400 p-3 ring-1 ring-red-400' 
                onClick={handleCart}
            >Add to Cart</button>
        </div>
    </div>
  )
}

export default Price