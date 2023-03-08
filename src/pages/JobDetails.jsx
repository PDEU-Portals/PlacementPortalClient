import React from "react"
import Header from "../components/Header/Header"
import jobdetails from "../data/jobdetails"
import {useParams} from "react-router"

export default function JobDetails() {
  const {id} = useParams()

  const job = jobdetails.find((job) => job.id === Number(id))

  return (
    <>
      <Header />
      <div className="sm:px-6 lg:px-24">
        <div className="mt-10 sm:flex sm:items-center md:gap-4 lg:mt-20 lg:gap-12 xl:w-4/5">
          <div className="sm:w-full">
            <h1 className="text-[#E08327] text-4xl xl:text-5xl font-bold text-center sm:text-left">
              {job.company}
            </h1>
            <p className="text-[#1F3368] font-light text-justify px-6 mt-2 sm:px-0 xl:w-4/5 2xl:w-[75%] 2xl:text-xl">
              {job.companyDesc}
            </p>
          </div>
          <div className="">
            <img
              src="/images/jobdetails/1.png"
              alt="company"
              className="xl:h-full"
            />
          </div>
        </div>
        <div className="mt-8 lg:mt-14">
          <h1 className="text-[#1F3368] text-4xl font-bold text-center sm:text-left">
            Social Media
          </h1>
          <div className="mt-3 sm:mt-6 text-center space-y-1 sm:text-left sm:flex sm:items-center sm:gap-8 sm:justify-center">
            {job.socialMedia.map((social) => (
              <h4
                key={social.id}
                className="text-[#1f33686b] font-bold text-xl cursor-pointer"
              >
                <a href={social.link} target="_blank" rel="noreferrer">
                  {social.name}
                </a>
              </h4>
            ))}
          </div>
        </div>

        <div className="mt-8 lg:mt-14">
          <h1 className="text-[#1F3368] text-3xl font-bold text-center sm:text-left sm:text-4xl">
            Jobs and Internships offered
          </h1>
        </div>

        <div className="mt-8">
          <h1 className="text-[#1F3368] text-2xl font-bold text-center sm:text-left sm:text-4xl">
            Skills Company is looking for
          </h1>
          <div className="mt-3 text-center space-y-1 sm:flex sm:items-center sm:gap-7 sm:flex-wrap">
            {job.skills.map((skill, index) => (
              <h4 key={index} className="text-lg sm:text-2xl font-semibold">
                {skill}
              </h4>
            ))}
          </div>
        </div>

        <div className="mt-8 lg:mt-14">
          <h1 className="text-[#1F3368] text-2xl font-bold text-center sm:text-left sm:text-4xl">
            Additional Information
          </h1>
          <p className="text-[#1F3368] font-light text-justify px-6 mt-2 sm:px-0 sm:text-lg xl:w-4/5">
            {job.additionalInfo}
          </p>
        </div>

        <div className="my-8 lg:mt-14 flex justify-center sm:justify-start">
          <button className="bg-[#E08327] text-[#1F3368] font-semibold px-8 rounded-md py-2 text-xl">
            Apply Now
          </button>
        </div>
      </div>
    </>
  )
}
