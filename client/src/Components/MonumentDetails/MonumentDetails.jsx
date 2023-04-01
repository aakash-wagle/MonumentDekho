import React from 'react'
import MonumentDetailsCard from './MonumentDetailsCard'

// eslint-disable-next-line react/prop-types
const MonumentDetails = () => {
  return (
    <div className='flex'>
        <div className='w-4/5 min-h-screen max-h-screen border-r border-black'>
            <MonumentDetailsCard />
        </div>
        <div className='w-1/5 min-h-screen max-h-screen'>
          <span className='text-black'>Ye aur kuch toh</span>
        </div>
    </div>
  )
}

export default MonumentDetails