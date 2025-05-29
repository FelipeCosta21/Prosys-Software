// src/ProjectsPage.jsx
import { useState } from 'react';
import ProjectDashboard from '../comonents/ProjectDashboard';
import ProjectDetails from '../comonents/ProjectDetails';

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {selectedProject ? (
        <ProjectDetails project={selectedProject} onBack={handleBackToProjects} />
      ) : (
        <ProjectDashboard onProjectClick={handleProjectClick} />
      )}
    </div>
  );
}

export default ProjectsPage;
