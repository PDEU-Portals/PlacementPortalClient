import axios from 'axios';
import React, { useState, useEffect } from 'react';

function FilesUpload() {
  const [cv, setCvFile] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [marksheet12File, setMarksheet12File] = useState(null);
  const [marksheet10File, setMarksheet10File] = useState(null);
  const [internshipFile, setInternshipFile] = useState(null);
  const [offerLetterFile, setOfferLetterFile] = useState(null);
  const [placementOfferFile, setPlacementOfferFile] = useState(null);
  const [marksheetFile, setMarksheetFile] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [initialCvFile, setInitialCvFile] = useState(null);
  const [initialResumeFile, setInitialResumeFile] = useState(null);
  const [initialMarksheet12File, setInitialMarksheet12File] = useState(null);
  const [initialMarksheet10File, setInitialMarksheet10File] = useState(null);
  const [initialInternshipFile, setInitialInternshipFile] = useState(null);
  const [initialOfferLetterFile, setInitialOfferLetterFile] = useState(null);
  const [initialPlacementOfferFile, setInitialPlacementOfferFile] = useState(null);
  const [initialMarksheetFile, setInitialMarksheetFile] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     // Fetch data from the backend
  //     const response = await fetch('/api/data');

  //     if (response.ok) {
  //       // Extract the data from the response
  //       const data = await response.json();

  //       // Set the file state variables with the fetched data
  //       setCvFile(data.cvFile);
  //       setResumeFile(data.resumeFile);
  //       // ... set other file state variables based on the data received
  //     } else {
  //       // Handle error response from the backend
  //       console.error('Failed to fetch data!');
  //     }
  //   } catch (error) {
  //     // Handle network error or other exceptions
  //     console.error('An error occurred while fetching data:', error);
  //   }
  // };

  const handleCvChange = (event) => {
    setCvFile(event.target.files[0]);
  };

  const handleResumeChange = (event) => {
    setResumeFile(event.target.files[0]);
  };

  const handleMarksheet12Change = (event) => {
    setMarksheet12File(event.target.files[0]);
  };

  const handleMarksheet10Change = (event) => {
    setMarksheet10File(event.target.files[0]);
  };

  const handleInternshipChange = (event) => {
    setInternshipFile(event.target.files[0]);
  };

  const handleOfferLetterChange = (event) => {
    setOfferLetterFile(event.target.files[0]);
  };

  const handlePlacementOfferChange = (event) => {
    setPlacementOfferFile(event.target.files[0]);
  };

  const handleMarksheetChange = (event) => {
    setMarksheetFile(event.target.files[0]);
  };

  function openFileInNewTab(file) {
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL, "_blank");
  }

  // const handleEdit = () => {
  //   setIsEditing(true);
  //   setInitialCvFile(cvFile);
  //   setInitialResumeFile(resumeFile);
  //   setInitialMarksheet12File(marksheet12File);
  //   setInitialMarksheet10File(marksheet10File);
  //   setInitialInternshipFile(internshipFile);
  //   setInitialOfferLetterFile(offerLetterFile);
  //   setInitialPlacementOfferFile(placementOfferFile);
  //   setInitialMarksheetFile(marksheetFile);
  // };

  // const handleCancel = () => {
  //   setIsEditing(false);
  //   setCvFile(initialCvFile);
  //   setResumeFile(initialResumeFile);
  //   setMarksheet12File(initialMarksheet12File);
  //   setMarksheet10File(initialMarksheet10File);
  //   setInternshipFile(initialInternshipFile);
  //   setOfferLetterFile(initialOfferLetterFile);
  //   setPlacementOfferFile(initialPlacementOfferFile);
  //   setMarksheetFile(initialMarksheetFile);
  // };
  
  const uploadResume = async() => {
    const formData = new FormData()
    formData.append('resume',resumeFile)
    const response = await axios.post(`${process.env.REACT_APP_URI}/upload/resume/${localStorage.getItem('stdudentId')}`,{
      formData,
      headers:{
        "Content-Type":'multipart/form-data'
      }
    })
    if(response.status == 200){
      alert("Resume added")
    }
  }
  const uploadCv = async() => {
    console.log(cv);
    const formData = new FormData()
    formData.append('cv',cv)
    console.log(formData.get('cv'));
    const response = await axios.post(`${process.env.REACT_APP_URI}/upload/cv/${localStorage.getItem('stdudentId')}`,{
      formData,
      headers:{
        "Content-Type":'multipart/form-data'
      }
    })
    if(response.status == 200){
      alert("Cv added")
    }
  }

  return (
    <form className="p-4">
    <div className="mb-4 flex gap-[3rem] items-center">
      <div>
        <label htmlFor="cv" className="block font-medium mb-1">
          CV:
        </label>
      </div>
      <input
        type="file"
        className="form-control-file"
        id="cv"
        onClick={(e) => openFileInNewTab(e.target.files[0])}
        onChange={handleCvChange}
        // disabled={!isEditing}
      />
      <button className='px-4 py-2 bg-blue-500 text-white rounded' onClick={uploadCv}>Upload</button>
    </div>
    <div className="mb-4 flex gap-[3rem] items-center">
      <div>
        <label htmlFor="resume" className="block font-medium mb-1">
          Resume:
        </label>
      </div>
      <input
        type="file"
        className="form-control-file"
        id="resume"
        onClick={(e) => openFileInNewTab(e.target.files[0])}
        onChange={handleResumeChange}
        // disabled={!isEditing}
      />
      <button className='px-4 py-2 bg-blue-500 text-white rounded' onClick={uploadResume}>Upload</button>
    </div>
    <div className="mb-4 flex gap-[3rem] items-center">
      <div>
        <label htmlFor="marksheet12" className="block font-medium mb-1">
          12th Marksheet:
        </label>
      </div>
      <input
        type="file"
        className="form-control-file"
        id="marksheet12"
        onChange={handleMarksheet12Change}
        onClick={(e) => openFileInNewTab(e.target.files[0])}
        // disabled={!isEditing}
      />
      <button className='px-4 py-2 bg-blue-500 text-white rounded'>Upload</button>
    </div>
    <div className="mb-4 flex gap-[3rem] items-center">
      <div>
        <label htmlFor="marksheet10" className="block font-medium mb-1">
          10th Marksheet:
        </label>
      </div>
      <input
        type="file"
        className="form-control-file"
        id="marksheet10"
        onChange={handleMarksheet10Change}
        onClick={(e) => openFileInNewTab(e.target.files[0])}
        // disabled={!isEditing}
      />
      <button className='px-4 py-2 bg-blue-500 text-white rounded'>Upload</button>
    </div>
    <div className="mb-4 flex gap-[3rem] items-center">
      <div>
        <label htmlFor="internship" className="block font-medium mb-1">
          Internship Completion Certificate:
        </label>
      </div>
      <input
        type="file"
        className="form-control-file"
        id="internship"
        onChange={handleInternshipChange}
        onClick={(e) => openFileInNewTab(e.target.files[0])}
        multiple
        // disabled={!isEditing}
      />
      <button className='px-4 py-2 bg-blue-500 text-white rounded'>Upload</button>
    </div>
    {/* <div className="mb-4 flex gap-[3rem] items-center">
      <div>
        <label htmlFor="offerLetter" className="block font-medium mb-1">
          Offer Letter:
        </label>
      </div>
      <input
        type="file"
        className="form-control-file"
        id="offerLetter"
        onChange={handleOfferLetterChange}
        onClick={(e) => openFileInNewTab(e.target.files[0])}
        disabled={!isEditing}
      />
      <button className='px-4 py-2 bg-blue-500 text-white rounded'>Upload</button>
    </div> */}
    <div className="mb-4 flex gap-[3rem] items-center">
      <div>
        <label htmlFor="placementOfferLetter" className="block font-medium mb-1">
          Placement Offer Letter:
        </label>
      </div>
      <input
        type="file"
        className="form-control-file"
        id="placementOfferLetter"
        onChange={handlePlacementOfferChange}
        onClick={(e) => openFileInNewTab(e.target.files[0])}
        multiple
        // disabled={!isEditing}
      />
      <button className='px-4 py-2 bg-blue-500 text-white rounded'>Upload</button>
    </div>
    <div className="mb-4 flex gap-[3rem] items-center">
      <div>
        <label htmlFor="marksheet" className="block font-medium mb-1">
          Semester Marksheets:
        </label>
      </div>
      <input
        type="file"
        className="form-control-file"
        id="marksheet"
        onChange={handleMarksheetChange}
        onClick={(e) => openFileInNewTab(e.target.files[0])}
        multiple
        // disabled={!isEditing}
      />
      <button className='px-4 py-2 bg-blue-500 text-white rounded'>Upload</button>
    </div>
    {/* ... and so on for other file upload fields */}
    {/* {isEditing ? (
      <div className="flex space-x-4">
        <button
          type="button"
          onClick={handleCancel}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Cancel
        </button>
        <button
          type="button"
          // onClick={handleSave}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Save
        </button>
      </div>
    ) : (
      <button
        type="button"
        onClick={handleEdit}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Edit
      </button>
    )} */}
  </form>  
  );
}

export default FilesUpload;




// import React, { useState } from 'react';

// function FilesUpload() {
//     const [cvFile, setCvFile] = useState(null);
//     const [resumeFile, setResumeFile] = useState(null);
//     const [marksheet12File, setMarksheet12File] = useState(null);
//     const [marksheet10File, setMarksheet10File] = useState(null);
//     const [internshipFile, setInternshipFile] = useState(null);
//     const [offerLetterFile, setOfferLetterFile] = useState(null);
//     const [placementOfferFile, setPlacementOfferFile] = useState(null);
//     const [marksheetFile, setMarksheetFile] = useState(null);
  
//     const handleCvChange = (event) => {
//       setCvFile(event.target.files[0]);
//     };
  
//     const handleResumeChange = (event) => {
//       setResumeFile(event.target.files[0]);
//     };
  
//     const handleMarksheet12Change = (event) => {
//       setMarksheet12File(event.target.files[0]);
//     };
  
//     const handleMarksheet10Change = (event) => {
//       setMarksheet10File(event.target.files[0]);
//     };
  
//     const handleInternshipChange = (event) => {
//       setInternshipFile(event.target.files[0]);
//     };
  
//     const handleOfferLetterChange = (event) => {
//       setOfferLetterFile(event.target.files[0]);
//     };
  
//     const handlePlacementOfferChange = (event) => {
//       setPlacementOfferFile(event.target.files[0]);
//     };
  
//     const handleMarksheetChange = (event) => {
//       setMarksheetFile(event.target.files[0]);
//     };
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       // TODO: Submit form data to server
//     };
//     function openFileInNewTab(file) {
//       const fileURL = URL.createObjectURL(file);
//       window.open(fileURL, "_blank");
//     }
//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="form-section">
//         <label htmlFor="cv" className="form-label">CV:</label>
//         <input
//           type="file"
//           className="form-control-file"
//           id="cv"
//           onClick={(e) => openFileInNewTab(e.target.files[0])}
//           onChange={handleCvChange}
//         />
//       </div>
//       <div className="form-section">
//         <label htmlFor="resume" className="form-label">Resume:</label>
//         <input
//           type="file"
//           className="form-control-file"
//           id="resume"
//           onChange={handleResumeChange}
//           onClick={(e) => openFileInNewTab(e.target.files[0])}
//         />
//       </div>
//       <div className="form-section">
//         <label htmlFor="marksheet12" className="form-label">12th Marksheet:</label>
//         <input
//           type="file"
//           className="form-control-file"
//           id="marksheet12"
//           onChange={handleMarksheet12Change}
//           onClick={(e) => openFileInNewTab(e.target.files[0])}
//         />
//       </div>
//       <div className="form-section">
//         <label htmlFor="marksheet10" className="form-label">10th Marksheet:</label>
//         <input
//           type="file"
//           className="form-control-file"
//           id="marksheet10"
//           onChange={handleMarksheet10Change}
//           onClick={(e) => openFileInNewTab(e.target.files[0])}
//         />
//       </div>
//       <div className="form-section">
//         <label htmlFor="internship" className="form-label">Internship Completion Certificate:</label>
//         <input
//           type="file"
//           className="form-control-file"
//           id="internship"
//           onChange={handleInternshipChange}
//           onClick={(e) => openFileInNewTab(e.target.files[0])}
//         />
//       </div>
//       <div className="form-section">
//         <label htmlFor="internship" className="form-label">Offer Letter:</label>
//         <input
//           type="file"
//           className="form-control-file"
//           id="Offerletter"
//           onChange={handleOfferLetterChange}
//           onClick={(e) => openFileInNewTab(e.target.files[0])}
//         />
//       </div>
//       <div className="form-section">
//         <label htmlFor="internship" className="form-label">Offer Letter:</label>
//         <input
//           type="file"
//           className="form-control-file"
//           id="Offerletter"
//           onChange={handleOfferLetterChange}
//           onClick={(e) => openFileInNewTab(e.target.files[0])}
//         />
//       </div>
//       <div className="form-section">
//         <label htmlFor="internship" className="form-label">Offer Letter:</label>
//         <input
//           type="file"
//           className="form-control-file"
//           id="placementOfferletter"
//           onChange={handlePlacementOfferChange}
//           onClick={(e) => openFileInNewTab(e.target.files[0])}
//         />
//       </div>
//       <div className="form-section">
//         <label htmlFor="internship" className="form-label">Placement Offer Letter:</label>
//         <input
//           type="file"
//           className="form-control-file"
//           id="placementOfferletter"
//           onChange={handlePlacementOfferChange}
//           onClick={(e) => openFileInNewTab(e.target.files[0])}
//         />
//       </div>
//       <div className="form-section">
//         <label htmlFor="internship" className="form-label">Combined documents of Marksheet :</label>
//         <input
//           type="file"
//           className="form-control-file"
//           id="placementOfferletter"
//           onChange={handleMarksheetChange}
//           onClick={(e) => openFileInNewTab(e.target.files[0])}
//         />
//       </div>
//       {/* ... and so on for other file upload fields */}
//     </form>
//   );
// }
// export default FilesUpload;