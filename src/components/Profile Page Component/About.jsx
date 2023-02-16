import React, { useState } from 'react';

export const About = () => {

  const [editMode, setEditMode] = useState(false);
  const [about, setAbout] = useState({
    about1 : "As a seasoned web developer and graphics designer, I bring a wealth of expertise and experience in front-end development and design to the table. With a strong understanding of the latest technologies and a keen eye for aesthetics, I have a proven track record of delivering innovative and visually appealing solutions to complex problems.",
    about2 : "My hands-on experience in various hackathons and real-life projects has honed my ability to create user-friendly interfaces and intuitive designs that meet the needs of both users and clients. Whether I'm working on a large-scale project or a small-scale design task, I bring my passion for design and my commitment to excellence to every project I take on. If you're looking for a web developer and graphics designer who can bring creativity and technical expertise to your team, I'd be honored to put my skills to work for you. Let's connect and explore the opportunities!",
  })

  const handleEditClick = () =>{
    setEditMode(true);
  }
  const handleEditSave = () =>{
    setEditMode(false);
  }
  const handleEditCancle = () =>{
    setEditMode(false);
  }

  const handleChange = () => {
    setAbout({
      ...About,
      [event.target.name] : event.target.value
    });
  }
  return (
    <div className="bg-gray-200 rounded-3xl mx-4 my-4 ">

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
                  Cancle
                </button>
              </div>
            </div>
            <p className="mx-8 mb-2">
             <textarea name="about1" id="about1" cols="180" rows="4" 
              value={about.about1}
              onChange={handleChange}
              placeholder= "Tell us about yourslef"    
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
              <h2 className="mx-8 font-bold py-2 px-0 inline-block">About</h2>
              <div className='my-1'>
                <button className="bg-gray-200 hover:bg-gray-400 font-bold py-2 px-4 rounded mx-4"
                  onClick={handleEditClick}
                >
                  Edit
                </button>
              </div>
            </div>
            <p className="mx-8 mb-2">
              {about.about1}
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