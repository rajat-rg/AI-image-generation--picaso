import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <nav className='flex justify-between px-6 py-4 bg-black border-b-2  border-cyan-600 text-white'>
        <Link to='/'><h3 className='text-transparent text-3xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500'>Picaso</h3></Link>
        <button className='bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-sm px-4' 
        onClick={()=>navigate('/create')}>Create</button>
    </nav>
  )
}

export default Header