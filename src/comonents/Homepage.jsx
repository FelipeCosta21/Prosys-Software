import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faLock,
  faCalendarAlt,
  faCog,
  faUsers,
  faProjectDiagram,
  faGem,
  faTicketAlt,
  faThumbsUp,
  faExchangeAlt,
  faLink,
  faBirthdayCake,
  faUserClock,
  faBullhorn,
  faChevronDown,
  faClock,
  faChartBar,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons';

const Homepage = () => {
  const [stats, setStats] = useState({
    employees: { active: 4, inactive: 0 },
    projects: { count: 0, completed: 0 },
    tasks: { count: 0, completed: 0 },
    absents: { count: 0, status: 0 },
    presents: { count: 4, status: 0 },
    tickets: { total: 0, open: 0, closed: 0 }
  });

  const [activeTab, setActiveTab] = useState('myTeam');

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Main Content Area */}
      <div className="flex-1 p-5 overflow-auto w-[60%]">
        {/* Top Navigation Cards */}
        <div className="grid grid-cols-4 gap-4 mb-5">
          {/* Employees Card */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center">
              <div className="bg-gray-100 h-12 w-12 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faUser} className="text-gray-500" />
              </div>
              <div className="ml-auto text-right">
                <div className="text-blue-500 text-sm">Employees</div>
                <div className="text-blue-500 text-lg font-medium mb-1">{stats.employees.active + stats.employees.inactive}</div>
                <div className="text-xs">
                  <span className="text-green-500 bg-green-100 px-2 py-1 rounded-sm mr-1">Active {stats.employees.active}</span>
                  <span className="text-red-500 bg-red-100 px-2 py-1 rounded-sm">Inactive {stats.employees.inactive}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Permission Card */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center">
              <div className="bg-gray-100 h-12 w-12 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faLock} className="text-gray-500" />
              </div>
              <div className="ml-auto text-right">
                <div className="text-blue-500 text-sm">Permission</div>
                <div className="text-blue-500 text-lg font-medium mb-1">Roles</div>
                <button className="bg-gray-100 text-xs text-gray-600 px-2 py-1 rounded">Set Roles</button>
              </div>
            </div>
          </div>

          {/* Management Card */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center">
              <div className="bg-gray-100 h-12 w-12 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-500" />
              </div>
              <div className="ml-auto text-right">
                <div className="text-gray-600 text-sm">Management</div>
                <div className="text-gray-800 text-lg font-medium mb-1">Leave</div>
                <button className="bg-gray-100 text-xs text-gray-600 px-2 py-1 rounded">View Application</button>
              </div>
            </div>
          </div>

          {/* Theme Card */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center">
              <div className="bg-gray-100 h-12 w-12 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faCog} className="text-gray-500" />
              </div>
              <div className="ml-auto text-right">
                <div className="text-gray-600 text-sm">Theme</div>
                <div className="text-gray-800 text-lg font-medium mb-1">Settings</div>
                <button className="bg-gray-100 text-xs text-gray-600 px-2 py-1 rounded">Configuration</button>
              </div>
            </div>
          </div>
        </div>

        {/* My Team Section */}
        <div className="bg-white rounded-lg shadow-sm mb-5">
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faUsers} className="text-[#FF6B35] mr-2" />
              <h2 className="text-[#FF6B35] font-medium">My Team</h2>
            </div>
          </div>

          <div className="p-5 flex">
            {/* Team Members */}
            <div className="flex-grow flex space-x-24">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl overflow-hidden mb-2">
                  <img src="https://www.shutterstock.com/shutterstock/photos/1554086789/display_1500/stock-photo-close-up-portrait-of-yong-woman-casual-portrait-in-positive-view-big-smile-beautiful-model-posing-1554086789.jpg" alt="Team member Lisa Costa" className="w-full h-full object-cover" />
                </div>
                <span className="text-gray-700 text-sm">Lisa Costa</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl overflow-hidden mb-2">
                  <img src="https://www.shutterstock.com/shutterstock/photos/1554086789/display_1500/stock-photo-close-up-portrait-of-yong-woman-casual-portrait-in-positive-view-big-smile-beautiful-model-posing-1554086789.jpg" alt="Team member Gio Piñon" className="w-full h-full object-cover" />
                </div>
                <span className="text-gray-700 text-sm">Gio Piñon</span>
              </div>
            </div>

            {/* Headcount */}
            <div className="border-l border-gray-200 pl-6 min-w-[180px]">
              <div className="flex items-center mb-3">
                <FontAwesomeIcon icon={faChartBar} className="text-gray-500 mr-2" />
                <span className="text-gray-700">Headcount</span>
              </div>

              <div className="space-y-2">
                <div className="bg-[#FF6B35] text-white rounded-md p-2 flex items-center">
                  <FontAwesomeIcon icon={faUsers} className="mr-2" />
                  <span>My Team</span>
                </div>

                <div className="hover:bg-gray-100 rounded-md p-2 flex items-center">
                  <FontAwesomeIcon icon={faExchangeAlt} className="text-gray-500 mr-2" />
                  <span className="text-gray-700">Turnover</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-5">
          {/* Projects Card */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faProjectDiagram} className="text-gray-500" />
              </div>
              <div className="text-right">
                <div className="text-blue-500 text-2xl font-bold">{stats.projects.count}</div>
                <div className="text-xs text-blue-500">Projects</div>
              </div>
            </div>
            <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-100 pt-3">
              <span>Completed</span>
              <span>{stats.projects.count > 0 ? Math.round((stats.projects.completed / stats.projects.count) * 100) : 0}%</span>
            </div>
          </div>

          {/* Tasks Card */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faGem} className="text-gray-500" />
              </div>
              <div className="text-right">
                <div className="text-blue-500 text-2xl font-bold">{stats.tasks.count}</div>
                <div className="text-xs text-blue-500">Tasks</div>
              </div>
            </div>
            <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-100 pt-3">
              <span>Completed</span>
              <span>{stats.tasks.count > 0 ? Math.round((stats.tasks.completed / stats.tasks.count) * 100) : 0}%</span>
            </div>
          </div>

          {/* Absents Card */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-500" />
              </div>
              <div className="text-right">
                <div className="text-blue-500 text-2xl font-bold">{stats.absents.count}</div>
                <div className="text-xs text-blue-500">Today Absents</div>
              </div>
            </div>
            <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-100 pt-3">
              <span>Absent Status</span>
              <span>{stats.absents.status}%</span>
            </div>
          </div>

          {/* Presents Card */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-500" />
              </div>
              <div className="text-right">
                <div className="text-blue-500 text-2xl font-bold">{stats.presents.count}</div>
                <div className="text-xs text-blue-500">Today Presents</div>
              </div>
            </div>
            <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-100 pt-3">
              <span>Present Status</span>
              <span>{stats.presents.status}%</span>
            </div>
          </div>
        </div>

        {/* Tickets Section */}
        <div className="grid grid-cols-3 gap-4 mb-5">
          {/* Total Tickets */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center">
              <div className="bg-[#E6FAFC] w-14 h-14 rounded-lg flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={faTicketAlt} className="text-[#00BCD4] text-xl" />
              </div>
              <div>
                <div className="text-2xl font-bold">{stats.tickets.total}</div>
                <div className="text-gray-500 text-sm">Total Tickets</div>
              </div>
            </div>
          </div>

          {/* Open Tickets */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center">
              <div className="bg-[#FFEBEE] w-14 h-14 rounded-lg flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={faTicketAlt} className="text-[#F44336] text-xl" />
              </div>
              <div>
                <div className="text-2xl font-bold">{stats.tickets.open}</div>
                <div className="text-gray-500 text-sm">Open Tickets</div>
              </div>
            </div>
          </div>

          {/* Closed Tickets */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center">
              <div className="bg-[#E8F5E9] w-14 h-14 rounded-lg flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={faThumbsUp} className="text-[#4CAF50] text-xl" />
              </div>
              <div>
                <div className="text-2xl font-bold">{stats.tickets.closed}</div>
                <div className="text-gray-500 text-sm">Closed Tickets</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-4 border-b border-gray-100">
            <h2 className="font-medium">Recent Projects</h2>
          </div>

          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left p-4 text-gray-600 font-medium">Project Name</th>
                <th className="text-left p-4 text-gray-600 font-medium">Progress</th>
                <th className="text-left p-4 text-gray-600 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {stats.projects.count === 0 ? (
                <tr>
                  <td colSpan="3" className="p-4 text-center text-gray-500">
                    No projects to display
                  </td>
                </tr>
              ) : (
                /* Render project rows when available */
                null
              )}
            </tbody>
          </table>

          <div className="p-4 border-t border-gray-100">
            <a href="#" className="text-gray-600 hover:text-gray-800">View all projects</a>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-[40%] p-5 border-l border-gray-200 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Task Statistics Card */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-5">
              <h2 className="text-gray-800 font-medium mb-5">Task Statistics</h2>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded p-4">
                  <p className="text-gray-600 text-sm mb-1">Total Tasks</p>
                  <p className="text-3xl font-bold">{stats.tasks.count}</p>
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
                    alt="Employee Luis Reyes birthday celebration"
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="text-gray-800 font-medium">Luis Reyes</p>
                    <p className="text-gray-500 text-sm">May 14 - Happy Birthday!</p>
                  </div>
                </div>
                <button className="text-gray-400" aria-label="More options">
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
              <button className="text-gray-400" aria-label="Expand">
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
                    alt="Profile picture of Lisa Costa"
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
                  <p className="text-gray-500 text-xs">3 months ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
