import React from 'react'
import Link from 'next/link'
import {MenuType} from '@/src/types/types'

const getData = async () => {
    
    const res = await fetch("http://localhost:3000/api/categories", {
        cache:"no-store"
    })

    if(!res.ok){
        throw new Error("Failed!")
    }

    return res.json()
}

const MenuPage = async () => {

    const menu:MenuType = await getData()
    return(
        <div className='p-4 lg:px-20 xl:px-40 h-[calc(120vh-6rem)] md:h-[calc(110vh-9rem)] flex flex-col md:flex-row items-center'>
            {menu.map((category) => (
                <Link 
                    href={`/menu/${category.slug}`}
                    key={category.id} 
                    className='w-full h-1/3 bg-cover p-8 md:h-1/2 relative' 
                    style={{ backgroundImage: `url(${category.img})`}}
                >
                    <div className={`text-${category.color} w-1/2`}>
                        <h1 className='uppercase font-bold text-2xl'>{category.title}</h1>
                        <p className='text-sm my-8'>{category.desc}</p>
                        <button className={`hidden 2xl:block bg-${category.color} text-${category.color === "black" ? "white" : "red-400"} py-2 px-4 rounded-md absolute bottom-2 left-1/4 mt-20 2xl:mb-5`}>Explore</button>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default MenuPage