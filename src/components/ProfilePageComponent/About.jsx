import axios from 'axios';
import React, { useState } from 'react';

export const About = ({sbout}) => {

  const [editMode, setEditMode] = useState(false);
  const [about, setAbout] = useState(sbout)

  const handleEditClick = () =>{
    setEditMode(true);
  }
  const handleEditSave = async() =>{
    setEditMode(false);
    const formData = new FormData()
    formData.append("id", localStorage.getItem('studentId'))
    formData.append("about",about)
    
    const response = await axios.post(`http://localhost:5000/api/v1/updateProfile`,formData)
    // console.log(response.data);
    setAbout(response.data.about)
  }
  const handleEditCancle = () =>{
    setEditMode(false);
  }

  // const handleChange = (event) => {
  //   setAbout({
  //     ...About,
  //     [event.target.name] : event.target.value
  //   });
  // }
  return (
    <div className="bg-gray-200 rounded-3xl" style={{ margin : '3em', padding : '2em '}}>

        {editMode ? (
          <>
            <div className='flex justify-between'>
              <h2 className="mx-8 font-bold py-2 px-0 inline-block">About</h2>
              <div className='my-1'>
                <button className="bg-gray-200 hover:bg-gray-400 font-bold py-2 px-4 rounded mx-4"
                onClick={handleEditSave}
                >
                  Save
                </button>
                <button className="bg-gray-200 hover:bg-gray-400 font-bold py-2 px-4 rounded mx-4"
                  onClick={handleEditCancle}
                >
                  Cancel
                </button>
              </div>
            </div>
            <p className="mx-8 mb-2">
             <textarea name="about1" id="about1" cols="180" rows="4" 
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder= "Tell us about yourself"    
             />
            </p>
            {/* <p className="mx-8">
              <textarea name="about1" id="about1" cols="180" rows="4" 
                value={about.about2}
                onChange={handleChange}
                placeholder= "Tell us about yourslef"    
              />
            </p> */}
          </>
        ) : (
          <>
            <div className='flex justify-between'>
              <h2 className="mx-8 font-bold py-2 px-0 inline-block" style={{fontSize : "1.5em"}}>About</h2>
              <div className='my-1'>
                <button className="bg-gray-200 hover:bg-gray-400 font-bold py-2 px-4 rounded mx-4"
                  onClick={handleEditClick}
                >
                  Edit
                </button>
              </div>
            </div>
            <p className="mx-8 mb-2" style={{fontSize : "1.2rem"}}>
              {about}
            </p>
            {/* <p className="mx-8">
              {about.about2}
            </p> */}
          </>
        )}
    </div>
  )
}

export default About;