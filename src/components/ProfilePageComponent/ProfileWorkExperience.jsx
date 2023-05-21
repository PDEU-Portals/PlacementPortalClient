import React, { useEffect, useState } from "react";
import axios  from "axios";
import './Css/ProfileWorkExperience.css';

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

  // useEffect(() => {
  //   first
  //   return () => {
  //     second
  //   }
  // }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newWorkExperience = {
      company,
      title,
      startDate,
      endDate: currentlyWorking ? "Present" : endDate,
      description,
    };
  
      // Add the new work experience to the existing list
      const updatedWorkExperiences = [...workExperiences, newWorkExperience];
      setWorkExperiences(updatedWorkExperiences);
  
      // Save the updated list to localStorage
      localStorage.setItem("workExperiences", JSON.stringify(updatedWorkExperiences));
  
      setShowForm(false);

    try {
      // const response = await axios.post('https://dummyapi.com/work-experience', newWorkExperience);
      // setWorkExperiences([...workExperiences, response.data]);
      setShowForm(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => setShowForm(false);

  const handleAddWorkExperience = () => setShowForm(true);

  useEffect(() => {
    const fetchWorkExperiences = async () => {
      try {
        const response = await axios.get('https://dummyapi.com/work-experience');
        setWorkExperiences(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWorkExperiences();
  }, []);

  return (
    <div className="experience-section">
      <h1 className="profile-page__heading">Work Experience</h1>
      <button
        className="profile-page__add-btn"
        onClick={handleAddWorkExperience}
      >
        Add Work Experience
      </button>
      {showForm && (
        <form className="profile-page__form" onSubmit={handleSubmit}>
          <section className="form-input-section">
          <label className="profile-page__form-label">
            Company:
              <input
                className="profile-page__form-input"
                type="text"
                value={company}
                onChange={handleCompanyChange}
              />
          </label>
          <label className="profile-page__form-label">
            Title/Role:
            <input
              className="profile-page__form-input"
              type="text"
              value={title}
              onChange={handleTitleChange}
            />
          </label>
          </section>
          <br />  
          <label className="profile-page__form-label">
            Start Date:
            <input
              className="profile-page__form-input"
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </label>
          <br />
          <label className="profile-page__form-label">
            End Date:
            {currentlyWorking ? (
              <span>Present</span>
            ) : (
              <input
                className="profile-page__form-input"
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
              />
            )}
          </label>
          <label className="profile-page__form-label">
            Currently working there:
            <input
              className="profile-page__form-checkbox"
              type="checkbox"
              checked={currentlyWorking}
              onChange={handleCurrentlyWorkingChange}
            />
          </label>
          <br />
          <label className="profile-page__form-label">
          <section className="profile-page_form-input_decription">

            Description:
            <textarea
              className="profile-page__form-textarea"
              value={description}
              onChange={handleDescriptionChange}
            />
            </section>
          </label>
          <button className="profile-page__form-submit-btn" type="submit">
            Save
          </button>
          <button
            className="profile-page__form-cancel-btn"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </form>
      )}
      {workExperiences.map((workExperience, index) => (
        <div key={index} className="profile-page__work-experience">
          <p className="profile-page__work-experience-company">
            {workExperience.company}
          </p>
          <p className="profile-page__work-experience-title">
            {workExperience.title}
          </p>
          <p className="profile-page__work-experience-date">
            {workExperience.startDate} - {workExperience.endDate}
          </p>
          <p className="profile-page__work-experience-description">
            {workExperience.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProfileWorkExperience;