import React, { useState } from "react";
import AdminHeder from "../components/Header/AdminHeader";
import axios from "axios";

const AddRecruiters = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAddRecruiter = async () => {
    try {
      const response = await axios.post("/api/recruiters", {
        name,
        email,
        password,
      });

      console.log("Recruiter added:", response.data);

      // Reset the form
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error adding recruiter:", error);
    }
  };

  return (
    <>
      <AdminHeder />
      <div className="bg-gray-100 p-4 sm:p-8">
      <h2 className="text-xl font-bold mb-4">Add Recruiter</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <button onClick={handleAddRecruiter} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Recruiter</button>
    </div>
    </>
  );
};

export default AddRecruiters;
