import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='w-full m-auto '>
    <div className='flex items-center flex-col shadow-sm'>
    <div className="img">
     <Link to={'/'}><img className='cursor-pointer w-[100px] py-5' src="public/amozon-logo-dark.svg" alt="" /> </Link>
    </div>
    <div className='border-[1px] border-[#f2f2f2] w-[350px] h-[350px] p-5 rounded-lg mb-5'>
      <div className='pb-2'>
        <h1 className='text-[34px] font-[400]'>Sign in</h1>
      </div>
      <div className='mb-2'>
        <label className='text-[13px] font-bold' htmlFor="">Email or mobile phone number</label>
        <input className='h-[26px] text-[13px] w-full bg-[#e8f0fe] px-2 py-1 text-black rounded-[4px] border' type='text'/>
      </div>
      <div className='mb-4'>
        <button className='border rounded-lg w-full p-1 cursor-pointer bg-[#ffd814] hover:bg-[#f0cc1c] duration-150  text-[13px] font-normal'>Continue</button>
      </div>
      <div className='mb-5'>
        <p className='text-xs'>By continuing you agree to Amazon's <span className='text-[#3366CC]'>Conditions of Use</span> and <span className='text-[#3366CC]'>Privacy Notice</span></p>
      </div>
      <div className='mb-5'>
        <p className='text-[13px] cursor-pointer text-[#3366CC] '>Need help?</p>
      </div>
      <hr />
      <div className='text-[13px] mt-3'>
        <p className='font-bold mb-1'>Buying for work?</p>
        <p className='text-[#3366CC] '><Link to={'#'}>Shop on Amazon Business</Link></p>
      </div>
    </div>
    <div className='next-section w-[300px] flex items-center flex-col'>
      <div>
        <p className='underline cursor-pointer text-xs text-[#767676] mb-2'>New to Amazon?</p>
      </div>
      <div className='w-full mt-1 mb-8'>
        <button className='w-full text-[13px] p-1 border-[1px] border-[#e2e5e5] rounded-md shadow-sm'>Create your Amazon account</button>
      </div>
    </div>
    </div>
    <div className='flex justify-center'>
    <div className="footer text-[11px] flex-col gap-3 my-10">
      <ul className='flex gap-7 mb-3 text-[#3366CC] cursor-pointer'>
        <li>Conditions of Use</li>
        <li>Privacy Notice</li>
        <li>Help</li>
      </ul>
      <p className='text-[#555]'>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
    </div>
    </div>
    </div>
  )
}

export default Login