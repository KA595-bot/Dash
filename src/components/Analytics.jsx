import React from 'react'
import laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={laptop}/>
          <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold uppercase'>data analytics dashboard</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manange Data Analytics Centrally</h1>
            <p>
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, autem. Reprehenderit, quos cumque id aliquam voluptatem ab possimus iste cupiditate? Vero totam dignissimos quibusdam numquam sapiente incidunt sit quisquam quod.
                 Inventore aliquid, reprehenderit possimus nobis laboriosam architecto odio assumenda perferendis molestias doloribus? Sunt, eligendi sit!!
            </p>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
          </div>
      </div>
    </div>
  )
}

export default Analytics
