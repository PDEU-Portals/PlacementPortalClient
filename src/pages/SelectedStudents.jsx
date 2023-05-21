import React, { useState, useEffect } from "react";
import RecruiterHeader from "../components/Header/RecruiterHeader";
import axios from "axios";

const SelectedStudents = () => {
  const [selectedStudents, setSelectedStudents] = useState([]);

  useEffect(() => {
    // Fetch student data from the backend API
    const fetchSelectedStudents = async () => {
      try {
        // Make the API call to fetch the student data
        const response = await fetch("/api/selectedStudents"); // Replace with your actual API endpoint

        // Parse the response into JSON format
        const data = await response.json();

        // Set the fetched student data to the state variable
        setSelectedStudents(data);
      } catch (error) {
        console.log("Error fetching selected students:", error);
      }
    };

    // Call the fetchSelectedStudents function
    fetchSelectedStudents();
  }, []);

  return (
    <>
      <RecruiterHeader />
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold my-4">Selected Students</h1>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Branch</th>
                <th className="py-2 px-4 border-b">GitHub</th>
                <th className="py-2 px-4 border-b">LinkedIn</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Resume</th>
              </tr>
            </thead>
            <tbody>
              {selectedStudents.map((student, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="py-2 px-4 border-b">
                    <a href="/students/viewonlyprofile/:id">
                    {student.name}
                    </a>
                    </td>
                  <td className="py-2 px-4 border-b">{student.branch}</td>
                  <td className="py-2 px-4 border-b">
                    <a
                      href={student.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      GitHub
                    </a>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <a
                      href={student.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      LinkedIn
                    </a>
                  </td>
                  <td className="py-2 px-4 border-b">{student.email}</td>
                  <td className="py-2 px-4 border-b">
                    <a
                      href={student.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      View Resume
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SelectedStudents;
