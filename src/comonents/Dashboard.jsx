// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faCircle,
//   faBuilding,
//   faBirthdayCake,
//   faUserClock,
//   faInfoCircle,
//   faEllipsisV,
//   faChevronDown,
//   faClock
// } from '@fortawesome/free-solid-svg-icons';

// const Dashboard = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen p-4">
//       <div className="max-w-5xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* Task Statistics Card */}
//           <div className="bg-white rounded-lg shadow-sm">
//             <div className="p-4 pb-0">
//               <h2 className="text-gray-800 font-medium mb-4">Task Statistics</h2>

//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <div className="bg-gray-100 rounded p-3">
//                   <p className="text-gray-600 text-sm mb-1">Total Tasks</p>
//                   <p className="text-2xl font-bold text-gray-800">0</p>
//                 </div>
//                 <div className="bg-gray-100 rounded p-3">
//                   <p className="text-gray-600 text-sm mb-1">Overdue Tasks</p>
//                   <p className="text-2xl font-bold text-gray-800">0</p>
//                 </div>
//               </div>

//               <div className="flex h-2 mb-4">
//                 <div className="bg-blue-600 w-2/3 rounded-l-full"></div>
//                 <div className="bg-cyan-500 w-1/3 rounded-r-full"></div>
//               </div>

//               <div className="space-y-3 pb-4">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <FontAwesomeIcon icon={faCircle} className="text-blue-600 text-xs mr-2" />
//                     <span className="text-gray-700 text-sm">Completed Tasks</span>
//                   </div>
//                   <span className="text-gray-800 font-medium">34</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <FontAwesomeIcon icon={faCircle} className="text-yellow-500 text-xs mr-2" />
//                     <span className="text-gray-700 text-sm">In-progress Tasks</span>
//                   </div>
//                   <span className="text-gray-800 font-medium">17</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Company Links Card */}
//           <div className="bg-white rounded-lg shadow-sm">
//             <div className="p-4 pb-3">
//               <div className="flex items-center">
//                 <FontAwesomeIcon icon={faBuilding} className="text-orange-500 mr-2" />
//                 <h2 className="text-gray-800 font-medium">Company Links</h2>
//               </div>
//               <div className="pt-3 pb-2">
//                 <p className="text-gray-500 text-sm">Prosys Cp</p>
//               </div>
//             </div>
//           </div>

//           {/* Celebrations Card */}
//           <div className="bg-white rounded-lg shadow-sm">
//             <div className="p-4 pb-0">
//               <div className="flex items-center mb-4">
//                 <FontAwesomeIcon icon={faBirthdayCake} className="text-orange-500 mr-2" />
//                 <h2 className="text-gray-800 font-medium">Celebrations</h2>
//               </div>

//               <div className="flex items-center justify-between pb-4">
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
//                     <img 
//                       src="/images/luis.jpg" 
//                       alt="Luis Reyes" 
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div>
//                     <p className="text-gray-800 font-medium">Luis Reyes</p>
//                     <p className="text-gray-500 text-sm">May 19 - Happy Birthday!</p>
//                   </div>
//                 </div>
//                 <button className="text-gray-400">
//                   <FontAwesomeIcon icon={faEllipsisV} />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Who's Out Card */}
//           <div className="bg-white rounded-lg shadow-sm">
//             <div className="p-4">
//               <div className="flex items-center mb-4">
//                 <FontAwesomeIcon icon={faUserClock} className="text-orange-500 mr-2" />
//                 <h2 className="text-gray-800 font-medium">Who's Out</h2>
//               </div>

//               <div className="mb-4">
//                 <p className="text-gray-800 font-medium text-sm mb-1">Today</p>
//                 <p className="text-gray-500 text-sm">Nobody requested time off for today</p>
//               </div>

//               <div className="mb-4">
//                 <p className="text-gray-800 font-medium text-sm mb-1">Tomorrow</p>
//                 <p className="text-gray-500 text-sm">Nobody requested time off for tomorrow</p>
//               </div>

//               <a href="#" className="text-blue-500 text-sm block">Full Calendar</a>
//             </div>
//           </div>
//         </div>

//         {/* What's happening section */}
//         <div className="bg-white rounded-lg shadow-sm mt-4">
//           <div className="p-4 pb-0">
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center">
//                 <FontAwesomeIcon icon={faInfoCircle} className="text-orange-500 mr-2" />
//                 <h2 className="text-gray-800 font-medium">What's happening at Prosys Cp</h2>
//               </div>
//               <button className="text-gray-400">
//                 <FontAwesomeIcon icon={faChevronDown} />
//               </button>
//             </div>

//             <div className="space-y-4">
//               <div className="flex pb-4">
//                 <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
//                   <FontAwesomeIcon icon={faClock} className="text-gray-500 text-sm" />
//                 </div>
//                 <div>
//                   <p className="text-gray-800">You have 3 timesheets waiting for approval.</p>
//                   <p className="text-red-500 text-sm">Approval due Apr 30 at 11:00 AM (4 days ago) past due</p>
//                 </div>
//               </div>

//               <div className="flex pb-4">
//                 <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden mr-3">
//                   <img 
//                     src="/images/lisa.jpg" 
//                     alt="Lisa Costa" 
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div>
//                   <p className="text-gray-800">Hours for Lisa Costa are ready for approval.</p>
//                   <p className="text-red-500 text-sm">Approval due Apr 14 at 11:00 AM (14 days ago) past due</p>
//                 </div>
//               </div>

//               <div className="flex pb-4">
//                 <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden mr-3">
//                   <img 
//                     src="/images/oscar.jpg" 
//                     alt="Oscar Alejandro"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div>
//                   <p className="text-gray-800">OSCAR ALEJANDRO FUENTES RAMIREZ applied for the Programador de Robot Kuka opening.</p>
//                   <p className="text-gray-500 text-sm">1 month ago</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;







import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLink,
    faBirthdayCake,
    faUserClock,
    faBullhorn,
    faEllipsisH,
    faChevronDown,
    faClock
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <div className="max-w-4xl mx-auto">
                {/* Top row with 2 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {/* Task Statistics Card */}
                    <div className="bg-white rounded-lg shadow">
                        <div className="p-5">
                            <h2 className="text-gray-800 font-medium mb-5">Task Statistics</h2>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-gray-50 rounded p-4">
                                    <p className="text-gray-600 text-sm mb-1">Total Tasks</p>
                                    <p className="text-3xl font-bold">0</p>
                                </div>
                                <div className="bg-gray-50 rounded p-4">
                                    <p className="text-gray-600 text-sm mb-1">Overdue Tasks</p>
                                    <p className="text-3xl font-bold">0</p>
                                </div>
                            </div>

                            <div className="flex mb-6 text-white text-center">
                                <div className="bg-[#0F5FAA] w-[66.67%]">66.6%</div>
                                <div className="bg-[#00A7CA] w-[33.33%]">33.4%</div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        <div className="w-3 h-3 rounded-full bg-[#5E38BA] mr-2"></div>
                                        <span className="text-gray-700 text-sm">Completed Tasks</span>
                                    </div>
                                    <span className="text-gray-700 font-medium">34</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        <div className="w-3 h-3 rounded-full bg-[#F59E0B] mr-2"></div>
                                        <span className="text-gray-700 text-sm">Inprogress Tasks</span>
                                    </div>
                                    <span className="text-gray-700 font-medium">17</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Company Links Card */}
                    <div className="bg-white rounded-lg shadow">
                        <div className="p-4">
                            <div className="flex items-center mb-4">
                                <FontAwesomeIcon icon={faLink} className="text-[#F97316] mr-2" />
                                <h2 className="text-[#F97316] font-medium">Company Links</h2>
                            </div>
                            <div className="p-2">
                                <p className="text-gray-500 text-sm">Prosys Cp</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle row with 2 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {/* Celebrations Card */}
                    <div className="bg-white rounded-lg shadow">
                        <div className="p-4">
                            <div className="flex items-center mb-4">
                                <FontAwesomeIcon icon={faBirthdayCake} className="text-[#F97316] mr-2" />
                                <h2 className="text-[#F97316] font-medium">Celebrations</h2>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img
                                        src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Luis Reyes"
                                        className="w-10 h-10 rounded-full object-cover mr-3"
                                    />
                                    <div>
                                        <p className="text-gray-800 font-medium">Luis Reyes</p>
                                        <p className="text-gray-500 text-sm">May 14 - Happy Birthday!</p>
                                    </div>
                                </div>
                                <button className="text-gray-400">
                                    <FontAwesomeIcon icon={faEllipsisH} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Who's Out Card */}
                    <div className="bg-white rounded-lg shadow">
                        <div className="p-4">
                            <div className="flex items-center mb-4 border-b">
                                <FontAwesomeIcon icon={faUserClock} className="text-[#F97316] mr-2" />
                                <h2 className="text-[#E86A33] font-medium">Who's Out</h2>
                            </div>

                            <div className="mb-3">
                                <p className="text-[#E86A33] font-medium text-sm mb-1">Today</p>
                                <p className="text-gray-500 text-sm">Nobody requested time off for today</p>
                            </div>

                            <div className="mb-4">
                                <p className="text-[#E86A33] font-medium text-sm mb-1">Tomorrow</p>
                                <p className="text-gray-500 text-sm">Nobody requested time off for tomorrow</p>
                            </div>

                            <a href="#" className="text-black text-sm">Full Calendar</a>
                        </div>
                    </div>
                </div>

                {/* What's happening section */}
                <div className="bg-white rounded-lg shadow">
                    <div className="p-4">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faBullhorn} className="text-[#F97316] mr-2" />
                                <h2 className="text-gray-800 font-medium">What's happening at Prosys Cp</h2>
                            </div>
                            <button className="text-gray-400">
                                <FontAwesomeIcon icon={faChevronDown} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            {/* First notification */}
                            <div className="flex">
                                <div className="flex-shrink-0 mr-3 mt-1">
                                    <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                                        <FontAwesomeIcon icon={faClock} className="text-gray-500" />
                                    </div>
                                </div>
                                <div>
                                    <p className="">You have 3 timesheets waiting for approval.</p>
                                    <p className="text-[#E86A33] text-xs">Approval due Apr 30 at 11:00 AM (6 days ago), past due</p>
                                </div>
                            </div>

                            {/* Second notification */}
                            <div className="flex">
                                <div className="flex-shrink-0 mr-3 mt-1">
                                    <img
                                        src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="Lisa Costa"
                                        className="w-8 h-8 rounded-lg object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-gray-800">Hours for Lisa Costa are ready for approval.</p>
                                    <p className="text-[#E86A33] text-xs">Approval due Apr 14 at 11:00 AM (24 days ago), past due</p>
                                </div>
                            </div>

                            {/* Third notification */}
                            <div className="flex">
                                <div className="flex-shrink-0 mr-3 mt-1">
                                    <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                                        <FontAwesomeIcon icon={faUserClock} className="text-gray-500" />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-gray-800">OSCAR ALEJANDRO FUENTES RAMIREZ applied for the Programador de Robot Kuka opening.</p>
                                    <p className="text-gray-500 text-xs">3 month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
