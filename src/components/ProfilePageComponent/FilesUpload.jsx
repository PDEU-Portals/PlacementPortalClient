import React, { useState } from 'react';

function FilesUpload() {
    const [cvFile, setCvFile] = useState(null);
    const [resumeFile, setResumeFile] = useState(null);
    const [marksheet12File, setMarksheet12File] = useState(null);
    const [marksheet10File, setMarksheet10File] = useState(null);
    const [internshipFile, setInternshipFile] = useState(null);
    const [offerLetterFile, setOfferLetterFile] = useState(null);
    const [placementOfferFile, setPlacementOfferFile] = useState(null);
    const [marksheetFile, setMarksheetFile] = useState(null);
  
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
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // TODO: Submit form data to server
    };
    function openFileInNewTab(file) {
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL, "_blank");
    }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-section">
        <label htmlFor="cv" className="form-label">CV:</label>
        <input
          type="file"
          className="form-control-file"
          id="cv"
          onClick={(e) => openFileInNewTab(e.target.files[0])}
          onChange={handleCvChange}
        />
      </div>
      <div className="form-section">
        <label htmlFor="resume" className="form-label">Resume:</label>
        <input
          type="file"
          className="form-control-file"
          id="resume"
          onChange={handleResumeChange}
          onClick={(e) => openFileInNewTab(e.target.files[0])}
        />
      </div>
      <div className="form-section">
        <label htmlFor="marksheet12" className="form-label">12th Marksheet:</label>
        <input
          type="file"
          className="form-control-file"
          id="marksheet12"
          onChange={handleMarksheet12Change}
          onClick={(e) => openFileInNewTab(e.target.files[0])}
        />
      </div>
      <div className="form-section">
        <label htmlFor="marksheet10" className="form-label">10th Marksheet:</label>
        <input
          type="file"
          className="form-control-file"
          id="marksheet10"
          onChange={handleMarksheet10Change}
          onClick={(e) => openFileInNewTab(e.target.files[0])}
        />
      </div>
      <div className="form-section">
        <label htmlFor="internship" className="form-label">Internship Completion Certificate:</label>
        <input
          type="file"
          className="form-control-file"
          id="internship"
          onChange={handleInternshipChange}
          onClick={(e) => openFileInNewTab(e.target.files[0])}
        />
      </div>
      {/* ... and so on for other file upload fields */}
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
export default FilesUpload;