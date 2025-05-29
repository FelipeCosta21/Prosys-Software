// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faUserPlus,
//   faSearch,
//   faEllipsisH,
//   faChevronDown,
//   faChevronUp,
//   faFilter,
//   faFileExport
// } from '@fortawesome/free-solid-svg-icons';

// const PeopleDirectory = () => {
//   const [activeView, setActiveView] = useState('orgchart');
//   const [employeeFilter, setEmployeeFilter] = useState('All Employees');
//   const [statusFilter, setStatusFilter] = useState('Active');
//   const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
//   const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  
//   // Profile image for all employees
//   const profileImage = "https://www.shutterstock.com/shutterstock/photos/1554086789/display_1500/stock-photo-close-up-portrait-of-yong-woman-casual-portrait-in-positive-view-big-smile-beautiful-model-posing-1554086789.jpg";

//   // Mock employee data matching the screenshots
//   const employees = [
//     {
//       id: 1,
//       photo: profileImage,
//       preferredName: 'Felipe',
//       lastName: 'Costa',
//       jobTitle: 'CEO',
//       department: 'Administración Ejecutiva',
//       employmentStatus: 'Full-Time',
//       reportingTo: null,
//       hireDate: '01/01/2024',
//       directReports: [2, 3]
//     },
//     {
//       id: 2,
//       photo: profileImage,
//       preferredName: 'Lisa',
//       lastName: 'Costa',
//       jobTitle: 'Responsable de Administración',
//       department: 'Administración',
//       employmentStatus: 'Full-Time',
//       reportingTo: 1,
//       hireDate: '01/02/2024',
//       directReports: [4, 8]
//     },
//     {
//       id: 3,
//       photo: profileImage,
//       preferredName: 'Gio',
//       lastName: 'Piñon',
//       jobTitle: 'Responsable de Gestión',
//       department: 'Gestión',
//       employmentStatus: 'Full-Time',
//       reportingTo: 1,
//       hireDate: '15/01/2024',
//       directReports: [5, 6]
//     },
//     {
//       id: 4,
//       photo: profileImage,
//       preferredName: 'Jacqueline',
//       lastName: 'Lopez',
//       jobTitle: 'Asistente de Administración',
//       department: 'Administración',
//       employmentStatus: 'Full-Time',
//       reportingTo: 2,
//       hireDate: '04/12/2024',
//       directReports: []
//     },
//     {
//       id: 5,
//       photo: profileImage,
//       preferredName: 'Esteban',
//       lastName: 'Abarca',
//       jobTitle: 'Responsable PLC',
//       department: 'Operacional',
//       employmentStatus: 'Full-Time',
//       reportingTo: 3,
//       hireDate: '22/07/2024',
//       directReports: [7]
//     },
//     {
//       id: 6,
//       photo: profileImage,
//       preferredName: 'Kenny',
//       lastName: 'Luevanos',
//       jobTitle: 'Responsable PLC',
//       department: 'Operacional',
//       employmentStatus: 'Full-Time',
//       reportingTo: 3,
//       hireDate: '21/04/2025',
//       directReports: []
//     },
//     {
//       id: 7,
//       photo: profileImage,
//       preferredName: 'Federico',
//       lastName: 'Montesinos',
//       jobTitle: 'Programador de PLC',
//       department: 'Operacional',
//       employmentStatus: 'Full-Time',
//       reportingTo: 5,
//       hireDate: '01/02/2024',
//       directReports: []
//     },
//     {
//       id: 8,
//       photo: profileImage,
//       preferredName: 'Luis',
//       lastName: 'Perez',
//       jobTitle: 'Asistente de Gestión',
//       department: 'Gestión',
//       employmentStatus: 'Full-Time',
//       reportingTo: 2,
//       hireDate: '15/03/2024',
//       directReports: []
//     },
//   ];

//   // Add CSS styles for org chart manually
//   useEffect(() => {
//     const styleElement = document.createElement('style');
//     styleElement.innerHTML = `
//       .org-chart-container {
//         position: relative;
//         overflow: auto;
//         min-height: 500px;
//       }
      
//       .org-node {
//         position: relative;
//         margin: 0 auto;
//         text-align: center;
//         width: 190px;
//       }
      
//       .org-level {
//         display: flex;
//         justify-content: center;
//         margin-bottom: 50px;
//       }
      
//       .org-level .org-node {
//         margin: 0 20px;
//       }
      
//       .org-node-content {
//         background-color: white;
//         border: 1px solid #e5e7eb;
//         border-radius: 0.5rem;
//         padding: 1rem;
//         text-align: center;
//         box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
//         position: relative;
//       }
      
//       .org-node .profile-img {
//         width: 56px;
//         height: 56px;
//         border-radius: 50%;
//         object-fit: cover;
//         border: 2px solid white;
//         box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
//       }
      
//       .org-node .employee-name {
//         color: #C15815;
//         font-weight: 500;
//         margin-top: 8px;
//         margin-bottom: 4px;
//       }
      
//       .org-node .employee-title {
//         color: #4b5563;
//         font-size: 0.875rem;
//         margin-bottom: 4px;
//       }
      
//       .org-node .employee-department {
//         color: #6b7280;
//         font-size: 0.75rem;
//       }
      
//       .org-node .employee-more {
//         color: #6b7280;
//         font-size: 0.75rem;
//         margin-top: 4px;
//       }
      
//       .org-node .dropdown-button {
//         position: absolute;
//         top: -10px;
//         right: -10px;
//         z-index: 2;
//       }
      
//       .org-node .children-count {
//         position: absolute;
//         bottom: -12px;
//         left: 50%;
//         transform: translateX(-50%);
//       }
      
//       .org-node .children-count-circle {
//         background-color: #e5e7eb;
//         width: 24px;
//         height: 24px;
//         border-radius: 9999px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         font-size: 0.75rem;
//         color: #4b5563;
//       }
      
//       .vertical-line {
//         height: 20px;
//         width: 2px;
//         background-color: #ddd;
//         margin: 0 auto;
//       }
      
//       .horizontal-line {
//         height: 2px;
//         background-color: #ddd;
//         margin: 0 auto;
//       }
//     `;
//     document.head.appendChild(styleElement);

//     return () => {
//       document.head.removeChild(styleElement);
//     };
//   }, []);

//   // Add new employee function
//   const addNewEmployee = () => {
//     alert("New employee would be added with the provided profile image!");
//   };

//   // Find employee's manager for the list view
//   const getReportingToName = (reportingToId) => {
//     if (!reportingToId) return '';
//     const manager = employees.find(emp => emp.id === reportingToId);
//     return manager ? `${manager.preferredName} ${manager.lastName}` : '';
//   };

//   // Simple manually created org chart component
//   const OrgChartView = () => {
//     // Build a simple 3-level org chart structure with CEOs at top level
//     const ceo = employees.find(emp => emp.reportingTo === null);
    
//     // Get direct reports of CEO
//     const directReportsOfCEO = employees.filter(emp => emp.reportingTo === ceo.id);
    
//     // Get second level direct reports
//     const renderSecondLevelEmployees = (managerId) => {
//       const directReports = employees.filter(emp => emp.reportingTo === managerId);
      
//       if (directReports.length === 0) return null;
      
//       return (
//         <div className="org-level">
//           {directReports.map(employee => (
//             <div key={employee.id} className="org-node">
//               <div className="org-node-content">
//                 <div className="dropdown-button">
//                   <button className="bg-gray-100 border border-gray-300 rounded-full h-6 w-6 flex items-center justify-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </button>
//                 </div>
                
//                 <div className="flex justify-center">
//                   <img 
//                     src={employee.photo} 
//                     alt={`${employee.preferredName} ${employee.lastName}`} 
//                     className="profile-img" 
//                   />
//                 </div>
//                 <div className="employee-name">{employee.preferredName} {employee.lastName}</div>
//                 <div className="employee-title">{employee.jobTitle}</div>
//                 <div className="employee-department">{employee.department}</div>
                
//                 <div className="children-count">
//                   <div className="children-count-circle">{employee.directReports.length}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       );
//     };
    
//     return (
//       <div className="org-chart-container">
//         {/* CEO Level */}
//         <div className="org-level">
//           <div className="org-node">
//             <div className="org-node-content">
//               <div className="dropdown-button">
//                 <button className="bg-gray-100 border border-gray-300 rounded-full h-6 w-6 flex items-center justify-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </button>
//               </div>
              
//               <div className="flex justify-center">
//                 <img 
//                   src={ceo.photo} 
//                   alt={`${ceo.preferredName} ${ceo.lastName}`} 
//                   className="profile-img" 
//                 />
//               </div>
//               <div className="employee-name">{ceo.preferredName} {ceo.lastName}</div>
//               <div className="employee-title">{ceo.jobTitle}</div>
//               <div className="employee-department">{ceo.department}</div>
//               <div className="employee-more">More...</div>
              
//               <div className="children-count">
//                 <div className="children-count-circle">{ceo.directReports.length}</div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Vertical connector */}
//         <div className="vertical-line"></div>
        
//         {/* First level direct reports */}
//         <div className="org-level">
//           {directReportsOfCEO.map(employee => (
//             <div key={employee.id} className="org-node">
//               <div className="org-node-content">
//                 <div className="dropdown-button">
//                   <button className="bg-gray-100 border border-gray-300 rounded-full h-6 w-6 flex items-center justify-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </button>
//                 </div>
                
//                 <div className="flex justify-center">
//                   <img 
//                     src={employee.photo} 
//                     alt={`${employee.preferredName} ${employee.lastName}`} 
//                     className="profile-img" 
//                   />
//                 </div>
//                 <div className="employee-name">{employee.preferredName} {employee.lastName}</div>
//                 <div className="employee-title">{employee.jobTitle}</div>
//                 <div className="employee-department">{employee.department}</div>
//                 <div className="employee-more">More...</div>
                
//                 <div className="children-count">
//                   <div className="children-count-circle">{employee.directReports.length}</div>
//                 </div>
//               </div>
              
//               {/* Vertical connector to any direct reports */}
//               {employee.directReports.length > 0 && (
//                 <div className="vertical-line"></div>
//               )}
//             </div>
//           ))}
//         </div>
        
//         {/* Second level direct reports */}
//         {directReportsOfCEO.map(employee => (
//           employee.directReports.length > 0 && (
//             <div key={`reports-${employee.id}`}>
//               {renderSecondLevelEmployees(employee.id)}
//             </div>
//           )
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-4xl font-bold text-[#C15815]">
//           {activeView === 'orgchart' ? (
//             <>
//               Org Chart <span className="text-xl font-normal text-gray-500">(12)</span>
//             </>
//           ) : (
//             'People'
//           )}
//         </h1>
        
//         <a href="#" className="text-blue-600 hover:underline flex items-center">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
//           </svg>
//           Quick access to the directory
//         </a>
//       </div>

//       {/* Action Bar */}
//       <div className="flex justify-between items-center mb-6">
//         <div className="left-side">
//           <button 
//             onClick={addNewEmployee}
//             className="flex items-center text-[#C15815] border border-[#C15815] rounded-full px-4 py-2 hover:bg-[#FFF8F5]"
//           >
//             <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
//             New Employee
//           </button>
//         </div>

//         <div className="view-switcher flex items-center">
//           <div className="bg-[#C15815] text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold mr-4">
//             {activeView === 'list' ? '1' : '2'}
//           </div>
          
//           <div className="flex border border-gray-300 rounded-lg overflow-hidden">
//             <button 
//               className={`px-6 py-2 flex items-center ${activeView === 'list' ? 'bg-[#C15815] text-white' : 'bg-white text-gray-700'}`}
//               onClick={() => setActiveView('list')}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
//               </svg>
//               List
//             </button>
            
//             <button 
//               className={`px-6 py-2 flex items-center ${activeView === 'directory' ? 'bg-[#C15815] text-white' : 'bg-white text-gray-700'}`}
//               onClick={() => setActiveView('directory')}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//               </svg>
//               Directory
//             </button>
            
//             <button 
//               className={`px-6 py-2 flex items-center ${activeView === 'orgchart' ? 'bg-[#C15815] text-white' : 'bg-white text-gray-700'}`}
//               onClick={() => setActiveView('orgchart')}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//               </svg>
//               Org Chart
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* List View Controls */}
//       {activeView === 'list' && (
//         <div className="flex justify-between items-center mb-6">
//           <div className="flex items-center">
//             <button className="p-2 border border-gray-200 rounded mr-3">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
//               </svg>
//             </button>
            
//             <div className="relative inline-block mr-3">
//               <button 
//                 onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
//                 className="flex items-center justify-between bg-white border border-gray-200 py-2 pl-4 pr-10 rounded-md min-w-[160px]"
//               >
//                 <span>{employeeFilter}</span>
//                 <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 text-gray-400 text-sm" />
//               </button>
              
//               {filterDropdownOpen && (
//                 <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
//                   <div className="py-1">
//                     <button 
//                       className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//                       onClick={() => {
//                         setEmployeeFilter('All Employees');
//                         setFilterDropdownOpen(false);
//                       }}
//                     >
//                       All Employees
//                     </button>
//                     <button 
//                       className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//                       onClick={() => {
//                         setEmployeeFilter('Direct Reports');
//                         setFilterDropdownOpen(false);
//                       }}
//                     >
//                       Direct Reports
//                     </button>
//                     <button 
//                       className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//                       onClick={() => {
//                         setEmployeeFilter('Department');
//                         setFilterDropdownOpen(false);
//                       }}
//                     >
//                       Department
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
            
//             <div className="flex items-center border border-gray-200 rounded-md px-3 py-1.5">
//               <FontAwesomeIcon icon={faSearch} className="text-gray-400 mr-2" />
//               <span className="text-gray-600">12</span>
//             </div>
//           </div>
          
//           <div className="flex items-center">
//             <span className="text-gray-600 mr-2">Showing</span>
//             <div className="relative inline-block">
//               <button 
//                 onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
//                 className="flex items-center justify-between bg-white border border-gray-200 py-2 pl-4 pr-10 rounded-md min-w-[100px]"
//               >
//                 <span>{statusFilter}</span>
//                 <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 text-gray-400 text-sm" />
//               </button>
              
//               {statusDropdownOpen && (
//                 <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
//                   <div className="py-1">
//                     <button 
//                       className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//                       onClick={() => {
//                         setStatusFilter('Active');
//                         setStatusDropdownOpen(false);
//                       }}
//                     >
//                       Active
//                     </button>
//                     <button 
//                       className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//                       onClick={() => {
//                         setStatusFilter('Inactive');
//                         setStatusDropdownOpen(false);
//                       }}
//                     >
//                       Inactive
//                     </button>
//                     <button 
//                       className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//                       onClick={() => {
//                         setStatusFilter('All');
//                         setStatusDropdownOpen(false);
//                       }}
//                     >
//                       All
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
            
//             <button className="ml-4 p-2 border border-gray-200 rounded">
//               <FontAwesomeIcon icon={faEllipsisH} className="text-gray-500" />
//             </button>
//           </div>
//         </div>
//       )}
      
//       {/* Org Chart Controls */}
//       {activeView === 'orgchart' && (
//         <div className="flex justify-between items-center mb-6">
//           <div className="relative flex items-center w-64">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
//             </div>
//             <input 
//               type="text" 
//               placeholder="Jump to an employee..." 
//               className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
          
//           <div className="flex items-center">
//             <div className="relative inline-block mr-4">
//               <select 
//                 className="appearance-none bg-white border border-gray-200 py-2 pl-4 pr-10 rounded-md focus:outline-none"
//               >
//                 <option>4</option>
//                 <option>3</option>
//                 <option>2</option>
//                 <option>1</option>
//               </select>
//               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
//                 <FontAwesomeIcon icon={faChevronDown} className="text-gray-400 text-sm" />
//               </div>
//             </div>
            
//             <button className="p-2 border border-gray-200 rounded mr-4">
//               <FontAwesomeIcon icon={faChevronUp} className="text-gray-500" />
//             </button>
            
//             <div className="relative inline-block mr-4">
//               <button className="flex items-center bg-white border border-gray-200 py-2 px-3 rounded-md">
//                 <FontAwesomeIcon icon={faFilter} className="text-gray-500 mr-1" />
//                 <FontAwesomeIcon icon={faChevronDown} className="text-gray-400 text-sm" />
//               </button>
//             </div>
            
//             <div className="relative inline-block">
//               <button className="flex items-center bg-white border border-gray-200 py-2 px-4 rounded-md">
//                 <FontAwesomeIcon icon={faFileExport} className="mr-2" />
//                 Export
//                 <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-gray-400 text-sm" />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* List View Content */}
//       {activeView === 'list' && (
//         <div className="bg-white rounded-lg shadow">
//           <div className="overflow-x-auto">
//             <table className="min-w-full">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="py-3 px-6 text-left font-medium text-gray-600">Employee Photo</th>
//                   <th className="py-3 px-6 text-left font-medium text-gray-600">Preferred Name</th>
//                   <th className="py-3 px-6 text-left font-medium text-gray-600">Last Name</th>
//                   <th className="py-3 px-6 text-left font-medium text-gray-600">Job Title</th>
//                   <th className="py-3 px-6 text-left font-medium text-gray-600">Department</th>
//                   <th className="py-3 px-6 text-left font-medium text-gray-600">Employment Status</th>
//                   <th className="py-3 px-6 text-left font-medium text-gray-600">Reporting To</th>
//                   <th className="py-3 px-6 text-left font-medium text-gray-600">Hire Date</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {employees.map((employee) => (
//                   <tr key={employee.id} className="hover:bg-gray-50">
//                     <td className="py-3 px-6">
//                       <div className="w-12 h-12 rounded-full overflow-hidden">
//                         <img 
//                           src={employee.photo} 
//                           alt={`${employee.preferredName} ${employee.lastName}`}
//                           className="w-full h-full object-cover" 
//                         />
//                       </div>
//                     </td>
//                     <td className="py-3 px-6">
//                       <a href="#" className="text-blue-600 hover:underline">
//                         {employee.preferredName}
//                       </a>
//                     </td>
//                     <td className="py-3 px-6">
//                       <a href="#" className="text-blue-600 hover:underline">
//                         {employee.lastName}
//                       </a>
//                     </td>
//                     <td className="py-3 px-6">{employee.jobTitle}</td>
//                     <td className="py-3 px-6">{employee.department}</td>
//                     <td className="py-3 px-6">{employee.employmentStatus}</td>
//                     <td className="py-3 px-6">
//                       {employee.reportingTo && (
//                         <a href="#" className="text-blue-600 hover:underline">
//                           {getReportingToName(employee.reportingTo)}
//                         </a>
//                       )}
//                     </td>
//                     <td className="py-3 px-6">{employee.hireDate}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}

//       {/* Org Chart View */}
//       {activeView === 'orgchart' && (
//         <div className="bg-white rounded-lg shadow p-6 relative">
//           <OrgChartView />
//         </div>
//       )}

//       {/* Directory View */}
//       {activeView === 'directory' && (
//         <div className="bg-white rounded-lg shadow p-8 text-center">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//           </svg>
//           <h2 className="text-xl font-medium text-gray-700 mb-2">Directory View</h2>
//           <p className="text-gray-500">This view is under development</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PeopleDirectory;




import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserPlus,
  faSearch,
  faEllipsisH,
  faChevronDown,
  faChevronUp,
  faFilter,
  faFileExport
} from '@fortawesome/free-solid-svg-icons';

const PeopleDirectory = () => {
  const [activeView, setActiveView] = useState('orgchart');
  const [employeeFilter, setEmployeeFilter] = useState('All Employees');
  const [statusFilter, setStatusFilter] = useState('Active');
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  
  // Profile image for all employees
  const profileImage = "https://www.shutterstock.com/shutterstock/photos/1554086789/display_1500/stock-photo-close-up-portrait-of-yong-woman-casual-portrait-in-positive-view-big-smile-beautiful-model-posing-1554086789.jpg";

  // Mock employee data matching the screenshots
  const employees = [
    {
      id: 1,
      photo: profileImage,
      preferredName: 'Felipe',
      lastName: 'Costa',
      jobTitle: 'CEO',
      department: 'Administración Ejecutiva',
      employmentStatus: 'Full-Time',
      reportingTo: null,
      hireDate: '01/01/2024',
      directReports: [2, 3]
    },
    {
      id: 2,
      photo: profileImage,
      preferredName: 'Lisa',
      lastName: 'Costa',
      jobTitle: 'Responsable de Administración',
      department: 'Administración',
      employmentStatus: 'Full-Time',
      reportingTo: 1,
      hireDate: '01/02/2024',
      directReports: [4, 8]
    },
    {
      id: 3,
      photo: profileImage,
      preferredName: 'Gio',
      lastName: 'Piñon',
      jobTitle: 'Responsable de Gestión',
      department: 'Gestión',
      employmentStatus: 'Full-Time',
      reportingTo: 1,
      hireDate: '15/01/2024',
      directReports: [5, 6]
    },
    {
      id: 4,
      photo: profileImage,
      preferredName: 'Jacqueline',
      lastName: 'Lopez',
      jobTitle: 'Asistente de Administración',
      department: 'Administración',
      employmentStatus: 'Full-Time',
      reportingTo: 2,
      hireDate: '04/12/2024',
      directReports: []
    },
    {
      id: 5,
      photo: profileImage,
      preferredName: 'Esteban',
      lastName: 'Abarca',
      jobTitle: 'Responsable PLC',
      department: 'Operacional',
      employmentStatus: 'Full-Time',
      reportingTo: 3,
      hireDate: '22/07/2024',
      directReports: [7]
    },
    {
      id: 6,
      photo: profileImage,
      preferredName: 'Kenny',
      lastName: 'Luevanos',
      jobTitle: 'Responsable PLC',
      department: 'Operacional',
      employmentStatus: 'Full-Time',
      reportingTo: 3,
      hireDate: '21/04/2025',
      directReports: []
    },
    {
      id: 7,
      photo: profileImage,
      preferredName: 'Federico',
      lastName: 'Montesinos',
      jobTitle: 'Programador de PLC',
      department: 'Operacional',
      employmentStatus: 'Full-Time',
      reportingTo: 5,
      hireDate: '01/02/2024',
      directReports: []
    },
    {
      id: 8,
      photo: profileImage,
      preferredName: 'Luis',
      lastName: 'Perez',
      jobTitle: 'Asistente de Gestión',
      department: 'Gestión',
      employmentStatus: 'Full-Time',
      reportingTo: 2,
      hireDate: '15/03/2024',
      directReports: []
    },
  ];

  // Add CSS styles for org chart manually
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      .org-chart-container {
        position: relative;
        overflow: auto;
        min-height: 500px;
      }
      
      .org-node {
        position: relative;
        margin: 0 auto;
        text-align: center;
        width: 190px;
      }
      
      .org-level {
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
      }
      
      .org-level .org-node {
        margin: 0 20px;
      }
      
      .org-node-content {
        background-color: white;
        border: 1px solid #e5e7eb;
        border-radius: 0.5rem;
        padding: 1rem;
        text-align: center;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        position: relative;
      }
      
      .org-node .profile-img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid white;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      }
      
      .org-node .employee-name {
        color: #C15815;
        font-weight: 500;
        margin-top: 8px;
        margin-bottom: 4px;
      }
      
      .org-node .employee-title {
        color: #4b5563;
        font-size: 0.875rem;
        margin-bottom: 4px;
      }
      
      .org-node .employee-department {
        color: #6b7280;
        font-size: 0.75rem;
      }
      
      .org-node .employee-more {
        color: #6b7280;
        font-size: 0.75rem;
        margin-top: 4px;
      }
      
      .org-node .dropdown-button {
        position: absolute;
        top: -10px;
        right: -10px;
        z-index: 2;
      }
      
      .org-node .children-count {
        position: absolute;
        bottom: -12px;
        left: 50%;
        transform: translateX(-50%);
      }
      
      .org-node .children-count-circle {
        background-color: #e5e7eb;
        width: 24px;
        height: 24px;
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        color: #4b5563;
      }
      
      .vertical-line {
        height: 20px;
        width: 2px;
        background-color: #ddd;
        margin: 0 auto;
      }
      
      .horizontal-line {
        height: 2px;
        background-color: #ddd;
        margin: 0 auto;
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Add new employee function
  const addNewEmployee = () => {
    alert("New employee would be added with the provided profile image!");
  };

  // Find employee's manager for the list view
  const getReportingToName = (reportingToId) => {
    if (!reportingToId) return '';
    const manager = employees.find(emp => emp.id === reportingToId);
    return manager ? `${manager.preferredName} ${manager.lastName}` : '';
  };

  // Simple manually created org chart component
  const OrgChartView = () => {
    // Build a simple 3-level org chart structure with CEOs at top level
    const ceo = employees.find(emp => emp.reportingTo === null);
    
    // Get direct reports of CEO
    const directReportsOfCEO = employees.filter(emp => emp.reportingTo === ceo.id);
    
    // Get second level direct reports
    const renderSecondLevelEmployees = (managerId) => {
      const directReports = employees.filter(emp => emp.reportingTo === managerId);
      
      if (directReports.length === 0) return null;
      
      return (
        <div className="org-level">
          {directReports.map(employee => (
            <div key={employee.id} className="org-node">
              <div className="org-node-content">
                <div className="dropdown-button">
                  <button className="bg-gray-100 border border-gray-300 rounded-full h-6 w-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex justify-center">
                  <img 
                    src={employee.photo} 
                    alt={`${employee.preferredName} ${employee.lastName}`} 
                    className="profile-img" 
                  />
                </div>
                <div className="employee-name">{employee.preferredName} {employee.lastName}</div>
                <div className="employee-title">{employee.jobTitle}</div>
                <div className="employee-department">{employee.department}</div>
                
                <div className="children-count">
                  <div className="children-count-circle">{employee.directReports.length}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    };
    
    return (
      <div className="org-chart-container">
        {/* CEO Level */}
        <div className="org-level">
          <div className="org-node">
            <div className="org-node-content">
              <div className="dropdown-button">
                <button className="bg-gray-100 border border-gray-300 rounded-full h-6 w-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              <div className="flex justify-center">
                <img 
                  src={ceo.photo} 
                  alt={`${ceo.preferredName} ${ceo.lastName}`} 
                  className="profile-img" 
                />
              </div>
              <div className="employee-name">{ceo.preferredName} {ceo.lastName}</div>
              <div className="employee-title">{ceo.jobTitle}</div>
              <div className="employee-department">{ceo.department}</div>
              <div className="employee-more">More...</div>
              
              <div className="children-count">
                <div className="children-count-circle">{ceo.directReports.length}</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Vertical connector */}
        <div className="vertical-line"></div>
        
        {/* First level direct reports */}
        <div className="org-level">
          {directReportsOfCEO.map(employee => (
            <div key={employee.id} className="org-node">
              <div className="org-node-content">
                <div className="dropdown-button">
                  <button className="bg-gray-100 border border-gray-300 rounded-full h-6 w-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex justify-center">
                  <img 
                    src={employee.photo} 
                    alt={`${employee.preferredName} ${employee.lastName}`} 
                    className="profile-img" 
                  />
                </div>
                <div className="employee-name">{employee.preferredName} {employee.lastName}</div>
                <div className="employee-title">{employee.jobTitle}</div>
                <div className="employee-department">{employee.department}</div>
                <div className="employee-more">More...</div>
                
                <div className="children-count">
                  <div className="children-count-circle">{employee.directReports.length}</div>
                </div>
              </div>
              
              {/* Vertical connector to any direct reports */}
              {employee.directReports.length > 0 && (
                <div className="vertical-line"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Second level direct reports */}
        {directReportsOfCEO.map(employee => (
          employee.directReports.length > 0 && (
            <div key={`reports-${employee.id}`}>
              {renderSecondLevelEmployees(employee.id)}
            </div>
          )
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-[#C15815]">
          {activeView === 'orgchart' ? (
            <>
              Org Chart <span className="text-xl font-normal text-gray-500">(12)</span>
            </>
          ) : (
            'People'
          )}
        </h1>
        
        <a href="#" className="text-blue-600 hover:underline flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          Quick access to the directory
        </a>
      </div>

      {/* Action Bar */}
      <div className="flex justify-between items-center mb-6">
        <div className="left-side">
          <button 
            onClick={addNewEmployee}
            className="flex items-center text-[#C15815] border border-[#C15815] rounded-full px-4 py-2 hover:bg-[#FFF8F5]"
          >
            <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
            New Employee
          </button>
        </div>

        <div className="view-switcher flex items-center">
          {/* <div className="bg-[#C15815] text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold mr-4">
            {activeView === 'list' ? '1' : '2'}
          </div> */}
          
          <div className="flex  rounded-lg overflow-hidden">
            <button 
              className={`px-6 py-2 flex items-center ${activeView === 'list' ? 'text-[#C15815] border-b-2' : 'bg-white text-gray-700'}`}
              onClick={() => setActiveView('list')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              List
            </button>
            
            <button 
              className={`px-6 py-2 flex items-center ${activeView === 'directory' ? 'text-[#C15815] border-b-2' : 'bg-white text-gray-700'}`}
              onClick={() => setActiveView('directory')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Directory
            </button>
            
            <button 
              className={`px-6 py-2 flex items-center ${activeView === 'orgchart' ? 'text-[#C15815] border-b-2 ' : 'bg-white text-gray-700'}`}
              onClick={() => setActiveView('orgchart')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Org Chart
            </button>
          </div>
        </div>
      </div>

      {/* List View Controls */}
      {activeView === 'list' && (
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <button className="p-2 border border-gray-200 rounded-2xl mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
            </button>
            
            <div className="relative inline-block mr-3">
              <button 
                onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
                className="flex items-center justify-between bg-white border border-gray-200 py-2 pl-4 pr-10 rounded-full b min-w-[160px]"
              >
                <span>{employeeFilter}</span>
                <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 text-gray-400 text-sm" />
              </button>
              
              {filterDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg">
                  <div className="py-1">
                    <button 
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setEmployeeFilter('All Employees');
                        setFilterDropdownOpen(false);
                      }}
                    >
                      All Employees
                    </button>
                    <button 
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setEmployeeFilter('Direct Reports');
                        setFilterDropdownOpen(false);
                      }}
                    >
                      Direct Reports
                    </button>
                    <button 
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setEmployeeFilter('Department');
                        setFilterDropdownOpen(false);
                      }}
                    >
                      Department
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex items-center border border-gray-200 rounded-full px-3 py-1.5">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400 mr-2" />
              <span className="text-gray-600">12</span>
            </div>
          </div>
          
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">Showing</span>
            <div className="relative inline-block">
              <button 
                onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
                className="flex items-center justify-between bg-white border border-gray-200 py-2 pl-4 pr-10 rounded-full min-w-[100px]"
              >
                <span>{statusFilter}</span>
                <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 text-gray-400 text-sm" />
              </button>
              
              {statusDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg">
                  <div className="py-1">
                    <button 
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setStatusFilter('Active');
                        setStatusDropdownOpen(false);
                      }}
                    >
                      Active
                    </button>
                    <button 
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setStatusFilter('Inactive');
                        setStatusDropdownOpen(false);
                      }}
                    >
                      Inactive
                    </button>
                    <button 
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setStatusFilter('All');
                        setStatusDropdownOpen(false);
                      }}
                    >
                      All
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <button className="ml-4 p-2 border border-gray-200 rounded-2xl">
              <FontAwesomeIcon icon={faEllipsisH} className="text-gray-500" />
            </button>
          </div>
        </div>
      )}
      
      {/* Org Chart Controls */}
      {activeView === 'orgchart' && (
        <div className="flex justify-between items-center mb-6">
          <div className="relative flex items-center w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder="Jump to an employee..." 
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex items-center">
            <div className="relative inline-block mr-4">
              <select 
                className="appearance-none bg-white border border-gray-200 py-2 pl-4 pr-10 rounded-full focus:outline-none"
              >
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <FontAwesomeIcon icon={faChevronDown} className="text-gray-400 text-sm" />
              </div>
            </div>
            
            <button className="p-2 border border-gray-200 rounded mr-4">
              <FontAwesomeIcon icon={faChevronUp} className="text-gray-500" />
            </button>
            
            <div className="relative inline-block mr-4">
              <button className="flex items-center bg-white border border-gray-200 py-2 px-3 rounded-md">
                <FontAwesomeIcon icon={faFilter} className="text-gray-500 mr-1" />
                <FontAwesomeIcon icon={faChevronDown} className="text-gray-400 text-sm" />
              </button>
            </div>
            
            <div className="relative inline-block">
              <button className="flex items-center bg-white border border-gray-200 py-2 px-4 rounded-md">
                <FontAwesomeIcon icon={faFileExport} className="mr-2" />
                Export
                <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-gray-400 text-sm" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* List View Content */}
      {activeView === 'list' && (
        <div className="bg-white rounded-lg shadow">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-6 text-left font-medium text-gray-600">Employee Photo</th>
                  <th className="py-3 px-6 text-left font-medium text-gray-600">Preferred Name</th>
                  <th className="py-3 px-6 text-left font-medium text-gray-600">Last Name</th>
                  <th className="py-3 px-6 text-left font-medium text-gray-600">Job Title</th>
                  <th className="py-3 px-6 text-left font-medium text-gray-600">Department</th>
                  <th className="py-3 px-6 text-left font-medium text-gray-600">Employment Status</th>
                  <th className="py-3 px-6 text-left font-medium text-gray-600">Reporting To</th>
                  <th className="py-3 px-6 text-left font-medium text-gray-600">Hire Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {employees.map((employee) => (
                  <tr key={employee.id} className="hover:bg-gray-50">
                    <td className="py-3 px-6">
                      <div className="w-12 h-12 rounded-xl overflow-hidden">
                        <img 
                          src={employee.photo} 
                          alt={`${employee.preferredName} ${employee.lastName}`}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </td>
                    <td className="py-3 px-6">
                      <a href="#" className="text-blue-600 hover:underline">
                        {employee.preferredName}
                      </a>
                    </td>
                    <td className="py-3 px-6">
                      <a href="#" className="text-blue-600 hover:underline">
                        {employee.lastName}
                      </a>
                    </td>
                    <td className="py-3 px-6">{employee.jobTitle}</td>
                    <td className="py-3 px-6">{employee.department}</td>
                    <td className="py-3 px-6">{employee.employmentStatus}</td>
                    <td className="py-3 px-6">
                      {employee.reportingTo && (
                        <a href="#" className="text-blue-600 hover:underline">
                          {getReportingToName(employee.reportingTo)}
                        </a>
                      )}
                    </td>
                    <td className="py-3 px-6">{employee.hireDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Org Chart View */}
      {activeView === 'orgchart' && (
        <div className="bg-white rounded-lg shadow p-6 relative">
          <OrgChartView />
        </div>
      )}

      {/* Directory View */}
      {activeView === 'directory' && (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <h2 className="text-xl font-medium text-gray-700 mb-2">Directory View</h2>
          <p className="text-gray-500">This view is under development</p>
        </div>
      )}
    </div>
  );
};

export default PeopleDirectory;
