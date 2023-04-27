import React, { useState, useEffect } from "react";
import "./Css/AcademicDetails.css";
import axios from "axios";

export const AcademicDetails = ({rollNo,cgpa,sbranch}) => {
  // console.log(rollNo);
  const [editMode, setEditMode] = useState(false);
  const [academicProfile, setAcademicProfile] = useState({
    rollNo: rollNo,
    SGPA: cgpa,
    Branch: sbranch,
  });

  // useEffect(() => {
  //   fetch("https://dummyapi.com/academic-details")
  //     .then((response) => response.json())
  //     .then((data) => setAcademicProfile(data))
  //     .catch((error) => console.log(error));
  // }, []);

  const handleEditClick = () => {
    setEditMode(true);
  };
  const handleCancleClick = () => {
    setEditMode(false);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    const formData = new FormData()
    formData.append("id",localStorage.getItem('studentId'))
    formData.append("rollNo",academicProfile.rollNo)
    // formData.append("CGPA",academicProfile.SGPA)
    formData.append("branch", academicProfile.Branch)
    axios
      .post(`http://localhost:5000/api/v1/updateProfile`, formData)
      .then((response) => console.log(response))
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

 const handleChange = (event) => {
    console.log(event.target.value);
    setAcademicProfile({
      ...academicProfile,
      [event.target.name]: event.target.value,
    });
    fetch("https://dummyapi.com/academic-details", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(academicProfile),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div id="main-acadamic-container" className="bg-gray-200 rounded-3xl mx-4 py-4">
        {editMode ? (
          <>
            <>
              <div className="table-head">
                <div className="heading">
                  <h2 className="mx-3 font-bold py-0 px-0">Academic Details</h2>
                </div>
                <div className="buttons">
                  <button onClick={handleSaveClick}>Save</button>
                  <button onClick={handleCancleClick}>Cancle</button>
                </div>
              </div>
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-6">
                <table className="w-full text-sm text-left text-gray-500 ">
                  <tbody>
                    <tr className="bg-white border-b  hover:bg-gray-50 ">
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-white-900 whitespace-nowrap "
                      >
                        Roll NO
                      </th>
                      <td className="py-4 px-6">
                        <input
                          type="text"
                          id="rollNo"
                          name="rollNo"
                          value={AcademicDetails.rollNo}
                          onChange={handleChange}
                          placeholder="Enter you roll number here"
                        />
                      </td>
                    </tr>
                    <tr className="bg-white border-b  hover:bg-gray-50 ">
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-white-500 whitespace-nowrap "
                      >
                        CGPA
                      </th>
                      <td className="py-4 px-6">
                        <input
                          type="text"
                          id="CGPA"
                          name="CGPA"
                          value={AcademicDetails.SGPA}
                          onChange={handleChange}
                          placeholder="Enter your SGPA here"
                        />
                      </td>
                    </tr>
                    <tr className="bg-white  hover:bg-gray-50 ">
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-white-900 whitespace-nowrap "
                      >
                        BRANCH
                      </th>
                      <td className="py-4 px-6">
                        <input
                          type="text"
                          id="branch"
                          name="Branch"
                          value={AcademicDetails.Branch}
                          onChange={handleChange}
                          placeholder="Enter your branch here"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          </>
        ) : (
          <>
            <div className="table-head">
              <div className="heading">
                <h2 className="mx-8 font-bold py-2 px-0">Academic Details</h2>
              </div>
              <div className="edit-button">
                <button id="edit-button-details" onClick={handleEditClick}>
                  Edit
                </button>
              </div>
            </div>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-6">
              <table className="w-full text-sm text-left text-gray-500 ">
                <tbody>
                  <tr className="bg-white border-b  hover:bg-gray-50 ">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-white-900 whitespace-nowrap "
                    >
                      Roll NO
                    </th>
                    <td className="py-4 px-6">{academicProfile.rollNo}</td>
                  </tr>
                  <tr className="bg-white border-b  hover:bg-gray-50 ">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-white-500 whitespace-nowrap "
                    >
                      CGPA
                    </th>
                    <td className="py-4 px-6">{academicProfile.SGPA}</td>
                  </tr>
                  <tr className="bg-white  hover:bg-gray-50 ">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-white-900 whitespace-nowrap "
                    >
                      BRANCH
                    </th>
                    <td className="py-4 px-6">{academicProfile.Branch}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default AcademicDetails;
