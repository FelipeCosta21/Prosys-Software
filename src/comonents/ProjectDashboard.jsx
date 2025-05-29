// // src/components/ProjectDashboard.jsx
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';
// import { projectsData } from '../data/dummyData';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const ProjectDashboard = ({ onProjectClick }) => {
//   return (
//     <div className="container mx-auto py-8 px-4">
//       <h1 className="text-3xl font-bold mb-8">Projects Dashboard</h1>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projectsData.map((project) => (
//           <div key={project.id} className="cursor-pointer" onClick={() => onProjectClick(project)}>
//             <div className="bg-white rounded-lg shadow-md overflow-hidden">
//               <div className={`${project.bgColor} p-4`}>
//                 <h2 className="text-2xl font-bold text-white">{project.name}</h2>
//               </div>
//               <div className={`${project.iconBgColor} p-10 flex justify-center items-center`}>
//                 {project.icon}
//               </div>
//               <div className="p-4 flex justify-center">
//                 <div className="w-40 h-40">
//                   <Doughnut data={project.chartData} options={{ plugins: { legend: { display: false } } }} />
//                 </div>
//               </div>
//               <div className="p-4">
//                 <div className="flex justify-between text-sm">
//                   <div className="flex items-center">
//                     <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
//                     <span>Organic Search</span>
//                   </div>
//                   <span className="font-semibold">{project.chartData.datasets[0].data[0]}%</span>
//                 </div>
//                 <div className="flex justify-between text-sm mt-2">
//                   <div className="flex items-center">
//                     <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
//                     <span>Direct</span>
//                   </div>
//                   <span className="font-semibold">{project.chartData.datasets[0].data[1]}%</span>
//                 </div>
//                 <div className="flex justify-between text-sm mt-2">
//                   <div className="flex items-center">
//                     <div className="w-3 h-3 rounded-full bg-orange-300 mr-2"></div>
//                     <span>Social</span>
//                   </div>
//                   <span className="font-semibold">{project.chartData.datasets[0].data[2]}%</span>
//                 </div>
//                 <div className="flex justify-between text-sm mt-2">
//                   <div className="flex items-center">
//                     <div className="w-3 h-3 rounded-full bg-orange-200 mr-2"></div>
//                     <span>Referral</span>
//                   </div>
//                   <span className="font-semibold">{project.chartData.datasets[0].data[3]}%</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectDashboard;





// ProjectDashboard.jsx
import { useNavigate } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { projectsData } from '../data/dummyData';
import { FaLaptop, FaUsers, FaFileAlt, FaHourglassHalf, FaProjectDiagram, FaToggleOn } from 'react-icons/fa';

ChartJS.register(ArcElement, Tooltip, Legend);

const ProjectDashboard = () => {
  const navigate = useNavigate();

  const handleProjectClick = (id) => {
    navigate(`/project/${id}`);
  };
  
  // Function to render the correct icon based on iconType
  const renderIcon = (iconType) => {
    const iconStyle = "text-white w-24 h-24";
    switch (iconType) {
      case 'laptop': return <FaLaptop className={iconStyle} />;
      case 'users': return <FaUsers className={iconStyle} />;
      case 'file': return <FaFileAlt className={iconStyle} />;
      case 'hourglass': return <FaHourglassHalf className={iconStyle} />;
      case 'projectDiagram': return <FaProjectDiagram className={iconStyle} />;
      case 'toggle': return <FaToggleOn className={iconStyle} />;
      default: return <FaLaptop className={iconStyle} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <div key={project.id} className="cursor-pointer" onClick={() => handleProjectClick(project.id)}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Project header with name */}
              <div className="bg-teal-700 p-4">
                <h2 className="text-2xl font-bold text-white">{project.name}</h2>
              </div>
              
              {/* Icon section */}
              <div className={`${project.iconBgColor} flex justify-center items-center py-12`}>
                {renderIcon(project.iconType)}
              </div>
              
              {/* Chart section */}
              <div className="p-4 flex justify-center">
                <div className="w-40 h-40">
                  <Doughnut 
                    data={project.chartData}
                    options={{ plugins: { legend: { display: false } } }}
                  />
                </div>
              </div>
              
              {/* Legend */}
              <div className="p-4">
                <div className="flex justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <span>Organic Search</span>
                  </div>
                  <span className="font-semibold">{project.chartData.datasets[0].data[0]}%</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
                    <span>Direct</span>
                  </div>
                  <span className="font-semibold">{project.chartData.datasets[0].data[1]}%</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-orange-300 mr-2"></div>
                    <span>Social</span>
                  </div>
                  <span className="font-semibold">{project.chartData.datasets[0].data[2]}%</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-orange-200 mr-2"></div>
                    <span>Referral</span>
                  </div>
                  <span className="font-semibold">{project.chartData.datasets[0].data[3]}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDashboard;
