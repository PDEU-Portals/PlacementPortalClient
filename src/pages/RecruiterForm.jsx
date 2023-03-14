import React, { useState } from 'react';
import RecruiterHeader from '../components/Header/RecruiterHeader';
import './RecruiterForm.css';

function RecruiterForm() {
  const [role, setRole] = useState('');
  const [type, setType] = useState('');
  const [skills, setSkills] = useState([]);
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [deadline, setDeadline] = useState('');
  const [salaryRange, setSalaryRange] = useState('');
  const [jobType, setJobType] = useState('');
  const [eligibilityCriteria, setEligibilityCriteria] = useState('');

  const handleSkillsChange = (event) => {
    setSkills(event.target.value.split(','));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      role,
      type,
      skills,
      additionalInfo,
      deadline,
      salaryRange,
      jobType,
      eligibilityCriteria
    };
    // Send POST request to backend API with data
    fetch('/api/recruiter-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }

  return (
    <>
    <RecruiterHeader />
    <form className='recruiter-form' onSubmit={handleSubmit}>
      <label htmlFor="role">Role:</label>
      <input type="text" id="role" name="role" required value={role} onChange={(event) => setRole(event.target.value)} /><br />

      <label htmlFor="type">Type of internship:</label>
      <input type="text" id="type" name="type" required value={type} onChange={(event) => setType(event.target.value)} /><br />

      <label htmlFor="skills">Skills they are looking for (comma separated):</label>
      <input type="text" id="skills" name="skills" required value={skills.join(',')} onChange={handleSkillsChange} /><br />

      <label htmlFor="additional-info">Additional Information:</label>
      <textarea id="additional-info" name="additional-info" rows="4" cols="50" value={additionalInfo} onChange={(event) => setAdditionalInfo(event.target.value)} /><br />

      <label htmlFor="deadline">Deadline:</label>
      <input type="date" id="deadline" name="deadline" required value={deadline} onChange={(event) => setDeadline(event.target.value)} /><br />

      <label htmlFor="salary-range">Salary Range:</label>
      <input type="text" id="salary-range" name="salary-range" required value={salaryRange} onChange={(event) => setSalaryRange(event.target.value)} /><br />

      <label htmlFor="job-type">Type of job:</label>
      <input type="text" id="job-type" name="job-type" required value={jobType} onChange={(event) => setJobType(event.target.value)} /><br />

      <label htmlFor="eligibility-criteria">Eligibility Criteria:</label>
      <textarea id="eligibility-criteria" name="eligibility-criteria" rows="4" cols="50" value={eligibilityCriteria} onChange={(event) => setEligibilityCriteria(event.target.value)} /><br />

      <button type="submit">Save</button>
    </form>
    </>
  );
}

export default RecruiterForm;
