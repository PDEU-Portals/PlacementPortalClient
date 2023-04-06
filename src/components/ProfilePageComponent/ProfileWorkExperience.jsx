import React, { useState } from "react";

function ProfileWorkExperience() {
  const [showForm, setShowForm] = useState(false);
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  const [description, setDescription] = useState("");
  const [workExperiences, setWorkExperiences] = useState([]);

  const handleCompanyChange = (e) => setCompany(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleStartDateChange = (e) => setStartDate(e.target.value);
  const handleEndDateChange = (e) => setEndDate(e.target.value);
  const handleCurrentlyWorkingChange = (e) =>
    setCurrentlyWorking(e.target.checked);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWorkExperience = {
      company,
      title,
      startDate,
      endDate: currentlyWorking ? "Present" : endDate,
      description,
    };

    setWorkExperiences([...workExperiences, newWorkExperience]);
    setShowForm(false);
  };

  const handleCancel = () => setShowForm(false);

  const handleAddWorkExperience = () => setShowForm(true);

  return (
    <div>
      <h1>Profile Page</h1>
      <button onClick={handleAddWorkExperience}>Add Work Experience</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>
            Company:
            <input type="text" value={company} onChange={handleCompanyChange} />
          </label>
          <label>
            Title/Role:
            <input type="text" value={title} onChange={handleTitleChange} />
          </label>
          <label>
            Start Date:
            <input type="date" value={startDate} onChange={handleStartDateChange} />
          </label>
          <label>
            End Date:
            {currentlyWorking ? (
              <span>Present</span>
            ) : (
              <input type="date" value={endDate} onChange={handleEndDateChange} />
            )}
          </label>
          <label>
            Currently working there:
            <input
              type="checkbox"
              checked={currentlyWorking}
              onChange={handleCurrentlyWorkingChange}
            />
          </label>
          <label>
            Description:
            <textarea value={description} onChange={handleDescriptionChange} />
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      )}
      {workExperiences.map((workExperience, index) => (
        <div key={index}>
          <p>{workExperience.company}</p>
          <p>{workExperience.title}</p>
          <p>{workExperience.startDate} - {workExperience.endDate}</p>
          <p>{workExperience.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProfileWorkExperience;
