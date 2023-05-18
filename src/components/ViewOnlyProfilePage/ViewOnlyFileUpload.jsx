import React, { useState, useEffect } from 'react';

function ViewOnlyFilesUpload() {
  const [cvFile, setCvFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [marksheet12File, setMarksheet12File] = useState(null);
  const [marksheet10File, setMarksheet10File] = useState(null);
  const [internshipFile, setInternshipFile] = useState(null);
  const [offerLetterFile, setOfferLetterFile] = useState(null);
  const [placementOfferFile, setPlacementOfferFile] = useState(null);
  const [marksheetFile, setMarksheetFile] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch data from the backend
      const response = await fetch('/api/data');

      if (response.ok) {
        // Extract the data from the response
        const data = await response.json();

        // Set the file state variables with the fetched data
        setCvFile(data.cvFile);
        setResumeFile(data.resumeFile);
        // ... set other file state variables based on the data received
      } else {
        // Handle error response from the backend
        console.error('Failed to fetch data!');
      }
    } catch (error) {
      // Handle network error or other exceptions
      console.error('An error occurred while fetching data:', error);
    }
  };

  function openFileInNewTab(file) {
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL, "_blank");
  }

  return (
    <form className="p-4">
      <div className="mb-4">
        <label htmlFor="cv" className="block font-medium mb-1">
          CV:
        </label>
        <input
          type="file"
          className="form-control-file"
          id="cv"
          onClick={(e) => openFileInNewTab(e.target.files[0])}
          disabled
        />
      </div>
      <div className="mb-4">
        <label htmlFor="resume" className="block font-medium mb-1">
          Resume:
        </label>
        <input
          type="file"
          className="form-control-file"
          id="resume"
          onChange={() => {}}
          onClick={(e) => openFileInNewTab(e.target.files[0])}
          disabled
        />
      </div>
      <div className="mb-4">
        <label htmlFor="marksheet12" className="block font-medium mb-1">
          12th Marksheet:
        </label>
        <input
          type="file"
          className="form-control-file"
          id="marksheet12"
          onChange={() => {}}
          onClick={(e) => openFileInNewTab(e.target.files[0])}
          disabled
        />
      </div>
      <div className="mb-4">
        <label htmlFor="marksheet10" className="block font-medium mb-1">
          10th Marksheet:
        </label>
        <input
          type="file"
          className="form-control-file"
          id="marksheet10"
          onChange={() => {}}
          onClick={(e) => openFileInNewTab(e.target.files[0])}
          disabled
        />
      </div>
      <div className="mb-4">
        <label htmlFor="internship" className="block font-medium mb-1">
          Internship Completion Certificate:
        </label>
        <input
          type="file"
          className="form-control-file"
          id="internship"
          onChange={() => {}}
          onClick={(e) => openFileInNewTab(e.target.files[0])}
          disabled
        />
      </div>
      <div className="mb-4">
        <label htmlFor="offerLetter" className="block font-medium mb-1">
          Offer Letter:
        </label>
        <input
          type="file"
          className="form-control-file"
          id="offerLetter"
          onChange={() => {}}
          onClick={(e) => openFileInNewTab(e.target.files[0])}
          disabled
        />
      </div>
      <div className="mb-4">
        <label htmlFor="placementOfferLetter" className="block font-medium mb-1">
          Placement Offer Letter:
        </label>
        <input
          type="file"
          className="form-control-file"
          id="placementOfferLetter"
          onChange={() => {}}
          onClick={(e) => openFileInNewTab(e.target.files[0])}
          disabled
        />
      </div>
      <div className="mb-4">
        <label htmlFor="marksheet" className="block font-medium mb-1">
          Combined documents of Marksheet:
        </label>
        <input
          type="file"
          className="form-control-file"
          id="marksheet"
          onChange={() => {}}
          onClick={(e) => openFileInNewTab(e.target.files[0])}
          disabled
        />
      </div>
      {/* ... and so on for other file upload fields */}
    </form>  
  );
}

export default ViewOnlyFilesUpload;
