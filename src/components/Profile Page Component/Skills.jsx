import React, { useState } from 'react'

export const Skills = () => {


  const [editMode, setEditMode] = useState(false);

  const [skills , setSkills ] = useState({
    skill1 : "React Js",
    skill2 : "JavaScript",
    skill3 : "Next Js"
  })

  const handleEditClick = () => {
    setEditMode(true);
  }
  const handleSaveClick = () =>{
    setEditMode(false);
  }
  const handleCancleClick = () => {
    setEditMode(false); 
  }
  const handleChange = () => {
    setSkills({
      ...skills,
      [event.target.name] : event.target.value
    });
  }
  const [inputFields, setInputFields] = useState([
    {
      skill : "Canva"
    }
  ])

  const addFields = () =>{
    let newField = {
        skill : ""
    }
    setInputFields([...inputFields,newField])
}
  return (
    // <div className=" bg-gray-200 rounded-3xl mx-4 my-4">
    //   <div className='flex justify-between'>
    //     <h2 className="mx-8 font-bold py-2 px-0 inline-block">Skill</h2>
    //     <div className='my-1'>
    //       <button className="bg-gray-200 hover:bg-gray-400 font-bold py-2 px-4 rounded mx-4"
    //         onClick={addFields}
    //       >
    //         +
    //       </button>
    //       <button className="bg-gray-200 hover:bg-gray-400 font-bold py-2 px-4 rounded mx-4">
    //         Edit
    //       </button>
    //     </div>
    //   </div>
    //     <div className="skills-list">
    //       <div className="mx-8">ReactJs</div>
    //       {inputFields.map((input,index) => (
    //         <>    
    //         </>
    //       ))}
    //     </div>
    // </div>
    <>
    {editMode ? (
      <>
        <div className=" bg-gray-200 rounded-3xl mx-4 my-4">
      <div className='flex justify-between'>
        <h2 className="mx-8 font-bold py-2 px-0 inline-block">Skill</h2>
        <div className='my-1'>
          {/* <button className="bg-gray-200 hover:bg-gray-400 font-bold py-2 px-4 rounded mx-4">
            +
          </button> */}
          <button className="bg-gray-200 hover:bg-gray-400 font-bold py-2 px-4 rounded mx-4"
            onClick={handleSaveClick}
          >
            save 
          </button>
          <button className="bg-gray-200 hover:bg-gray-400 font-bold py-2 px-4 rounded mx-4"
          onClick={handleCancleClick}
          >
            cancle
          </button>
        </div>
      </div>
      <div className="mx-8">

      </div>
      <div className="mx-8">
      <input type="text"
                                      id='skills'
                                       name='skills'
                                      value={skills.skill1}
                                      onChange={handleChange}
                                       placeholder = "Enter your skills here"
                                   />       
      </div>
      <div className="mx-8">
      <input type="text"
                                      id='skills'
                                       name='skills'
                                      value={skills.skill2}
                                      onChange={handleChange}
                                       placeholder = "Enter your skills here"
                                   />   
      </div>
      <div className="mx-8 mb-2">
      <input type="text"
        id='skills'
        name='skills'
        value={skills.skill3}
                                      onChange={handleChange}
                                       placeholder = "Enter your skills here"
                                   />   
      </div>
    </div>
      </>
    ) : (
      <>
           <div className=" bg-gray-200 rounded-3xl mx-4 my-4">
      <div className='flex justify-between'>
        <h2 className="mx-8 font-bold py-2 px-0 inline-block">Skill</h2>
        <div className='my-1'>
          <button className="bg-gray-200 hover:bg-gray-400 font-bold py-2 px-4 rounded mx-4"
            onClick={addFields}
          >
            +
          </button>
          <button className="bg-gray-200 hover:bg-gray-400 font-bold py-2 px-4 rounded mx-4"
            onClick={handleEditClick}
          >
            Edit
          </button>
        </div>
      </div>
      <div className="mx-8">{skills.skill1}</div>
      <div className="mx-8">{skills.skill2}</div>
      <div className="mx-8">{skills.skill3}</div> 
                                     {inputFields.map((input,index) => (
            <> 
                <input type="text"
                  id='skill'
                  name='skill'
                  value={inputFields.skill}
                  onChange={handleChange}
                  placeholder = "Enter your skills here"
                />    
            </>
          ))}      
    </div>
      </>
    )}
    </>
  )
}
