import React from 'react'

export const Skills = () => {
  return (
    <div className=" bg-gray-200 rounded-3xl mx-4 my-4">
      <div className='flex justify-between'>
        <h2 className="mx-8 font-bold py-2 px-0 inline-block">Skill</h2>
        <div className='my-1'>
          <button className="bg-gray-200 hover:bg-gray-400 font-bold py-2 px-4 rounded mx-4">
            +
          </button>
          <button className="bg-gray-200 hover:bg-gray-400 font-bold py-2 px-4 rounded mx-4">
            Edit
          </button>
        </div>
      </div>
      <div className="mx-8">ReactJs</div>
      <div className="mx-8">GoLang</div>
      <div className="mx-8">Kubernetes</div>
      <div className="mx-8 mb-2">Java</div>
    </div>
  )
}
