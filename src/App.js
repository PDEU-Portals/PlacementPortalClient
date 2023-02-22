import CardPage from "./pages/CardPage.jsx"
import data from "./components/Card/CardData"
import HomePage from "./pages/HomePage"
import { ProfilePage } from "./pages/ProfilePage.jsx";
import Dashboard from './pages/Dashboard.jsx';
import { Route, Routes } from "react-router-dom";
import Club_intro from "./components/Club_info/Club_intro.jsx";
import Placement_stats from "./components/PlacementStats/PlacementStats.jsx";
import Resumebuilder from "./components/ResumeBuilder/Resumebuilder.jsx";
import All_clubs from "./components/All_clubs.jsx";
import Job_Boarding from "./components/Job_Boarding/Job_Boarding.jsx";
import ApplyPage from "./pages/ApplyPage.jsx";
import RecruiterLogin from "./pages/RecruiterLogin.jsx";
import RecruiterAdminPanel from "./pages/RecruiterAdminPanel.jsx";
import PostJob from "./pages/PostJob.jsx";
import TechnicalTestLogin from "./pages/TechnicalTestLogin.jsx";
import JobPosting from "./components/JobPosting/JobPosting.jsx";
import QuizApp from "./pages/QuizApp.jsx";
import Register from "./pages/Register.jsx";
import Resources from "./pages/Resources.jsx";
import PlacementRoadmap from "./components/ResourcePageComponents/PlacementRoadmap.jsx";
import FacingInterview from "./components/ResourcePageComponents/FacingInterview.jsx";
import Companies from "./components/ResourcePageComponents/Companies.jsx";
import ResumeInfo from "./components/ResourcePageComponents/ResumeInfo.jsx";
// import { Profile } from "./components/Profile Page Component/Profile.jsx";
function App() {
    
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students/dashboard" element={<></>} />
        <Route path="/students/profile" element={<ProfilePage />} />
        <Route path="/students/register" element={<Register />} />
        <Route path="/students/community" element={<CardPage data={data} />} />
        <Route path="/students/club" element={<Club_intro />} />
        <Route path="/students/placement_stats" element={<Placement_stats />} />
        <Route path="/students/resume_builder" element={<Resumebuilder />} />
        <Route path="/students/all_clubs" element={<All_clubs />} />
        <Route path="/students/job_boarding" element={<Job_Boarding />} />
        <Route path="/students/apply_page" element={<ApplyPage />} />
        <Route path="/recruiter/login" element={<RecruiterLogin />} />
        <Route path="/recruiter/admin_panel" element={<RecruiterAdminPanel />} />
        <Route path="/recruiter/post_job" element={<PostJob />} />
        <Route path="/students/technical_test_login" element={<TechnicalTestLogin />} />
        <Route path="/recruiter/job_posting" element={<JobPosting />} />
        <Route path="/students/quiz_app" element={<QuizApp />} />
        <Route path="/students/resource" element={<Resources />} />
        <Route path="/students/resource/process" element={<PlacementRoadmap />} />
        <Route path="/students/resource/interview" element={<FacingInterview />} />
        <Route path="/students/resource/companies" element={<Companies />} />
        <Route path="/students/resource/resume_info" element={<ResumeInfo />} />
      </Routes>
    </div>
  );
}

export default App;