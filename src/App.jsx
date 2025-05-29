import { Routes, Route } from 'react-router-dom'
import Homepage from './comonents/Homepage'
import Dashboard from './comonents/Dashboard'
import MyInfo from './comonents/MyInfo'
import LoginPage from './comonents/Login_page'
import PeopleDirectory from './comonents/PeopleDirectory'
import PerformanceDashboard from './comonents/PerformanceDashboard'
import ProjectDetails from './comonents/ProjectDetails'
import Sidebar from './comonents/Sidebar'
import ProjectsPage from './pages/ProjectsPage'
import ProjectsDashboard from './comonents/ProjectsDashboard2'
import HRDashboard from './comonents/HRDashboard'
import HeroSection from './comonents/HeroSection'



function App() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
   
      <div className="h-screen overflow-y-auto">
        <Sidebar />
      </div>  
      {/* Main Content: Takes remaining width with scrolling */}
      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<Dashboard />} />
          <Route path="/my-info" element={<MyInfo />} />
          <Route path="/prosys-team" element={<PeopleDirectory />} />
          <Route path="/evaluation" element={<PerformanceDashboard />} />
          <Route path="/project" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/dashboard" element={<ProjectsDashboard />} />
          <Route path="/hr-dashboard" element={<HRDashboard />} />
          <Route path="/hero" element={<HeroSection />} />
          
        </Routes>
      </div>
    </div>
  )
}

export default App

