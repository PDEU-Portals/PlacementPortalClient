import React from 'react'
import image from './images/Rectangle19.png'
import imagereact from './images/logo192.png'
export const Profile = () => {
  return (
    <div className='mt-24'>
      <div className=" bg-gray-200  rounded-3xl mx-4 my-4 flex flex-wrap items-center justify-center">
        <div className="container  bg-white rounded shadow-lg transform duration-200 easy-in-out m-12">
          <div className="h-2/4 sm:h-64 overflow-hidden">
            <img className="w-full rounded-t"
              src={image}
              alt="Photo by aldi sigun on Unsplash" />
          </div>
          <div className="flex justify-start px-5 -mt-12 mb-5">
            <span clspanss="block relative h-32 w-32">
              <img alt="Photo by aldi sigun on Unsplash"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="mx-auto object-cover rounded-full h-32 w-32 bg-white p-1" />
            </span>
          </div>
          <div>
            <div className="px-7 mb-8 flex ">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 ">Myself Patel</h2>
                <p className="text-gray-500 mt-2 ">React Developer</p>
                <p className="mt-2 text-gray-600  mr-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Asperiores molestiae vitae odio non commodi itaque quisquam incidunt doloribus fugit nesciunt.</p>
                  <p className='mt-2 text-gray-600  mr-8'>100+ Followers</p>
              </div>
              <div>
                
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8">
                  <button
                    className="text-blue-900 hover:text-blue-700 p-1 sm:p-2 inline-flex items-center ">
                    <img className='w-12 rounded-3xl' src={imagereact} alt="" />
                      ReactJs
                  </button>
                  <button
                    className="text-blue-900 hover:text-blue-700 p-1 sm:p-2 inline-flex items-center ">
                    <img className='w-12 rounded-3xl' src={imagereact} alt="" />
                      GoLang
                  </button>
                  <div>
                  <button
                    className="text-blue-900 hover:text-blue-700 p-1 sm:p-2  inline-flex items-center ">
                      <img className='w-12 rounded-3xl' src={imagereact} alt="" />
                      Dockler
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
