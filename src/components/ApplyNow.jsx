import React from "react";
import { useState } from "react";
import { MultiSelect } from "multiselect-react-dropdown";

export default function ApplyNow() {
  // const data=[
  //     {Branch:"CE", id:1},
  //     {Branch:"ICT", id:2},
  //     {Branch:"ECE", id:3},
  //     {Branch:"EE", id:4},
  //     {Branch:"MECH", id:5},
  //     {Branch:"CIVIL", id:6},
  // ]

  // const[ options]=useState(data);

  const [formData, setFormData] = useState({
    headline: "",
    preferredBranches: "",
    Description: "",
    JoborInternship: "",
    FullorPart_Time: "",
    skills: "",
    Application_Deadline: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      {/* <div className="w-4/5 flex justify-center ">
            <div className="Dropdown_Menu">
                    <h5 className="text-red-800">Multiselect DropDown Usestate</h5>
                    <MultiSelect options={options} displayValue="Branch" />
            
            </div>

        </div> */}

      <div className="Title_div flex justify-between p-4 sm:p-8">
        <h1 className="Title text-orange text-3xl sm:text-5xl">
          Goldman Sachs Inc.
        </h1>
        <button
          className="Apply_Now text-white bg-blue w-44 h-12 sm:h-14 min-[430px]:w-96  rounded-xl text-xl sm:text-2xl pb-1 hover:text-blue hover:bg-white border-2 border-blue"
          type="button"
        >
          All Application
        </button>
      </div>
      <div>
        <h5 className="text-blue text-2xl sm:text-4xl pl-4 sm:pl-8">
          Post Jobs / Internships
        </h5>
      </div>

      <div className="form_area bg-grey m-auto rounded-lg w-[95%] mt-4">
        <form onSubmit={handleSubmit} />
        <div className=" flex flex-col pl-2 sm:flex-row ">
          <div>
            <div>
              <label
                className="text-gray font-medium mb-2 text-lg "
                htmlFor="headline"
              >
                Headline
              </label>
            </div>

            <input
              className="  shadow appearance-none border rounded w-[90%]  m-auto  py-2  text-gray leading-tight focus:outline-none focus:shadow-outline"
              id="headline"
              name="headline"
              type="text"
              value={formData.headline}
              onChange={handleChange}
              required
            ></input>
          </div>

          <div>
            <div>
              <label
                className="text-gray font-medium mb-2 text-lg "
                htmlFor="JoborInternship"
              >
                Job or Internship
              </label>
            </div>
            <input
              className="shadow appearance-none border rounded w-[90%]  m-auto py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
              id="JoborInternship"
              name="JoborInternship"
              type="text"
              value={formData.JoborInternship}
              onChange={handleChange}
              required
            ></input>
          </div>
        </div>

        <div className=" flex flex-col pl-2 sm:flex-row">
          <div>
            <div>
              <label
                className="text-gray font-medium mb-2 text-lg "
                htmlFor="preferredBranches"
              >
                Preferred Branches
              </label>
            </div>
            <input
              className="shadow appearance-none border rounded w-[90%]  m-auto py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
              id="preferredBranches"
              name="preferredBranches"
              type="text"
              value={formData.preferredBranches}
              onChange={handleChange}
              required
            ></input>
          </div>

          <div>
            <div>
              <label
                className="text-gray font-medium mb-2 text-lg "
                htmlFor="FullorPart_Time"
              >
                Full Time or Part Time
              </label>
            </div>
            <input
              className="shadow appearance-none border rounded w-[90%] m-auto py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
              id="FullorPart_Time"
              name="FullorPart_Time"
              type="text"
              value={formData.FullorPart_Time}
              onChange={handleChange}
              required
            ></input>
          </div>
        </div>

        <div className=" flex flex-col pl-2 sm:flex-row">
          <div>
            <div>
              <label
                className="text-gray font-medium mb-2 text-lg"
                htmlFor="Description"
              >
                Description{" "}
              </label>
            </div>
            <textarea
              className="shadow appearance-none border rounded w-[90%] m-auto py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
              id="Description"
              name="Description"
              rows={5}
              type="text"
              value={formData.Description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div>
            <div>
              <div>
                <label
                  className="text-gray font-medium mb-2 text-lg"
                  htmlFor="skills"
                >
                  skills
                </label>
              </div>
              <div>
                <input
                  className="shadow appearance-none border rounded w-[90%] m-auto py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                  id="skills"
                  name="skills"
                  type="text"
                  value={formData.skills}
                  onChange={handleChange}
                  required
                ></input>
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <div>
                  <label
                    className="text-gray font-medium mb-2  text-lg"
                    htmlFor="Application_Deadline"
                  >
                    Application Deadline
                  </label>
                </div>
                <div>
                  <input
                    className="shadow appearance-none border rounded w-[100%]  py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                    id="Application_Deadline"
                    name="Application_Deadline"
                    type="date"
                    value={formData.Application_Deadline}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </div>

              <div className="min-[440px]:mr-4 min-[460px]:mr-6 min-[480px]:mr-10  ">
                <button
                  className="Submit text-white bg-orange h-10 w-[100%] rounded-lg text-xl pb-1 my-7 mr-2 hover:text-orange hover:bg-white border-2 border-orange"
                  type="button"
                >
                  All Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
