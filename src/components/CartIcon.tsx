"use client"

import React, { useEffect } from 'react'
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from '../utils/store';

const CartIcon = () => {

  const { totalItems } = useCartStore()

  useEffect(()=>{
    useCartStore.persist.rehydrate()
  }, [])

  return (
    <Link href="/cart" className='flex item-center gap-4'>
        <div className='relative w-8 h-8 md:w-5 md:h-5'>
            <Image src="/temporary/cart.png" alt="" fill/>
        </div>
        <span>Cart ({ totalItems })</span>
    </Link>
  )
}

export default CartIcon