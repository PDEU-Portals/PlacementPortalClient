import React, { useState, useEffect } from "react";
import RecruiterHeader from "../components/Header/RecruiterHeader";
import axios from "axios";
import { useParams } from "react-router-dom";

const SelectedStudents = () => {

  const {id} = useParams()

  const [selectedStudents, setSelectedStudents] = useState(null);

  useEffect(() => {
    // Fetch student data from the backend API
    const fetchSelectedStudents = async () => {
      try {
        
        const response = await axios.get(`${process.env.REACT_APP_URI}/recruiter/getSelectedApplicants/${id}`)
        console.log(response.data);

        // Set the fetched student data to the state variable
        setSelectedStudents(response.data);
      } catch (error) {
        console.log("Error fetching selected students:", error);
      }
    };

    // Call the fetchSelectedStudents function
    fetchSelectedStudents();
  }, []);

  if(selectedStudents){
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
                        href={student.resume.secure_url}
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
  }
};

export default SelectedStudents;
