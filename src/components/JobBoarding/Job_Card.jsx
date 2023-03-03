import React, { Link } from "react";

const Job_Card = () => {
  const job_description = [
    {
      skill: "Front-end Engineer",
      company: "Reliance Industries",
      description: "Employment type : full time ",
      content:
        " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      deadline: "2023-06-10",
      applicants: "50",
    },
    {
      skill: "Back-end Engineer",
      company: "Wipro Internation Limited",
      description: "Employment type : half time ",
      content:
        " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      deadline: "2023-05-13",
      applicants: "50",
    },
    {
      skill: "Back Engineer",
      company: "Wipro Internation Limited",
      description: "Employment type : half time ",
      content:
        " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      deadline: "2023-07-10",
      applicants: "50",
    },
    {
      skill: "Back Engineer",
      company: "Wipro Internation Limited",
      description: "Employment type : half time ",
      content:
        " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      deadline: "2023-06-10",
    },
    {
      skill: "Back Engineer",
      company: "Wipro Internation Limited",
      description: "Employment type : half time ",
      content:
        " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      deadline: "2023-09-10",
      applicants: "50",
    },
    {
      skill: "Back Engineer",
      company: "Wipro Internation Limited",
      description: "Employment type : half time ",
      content:
        " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      deadline: "2023-09-10",
      applicants: "50",
    },
    {
      skill: "Back Engineer",
      company: "Wipro Internation Limited",
      description: "Employment type : half time ",
      content:
        " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      deadline: "2023-09-10",
      applicants: "50",
    },
  ];

  const [query, setQuery] = React.useState("");
  const [job, setJob] = React.useState(job_description);
  return (
    <>
      <input
        placeholder="Enter Job"
        className="search-bar ml-11 w-2/4 p-5 rounded-2xl border-solid border-2 "
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="grid grid-cols-2 jobCard">
        {job
          .filter((job_description) => {
            if (query === "") {
              return job_description;
            } else if (
              job_description.skill.toLowerCase().includes(query.toLowerCase())
            ) {
              return job_description;
            }
          })
          .sort((postA, postB) => (postA.deadline < postB.deadline ? -1 : 1))
          .map((job_description) => (
            <div className="job-card relative  h-auto bg-slate-200 m-10 rounded-3xl">
              <h1 className="skill text-3xl pl-6 pt-5 ">
                {job_description.skill}
              </h1>
              <h3 className="company text-2xl text-orange-400 pl-6 ">
                {job_description.company}
              </h3>
              <h4 className="job-desc text-xl pl-6 pt-3">
                {job_description.description}
              </h4>
              <div className=" flex">
                <div className=" text-sm m-0 w-8/12 pl-6 pt-2  pb-0 pr-10">
                  {job_description.content}
                </div>
                <div className="">
                  <button className=" ml-5 bg-slate-300 w-auto p-5  mr-5 rounded-3xl ">
                    <a href="/students/resource/applyjob">
                    Apply Now
                    </a>
                  </button>
                </div>
              </div>
              <div className="pl-6 mt-5 mb-5 font-light">
                {" "}
                No. of Applicants : {job_description.applicants} &nbsp;&nbsp;
                Deadline : {job_description.deadline}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Job_Card;