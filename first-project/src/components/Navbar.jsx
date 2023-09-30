import React from 'react'
import {AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
    return (
        <div className='flex  justify-between items-center h-24 max-w-[1240px] mx-auto px-4' >
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <ul className='flex hidden'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>


            </ul>
            <div>
                <AiOutlineMenu size={20}/>
            </div>
            <div>
                <ul>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar