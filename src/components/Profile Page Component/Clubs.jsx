import React from 'react'
import synergy from './images/Rectangle31.png'
import aatman from './images/Rectangle32.png'
import anirveda from './images/Rectangle33.png'
export const Clubs = () => {
  return (
    <div className="bg-gray-200 rounded-3xl mx-4 my-4">
      <h2 className="mx-8 font-bold py-2 px-0">Clubs</h2>
      <div className="flex flex-wrap justify-center flex-col md:flex-row md:justify-center">
        <div className="mb-4">
          <img src={synergy} className="mx-8 w-60 h-auto rounded-xl" alt="" />
        </div>
        <div className="mb-4">
          <img src={aatman} className="mx-8 w-60 h-auto rounded-xl" alt="" />
        </div>
        <div className="mb-4">
          <img src={anirveda} className="mx-8 w-60 h-auto rounded-xl" alt="" />
        </div>
        <div className="mb-4">
          <img src={aatman} className="mx-8 w-60 h-auto rounded-xl" alt="" />
        </div>
      </div>
    </div>
  )
}
