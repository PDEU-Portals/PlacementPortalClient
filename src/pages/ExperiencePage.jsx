import { useState } from "react";
import Header from "../components/Header/Header";
import './ExperiencePage.css';

function ExperiencePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [experiences, setExperiences] = useState([]);

  // Assume that user data is retrieved from backend and stored in this object
  const userData = {
    name: "John",
    email: "john@example.com"
  };

  const handleShare = () => {
    const newExperience = { title, description };
    setExperiences([...experiences, newExperience]);
    setTitle("");
    setDescription("");
  };

  return (
    <>
    <Header />
    <div className="container">
  <div className="form">
    <h1 className="title">Share your experience</h1>
    <div className="form-group">
      <label htmlFor="title" className="label">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input"
        placeholder="Enter a catchy title"
      />
    </div>
    <div className="form-group">
      <label htmlFor="description" className="label">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="textarea"
        placeholder="Write about your experience"
      ></textarea>
    </div>
    <div className="form-group">
      <button onClick={handleShare} className="button">Share</button>
    </div>
  </div>
  {experiences.length > 0 && (
    <div className="shared-experiences">
      <h2 className="shared-experiences-title">Shared experiences:</h2>
      {experiences.map((experience, index) => (
        <>
        <div key={index} className="shared-experience">
          <h3 className="shared-experience-title">{experience.title}</h3>
          <p className="shared-experience-description">{experience.description}</p>
          <br />
        <hr />
          <div className="shared-by"> <p className="shared-by-info"> <a href={`/students/${experience.userId}`} target="_blank"> Shared by:  {userData.name} ({userData.email}) </a> </p> </div>
        </div>
        </>
      ))}
    </div>
  )}
</div>

</>
  );
}

export default ExperiencePage;