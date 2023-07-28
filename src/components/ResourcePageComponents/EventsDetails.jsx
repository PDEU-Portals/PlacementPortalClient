import React from "react";
import Sidebar from './Sidebar';
import './Css/EventDetails.css'
import StudentHeader from "../Header/StudentHeader";

const EventDetails = () => {


  return (
    <>
      <StudentHeader />
      <div className="event-details-container">
        <Sidebar />
        <div className="max-w-3xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">Welcome Enthusiasts!</h1>
          <p className="text-lg mb-4">
            The Devfolio and Devpost Hackathon is an exciting event where developers, designers, and
            innovators from all around the world come together to showcase their talent, build amazing projects,
            and compete for fantastic prizes.
          </p>

          <h2 className="text-2xl font-bold mb-2">Hackathon Advantages</h2>
          <ul className="list-disc pl-6">
            <li>
              <b>Skill Development:</b> Hackathons provide an excellent opportunity to enhance technical skills, problem-solving abilities, and teamwork.
            </li>
            <li>
              <b>Networking:</b> Interact with like-minded individuals, industry professionals, and potential employers, expanding your professional network.
            </li>
            <li>
              <b>Portfolio Building:</b> Add your hackathon projects to your portfolio, demonstrating your ability to create real-world applications.
            </li>
            <li>
              <b>Fast-paced Learning:</b> Hackathons encourage rapid learning as participants must quickly adapt to new tools, technologies, and challenges.
            </li>
            <li>
              <b>Industry Exposure:</b> Some hackathons have industry sponsors who may be interested in your project, leading to potential collaborations or job offers.
            </li>
            <li>
              <b>Prizes and Recognition:</b> Winning or even participating in a hackathon can bring recognition, awards, and prizes, boosting your credibility.
            </li>
            <li>
              <b>Idea Validation:</b> Test and validate your ideas quickly, helping you assess the feasibility and viability of your projects.
            </li>
          </ul>


          <h2 className="text-2xl font-bold mb-2">Prizes</h2>
          <p className="text-lg mb-4">
            The Devfolio and Devpost Hackathon offers attractive prizes, including cash rewards, scholarships,
            internship opportunities, and more.
          </p>

          <h2 className="text-2xl font-bold mt-4 mb-2">Resources</h2>
          <ul className="list-disc pl-6">
            <li>
              <a
                href="https://devfolio.co/discover"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-bold"
              >
                Devfolio Website
              </a>{' '}
              - Explore Devfolio for more hackathons and opportunities.
            </li>
            <li>
              <a
                href="https://devpost.com/hackathons"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-bold"
              >
                Devpost Website
              </a>{' '}
              - Check out Devpost for hackathon projects and inspiration.
            </li>
          </ul>
        </div>



        <div className="max-w-3xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">Conferences!</h1>
          <p className="text-lg mb-4">
            The conference is a gathering of experts, professionals, and enthusiasts in various fields,
            providing a platform to share knowledge, discuss emerging trends, and network with like-minded
            individuals.
          </p>

          <h2 className="text-2xl font-bold mb-2">Conference Advantages</h2>
          <ul className="list-disc pl-6">
            <li>
              <b>Networking Opportunities:</b> Connect with professionals in your field, potential collaborators, mentors, and employers.
            </li>
            <li>
              <b>Industry Trends:</b> Stay updated with the latest trends, innovations, and best practices in your industry.
            </li>
            <li>
              <b>Skill Development:</b> Attend workshops or training sessions to enhance your skills and learn new tools or technologies.
            </li>
            <li>
              <b>Career Growth:</b> Conferences can lead to job opportunities, promotions, or career advancement through networking and exposure.
            </li>
            <li>
              <b>Idea Generation:</b> Interacting with diverse professionals can inspire new ideas and solutions for your work or projects.
            </li>
            <li>
              <b>Rejuvenation:</b> Conferences can re-energize you, boost motivation, and reignite your passion for your field of interest.
            </li>
            <li>
              <b>Exposure to New Products/Services:</b> Discover new products, services, or tools that can benefit your work or organization.
            </li>
            <li>
              <b>Building Credibility:</b> Active participation and speaking at conferences can enhance your professional reputation.
            </li>
            <li>
              <b>Global Perspective:</b> International conferences offer a chance to gain a global perspective on industry challenges and solutions.
            </li>
          </ul>



          <h2 className="text-2xl font-bold mt-4 mb-2">Conference Websites</h2>
          <ul className="list-disc pl-6">
            <li>
              <a
                href="https://www.conferencealerts.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-bold"
              >
                Conference Alerts
              </a>{' '}
              - Find upcoming conferences and events in various fields.
            </li>
            <li>
              <a
                href="https://conference.icghgd.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-bold"
              >
                ICGHGD Conference
              </a>{' '}
              - Explore the International Conference on Global Health and Gender Disparities.
            </li>
          </ul>
        </div>

      </div>
    </>
  );
}

export default EventDetails;
