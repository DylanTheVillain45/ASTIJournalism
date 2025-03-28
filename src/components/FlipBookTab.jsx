import React from 'react'
import { Link } from 'react-router-dom'

const FlipBookTab = () => {
  return (
    <div className='h-32 bg-red text-white flex items-center justify-center font-serif flex-col mb-18 rounded-4xl mx-8'>
      <div className='text-2xl mb-2 '>
        SEE THE WINTER EDITION
      </div>
      <Link
        to="/flipbook"
        className="font-serif hover:text-gray-500 transition-all duration-200 capitalize underline text-5xl"
      >
        HERE
      </Link>
    </div>
  )
}

export default FlipBookTab