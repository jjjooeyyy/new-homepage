import React from 'react'

const News = () => {
  return (
    <div className='bg-very-dark-blue py-5 px-3'>
      <h1 className='text-soft-orange font-semibold text-3xl'>
        New
      </h1>

      <div className='mt-6'>
      <h2 className='text-off-white font-semibold text-xl hover:text-soft-orange cursor-pointer'>
      Hydrogen VS Electric Cars
      </h2>
      <p className='text-grayish-blue mt-3'>Will hydrogen-fuled cars ever catch up to EVs?</p>
      </div>
      <hr className='mt-6 text-grayish-blue'/>

      <div className='mt-6'>
      <h2 className='text-off-white font-semibold text-xl hover:text-soft-orange cursor-pointer'>
      The Downsides of AI Artistry
      </h2>
      <p className='text-grayish-blue mt-3'>What are the possible adverse effects of on-demand AI image generation?</p>
      </div>
      <hr className='mt-6 text-grayish-blue'/>

      <div className='mt-6 mb-4'>
      <h2 className='text-off-white font-semibold text-xl hover:text-soft-orange cursor-pointer'>
      Is VC Funding Drying Up?
      </h2>
      <p className='text-grayish-blue mt-3'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
      </div>

    </div>
  )
}

export default News
