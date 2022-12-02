import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NEUFLEX</h1>
        <div>
            <button className='text-white pr-4 hover:font-bold'>Sign In</button>
            <button className='bg-red-500 px-6 py-2 rounded cursor-pointer text-white hover:bg-red-700  hover:font-bold'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar