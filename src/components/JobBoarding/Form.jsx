import React, { useState } from "react";
import StudentHeader from "../Header/StudentHeader";
import "./Form.css";
import './Form.css';
import { useLocation, useParams } from "react-router-dom";

// function Form() {
//   const [formData, setFormData] = useState({
//     headline: "",
//     preferred_Branches: "",
//     description: "",
//     jobs_or_Internships:"",
//     full_or_PartTime:"",
//     skills:"",
//     Application_Deadline:"",
//   });

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <>
//     <Header />
//     <div>

//     <div className="flex w-[80%] m-auto max-[500px]:flex-col ">
//       <h5 className="text-orange min-[400px]:p-6 p-4 w-[90%] text-5xl font-semibold ">
//         Reliance Industries.
//       </h5>

//       {/* <button
//                 className=" my-7 bg-blue justify-end hover:bg-white text-xl text-white  w-60  max-[400px]:w-48 max-[400px]:ml-4 h-14 hover:text-blue font-medium py-1 px-4 rounded-xl focus:outline-none focus:shadow-outline"
//                 type="submit"
//               >
//                 All Applications
//               </button> */}
//               </div>

//       <h5 className="text-blue p-6 w-[90%] ml-[10%] text-4xl font-semibold ">
//         Apply for internship
//       </h5>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-grey p-6 rounded-3xl w-[80%] m-auto "
//       >
//         <div className="flex  justify-center max-[1070px]:flex-col">
//           <div className=" max-[1070px]:w-full w-[45%] p-4  ">
//             <div className="flex justify-between flex-col ">
//               <div className="mb-4">
//                 <label
//                   className=" text-blue font-medium mb-2 text-xl "
//                   htmlFor="headline"
//                 >
//                   Job Title
//                 </label>
//                 <input
//                   className="bg-white w-full  appearance-none border-2 border-gray-200 rounded-lg  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange"
//                   id="headline"
//                   type="text"
//                   name="headline"
//                   value={formData.headline}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="mb-4">
//                 <label
//                   className=" text-blue font-medium mb-2 text-xl"
//                   htmlFor="preferred_Branches"
//                 >
//                   Top Skills
//                 </label>
//                 <input
//                   className="bg-white appearance-none border-2 border-gray-200 rounded-lg w-full mr-16 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange"
//                   id="preferred_Branches"
//                   type="text"
//                   name="preferred_Branches"
//                   value={formData.preferred_Branches}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="mb-4">
//               <label
//                 className=" text-blue font-medium mb-2 text-xl"
//                 htmlFor="description"
//               >
//                 Tell us about yourself
//               </label>
//               <textarea
//                 className="bg-white appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange h-32"
//                 id="description"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="w-[45%] p-4 max-[1070px]:w-full">
//             <div className="flex justify-between flex-col ">
//               <div className="mb-4">
//                 <label
//                   className=" text-blue font-medium mb-2 text-xl "
//                   htmlFor="jobs_or_Internships"
//                 >
//                   Jobs or Internships
//                 </label>
//                 <input
//                   className="bg-white w-full  appearance-none border-2 border-gray-200 rounded-lg  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange"
//                   id="jobs_or_Internships"
//                   type="text"
//                   name="jobs_or_Internships"
//                   value={formData.jobs_or_Internships}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="mb-4">
//                 <label
//                   className=" text-blue font-medium mb-2 text-xl"
//                   htmlFor=" full_or_PartTime"
//                 >
//                   Full or Part Time
//                 </label>
//                 <input
//                   className="bg-white appearance-none border-2 border-gray-200 rounded-lg w-full mr-16 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange"
//                   id="full_or_PartTime"
//                   type="text"
//                   name="full_or_PartTime"
//                   value={formData.full_or_PartTime}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="mb-4">
//               <label
//                 className=" text-blue font-medium mb-2 text-xl"
//                 htmlFor="skills"
//               >
//                 Skills
//               </label>
//               <input
//                 className="bg-white appearance-none border-2 border-gray-200 rounded-lg w-full mr-16 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange"
//                 id="skills"
//                 type="text"
//                 name="skills"
//                 value={formData.skills}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="flex w-full">
//               <div className="flex flex-col">
//                 <div>
//                   <label
//                     className=" text-blue font-medium mb-2 text-xl"
//                     htmlFor="Application_Deadline"
//                   >
//                     Application Deadline
//                   </label>
//                 </div>

//                 <div>
//                   <input
//                     className="bg-white appearance-none border-2 border-gray-200 rounded-lg w-[90%] mr-16 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange"
//                     id="Application_Deadline"
//                     type="date"
//                     name="Application_Deadline"
//                     value={formData.Application_Deadline}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               <button
//                 className=" my-7 bg-orange justify-end hover:bg-white text-xl text-white  w-[90%] hover:text-orange font-medium py-2 px-4 rounded-xl h-10 focus:outline-none focus:shadow-outline"
//                 type="submit"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//     </>
//   );
// }

// export default Form;

const Form = () => {

  const{id} = useParams()
  console.log(id)
  

  const [formDataArray, setFormDataArray] = useState([]);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [skill4, setSkill4] = useState("");
  const [skill5, setSkill5] = useState("");
  const [availability, setAvailability] = useState("");
  const [studentName, setStudentName] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [branch, setBranch] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [resume, setResume] = useState(null);
  const [role, setRole] = useState("");
  const [answer, setAnswer] = useState("");

  function openFileInNewTab(file) {
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL, "_blank");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      name,
      skills: [skill1, skill2, skill3, skill4, skill5],
      availability,
      studentName,
      linkedinLink,
      githubLink,
      branch,
      resume,
      role,
      answer,
    };
    setFormDataArray([...formDataArray, data]); // add the new data to the array
    console.log(formDataArray); // log the updated array to the console

    // Not sure but this is for resume
    const formData = new FormData();
    formData.append("resume", resume);
    console.log(formData);

    // This will send data to back end
    fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data, formData),
    })
      .then((response) => response.text())
      .then(() => {
        // Redirect to details page
        window.location.href = `/details/${data.email}`;
      });
  };

  return (
    <>
      <StudentHeader />
      <form onSubmit={handleSubmit} className="application-form">
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="skill1">Your top 5 skills :</label>
          <input
            type="text"
            id="skill1"
            value={skill1}
            onChange={(e) => setSkill1(e.target.value)}
            className="form-input"
            required
          />
          <input
            type="text"
            id="skill2"
            value={skill2}
            onChange={(e) => setSkill2(e.target.value)}
            className="form-input"
            required
          />
          <input
            type="text"
            id="skill3"
            value={skill3}
            onChange={(e) => setSkill3(e.target.value)}
            className="form-input"
            required
          />
          <input
            type="text"
            id="skill4"
            value={skill4}
            onChange={(e) => setSkill4(e.target.value)}
            className="form-input"
            required
          />
          <input
            type="text"
            id="skill5"
            value={skill5}
            onChange={(e) => setSkill5(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="availability">Availability:</label>
          <select
            id="availability"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="form-input"
            required
          >
            <option value="">Select an option</option>
            <option value="remote">Remote</option>
            <option value="in-person">In Person</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="linkedin-link">Your LinkedIn Link:</label>
          <input
            type="text"
            id="linkedin-link"
            value={linkedinLink}
            onChange={(e) => setLinkedinLink(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="github-link">Your Github Link:</label>
          <input
            type="text"
            id="github-link"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="Branch">Your Branch:</label>
          <input
            type="text"
            id="Branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="resume">Resume:</label>
          <input
            type="file"
            id="resume"
            onChange={(e) => setResume(e.target.files[0])}
            onClick={(e) => openFileInNewTab(e.target.files[0])}
            className="form-input"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="role">What Role you applying for:</label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="answer">Answer this question:</label>
          <p>What motivated you to apply for this internship ?</p>
          <code></code>
          <textarea
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="form-input"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit Application
        </button>
      </form>
    </>
  );
};

export default Form;
