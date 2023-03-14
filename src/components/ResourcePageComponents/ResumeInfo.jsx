import React from "react";
import StudentHeader from "../Header/StudentHeader";
import Sidebar from "./Sidebar";
import "./Css/Resume.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const ResumeInfo = () => {
  return (
    <>
      <StudentHeader />
      <div className="main-resume-container">
        <Sidebar />
        <div>
          <div className="title mt-6 ml-64 font-black text-5xl">
            How to Build Your Resume ?
          </div>
          <div className="grid-container m-10">
            <div className="video-wrapper">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Tt08KmFfIYQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="font-medium text-xl">
                Write an Incredible Resume: 5 Golden Rules!
              </p>
            </div>
            <div className="video-wrapper">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/y8YH0Qbu5h4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="font-medium text-xl ">How to Write a Resume | For Freshers & Experienced People (Step-by-Step Tutorial)</p>
            </div>
            <div className="video-wrapper">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/UeMmCex9uTU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="font-medium text-xl">Free Resume making Websites|Get Resume Templates for Freshers| Resume Kaise Banaye ?| Anshika Gupta</p>
            </div>
            <div className="video-wrapper">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/x7OSb4lKQbM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="font-meidum text-xl">3 Resume Mistakes you must avoid | Why is your resume getting Rejected?</p>
            </div>
          </div>
          <div className="Blogs-Resume ">
            <div className="Blog-title mt-6 ml-64 font-black text-5xl">
              <h2>Here are some Blogs </h2>
            </div>
            {/* Left Image */}
            <div className="blog-card grid grid-cols-2">
              <div class="meta">
                <div className="photo">
                  <img
                    className="w-full"
                    src="https://www.myperfectresume.com/wp-content/uploads/2022/10/how-to-write-resume.png"
                    alt=""
                  />
                </div>
                <ul className=" details">
                  <li className="author ">
                    <a href="#">John Doe</a>
                  </li>
                  <li class="date">Aug. 24, 2015</li>
                  <li class="tags">
                    <ul>
                      <li>
                        <a href="#">Learn</a>
                      </li>
                      <li>
                        <a href="#">Code</a>
                      </li>
                      <li>
                        <a href="#">HTML</a>
                      </li>
                      <li>
                        <a href="#">CSS</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="description">
                <h1>How to Make a Resume in 2023</h1>
                <h2>Opening a door to the future</h2>
                <p>
                  {" "}
                  This blog is dedicated to providing job seekers with practical
                  tips and strategies for creating a winning resume. From
                  crafting compelling job descriptions to highlighting your
                  unique qualifications, our team of experts offers insights and
                  guidance to help you stand out from the competition.
                </p>
                <p className="read-more">
                  <a href="https://www.myperfectresume.com/career-center/resumes/how-to/write">
                    Read More
                  </a>
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="blog-card alt">
              <div className="meta">
                <div className="photo">
                  <img
                    className="w-full"
                    src="https://www.livecareer.com/wp-content/uploads/2023/02/how-to-write-resume-desktop.webp"
                    alt=""
                  />
                </div>
                <ul className="details">
                  <li className="author">
                    <a href="#">Jane Doe</a>
                  </li>
                  <li className="date">July. 15, 2015</li>
                  <li className="tags">
                    <ul>
                      <li>
                        <a href="#">Learn</a>
                      </li>
                      <li>
                        <a href="#">Code</a>
                      </li>
                      <li>
                        <a href="#">JavaScript</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="description">
                <h1>The 5 main sections every resume should have</h1>
                <h2>Resume Builder</h2>
                <p>
                  The blog aims to help job seekers stand out from the crowd and
                  increase their chances of landing an interview.
                </p>
                <p className="read-more">
                  <a href="https://www.livecareer.com/resources/resumes/how-to/write/8-simple-steps">Read More</a>
                </p>
              </div>
            </div>
          </div>
          <div className="resume-link">
            <h1>Check out some resources where you can </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeInfo;
