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
import Club_intro from "./components/Club_info/Club_intro"
import Placement_stats from "./components/PlacementStats/PlacementStats"
import Resume_builder from "./components/ResumeBuilder/Resumebuilder"
import All_clubs from "./components/All_clubs"
import Job_Boarding from "./components/Job_Boarding/Job_Boarding"
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
    element: <Club_intro />,  
  },
  {
    path: "/students/placement_stats",
    element: <Placement_stats />,
  },
  {
    path: "/students/resume_bulider",
    element: <Resume_builder />,
  },
  {
    path: "/students/all_clubs",
    element: <All_clubs />,
  },
  {
    path: "/students/job_boarding",
    element: <Job_Boarding />,
  },
  {
    path: "/students/apply_page",
    element: <ApplyPage />,
  },
  {
    path: "/recruiter/login",
    element: <RecruiterLogin />,
  },
  {
    path: "/recruiter/admin_panel",
    element: <RecruiterAdminPanel />,
  },
  {
    path: "/recruiter/post_job",
    element: <PostJob />,
  },
  {
    path: "/students/technical_test_login",
    element: <TechnicalTestLogin />,
  },
  {
    path: "/recruiter/job_posting",
    element: <JobPosting />,
  },
  {
    path: "/students/quiz_app",
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
  }
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
