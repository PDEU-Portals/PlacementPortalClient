import React, {useEffect, useState} from 'react'

import image from './images/Rectangle19.png'
import imagereact from './images/logo192.png'
import './Css/Profile.css';
import axios from 'axios';

export const Profile = () => {


  // const [formdata, setformdata] = useState(initialformdata);
  const [data, setData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/getinfo");
        setData(response.data);
        console.log(response.data);
        setProfile({
          name: response.data.name,
          email: response.data.email,
          Skills: response.data.skills,
          description: response.data.description
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  
  
  // const handleEditClick = () => {
  //   setEditMode(true);
  // };


  //This Use Effect is used for fetching the User Info
useEffect((req, res)=>{
  axios.get('http://localhost:5000/api/v1/getinfo')
  .then((res)=>{
    setProfile(res.data);
  })
  .catch((err)=>{
    res.send({err: err.message});
  });
}, []);


  const handleEditClick = () =>{
    console.log('edit button is clicked')
    setEditMode(true);

  }


  //This useEffect is Used for updating the User Profile

  //****************NEEDS ATTENTION*****************
  // useEffect(()=>{
  //   axios.post('http://localhost:5000/api/v1/updateProfile')
  //   .then((res)=>{
  //     event.preventDefault();
  //     handleEditClick();
  //   })
  // })
//**************************************************


  const handleSaveClick = () => {

  const handleSaveClick = async (event) => {

    event.preventDefault()

    console.log(profile)

    setEditMode(false);
  };

  // const handleCancelClick = () => {
  //   setEditMode(false);
  // };

  const handleCancelClick = () => {
    setEditMode(false);
    setProfile({
    name: data.name ? data.name : "John Doe",
    email: data.email ? data.email : "Aniket.pce21@sot.pdpu.ac.in",
    skills: "Full Stack Web Developer",
    description:
    "Hard Working, organized and skilled web developer, graphics designer and UI designer. With a nice grip over web development and giving strong attention to details. I have strong passion for coding and building innovative web solutions, and I have honed my skills through my participation in various hackathons and projects. I am eager to explore things and to create cutting-edge web solutions and making a difference in society, I am confident about my skills and experience to create impactful projects for the social good.",
    });
    };

  const handleChange = event => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className='mt-24'>
      <div className=" bg-gray-200 pb-4 pt-4 rounded-3xl mx-4 my-4 flex flex-wrap items-center justify-center">
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
            <div id='first-section' className="px-7 mb-8 flex ">
              <div>
                
                  {editMode ? (
                    <>
                    <div className="edit-mode">
                      <div className="input-fields">
                        <h2 className="text-3xl font-bold text-gray-800 ">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            // value={data.name ? (data.name) : ('John Doe') }
                            value={profile.name}
                            onChange={handleChange}
                            placeholder="Enter your name here"
                          />
                          </h2>
                          
                          <input type="text" 
                            id='email'
                            name='email'
                            value={profile.email}
                            onChange = {handleChange}
                            placeholder = "Enter Your Skills here"
                          />

                          <p className="text-gray-500 mt-2 ">
                          <input type="text" 
                            id='Skills'
                            name='Skills'
                            value={profile.Skills}
                            onChange = {handleChange}
                            placeholder = "Enter Your Skills here"
                          />
                        </p>
                          <p className="mt-2 text-gray-600  mr-8">
                            <textarea 
                            name="description" 
                            id="description" 
                            cols="190" 
                            rows="8"
                            value={profile.description}
                            onChange={handleChange}
                            placeholder = "Please provide Short Description over here "
                            />
                          </p>
                        </div>
                        <div className="editable-button">
                          <button onClick={handleSaveClick}>Save</button>
                          <button onClick={handleCancelClick}>Cancel</button>
                        </div>
                    </div>
                      </>
                  ):(
                    <>
                    <div className="read-only-info">
                    <div className="infos">
                           <h2 className="text-3xl font-bold text-gray-800 ">
                            {profile.name}
                         </h2>
                         <p className="text-gray-500 mt-2 ">
                            {profile.email}
                         </p>
                         <h2 className="text-gray-500 mt-2 ">
                            {profile.Skills}
                         </h2>
                         <p className="mt-2 text-gray-600  mr-8">
                          {profile.description}
                         </p>
                      </div>
                      <div className="edit-button">
                        <button onClick={handleEditClick} className="w-[5rem]">Edit</button>
                      </div>
                    </div>    
                    </>
                  )}
                  {/* <button onClick={handleEditClick}>
                    Edit
                  </button> */}
                  {/* <p className='mt-2 text-gray-600  mr-8'>100+ Followers</p> */}
                  
              </div>
              <div>
                
                {/* <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8">
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
                      Docker
                  </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
              }
}
