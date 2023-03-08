import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import data from "./components/Card/CardData"
import App from "./App"
import PlacementTable from "./components/Table/PlacementTable"

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from "./pages/HomePage"
import {ProfilePage} from "./pages/ProfilePage"
import Dashboard from "./pages/Dashboard.jsx"
import CardPage from "./pages/CardPage"
import Resume from "./pages/BuildYourResume.jsx"
import ClubIntro from "./components/ClubInfo/ClubIntro"
import PlacementStats from "./components/PlacementStats/PlacementStats"
import ResumeBuilder from "./components/ResumeBuilder/Resumebuilder"
import AllClubs from "./components/AllCubs"
import ApplyPage from "./pages/ApplyPage"
import RecruiterLogin from "./pages/RecruiterLogin"
import RecruiterAdminPanel from "./pages/RecruiterAdminPanel"
import PostJob from "./pages/PostJob"
import TechnicalTestLogin from "./pages/TechnicalTestLogin"
import JobPosting from "./components/JobPosting/JobPosting"
import QuizApp from "./pages/QuizApp"
import Register from "./pages/Register"
import axios from "axios"
import Resources from "./pages/Resources"
import PlacementRoadmap from "./components/ResourcePageComponents/PlacementRoadmap"
import FacingInterview from "./components/ResourcePageComponents/FacingInterview"
import Companies from "./components/ResourcePageComponents/Companies"
import ResumeInfo from "./components/ResourcePageComponents/ResumeInfo"
import Analysis from "./components/ResourcePageComponents/Analytics"
import EventDetails from "./components/ResourcePageComponents/EventsDetails"
import Job_Boarding from "./components/JobBoarding/Job_Borading"
import Form from "./components/JobBoarding/Form"
import CompanyProfile from "./components/JobPosting/CompanyProfile"
import ExperiencePage from "./pages/ExperiencePage"
import JobLists from "./components/JobPosting/JobLists"
import JobDetails from "./pages/JobDetails"

axios.defaults.withCredentials = true

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/students/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/students/profile",
    element: <ProfilePage />,
  },
  {
    path: "/students/community",
    element: <CardPage data={data} />,
  },
  {
    path: "/studnets/resume",
    element: <Resume />,
  },
  // {
  //   path: "/students/tables",
  //   element: <PlacementTable/>
  // },
  {
    path: "/students/club",
    element: <ClubIntro />,
  },
  {
    path: "/students/placementStats",
    element: <PlacementStats />,
  },
  {
    path: "/students/resumebulider",
    element: <ResumeBuilder />,
  },
  {
    path: "/students/allclubs",
    element: <AllClubs />,
  },
  {
    path: "/students/applypage",
    element: <ApplyPage />,
  },
  {
    path: "/recruiter/login",
    element: <RecruiterLogin />,
  },
  {
    path: "/recruiter/adminpanel",
    element: <RecruiterAdminPanel />,
  },
  {
    path: "/recruiter/postjob",
    element: <PostJob />,
  },
  {
    path: "/students/technicaltestlogin",
    element: <TechnicalTestLogin />,
  },
  {
    path: "/recruiter/jobposting",
    element: <JobPosting />,
  },
  {
    path: "/students/quizapp",
    element: <QuizApp />,
  },
  {
    path: "/students/register",
    element: <Register />,
  },
  {
    path: "/students/resource",
    element: <Resources />,
  },
  {
    path: "/students/resource/process",
    element: <PlacementRoadmap />,
  },
  {
    path: "/students/resource/interview",
    element: <FacingInterview />,
  },
  {
    path: "/students/resource/companies",
    element: <Companies />,
  },
  {
    path: "/students/resource/resume_info",
    element: <ResumeInfo />,
  },
  {
    path: "/students/resource/analytics",
    element: <Analysis />,
  },
  {
    path: "/students/resource/eventdetails",
    element: <EventDetails />,
  },
  {
    path: "/students/resource/jobboarding",
    element: <Job_Boarding />,
  },
  {
    path: "/students/resource/applyjob",
    element: <Form />,
  },
  {
    path: "/recruiter/companyprofile",
    element: <CompanyProfile />,
  },
  {
    path: "/student/experiencesharing",
    element: <ExperiencePage />,
  },
  {
    path: "/recruiter/joblists",
    element: <JobLists />,
  },
  {
    path: "/students/resource/jobboarding/jobdetail/:id",
    element: <JobDetails />,
  },
  // {
  //   path:"/resumeBuilder",
  //   element:
  // }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
