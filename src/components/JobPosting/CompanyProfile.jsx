// import React, { useState } from 'react';
// import Header from '../Header/Header';
// import './profilePage.css';

// function ProfilePage() {
//   const [companyName, setCompanyName] = useState('');
//   const [companyDescription, setCompanyDescription] = useState('');
//   const [companyWebsite, setCompanyWebsite] = useState('');
//   const [companyLinkedin, setCompanyLinkedin] = useState('');
//   const [companyTwitter, setCompanyTwitter] = useState('');
//   const [skillName, setSkillName] = useState('');
//   const [skills, setSkills] = useState([]);
//   const [additionalInfo, setAdditionalInfo] = useState('');
//   const [isEditMode, setIsEditMode] = useState(false);

//   const handleCompanyNameChange = (event) => {
//     setCompanyName(event.target.value);
//   };

//   const handleCompanyDescriptionChange = (event) => {
//     setCompanyDescription(event.target.value);
//   };

//   const handleCompanyWebsiteChange = (event) => {
//     setCompanyWebsite(event.target.value);
//   };

//   const handleCompanyLinkedinChange = (event) => {
//     setCompanyLinkedin(event.target.value);
//   };

//   const handleCompanyTwitterChange = (event) => {
//     setCompanyTwitter(event.target.value);
//   };

//   const handleSkillNameChange = (event) => {
//     setSkillName(event.target.value);
//   };

//   const handleAdditionalInfoChange = (event) => {
//     setAdditionalInfo(event.target.value);
//   };

//   const handleAddSkill = () => {
//     if (skillName) {
//       setSkills([...skills, skillName]);
//       setSkillName('');
//     }
//   };

//   const handleDeleteSkill = (index) => {
//     const newSkills = [...skills];
//     newSkills.splice(index, 1);
//     setSkills(newSkills);
//   };

//   const handleCancel = () => {
//     setCompanyName('');
//     setCompanyDescription('');
//     setCompanyWebsite('');
//     setCompanyLinkedin('');
//     setCompanyTwitter('');
//     setSkillName('');
//     setSkills([]);
//     setAdditionalInfo('');
//     setIsEditMode(false);
//   };

//   const handleEdit = () => {
//     setIsEditMode(true);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
  
//     const companyData = {
//       companyName,
//       companyDescription,
//       companyWebsite,
//       companyLinkedin,
//       companyTwitter,
//       skills,
//       additionalInfo,
//     };
  
//     console.log(companyData);
  
//     setCompanyName(event.target.elements.companyName.value);
//     setCompanyDescription(event.target.elements.companyDescription.value);
//     setCompanyWebsite(event.target.elements.companyWebsite.value);
//     setCompanyLinkedin(event.target.elements.companyLinkedin.value);
//     setCompanyTwitter(event.target.elements.companyTwitter.value);
//     setAdditionalInfo(event.target.elements.additionalInfo.value);
//   };

//   return (
//     <>
//     <Header />
//     <div className="profile-page">
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="companyName">Company Name</label>
//           <input
//             type="text"
//             id="companyName"
//             value={companyName}
//             onChange={handleCompanyNameChange}
//             placeholder="Enter company name"
//             disabled={!isEditMode}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="companyDescription">Company Description</label>
//           <textarea
//             id="companyDescription"
//             value={companyDescription}
//             onChange={handleCompanyDescriptionChange}
//             placeholder="Enter company description"
//             disabled={!isEditMode}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="companyWebsite">Company Website</label>
//           <input
//             type="text"
//             id="companyWebsite"
// Complete this code 
// value={companyWebsite}
// onChange={handleCompanyWebsiteChange}
// placeholder="Enter company website"
// disabled={!isEditMode}
// />
// </div>
// <div className="form-group">
//       <label htmlFor="companyLinkedin">Company LinkedIn</label>
//       <input
//         type="text"
//         id="companyLinkedin"
//         value={companyLinkedin}
//         onChange={handleCompanyLinkedinChange}
//         placeholder="Enter company LinkedIn profile URL"
//         disabled={!isEditMode}
//       />
//     </div>

//     <div className="form-group">
//       <label htmlFor="companyTwitter">Company Twitter</label>
//       <input
//         type="text"
//         id="companyTwitter"
//         value={companyTwitter}
//         onChange={handleCompanyTwitterChange}
//         placeholder="Enter company Twitter profile URL"
//         disabled={!isEditMode}
//       />
//     </div>

//     <div className="form-group">
//       <label htmlFor="skills">Skills</label>
//       <div className="skills-input-container">
//         <input
//           type="text"
//           id="skills"
//           value={skillName}
//           onChange={handleSkillNameChange}
//           placeholder="Enter skill name"
//           disabled={!isEditMode}
//         />
//         <button type="button" onClick={handleAddSkill} disabled={!isEditMode}>
//           Add
//         </button>
//       </div>
//       <ul className="skills-list">
//         {skills.map((skill, index) => (
//           <li key={index}>
//             {skill}
//             {isEditMode && (
//               <button type="button" onClick={() => handleDeleteSkill(index)}>
//                 X
//               </button>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>

//     <div className="form-group">
//       <label htmlFor="additionalInfo">Additional Information</label>
//       <textarea
//         id="additionalInfo"
//         value={additionalInfo}
//         onChange={handleAdditionalInfoChange}
//         placeholder="Enter additional information"
//         disabled={!isEditMode}
//       />
//     </div>

//     {isEditMode ? (
//       <div className="form-buttons">
//         <button type="submit" onClick={handleSubmit}>Save</button>
//         <button type="button" onClick={handleCancel}>
//           Cancel
//         </button>
//       </div>
//     ) : (
//       <button type="button" onClick={handleEdit}>
//         Edit
//       </button>
//     )}
//   </form>
// </div>
// </>
// );
// }

// export default ProfilePage;


import React, { useState } from 'react';
import axios from 'axios';
import RecruiterHeader from '../Header/RecruiterHeader';
import './profilePage.css';

function ProfilePage() {
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [companyLinkedin, setCompanyLinkedin] = useState('');
  const [companyTwitter, setCompanyTwitter] = useState('');
  const [skillName, setSkillName] = useState('');
  const [skills, setSkills] = useState([]);
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleCompanyDescriptionChange = (event) => {
    setCompanyDescription(event.target.value);
  };

  const handleCompanyWebsiteChange = (event) => {
    setCompanyWebsite(event.target.value);
  };

  const handleCompanyLinkedinChange = (event) => {
    setCompanyLinkedin(event.target.value);
  };

  const handleCompanyTwitterChange = (event) => {
    setCompanyTwitter(event.target.value);
  };

  const handleSkillNameChange = (event) => {
    setSkillName(event.target.value);
  };

  const handleAdditionalInfoChange = (event) => {
    setAdditionalInfo(event.target.value);
  };

  const handleAddSkill = () => {
    if (skillName) {
      setSkills([...skills, skillName]);
      setSkillName('');
    }
  };

  const handleDeleteSkill = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  const handleCancel = () => {
    setCompanyName(companyName);
    setCompanyDescription(companyDescription);
    setCompanyWebsite(companyWebsite);
    setCompanyLinkedin(companyLinkedin);
    setCompanyTwitter(companyTwitter);
    setSkillName(skillName);
    setSkills(skills);
    setAdditionalInfo(additionalInfo);
    setIsEditMode(false);
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    const companyData = {
      companyName,
      companyDescription,
      companyWebsite,
      companyLinkedin,
      companyTwitter,
      // skills,
      additionalInfo,
    };

    console.log(companyData);
    const id = localStorage.getItem('id')

    const data = await axios.post("http://localhost:5000/api/v1/recruiter/addDetails",{
      companyData,
      id
    })

    console.log(data)

    setCompanyName(event.target.elements.companyName.value);
    setCompanyDescription(event.target.elements.companyDescription.value);
    setCompanyWebsite(event.target.elements.companyWebsite.value);
    setCompanyLinkedin(event.target.elements.companyLinkedin.value);
    setCompanyTwitter(event.target.elements.companyTwitter.value);
    setAdditionalInfo(event.target.elements.additionalInfo.value);
    setIsEditMode(false);
  };

  return (
    <>
      <RecruiterHeader />
      <div className="profile-page">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={handleCompanyNameChange}
              placeholder="Enter company name"
              disabled={!isEditMode}
            />
          </div>

          <div className="form-group">
            <label htmlFor="companyDescription">Company Description</label>
            <textarea
              id="companyDescription"
              value={companyDescription}
              onChange={handleCompanyDescriptionChange}
              placeholder="Enter company description"
              disabled={!isEditMode}
            />
          </div>

          <div className="form-group">
            <label htmlFor="companyWebsite">Company Website</label>
            <input
                   type="text"
                   id="companyWebsite"
                   value={companyWebsite}
                   onChange={handleCompanyWebsiteChange}
                   placeholder="Enter company website URL"
                   disabled={!isEditMode}
                 />
               </div>
             
               <div className="form-group">
                 <label htmlFor="companyLinkedin">Company LinkedIn</label>
                 <input
                   type="text"
                   id="companyLinkedin"
                   value={companyLinkedin}
                   onChange={handleCompanyLinkedinChange}
                   placeholder="Enter company LinkedIn URL"
                   disabled={!isEditMode}
                 />
               </div>
             
               <div className="form-group">
                 <label htmlFor="companyTwitter">Company Twitter</label>
                 <input
                   type="text"
                   id="companyTwitter"
                   value={companyTwitter}
                   onChange={handleCompanyTwitterChange}
                   placeholder="Enter company Twitter URL"
                   disabled={!isEditMode}
                 />
               </div>
             
               <div className="form-group">
                 <label htmlFor="skills">Skills</label>
                 <div className="skills-container">
                   {skills.map((skill, index) => (
                     <div className="skill" key={index}>
                       {skill}
                       {isEditMode && (
                         <button
                           type="button"
                           className="delete-skill"
                           onClick={() => handleDeleteSkill(index)}
                         >
                           X
                         </button>
                       )}
                     </div>
                   ))}
                 </div>
                 {isEditMode && (
                   <div className="add-skill-container">
                     <input
                       type="text"
                       id="skillName"
                       value={skillName}
                       onChange={handleSkillNameChange}
                       placeholder="Enter skill name"
                     />
                     <button type="button" onClick={handleAddSkill}>
                       Add Skill
                     </button>
                   </div>
                 )}
               </div>
             
               <div className="form-group">
                 <label htmlFor="additionalInfo">Additional Info</label>
                 <textarea
                   id="additionalInfo"
                   value={additionalInfo}
                   onChange={handleAdditionalInfoChange}
                   placeholder="Enter additional info"
                   disabled={!isEditMode}
                 />
               </div>
             
               {isEditMode ? (
                 <div className="button-container">
                   <button type="submit">Save</button>
                   <button type="button" onClick={handleCancel}>
                     Cancel
                   </button>
                 </div>
               ) : (
                 <button type="button" onClick={handleEdit}>
                   Edit
                 </button>
               )}
             </form>
             </div>
</>
);
}
export default ProfilePage;             