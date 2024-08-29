"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';

const LoginPage = () => {

  const {data, status} = useSession()
  const router = useRouter()
  
  if(status === "loading"){
    return <p>Loading...</p>
  }
  if(status === "authenticated"){
    router.push("/")
  }

  return (
    <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(110vh-10rem)] flex items-center justify-center'>
      {/* BOX */}
      <div className='h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2'>
        {/* IMAGE CONTAINER */}
        <div className='relative h-1/3 w-full md:h-full md:w-1/2'>
          <Image src="/temporary/loginBg.png" alt="" fill className='object-cover'/>
        </div>
        {/* FORM CONTAINER */}
        <div className='p-10 flex flex-col gap-8 md:w-1/2'>
          <h1 className='font-bold text-xl xl:text-3xl'>Welcome</h1>
          <p>Login to your account or create a new one account using social media</p>
          <button className='flex gap-4 p-4 ring-1 ring-orange-100 rounded-md' onClick={()=>signIn("google")}>
            <Image src="/temporary/google.png" alt="" width={20} height={20} className='object-contain'/>
            <span>Sign in with Google</span>
          </button>
          <button className='flex gap-4 p-4 ring-1 ring-blue-100 rounded-md'>
            <Image src="/temporary/facebook.png" alt="" width={20} height={20} className='object-contain'/>
            <span>Sign in with Facebook</span>
          </button>
          <p className='text-sm'>
            Have a problem? <Link href="/" className='underline'>Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage