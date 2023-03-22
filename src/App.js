import CardPage from "./pages/CardPage.jsx"
import data from "./components/Card/CardData"
import HomePage from "./pages/HomePage"
import {ProfilePage} from "./pages/ProfilePage.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import {Route, Routes} from "react-router-dom"
import ClubIntro from "./components/ClubInfo/ClubIntro.jsx"
import PlacementStats from "./components/PlacementStats/PlacementStats.jsx"
import AllClubs from "./components/AllCubs.jsx"
import RecruiterLogin from "./pages/RecruiterLogin.jsx"
import RecruiterAdminPanel from "./pages/RecruiterAdminPanel.jsx"
import TechnicalTestLogin from "./pages/TechnicalTestLogin.jsx"
import JobPosting from "./components/JobPosting/JobPosting.jsx"
import QuizApp from "./pages/QuizApp.jsx"
import Register from "./pages/Register.jsx"
import Resources from "./pages/Resources.jsx"
import PlacementRoadmap from "./components/ResourcePageComponents/PlacementRoadmap.jsx"
import FacingInterview from "./components/ResourcePageComponents/FacingInterview.jsx"
import Companies from "./components/ResourcePageComponents/Companies.jsx"
import Analytics from './components/ResourcePageComponents/Analytics.jsx'
import EventDetails from "./components/ResourcePageComponents/EventsDetails.jsx"
import Job_boarding from './components/JobBoarding/Job_Borading'
import Form from "./components/JobBoarding/Form.jsx"
import CompanyProfile from "./components/JobPosting/CompanyProfile.jsx"
import ExperiencePage from './pages/ExperiencePage.jsx';
import JobLists from  './components/JobPosting/JobLists';
import Body from "./components/ResumeBuilder/Body/Body.js"
// import { Profile } from "./components/Profile Page Component/Profile.jsx";
import Error_404 from "./components/Error_404/Error"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students/dashboard" element={<></>} />
        <Route path="/students/profile" element={<ProfilePage />} />
        <Route path="/students/profile/:id" element={<ProfilePage />} />
        <Route path="/students/register" element={<Register />} />
        <Route path="/students/community" element={<CardPage data={data} />} />
        <Route path="/students/club" element={<ClubIntro />} />
        <Route path="/students/placementstats" element={<PlacementStats />} />
        <Route path="/students/resumebuilder" element={<Body />} />
        <Route path="/students/allclubs" element={<AllClubs />} />
        <Route path="/recruiter/login" element={<RecruiterLogin />} />
        <Route path="/recruiter/adminpanel" element={<RecruiterAdminPanel />} />
        <Route
          path="/students/technicaltestlogin"
          element={<TechnicalTestLogin />}
        />
        <Route path="/recruiter/jobposting" element={<JobPosting />} />
        <Route path="/students/quizapp" element={<QuizApp />} />
        <Route path="/students/resource" element={<Resources />} />
        <Route
          path="/students/resource/process"
          element={<PlacementRoadmap />}
        />
        <Route
          path="/students/resource/interview"
          element={<FacingInterview />}
        />
        <Route path="/students/resource/companies" element={<Companies />} />
        <Route path="/students/resource/analytics" element={<Analytics />} />
        <Route path="/students/resource/eventdetails" element={<EventDetails />} />
        <Route path="/students/resource/jobboarding" element={<Job_boarding />} />
        <Route path="/students/resource/applyjob" element={<Form />} />
        <Route path="/recruiter/companyprofile/:id" element={<CompanyProfile />} />
        <Route path="/student/experiencesharing" element={<ExperiencePage />} />
        <Route path="/recruiter/joblists" element={<JobLists />} />
        <Route path="*" element={<Error_404 />} />
      </Routes>
    </div>
  )
}

export default App
