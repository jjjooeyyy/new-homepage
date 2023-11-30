import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import News from './components/News'
import Card1 from './components/Card1'



function App() {
return (
  <div className='bg-off-white w-full min-h-[100vh] overflow-hidden'>
  <div className='p-5'>
  <Navbar />
  <div className='pt-5 flex flex-col sm:flex-row '>
  <div className='flex flex-col sm:mr-8'>
  <Hero />
  </div>
  <div className='flex mt-16 sm:mt-0'>
  <News />
  </div>
  </div>

  <div className='mt-10 lg:mt-16 flex flex-col md:flex-row justify-center items-center'>
   <Card1 />

  </div>
  </div>
  </div>
)
}

export default App
