import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import RecruiterHeader from "../components/Header/RecruiterHeader";

const ViewOnlyCompanyProfile = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/v1/recruiter/getDetails/${id}`
      );
      console.log(response.data);
      setDetails(response.data);
      if (response.data) {
        console.log("success");
        // setAdditionalInfo(response.data.additionalInfo);
      }
    };
    fetchDetails();
  }, []);

  return (
    <>
      <RecruiterHeader />
      
      <div class="flex justify-center">
  <div class="w-100%">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="form-group">
        <label for="companyName" class="text-gray-800 mb-1">Company Name</label>
        <input
          type="text"
          id="companyName"
          value={details?.companyName || ""}
          placeholder="Enter company name"
          disabled
          class="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-blue-500 text-gray-800"
        />
      </div>

      <div class="form-group">
        <label for="companyDescription" class="text-gray-800 mb-1">Company Description</label>
        <textarea
          id="companyDescription"
          value={details?.companyDescription || ""}
          placeholder="Enter company description"
          disabled
          class="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-blue-500 text-gray-800"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="companyWebsite" class="text-gray-800 mb-1">Company Website</label>
        <input
          type="text"
          id="companyWebsite"
          value={details?.companyWebsite || ""}
          placeholder="Enter company website URL"
          disabled
          class="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-blue-500 text-gray-800"
        />
      </div>

      <div class="form-group">
        <label for="companyLinkedin" class="text-gray-800 mb-1">Company LinkedIn</label>
        <input
          type="text"
          id="companyLinkedin"
          value={details?.companyLinkedin || ""}
          placeholder="Enter company LinkedIn URL"
          disabled
          class="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-blue-500 text-gray-800"
        />
      </div>

      <div class="form-group">
        <label for="companyTwitter" class="text-gray-800 mb-1">Company Twitter</label>
        <input
          type="text"
          id="companyTwitter"
          value={details?.companyTwitter || ""}
          placeholder="Enter company Twitter URL"
          disabled
          class="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-blue-500 text-gray-800"
        />
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default ViewOnlyCompanyProfile;
