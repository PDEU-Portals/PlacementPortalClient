import React, { useState, useEffect } from "react";
import "../ProfilePageComponent/Css/AcademicDetails.css";
import axios from "axios";

export const ViewOnlyAcademicDetails = ({ rollNo, cgpa, sbranch }) => {
  const [academicProfile, setAcademicProfile] = useState({
    rollNo: rollNo,
    SGPA: cgpa,
    Branch: sbranch,
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/academic-details")
      .then((response) => {
        setAcademicProfile(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div
        id="main-academic-container"
        className="bg-gray-200 rounded-3xl mx-4 py-4"
      >
        <div className="table-head">
          <div className="heading">
            <h2 className="mx-8 font-bold py-2 px-0">Academic Details</h2>
          </div>
        </div>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-6">
          <table className="w-full text-sm text-left text-gray-500">
            <tbody>
              <tr className="bg-white border-b hover:bg-gray-50">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-white-900 whitespace-nowrap"
                >
                  Roll NO
                </th>
                <td className="py-4 px-6">{academicProfile.rollNo}</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-white-500 whitespace-nowrap"
                >
                  CGPA
                </th>
                <td className="py-4 px-6">{academicProfile.SGPA}</td>
              </tr>
              <tr className="bg-white hover:bg-gray-50">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-white-900 whitespace-nowrap"
                >
                  BRANCH
                </th>
                <td className="py-4 px-6">{academicProfile.Branch}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewOnlyAcademicDetails;
