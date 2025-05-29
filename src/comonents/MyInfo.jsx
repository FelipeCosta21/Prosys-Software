import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faCalendarAlt,
    faUsers,
    faProjectDiagram,
    faIdCard,
    faPhone,
    faEnvelope,
    faClock,
    faMapMarkerAlt,
    faBriefcase,
    faChevronDown,
    faSearch,
    faUpload,
    faThLarge,
    faDownload,
    faFolder,
    faCog,
    faEllipsisH,
    faHistory,
    faCalculator,
    faExchangeAlt,
    faHandshake,
    faMedal,
    faCalendarDay
} from '@fortawesome/free-solid-svg-icons';

const MyInfo = () => {
    const [activeSection, setActiveSection] = useState('personal');
    const [badgeNumber, setBadgeNumber] = useState(1);

    // Change badge number based on active section
    useEffect(() => {
        const badgeMap = {
            'personal': 1,
            'job': 2,
            'timeOff': 3,
            'timesheet': 4,
            'documents': 5
        };
        setBadgeNumber(badgeMap[activeSection] || 1);
    }, [activeSection]);

    // Handle tab navigation
    const handleNavClick = (section) => {
        setActiveSection(section);
    };

    // Personal Section
    const renderPersonalSection = () => (
        <div className="flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                    <span className="text-[#C15815] text-2xl mr-3">
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                    <h1 className="text-[#C15815] text-2xl font-medium">Personal</h1>
                </div>

                <button className="flex items-center gap-2 text-blue-600 px-4 py-2 rounded">
                    <FontAwesomeIcon icon={faCog} />
                    <span>Customize Layout</span>
                    <FontAwesomeIcon icon={faChevronDown} />
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-5">
                    <span className="text-[#C15815] mr-3">
                        <FontAwesomeIcon icon={faIdCard} />
                    </span>
                    <h2 className="text-[#C15815] text-xl font-medium">Basic Information</h2>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Employee #</label>
                        <input type="text" value="001" className="border border-gray-300 p-2.5 w-full rounded-xl text-gray-700" readOnly />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Status</label>
                        <input type="text" value="Active" className="border border-gray-300 p-2.5 w-full rounded-xl text-gray-700" readOnly />
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-6 mb-6">
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">First Name</label>
                        <input type="text" value="Felipe" className="border border-gray-300 p-2.5 w-full rounded-xl text-gray-700" readOnly />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Middle Name</label>
                        <input type="text" className="border border-gray-300 p-2.5 w-full rounded-xl" readOnly />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Last Name</label>
                        <input type="text" value="Costa" className="border border-gray-300 p-2.5 w-full rounded-xl text-gray-700" readOnly />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Preferred Name</label>
                        <input type="text" className="border border-gray-300 p-2.5 w-full rounded-xl" readOnly />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Birth Date</label>
                        <div className="flex border border-gray-300 rounded-xl">
                            <input type="text" value="27/11/1997" className="border-gray-300 p-2.5 w-full rounded-xl  text-gray-700" readOnly />

                        </div>
                        <span className="text-gray-500 text-sm block mt-2">Age: 27</span>
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">SSN</label>
                        <input type="text" className="border border-gray-300 p-2.5 w-full rounded-xl" readOnly />
                    </div>
                </div>
            </div>
        </div>
    );

    // Job Section (Job tab)
    const renderJobSection = () => (
        <div className="flex bg-white flex-col">
            <div className="mb-6  p-2">
                <h2 className="text-xl font-medium mb-2">Hire Date</h2>
                <div className="flex items-center border border-gray-300 rounded-xl p-2.5 w-64 mb-6">
                    <input
                        type="text"
                        value="01/01/2024"
                        className="flex-grow outline-none"
                        readOnly
                    />
                    <button className="ml-2 text-gray-500">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-6">
                    <div>
                        <h2 className="text-xl font-medium mb-2">Ethnicity</h2>
                        <div className="border border-gray-300 rounded-xl p-2.5">
                            <span>White</span>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-medium mb-2">EEO Job Category</h2>
                        <div className="border border-gray-300 rounded-xl p-2.5">
                            <span>Executive/Senior ...</span>
                        </div>
                    </div>
                </div>

                <h2 className="text-xl font-medium mb-4">Veteran Status</h2>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <input type="checkbox" className="h-5 w-5 border border-gray-300 rounded-xl mr-3" />
                        <label className="text-gray-700">Active Duty Wartime or Campaign Badge Veteran</label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" className="h-5 w-5 border border-gray-300 rounded-xl mr-3" />
                        <label className="text-gray-700">Armed Forces Service Medal Veteran</label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" className="h-5 w-5 border border-gray-300 rounded-xl mr-3" />
                        <label className="text-gray-700">Disabled Veteran</label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" className="h-5 w-5 border border-gray-300 rounded-xl mr-3" />
                        <label className="text-gray-700">Recently Separated Veteran</label>
                    </div>
                </div>

                <h2 className="text-xl font-medium mt-8 mb-2">Direct Reports</h2>
                <div className="text-blue-600">
                    <p className="mb-1">Lisa Costa</p>
                    <p>Gio Piñon</p>
                </div>
            </div>
        </div>
    );

    // Time Off Section
    const renderTimeOffSection = () => (
        <div className="flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                    <span className="text-[#C15815] mr-3 text-2xl">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </span>
                    <h1 className="text-[#C15815] text-2xl font-medium">Time Off</h1>
                </div>

                <div className="relative">
                    <button className="flex items-center gap-1 text-gray-600 p-2 border border-gray-300 rounded-full">
                        <FontAwesomeIcon icon={faCog} />
                        <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8">
                {/* Card 1 */}
                <div className="bg-white rounded-lg shadow-sm p-5">
                    <div className="flex mb-4">
                        <div className="w-12 h-12 rounded-lg bg-[#FFF1EC] flex items-center justify-center mr-3">
                            <FontAwesomeIcon icon={faHandshake} className="text-[#C15815] text-xl" />
                        </div>
                    </div>
                    <h2 className="text-[#C15815] text-3xl font-bold mb-1">-24,5 Hours</h2>
                    <p className="text-gray-700 font-medium">Banco de Horas Available</p>
                    <p className="text-gray-500 text-sm">Extra Hours</p>

                    <div className="flex mt-6">
                        <button className="w-10 h-10 rounded-2xl border border-[#C15815] flex items-center justify-center mr-3">
                            <FontAwesomeIcon icon={faCalendarDay} className="text-[#C15815]" />
                        </button>
                        <button className="w-10 h-10 rounded-2xl border border-gray-300 flex items-center justify-center mr-3">
                            <FontAwesomeIcon icon={faCalculator} className="text-gray-500" />
                        </button>
                        <button className="w-10 h-10 rounded-2xl border border-gray-300 flex items-center justify-center">
                            <FontAwesomeIcon icon={faExchangeAlt} className="text-gray-500" />
                        </button>
                    </div>

                    <div className="mt-4">
                        <button className="flex items-center gap-1 text-gray-600 p-2 border  rounded-full" >
                            <FontAwesomeIcon icon={faCog} />
                            <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-lg shadow-sm p-5">
                    <div className="flex mb-4">
                        <div className="w-12 h-12 rounded-lg bg-[#FFF1EC] flex items-center justify-center mr-3">
                            <FontAwesomeIcon icon={faMedal} className="text-[#C15815] text-xl" />
                        </div>
                    </div>
                    <h2 className="text-[#C15815] text-3xl font-bold mb-1">0 Days</h2>
                    <p className="text-gray-700 font-medium">Dias de Descanso</p>
                    <p className="text-gray-500 text-sm">Available</p>
                    <p className="text-gray-500 text-sm">En Proyectos</p>

                    <div className="flex mt-6">
                        <button className="w-10 h-10 rounded-2xl border border-[#C15815] flex items-center justify-center mr-3">
                            <FontAwesomeIcon icon={faCalendarDay} className="text-[#C15815]" />
                        </button>
                        <button className="w-10 h-10 rounded-2xl border border-gray-300 flex items-center justify-center mr-3">
                            <FontAwesomeIcon icon={faCalculator} className="text-gray-500" />
                        </button>
                        <button className="w-10 h-10 rounded-2xl border border-gray-300 flex items-center justify-center">
                            <FontAwesomeIcon icon={faExchangeAlt} className="text-gray-500" />
                        </button>
                    </div>

                    <div className="mt-4">
                        <button className="flex items-center gap-1 text-gray-600 p-2 border border-gray-300 rounded-full">
                            <FontAwesomeIcon icon={faCog} />
                            <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
                        </button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-lg shadow-sm p-5">
                    <div className="flex mb-4">
                        <div className="w-12 h-12 rounded-lg bg-[#FFF1EC] flex items-center justify-center mr-3">
                            <FontAwesomeIcon icon={faCalendarDay} className="text-[#C15815] text-xl" />
                        </div>
                    </div>
                    <h2 className="text-[#C15815] text-3xl font-bold mb-1">0 Hours</h2>
                    <p className="text-gray-700 font-medium">Faltas Injustificadas</p>
                    <p className="text-gray-500 text-sm">Available</p>
                    <p className="text-gray-500 text-sm">Faltas Injustificadas</p>

                    <div className="flex mt-6">
                        <button className="w-10 h-10 rounded-2xl border border-[#C15815] flex items-center justify-center mr-3">
                            <FontAwesomeIcon icon={faCalendarDay} className="text-[#C15815]" />
                        </button>
                        <button className="w-10 h-10 rounded-2xl border border-gray-300 flex items-center justify-center mr-3">
                            <FontAwesomeIcon icon={faCalculator} className="text-gray-500" />
                        </button>
                        <button className="w-10 h-10 rounded-2xl border border-gray-300 flex items-center justify-center">
                            <FontAwesomeIcon icon={faExchangeAlt} className="text-gray-500" />
                        </button>
                    </div>

                    <div className="mt-4">
                        <button className="flex items-center gap-1 text-gray-600 p-2 border border-gray-300 rounded-full">
                            <FontAwesomeIcon icon={faCog} />
                            <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faClock} className="text-[#C15815] mr-2" />
                <h2 className="text-[#C15815] text-xl font-medium">Upcoming Time Off</h2>
            </div>
        </div>
    );

    // Timesheet Section
    const renderTimesheetSection = () => (
        <div className="flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                    <span className="text-[#C15815] mr-3 text-2xl">
                        <FontAwesomeIcon icon={faClock} />
                    </span>
                    <h1 className="text-[#C15815] text-2xl font-medium">Timesheet</h1>
                </div>

                <div className="flex gap-3">
                    <div className="relative ">
                        <select className="appearance-none border  border-gray-300 rounded-full py-2 px-14 bg-white">
                            <option>This Pay Period</option>
                        </select>
                        <FontAwesomeIcon icon={faChevronDown} className="absolute border-l right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none px-2" />
                    </div>

                    <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2">
                        <FontAwesomeIcon icon={faHistory} />
                        <span>History</span>
                    </button>

                    <button className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center">
                        <FontAwesomeIcon icon={faDownload} className="text-gray-700" />
                    </button>
                </div>
            </div>

            <div className="flex mb-6">
                <div className="w-2/3 bg-white rounded-lg shadow-sm p-6 mr-6">
                    <div className="flex items-center mb-5">
                        <div className="w-8 h-8 bg-[#FFF1EC] rounded flex items-center justify-center mr-3">
                            <FontAwesomeIcon icon={faCalendarDay} className="text-[#C15815]" />
                        </div>
                        <h2 className="text-[#C15815] text-2xl font-medium">May 1-14</h2>
                    </div>

                    <div className='bg-[#f9f9f2] text-gray-600'>
                        <div className=" rounded-lg p-4 mb-4">
                            <div className="flex items-center  gap-2 b">
                                <div className="w-20 border border-gray-200 bg-white rounded-2xl p-4">
                                    <p className="font-medium">Mon</p>
                                    <p className="text-sm ">Apr 28</p>
                                </div>
                                <div className="flex-grow">
                                    <p className="text-lg">0h 00m</p>
                                </div>
                            </div>
                        </div>

                        <div className=" rounded-lg p-4">
                            <div className="flex gap-2 items-center">
                                <div className="w-20 border border-gray-200 bg-white rounded-2xl p-4">
                                    <p className="font-medium">Tue</p>
                                    <p className="text-sm text-gray-500">Apr 29</p>
                                </div>
                                <div className="flex-grow">
                                    <p className="text-lg">0h 00m</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="w-1/3 bg-white rounded-lg shadow-sm p-6 flex flex-col items-center">
                    <img
                        src="https://www.shutterstock.com/shutterstock/photos/1554086789/display_1500/stock-photo-close-up-portrait-of-yong-woman-casual-portrait-in-positive-view-big-smile-beautiful-model-posing-1554086789.jpg"
                        alt="Felipe Costa"
                        className="w-16 h-16 rounded-lg object-cover mb-3"
                    />
                    <p className="text-gray-700 font-medium mb-2">Not Clocked In</p>

                    <h2 className="text-[#C15815] text-3xl font-bold mt-2 mb-2">0h 00m Today</h2>
                    <p className="text-gray-500 mb-6">Clocked Out: Apr 15 at 8:28 PM</p>

                    <button className="bg-[#C15815] text-white px-6 py-2.5 rounded-3xl mb-3 w-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faClock} className="mr-2" />
                        Clock In
                    </button>

                    <div className="w-full border-t border-gray-200 pt-5 mt-5">
                        <p className="text-gray-700 font-medium text-center">This Week</p>
                        <h3 className="text-[#C15815] text-3xl font-bold text-center mt-2 mb-2">0h 00m</h3>
                        <p className="text-gray-500 text-center">May 5 – 11 (3 days left)</p>
                    </div>
                </div>
            </div>
        </div>
    );

    // Documents Section - Matches exactly the screenshot
    const renderDocumentsSection = () => (
        <div className="flex flex-col">
            <div className="flex items-center mb-6">
                <span className="text-[#C15815] mr-3 text-2xl">
                    <FontAwesomeIcon icon={faFolder} />
                </span>
                <h1 className="text-[#C15815] text-2xl font-medium">Documents</h1>
            </div>

            <div className="flex justify-between items-center mb-8">
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-white text-[#C15815] border border-[#C15815] hover:bg-[#FFF8F5] px-4 py-2 rounded-full">
                        <FontAwesomeIcon icon={faUpload} />
                        <span>Upload</span>
                    </button>

                    <button className="flex items-center justify-center w-10 h-10 bg-white text-gray-500 border border-gray-200 rounded-full">
                        <FontAwesomeIcon icon={faFolder} />
                    </button>

                    <div className="relative">
                        <button className="flex items-center gap-2 bg-white text-gray-500 border border-gray-200 px-3 py-2 rounded-full">
                            <FontAwesomeIcon icon={faThLarge} />
                            <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
                        </button>
                    </div>
                </div>

                <div className="flex gap-3">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search documents..."
                            className="pl-10 pr-4 py-2 border border-gray-200 rounded-full w-64 text-sm focus:outline-none focus:ring-1 focus:ring-[#C15815]"
                        />
                    </div>

                    <div className="relative">
                        <button className="flex items-center gap-2 bg-white text-gray-500 border border-gray-200 px-3 py-2 rounded-full">
                            <FontAwesomeIcon icon={faDownload} />
                            <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 rounded-2xl p-8 bg-white">
                <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-[#f9f9f2] rounded-lg flex items-center justify-center">
                            <FontAwesomeIcon icon={faFolder} className="text-[#C15815] text-2xl" />
                        </div>
                    </div>
                    <h3 className="text-center text-[#C15815] font-medium mb-1">Acuerdo de Confidencialidad</h3>
                    <p className="text-center text-gray-500 text-sm">0 items</p>
                </div>

                <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-[#f9f9f2] rounded-lg flex items-center justify-center">
                            <FontAwesomeIcon icon={faFolder} className="text-[#C15815] text-2xl" />
                        </div>
                    </div>
                    <h3 className="text-center text-[#C15815] font-medium mb-1">Acuerdo de Materiales</h3>
                    <p className="text-center text-gray-500 text-sm">0 items</p>
                </div>

                <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-[#f9f9f2] rounded-lg flex items-center justify-center">
                            <FontAwesomeIcon icon={faFolder} className="text-[#C15815] text-2xl" />
                        </div>
                    </div>
                    <h3 className="text-center text-[#C15815] font-medium mb-1">Contrato de Trabajo</h3>
                    <p className="text-center text-gray-500 text-sm">0 items</p>
                </div>
            </div>
        </div>
    );

    // Sidebar content - consistent across all views
    const renderSidebar = () => (
        <div className="w-72">
            <div className="mt-10">
                <h2 className="text-gray-700 font-medium text-lg mb-3">Vitals</h2>

                <div className="space-y-4">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faPhone} className="text-gray-400 w-5 mr-3" />
                        <span className="text-gray-700">564 461 0267</span>
                    </div>

                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 w-5 mr-3" />
                        <span className="text-gray-700">felipe.costa@prosyscp.com</span>
                    </div>

                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faClock} className="text-gray-400 w-5 mr-3" />
                        <span className="text-gray-700">
                            {activeSection === 'personal' ? '2:28 PM' : '2:46 PM'} local time
                        </span>
                    </div>

                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400 w-5 mr-3" />
                        <span className="text-gray-700">Queretaro</span>
                    </div>

                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faBriefcase} className="text-gray-400 w-5 mr-3" />
                        <span className="text-gray-700">CEO</span>
                    </div>

                    <div className="ml-8 text-sm text-gray-500">Full-Time</div>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-5 mb-5">
                <div className="flex items-center mb-4">
                    <FontAwesomeIcon icon={faUsers} className="text-gray-400 w-5 mr-3" />
                    <span className="text-gray-700">Administración Ejecutiva</span>
                </div>

                <div className="flex items-center mb-4">
                    <FontAwesomeIcon icon={faProjectDiagram} className="text-gray-400 w-5 mr-3" />
                    <span className="text-gray-700">Dirección de la Empresa</span>
                </div>

                <div className="flex items-center mb-2">
                    <FontAwesomeIcon icon={faIdCard} className="text-gray-400 w-5 mr-3" />
                    <span className="text-gray-700">001</span>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-5">
                <h2 className="text-gray-700 font-medium text-lg mb-3">Hire Date</h2>

                <div className="flex items-center mb-1">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-400 w-5 mr-3" />
                    <span className="text-gray-700">Jan 1, 2024</span>
                </div>

                <div className="ml-8 text-sm text-gray-500">1y - 4m - 7d</div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#f9f9f2]">
            {/* Profile Header - Perfectly matching the screenshot */}
            <div className="bg-[#BF5614]  rounded-4xl m-4 relative">
                <div className="flex items-start relative">
                    {/* Profile Image - Exact dimensions and styling */}
                    <div className="w-[230px] h-[230px]  mr-6 relative  top-8 left-8">
                        <img
                            src="https://img.freepik.com/premium-photo/portrait-thinking-businessman-with-ideas-studio-professional-career-planning-startup-male-consultant-thoughts-serious-by-white-background-creative-agency-occupation-job_590464-476546.jpg?ga=GA1.1.886159786.1747735128&semt=ais_items_boosted&w=740"
                            alt="Profile of Felipe Costa"
                            className="w-full border border-white border-3 h-full absolute  object-cover rounded-3xl"
                        />
                    </div>

                    <div className=' ml-10'>
                        <div className=''>
                            {/* Name and Title */}
                            <div className="text-white mt-3">
                                <h1 className="text-6xl font-bold mb-1">Felipe Costa</h1>
                                <p className="text-2xl">CEO</p>
                            </div>

                            {/* Menu Button */}
                            <button
                                className="absolute top-6 right-6 bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-md"
                                aria-label="Profile options"
                            >
                                <FontAwesomeIcon icon={faEllipsisH} className="text-gray-600 text-xl" />
                            </button>
                        </div>

                        {/* Navigation Tabs */}
                        <div className="flex mt-20 relative">
                            <button
                                onClick={() => handleNavClick('personal')}
                                className={`px-8 py-3 ${activeSection === 'personal' ? 'bg-white text-[#BF5614]' : 'bg-transparent text-white'} rounded-t-lg font-medium transition-colors`}
                            >
                                Personal
                            </button>
                            <button
                                onClick={() => handleNavClick('job')}
                                className={`px-8 py-3 ${activeSection === 'job' ? 'bg-white text-[#BF5614]' : 'bg-transparent text-white'} rounded-t-lg font-medium transition-colors`}
                            >
                                Job
                            </button>
                            <button
                                onClick={() => handleNavClick('timeOff')}
                                className={`px-8 py-3 ${activeSection === 'timeOff' ? 'bg-white text-[#BF5614]' : 'bg-transparent text-white'} rounded-t-lg font-medium transition-colors`}
                            >
                                Time Off
                            </button>
                            <button
                                onClick={() => handleNavClick('emergency')}
                                className={`px-8 py-3 ${activeSection === 'emergency' ? 'bg-white text-[#BF5614]' : 'bg-transparent text-white'} rounded-t-lg font-medium transition-colors`}
                            >
                                Emergency
                            </button>
                            <button
                                onClick={() => handleNavClick('timesheet')}
                                className={`px-8 py-3 ${activeSection === 'timesheet' ? 'bg-white text-[#BF5614]' : 'bg-transparent text-white'} rounded-t-lg font-medium transition-colors`}
                            >
                                Timesheet
                            </button>
                            <button
                                onClick={() => handleNavClick('documents')}
                                className={`px-8 py-3 ${activeSection === 'documents' ? 'bg-white text-[#BF5614]' : 'bg-transparent text-white'} rounded-t-lg font-medium transition-colors`}
                            >
                                Documents
                            </button>
                            <button
                                onClick={() => handleNavClick('more')}
                                className={`px-8 py-3 ${activeSection === 'more' ? 'bg-white text-[#BF5614]' : 'bg-transparent text-white'} rounded-t-lg font-medium flex items-center transition-colors`}
                            >
                                More <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                            </button>
                            {/* Badge Number - Dynamically changes based on active tab */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area with Sidebar */}
            <div className="flex mx-4 gap-6">
                {/* Left Sidebar - consistent across all views */}
                {renderSidebar()}

                {/* Main Content - Conditional rendering based on active tab */}
                <div className="flex-grow">
                    {activeSection === 'personal' && renderPersonalSection()}
                    {activeSection === 'job' && renderJobSection()}
                    {activeSection === 'timeOff' && renderTimeOffSection()}
                    {activeSection === 'timesheet' && renderTimesheetSection()}
                    {activeSection === 'documents' && renderDocumentsSection()}
                    {activeSection === 'more' && (
                        <div className="flex items-center justify-center h-48 bg-white rounded-lg shadow-sm">
                            <h2 className="text-xl text-gray-500">More options will be displayed here.</h2>
                        </div>
                    )}
                    {activeSection === 'emergency' && (
                        <div className="flex items-center justify-center h-48 bg-white rounded-lg shadow-sm">
                            <h2 className="text-xl text-gray-500">Emergency contacts will be displayed here.</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyInfo;














