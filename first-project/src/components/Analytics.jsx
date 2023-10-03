import React from 'react'
import Laptop from '../assets/laptop.jpg'

export const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px ] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1>Manage Data Analytics Centrally</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam a doloribus vitae, facilis cupiditate pariatur soluta et saepe? Illo fugiat doloremque natus sed voluptas quia? Laudantium quibusdam sit voluptatem nostrum!</p>
        </div>

      </div>
    </div>
  )
}
