import React, { useState } from 'react';
import RecruiterHeader from '../components/Header/RecruiterHeader';
import './RecruiterForm.css';

function RecruiterForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState([]);
  const [openings, setOpenings] = useState(0)
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [applicationDeadline, setDeadline] = useState('');
  const [salaryRange, setSalaryRange] = useState('');
  const [jobType, setJobType] = useState('');
  const [eligibilityCriteria, setEligibilityCriteria] = useState('');
  const [pref_branches, setPref_Branch] = useState([])

  const handleSkillsChange = (event) => {
    setSkills(event.target.value.split(','));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        title,
        description,
        jobType,
        openings,
        // pref_branches,
        applicationDeadline,
        // location,
        salaryRange,
        skills,
        id: localStorage.getItem('id'),
    };
    // Send POST request to backend API with data
    fetch('http://localhost:5000/api/v1/recruiter/createJob', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

    setTitle("")
    setDescription("")
    setJobType("")
    setOpenings(0)
    setDeadline('')
    setSalaryRange('')
    setSkills([])
    setAdditionalInfo("")
    setEligibilityCriteria("")
  }

  return (
    <>
    <RecruiterHeader />
    <form className='recruiter-form' onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" required value={title} onChange={(event) => setTitle(event.target.value)} /><br />

      <label htmlFor="description">Description:</label>
      <input type="text" id="description" name="description" required value={description} onChange={(event) => setDescription(event.target.value)} /><br />

      <label htmlFor="job-type">Type of job:</label>
      <input type="text" id="job-type" name="job-type" required value={jobType} onChange={(event) => setJobType(event.target.value)} /><br />

      <label htmlFor="openings">Number of openings:</label>
      <input type="text" id="openings" name="openings" required value={openings} onChange={(event) => setOpenings(event.target.value)} /><br />

      <label htmlFor="skills">Skills they are looking for (comma separated):</label>
      <input type="text" id="skills" name="skills" required value={skills.join(',')} onChange={handleSkillsChange} /><br />

      <label htmlFor="additional-info">Additional Information:</label>
      <textarea id="additional-info" name="additional-info" rows="4" cols="50" value={additionalInfo} onChange={(event) => setAdditionalInfo(event.target.value)} /><br />

      <label htmlFor="applicationDeadline">Deadline:</label>
      <input type="date" id="applicationDeadline" name="applicationDeadline" required value={applicationDeadline} onChange={(event) => setDeadline(event.target.value)} /><br />

      <label htmlFor="salary-range">Salary Range:</label>
      <input type="text" id="salary-range" name="salary-range" required value={salaryRange} onChange={(event) => setSalaryRange(event.target.value)} /><br />

      <label htmlFor="eligibility-criteria">Eligibility Criteria:</label>
      <textarea id="eligibility-criteria" name="eligibility-criteria" rows="4" cols="50" value={eligibilityCriteria} onChange={(event) => setEligibilityCriteria(event.target.value)} /><br />

      <button type="submit">Save</button>
    </form>
    </>
  );
}

export default RecruiterForm;
