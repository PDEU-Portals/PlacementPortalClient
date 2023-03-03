import React, { useState } from "react";
import Header from "../Header/Header";

function Form() {
  const [formData, setFormData] = useState({
    headline: "",
    preferred_Branches: "",
    description: "",
    jobs_or_Internships:"",
    full_or_PartTime:"",
    skills:"",
    Application_Deadline:"",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
    <Header />
    <div>

    <div className="flex w-[80%] m-auto max-[500px]:flex-col ">
      <h5 className="text-orange min-[400px]:p-6 p-4 w-[90%] text-5xl font-semibold ">
        Reliance Industries.
      </h5>

      {/* <button
                className=" my-7 bg-blue justify-end hover:bg-white text-xl text-white  w-60  max-[400px]:w-48 max-[400px]:ml-4 h-14 hover:text-blue font-medium py-1 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                type="submit"
              >
                All Applications
              </button> */}
              </div>

      <h5 className="text-blue p-6 w-[90%] ml-[10%] text-4xl font-semibold ">
        Apply for internship
      </h5>

      <form
        onSubmit={handleSubmit}
        className="bg-grey p-6 rounded-3xl w-[80%] m-auto "
      >
        <div className="flex  justify-center max-[1070px]:flex-col">
          <div className=" max-[1070px]:w-full w-[45%] p-4  ">
            <div className="flex justify-between flex-col ">
              <div className="mb-4">
                <label
                  className=" text-blue font-medium mb-2 text-xl "
                  htmlFor="headline"
                >
                  Job Title 
                </label>
                <input
                  className="bg-white w-full  appearance-none border-2 border-gray-200 rounded-lg  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange"
                  id="headline"
                  type="text"
                  name="headline"
                  value={formData.headline}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label
                  className=" text-blue font-medium mb-2 text-xl"
                  htmlFor="preferred_Branches"
                >
                  Top Skills
                </label>
                <input
                  className="bg-white appearance-none border-2 border-gray-200 rounded-lg w-full mr-16 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange"
                  id="preferred_Branches"
                  type="text"
                  name="preferred_Branches"
                  value={formData.preferred_Branches}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                className=" text-blue font-medium mb-2 text-xl"
                htmlFor="description"
              >
                Tell us about yourself
              </label>
              <textarea
                className="bg-white appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange h-32"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="w-[45%] p-4 max-[1070px]:w-full">
            <div className="flex justify-between flex-col ">
              <div className="mb-4">
                <label
                  className=" text-blue font-medium mb-2 text-xl "
                  htmlFor="jobs_or_Internships"
                >
                  Jobs or Internships
                </label>
                <input
                  className="bg-white w-full  appearance-none border-2 border-gray-200 rounded-lg  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange"
                  id="jobs_or_Internships"
                  type="text"
                  name="jobs_or_Internships"
                  value={formData.jobs_or_Internships}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label
                  className=" text-blue font-medium mb-2 text-xl"
                  htmlFor=" full_or_PartTime"
                >
                  Full or Part Time
                </label>
                <input
                  className="bg-white appearance-none border-2 border-gray-200 rounded-lg w-full mr-16 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange"
                  id="full_or_PartTime"
                  type="text"
                  name="full_or_PartTime"
                  value={formData.full_or_PartTime}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                className=" text-blue font-medium mb-2 text-xl"
                htmlFor="skills"
              >
                Skills
              </label>
              <input
                className="bg-white appearance-none border-2 border-gray-200 rounded-lg w-full mr-16 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange"
                id="skills"
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
              />
            </div>

            <div className="flex w-full">
              <div className="flex flex-col">
                <div>
                  <label
                    className=" text-blue font-medium mb-2 text-xl"
                    htmlFor="Application_Deadline"
                  >
                    Application Deadline
                  </label>
                </div>

                <div>
                  <input
                    className="bg-white appearance-none border-2 border-gray-200 rounded-lg w-[90%] mr-16 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange"
                    id="Application_Deadline"
                    type="date"
                    name="Application_Deadline"
                    value={formData.Application_Deadline}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                className=" my-7 bg-orange justify-end hover:bg-white text-xl text-white  w-[90%] hover:text-orange font-medium py-2 px-4 rounded-xl h-10 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    </>
  );
}

export default Form;