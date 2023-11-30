import {React,useState} from 'react'
import { logo,menuIcon,menuClose } from '../assets'

const Navbar = () => {
    const [toggle,setToggle] = useState(false);

  return (
    <>
    <div className='xs:pt-3 xs:p-1 p-6 flex flex-row justify-between'>
      <img src={logo} alt='logo'/>

      <ul className='sm:flex hidden flex-row cursor-pointer'>
        <li className='mr-3 hover:text-soft-red'>Home</li>
        <li className='mr-3 hover:text-soft-red'>New</li>
        <li className='mr-3 hover:text-soft-red'>Popular</li>
        <li className='mr-3 hover:text-soft-red'>Trending</li>
        <li className='hover:text-soft-red'>Categories</li>
      </ul>

      <div className='sm:hidden flex items-center justify-center'>
      <img src={toggle?menuClose:menuIcon} alt="menu-btn" onClick={()=> setToggle((prev)=> !prev)} className='cursor-pointer'/>
      </div>
    </div>
     {/* Sidebar for mobile view */}
     {toggle && (
        <div className='fixed top-0 right-0 h-full w-[300px] bg-off-white z-50'>
          <div className='p-6'>
          <div className='flex justify-end'>
          <img
              src={menuClose}
              alt='menu-btn'
              onClick={() => setToggle((prev)=>(!prev))}
              className='cursor-pointer'
            />
          </div>
            <ul className='mt-6'>
              <li className='mb-6 hover:text-soft-red'>Home</li>
              <li className='mb-6 hover:text-soft-red'>New</li>
              <li className='mb-6 hover:text-soft-red'>Popular</li>
              <li className='mb-6 hover:text-soft-red'>Trending</li>
              <li className='hover:text-soft-red'>Categories</li>
            </ul>
          </div>
        </div>
      )}

    </>  
  )
}

export default Navbar
