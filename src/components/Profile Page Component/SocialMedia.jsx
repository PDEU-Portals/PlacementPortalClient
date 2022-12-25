import React from 'react'
import imagelinkedin from './images/Vector.png'
import imagetwitter from './images/brandico_twitter-bird.png'
import imageinsta from './images/akar-icons_instagram-fill.png'
export const SocialMedia = () => {
  return (
    <>
      <div className="bg-gray-200 rounded-3xl mx-4 my-4">
        <h2 className="mx-8 font-bold py-2 px-0">Social Media</h2>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <tbody>

                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><img src={imageinsta} className="w-8 h-8 rounded-xl display: inline-block" alt="" /> @Lorem</td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><img src={imagelinkedin} className="w-8 h-8 rounded-xl display: inline-block" alt="" /> @Lorem</td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><img src={imagetwitter} className="w-8 h-8 rounded-xl display: inline-block" alt="" /> @Lorem</td>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
