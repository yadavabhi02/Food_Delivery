import React from 'react'
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "@/src/components/CartIcon"
import Image from "next/image";
import UserLinks from './UserLinks';

const Navbar = () => {

  const user = false
  return (
    <div className="h-12 p-4 text-red-400 flex items-center justify-between border-b-2 border-b-red-400 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* LOGO */} 
      <div className="text-3xl md:font-bold flex-1 md:text-center">
        <Link href="/">Bella Bites</Link>    
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-200 px-5 rounded-md">
          <Image src="/temporary/phone.png" alt="" width={20} height={20}/>
          <span>123 456 7890</span>
        </div>
        <UserLinks/>
        <CartIcon/>
      </div>
    </div>
  )
}

export default Navbar