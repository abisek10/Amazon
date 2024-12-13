import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='bg-[#0f1111] text-white h-[6vh] md:h-[10vh] w-full'>
            <div className="flex h-[100%] mx-auto w-fit items-center justify-between text-sm xl:gap-7 gap-2.5 font-bold">
                <div className='cursor-pointer p-1 m-[2px] hover:border-2 hover:m-0'>
                   <Link to={'/'}><img src="public\amazon-logo.svg" alt="" className='xl:w-[100px] md:w-[80px] w-[40px]' /></Link>
                </div>
                <div className='md:block hidden'>
                <div className='flex gap-1 items-center cursor-pointer p-1 m-[2px] hover:border-2 hover:m-0'>
                    <div className='self-end'>
                    <img src="location.png" alt="" className='w-[20px] h-auto mb-1' />
                    </div>
                    <div className=''>
                        <p className='text-[12px] text-gray-400 font-medium leading-none'>Deliver to</p>
                        <p className=''>Nepal</p>
                    </div>
                </div>
                </div>
                <div className='flex items-center'>
                    <select name="types" id="" className='xl:w-[50px] hover:bg-gray-300 transition-all md:w-[40px] w-[20px] xl:text-sm text-xs text-black font-medium md:pl-1 pl-0.5 bg-gray-200 xl:h-10 md:h-7 h-5 border-none cursor-pointer rounded-l-sm'>
                        <option value="All">All</option>
                        <option value="Books">Books</option>
                        <option value="Computers">Computers</option>
                        <option value="Electronics">Electronics</option>
                    </select>
                    <input type="text" className='xl:w-[40vw] w-[20vw] xl:h-10 md:w[35vw] md:h-7 h-5 px-3  border-none' placeholder='Search Amazon' />
                    <button className='cursor-pointer bg-yellow-500 hover:bg-yellow-600 transition-all xl:h-10 md:h-7 h-5 md:px-3 px-1 bordr-none rounded-r-sm box-border'><img src="search.png" alt="" className='md:w-[20px] w-[10px]' /></button>
                </div>
                <div className='lg:block hidden'>
                <div className='flex cursor-pointer items-center px-1 m-[2px] hover:border-2 hover:m-0'>
                    <img src="language.png" className='w-[20px]' alt="" />
                    <p className='text-[14px]'>EN</p>
                </div>
                </div>
                <div className='cursor-pointer px-1 m-[2px] hover:border-2 hover:m-0'>
                    <Link to={'/login'}>
                    <p className='md:text-[12px] leading-none  text-[10px] font-medium'>Hello, sign in</p>
                    <p className='md:text-md text-xs'>Account & Lists</p>
                    </Link>
                </div>
                <div className='cursor-pointer px-1 m-[2px] hover:border-2 hover:m-0 lg:block hidden'>
                    <p className='text-[12px] font-medium leading-none'>Returns</p>
                    <p className=''>& Orders</p>
                </div>
                <div className='cursor-pointer px-1 m-[2px] hover:border-2 hover:m-0'>
                    <p className='md:text-[14px] text-xs'>Cart</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar