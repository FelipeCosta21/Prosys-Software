import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaFilter, FaCheckCircle, FaEllipsisH } from "react-icons/fa";

const HRDashboard = () => {
    // Current month days
    const [currentMonth] = useState("December");
    const [selectedDate, setSelectedDate] = useState(22);

    // Calendar days generation
    const calendarDays = Array.from({ length: 35 }, (_, idx) => {
        const day = idx - 3; // Start from November 29th
        if (day <= 0) return { day: day + 31, current: false };
        if (day > 31) return { day: day - 31, current: false };
        return {
            day,
            current: true,
            isSelected: day === 22,
            isToday: day === new Date().getDate(),
            isSpecial: day === 3 || day === 14,
            isHoliday: day === 25
        };
    });

    // Data for the dashboard
    const staffStatusGroups = [
        {
            title: "On Vacation",
            count: 5,
            avatars: [
                "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
                "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
                "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            ],
            extraCount: 2
        },
        {
            title: "Works from home",
            count: 12,
            avatars: [
                "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
                "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
                "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            ],
            extraCount: 9
        },
        {
            title: "Sick Leave",
            count: 9,
            avatars: [
                "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
                "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
                "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            ]
        },
        {
            title: "Day Off",
            count: 4,
            avatars: [
                "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
                "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
                "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            ],
            extraCount: 1
        },
        {
            title: "Business Trip",
            count: 2,
            avatars: [
                "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
                "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            ]
        }
    ];

    const jobApplicants = [
        {
            id: "NS",
            name: "Niclas Salmon",
            position: "Full Stack Developer",
            image: null
        },
        {
            id: "JP",
            name: "Jensen Duane Padmore",
            position: "Senior Graphic Designer",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        },
        {
            id: "MF",
            name: "Melania Filkins",
            position: "Copywriter",
            image: null
        },
        {
            id: "TR",
            name: "Tommie Russel",
            position: "Full Stack Developer",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        },
        {
            id: "AM",
            name: "Anabelle Marshall",
            position: "Senior Graphic Designer",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        },
        {
            id: "AH",
            name: "Allison Hooker",
            position: "Full Stack Developer",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        }
    ];

    const requests = [
        {
            name: "Teresa Jenkins",
            position: "Junior Sale Specialist",
            period: "01 Jan - 10 Jan",
            type: "Vacation",
            status: { label: "New", color: "blue" },
            date: "Today",
            notes: "Annual vacation",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        },
        {
            name: "Salamon Newman",
            position: "Senior Java Developer",
            period: "31 December",
            type: "Work from Home",
            status: { label: "Approved", color: "green" },
            date: "Today",
            notes: "My cat is sick and needs care",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        },
        {
            name: "Monica Cutcher",
            position: "Middle Android Developer",
            period: "29 Dec - 31 Dec",
            type: "Day Off",
            status: { label: "Unapproved", color: "red" },
            date: "Today",
            notes: "I'm so tired",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        },
        {
            name: "Juliette Lagache",
            position: "Project Manager",
            period: "04 January",
            type: "Work from Home",
            status: { label: "Approved", color: "green" },
            date: "Yesterday",
            notes: "I'll be in my parents' city after...",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        }
    ];

    const probationData = [
        {
            name: "Elvina Moore",
            position: "Junior Full Stack Developer",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            event: {
                type: "Meeting with HR",
                date: "23 Dec, 10:00 am",
                position: 50,
                color: "orange"
            }
        },
        {
            name: "Winona Wheelock",
            position: "Middle Project Manager",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            event: {
                type: "Meeting with HR",
                date: "24 Dec, 1:00 pm",
                position: 75,
                color: "orange"
            }
        },
        {
            name: "Mikky Brongs",
            position: "Junior PHP Developer",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            event: {
                type: "End of Probation",
                date: "22 Dec, 12:00 pm",
                position: 25,
                color: "purple"
            }
        },
        {
            name: "Adelaide Colton",
            position: "Senior Business Analyst",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            event: {
                type: "Meeting with HR",
                date: "23 Dec, 10:00 am",
                position: 50,
                color: "orange"
            }
        },
        {
            name: "Nathan Brasher",
            position: "Middle Graphic Designer",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            event: {
                type: "End of Probation",
                date: "25 Dec, 12:00 pm",
                position: 100,
                color: "purple"
            }
        }
    ];

    const events = [
        {
            title: "Shane Wiggins Birthday!",
            isAllDay: true,
            type: "Holiday",
            color: "red"
        },
        {
            title: "Margery Fisher, Mark...",
            time: "10:30 am - 11:30 am",
            type: "Job Interview",
            color: "blue",
            completed: true
        },
        {
            title: "Mikky Brongs, End of...",
            time: "12:00 pm - 12:30 pm",
            type: "Employee issues",
            color: "gray"
        },
        {
            title: "Stephan Wallace, Dev...",
            time: "12:30 pm - 1:30 pm",
            type: "Job Interview",
            color: "blue"
        },
        {
            title: "Weekly meeting",
            time: "2:00 pm - 3:00 pm",
            type: "Meeting",
            color: "orange"
        },
        {
            title: "Whitney Lounge, Mar...",
            time: "3:30 pm - 3:30 pm",
            type: "Job Interview",
            color: "blue"
        }
    ];

    const staffMood = [
        { mood: "Excited", percentage: 14, color: "rgb(251, 191, 36)" },
        { mood: "Happy", percentage: 23, color: "rgb(45, 212, 191)" },
        { mood: "Neutral", percentage: 58, color: "rgb(59, 130, 246)" },
        { mood: "Upset", percentage: 3, color: "rgb(167, 139, 250)" },
        { mood: "Angry", percentage: 2, color: "rgb(248, 113, 113)" }
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
                {/* Left Column - Calendar and Events */}
                <div className="">
                    {/* Calendar Section */}
                    <div className="bg-white rounded-lg h-full shadow p-5 mb-4">
                        {/* Month Navigation */}
                        <div className="flex justify-between items-center mb-4">
                            <button className="text-gray-400 hover:bg-gray-100 rounded-full p-1">
                                <FaChevronLeft className="h-4 w-4" />
                            </button>
                            <h2 className="font-medium text-gray-600">{currentMonth}</h2>
                            <button className="text-gray-400 hover:bg-gray-100 rounded-full p-1">
                                <FaChevronRight className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Days of the week */}
                        <div className="grid grid-cols-7 gap-0 mb-1 text-center text-xs text-gray-500">
                            <div>Sun</div>
                            <div>Mon</div>
                            <div>Tue</div>
                            <div>Wed</div>
                            <div>Thu</div>
                            <div>Fri</div>
                            <div>Sat</div>
                        </div>

                        {/* Calendar days */}
                        <div className="grid grid-cols-7 gap-0 text-center">
                            {calendarDays.map((day, index) => (
                                <div
                                    key={index}
                                    className={`
                    p-2 text-xs relative cursor-pointer
                    ${!day.current ? 'text-gray-300' : ''}
                    ${day.isSelected ? 'bg-red-500 text-white rounded' : ''}
                    ${day.isSpecial && !day.isSelected ? day.day === 14 ? 'text-red-500 font-bold' : day.day === 3 ? 'border-b-2 border-blue-400' : '' : ''}
                    ${day.isHoliday && !day.isSelected ? 'text-red-400' : ''}
                  `}
                                    onClick={() => day.current && setSelectedDate(day.day)}
                                >
                                    {day.day}
                                    {day.current && day.day === 22 && (
                                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-0.5 bg-white rounded-full"></span>
                                    )}
                                    {day.current && day.day === 3 && !day.isSelected && (
                                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-0.5 bg-blue-400 rounded-full"></span>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Calendar Footer */}
                        <div className="mt-4 flex justify-between items-center text-xs">
                            <div className="text-gray-400">Today</div>
                            <div className="text-red-400 cursor-pointer">Go to the calendar</div>
                        </div>

                        {/* Events section */}
                        <div className="mt-6">
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="font-medium text-sm">Events</h3>
                                <div className="flex items-center text-gray-400 text-xs cursor-pointer">
                                    <FaFilter className="h-3 w-3 mr-1" />
                                    <span>All events</span>
                                </div>
                            </div>

                            {/* Birthday Event */}
                            <div className="bg-gray-50 rounded p-3 mb-3">
                                <div className="font-medium text-sm">Shane Wiggins Birthday!</div>
                                <div className="text-xs text-gray-500">All Day</div>
                                <div className="mt-1">
                                    <span className="bg-red-100 text-red-400 text-xs py-0.5 px-2 rounded">Holiday</span>
                                </div>
                            </div>

                            {/* Job Interview Event */}
                            <div className="border-t border-gray-100 pt-2">
                                <div className="flex justify-between mb-1 text-xs">
                                    <div>Margery Fisher, Mark...</div>
                                    <div className="text-gray-500">10:30 am - 11:30 am</div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="bg-blue-100 text-blue-500 text-xs py-0.5 px-2 rounded">Job Interview</span>
                                    <div className="text-gray-400 flex items-center text-xs">
                                        <span>Completed</span>
                                        <FaCheckCircle className="h-3 w-3 ml-1" />
                                    </div>
                                </div>
                            </div>

                            {/* More events */}
                            <div className="border-t border-gray-100 mt-2 pt-2">
                                <div className="flex justify-between mb-1 text-xs">
                                    <div>Mikky Brongs, End of...</div>
                                    <div className="text-gray-500">12:00 pm - 12:30 pm</div>
                                </div>
                                <div>
                                    <span className="bg-gray-100 text-gray-500 text-xs py-0.5 px-2 rounded">Employees issues</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 mt-2 pt-2">
                                <div className="flex justify-between mb-1 text-xs">
                                    <div>Stephan Wallace, Dev...</div>
                                    <div className="text-gray-500">12:30 pm - 1:30 pm</div>
                                </div>
                                <div>
                                    <span className="bg-blue-100 text-blue-500 text-xs py-0.5 px-2 rounded">Job Interview</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 mt-2 pt-2">
                                <div className="flex justify-between mb-1 text-xs">
                                    <div>Weekly meeting</div>
                                    <div className="text-gray-500">2:00 pm - 3:00 pm</div>
                                </div>
                                <div>
                                    <span className="bg-orange-100 text-orange-500 text-xs py-0.5 px-2 rounded">Meeting</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 mt-2 pt-2">
                                <div className="flex justify-between mb-1 text-xs">
                                    <div>Whitney Lounge, Mar...</div>
                                    <div className="text-gray-500">3:30 pm - 3:30 pm</div>
                                </div>
                                <div>
                                    <span className="bg-blue-100 text-blue-500 text-xs py-0.5 px-2 rounded">Job Interview</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle to Right Columns */}
                <div className="md:col-span-2 ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
                        {/* Job Applications Section */}
                        <div className="bg-white rounded-lg shadow p-5  ">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-medium text-gray-600">Job applications</h2>
                                <span className="text-gray-400 text-xs cursor-pointer">View all</span>
                            </div>

                            <div className="space-y-4">
                                {jobApplicants.map((applicant) => (
                                    <div key={applicant.id} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                                        {applicant.image ? (
                                            <img
                                                src={applicant.image}
                                                alt={applicant.name}
                                                className="h-10 w-10 rounded-full mr-3 object-cover"
                                            />
                                        ) : (
                                            <div className="bg-gray-400 h-10 w-10 rounded-full flex items-center justify-center text-white mr-3">
                                                <span>{applicant.id}</span>
                                            </div>
                                        )}
                                        <div>
                                            <div className="font-medium text-sm">{applicant.name}</div>
                                            <div className="text-xs text-gray-500">
                                                Applied for <span className="font-medium">{applicant.position}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Staff Status Section */}
                        <div className="">
                            <div className="p-4 bg-white rounded-lg shadow">
                                <div className="grid grid-cols-5 gap-0">
                                    {staffStatusGroups.map((group, index) => (
                                        <div key={index} className="flex flex-col items-center">
                                            <h3 className="text-xs text-gray-500 mb-2 text-center">{group.title}</h3>
                                            <div className="relative h-8 mb-1 flex justify-center">
                                                {group.avatars.map((avatar, i) => (
                                                    <div
                                                        key={i}
                                                        className="absolute h-8 w-8 rounded-full overflow-hidden border-2 border-white"
                                                        style={{
                                                            left: `calc(50% - 16px + ${(i - 1) * 12}px)`,
                                                            zIndex: 10 - i
                                                        }}
                                                    >
                                                        <img src={avatar} alt="Staff" className="w-full h-full object-cover" />
                                                    </div>
                                                ))}
                                                {group.extraCount > 0 && (
                                                    <div
                                                        className="absolute h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-500 border-2 border-white"
                                                        style={{
                                                            left: `calc(50% - 16px + ${group.avatars.length * 12}px)`,
                                                            zIndex: 10 - group.avatars.length
                                                        }}
                                                    >
                                                        +{group.extraCount}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="text-2xl font-medium text-gray-700 mt-2">{group.count}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Requests Section */}
                            <div className="bg-white rounded-lg shadow p-5 mt-4">
                                <div className="flex justify-between items-center mb-3">
                                    <h2 className="font-medium text-gray-600">Requests</h2>
                                    <span className="text-gray-400 text-xs cursor-pointer">View all</span>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="text-xs text-gray-500">
                                                <th className="pb-2 font-medium">Name</th>
                                                <th className="pb-2 font-medium">Period</th>
                                                <th className="pb-2 font-medium">Type</th>
                                                <th className="pb-2 font-medium">Status</th>
                                                <th className="pb-2 font-medium">Date</th>
                                                <th className="pb-2 font-medium">Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-xs">
                                            {requests.map((request, index) => (
                                                <tr key={index} className="border-t border-gray-200">
                                                    <td className="py-2">
                                                        <div className="flex items-center">
                                                            <img
                                                                src={request.image}
                                                                alt={request.name}
                                                                className="h-7 w-7 rounded-full object-cover mr-2"
                                                            />
                                                            <div>
                                                                <div>{request.name}</div>
                                                                <div className="text-xs text-gray-500">{request.position}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="py-2">{request.period}</td>
                                                    <td className="py-2">{request.type}</td>
                                                    <td className="py-2">
                                                        <div className="flex items-center">
                                                            <div className={`h-1.5 w-1.5 rounded-full bg-${request.status.color}-500 mr-1`}></div>
                                                            <span>{request.status.label}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-2">{request.date}</td>
                                                    <td className="py-2">{request.notes}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Sections - Probation Timeline and Staff Mood */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                        {/* Probation Timeline */}
                        <div className="bg-white rounded-lg shadow p-5 lg:col-span-2">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-medium text-gray-600">Probation Timeline</h2>
                                <span className="text-gray-400 text-xs cursor-pointer">View all</span>
                            </div>

                            <div className="space-y-7 mb-6">
                                {probationData.map((employee, idx) => (
                                    <div key={idx} className="relative">
                                        <div className="flex items-center">
                                            {/* Employee info */}
                                            <div className="flex items-center w-40 flex-shrink-0">
                                                <img
                                                    src={employee.image}
                                                    alt={employee.name}
                                                    className="h-10 w-10 rounded-full object-cover mr-3"
                                                />
                                                <div>
                                                    <div className="font-medium text-sm">{employee.name}</div>
                                                    <div className="text-xs text-gray-500">{employee.position}</div>
                                                </div>
                                            </div>

                                            {/* Timeline */}
                                            <div className="flex-1 h-1 bg-gray-200 relative">
                                                {/* Event marker */}
                                                <div
                                                    className={`absolute px-3 py-1.5 rounded whitespace-nowrap text-xs ${employee.event.color === 'purple' ? 'bg-purple-100 text-purple-500' : 'bg-orange-100 text-orange-500'
                                                        }`}
                                                    style={{
                                                        right: `${100 - employee.event.position}%`,
                                                        top: '-32px',
                                                        transform: 'translateX(50%)'
                                                    }}
                                                >
                                                    {employee.event.type}
                                                    <div className="text-[10px]">{employee.event.date}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Timeline dates */}
                            <div className="flex justify-between mt-6 text-xs text-gray-500">
                                <div>21 Dec</div>
                                <div>22 Dec</div>
                                <div>23 Dec</div>
                                <div>24 Dec</div>
                                <div>25 Dec</div>
                            </div>
                        </div>

                        {/* Staff Mood */}
                        <div className="bg-white rounded-lg shadow p-5 lg:col-span-1">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-medium text-gray-600">Staff Mood</h2>
                                <div className="flex items-center">
                                    <span className="text-gray-400 text-xs cursor-pointer">Details</span>
                                </div>
                            </div>

                            {/* Donut chart */}
                            <div className="flex justify-center mb-5">
                                <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-40 lg:h-40 xl:w-48 xl:h-48">
                                    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                                        {staffMood.map((item, idx) => {
                                            const prevPercentages = staffMood
                                                .slice(0, idx)
                                                .reduce((sum, curr) => sum + curr.percentage, 0);

                                            return (
                                                <circle
                                                    key={idx}
                                                    cx="50"
                                                    cy="50"
                                                    r="40"
                                                    fill="transparent"
                                                    stroke={item.color}
                                                    strokeWidth="15"
                                                    strokeDasharray={`${item.percentage} ${100 - item.percentage}`}
                                                    strokeDashoffset={-prevPercentages}
                                                />
                                            );
                                        })}
                                        <circle cx="50" cy="50" r="30" fill="white" />
                                    </svg>
                                </div>
                            </div>

                            {/* Mood legend */}
                            <div className="grid grid-cols-3 gap-x-2 gap-y-3">
                                {staffMood.map((item, idx) => (
                                    <div key={idx} className="flex flex-col items-center">
                                        <div className="flex justify-center items-center">
                                            <div className="h-3 w-3 rounded-full mr-1" style={{ backgroundColor: item.color }}></div>
                                            <span className="text-xs text-gray-500">{item.mood}</span>
                                        </div>
                                        <div className="font-medium text-sm">{item.percentage}%</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HRDashboard;
