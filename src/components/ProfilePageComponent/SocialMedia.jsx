import React, { useState } from 'react'
import imagelinkedin from './images/Vector.png'
import imagetwitter from './images/brandico_twitter-bird.png'
import imageinsta from './images/akar-icons_instagram-fill.png'
import './Css/SocialMedia.css';
import { Link } from 'react-router-dom';

export const SocialMedia = () => {

  const [editMode, setEditMode] = useState(false);
  const [socials, setSocails] = useState({
    Linkedin : "www.linkedin.com/in/aniket-patel-developer",
    Twitter : "aniketp1486",
    instagram : "aniketpatel0412"
  })
    const handleEditClick = () =>{
      setEditMode(true);
    }
    const handleCancleClick = () => {
        setEditMode(false)
    }
    const handleSaveClick = () =>{
        setEditMode(false)
    }
    const handleChange = event => {
      console.log(event.target.value)
      setSocails({
        ...socials,
      [event.target.name] : event.target.value
      });
    };
  return (
    <>
      <div className="bg-gray-200 rounded-3xl mx-4 my-4" style={{margin : '3em', padding : '1.2em'}}>
        {editMode ? (
          <>
                <div className="social-media-header">
                <div className="heading">
                  <h2 className="mx-8 font-bold py-2 px-0">Social Media</h2>
                </div>
                <div className="social-media-button">
                <button onClick={handleSaveClick}>
                  Save
                </button>
                <button onClick={handleCancleClick}>
                  Cancel
                </button>
              </div>
              </div>
                <div className="flex flex-col">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="overflow-x-auto">
                        <table className="min-w-full">
                          <tbody>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><img src={imageinsta} className="w-8 h-8 rounded-xl display: inline-block" alt="" /> 
                              <input type="text"
                              name='instagram'
                              id='instagram'
                              value={socials.instagram}
                              onChange={handleChange}
                              placeholder = "Enter your instagram here"
                              />
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><img src={imagelinkedin} className="w-8 h-8 rounded-xl display: inline-block" alt="" /> 
                               
                              <input type="text"
                                name='linkedin'
                                id='linkedin'
                                value={socials.Linkedin}
                                onChange={handleChange}
                                placeholder = "Enter your Linkedin here"
                              />
                              
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><img src={imagetwitter} className="w-8 h-8 rounded-xl display: inline-block" alt="" /> 
                            <input type="text"
                                name='Twitter'
                                id='Twitter'
                                value={socials.Twitter}
                                onChange={handleChange}
                                placeholder = "Enter your Twitter here"
                              />
                            </td>

                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
          </>
        ) : (
          <>  
              <div className="social-media-header">
                <div className="heading">
                  <h2 className="mx-8 font-bold py-2 px-0">Social Media</h2>
                </div>
                <div className="social-media-button">
                <button onClick={handleEditClick}>
                  Edit
                </button>
              </div>
              </div>
                <div className="flex flex-col">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="overflow-x-auto">
                        <table className="min-w-full">
                          <tbody>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><img src={imageinsta} className="w-8 h-8 rounded-xl display: inline-block" alt="" /> aniketpatel0412</td>

                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><img src={imagelinkedin} className="w-8 h-8 rounded-xl display: inline-block" alt="" /> 
                              <p> Aniket Patel</p>
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><img src={imagetwitter} className="w-8 h-8 rounded-xl display: inline-block" alt="" /> aniketp1486</td>

                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
          </>
        )}
      </div>
    </>
  )
}