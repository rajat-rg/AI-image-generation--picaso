import React from 'react'

const Header = () => {
  return (
    <nav className='flex justify-between px-6 py-4 bg-black border-b-2  border-cyan-600 text-white'>
        <h3 className='text-transparent text-3xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500'>Picaso</h3>
        <button className='bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-sm px-4'>Create</button>
    </nav>
  )
}

export default Header