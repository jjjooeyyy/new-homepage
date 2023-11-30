import React from 'react'
import { retroGaming,keyboard,gamingConsole } from '../assets'

const Card1 = () => {
  return (
    <div className='flex flex-col sm:flex-row sm:flex-wrap sm:items-center'>
    <div className='flex flex-row mb-5'>
      <img src={retroGaming} alt='retro-game' className='w-[140px]'/>
      <div className='flex flex-col px-7'>
       <h1 className='text-grayish-blue font-bold text-4xl pb-3'>01</h1>
       <h2 className='text-very-dark-blue font-semibold text-xl pb-2 cursor-pointer hover:text-soft-red'>Reviving Retro PCs</h2>
       <p className='text-dark-grayish-blue text-[15px] lg:w-[220px]'>What happens when old PC's are given modern upgrades?</p>
      </div>
    </div>

      <div className='flex flex-row mb-5'>
      <img src={keyboard} alt='retro-game' className='w-[140px]'/>
      <div className='flex flex-col px-7'>
       <h1 className='text-grayish-blue font-bold text-4xl pb-3'>02</h1>
       <h2 className='text-very-dark-blue font-semibold text-xl pb-2 cursor-pointer hover:text-soft-red'>Top 10 Laptops of 2022</h2>
       <p className='text-dark-grayish-blue text-[15px] lg:w-[220px]'>Our best picks for various needs and bugets.</p>
      </div>
    </div>

    <div className='flex flex-row'>
      <img src={gamingConsole} alt='retro-game' className='w-[140px]'/>
      <div className='flex flex-col px-7'>
       <h1 className='text-grayish-blue font-bold text-4xl pb-3'>03</h1>
       <h2 className='text-very-dark-blue font-semibold text-xl pb-2 cursor-pointer hover:text-soft-red'>The Growth of Gaming</h2>
       <p className='text-dark-grayish-blue text-[15px] lg:w-[220px]'>How the pandemic has sparked fresh opportunities.</p>
      </div>
    </div>

    </div>

  )
}

export default Card1
