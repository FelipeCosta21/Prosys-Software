// import React, { useState, useEffect } from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler
// } from 'chart.js';
// import { Line, Bar } from 'react-chartjs-2';
// import { FiClock, FiBarChart } from 'react-icons/fi';
// import { BsFileEarmarkCheck, BsArrowUp, BsArrowDown } from 'react-icons/bs';
// import { AiOutlineAim } from 'react-icons/ai';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler
// );

// const profileImage = "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";

// const PerformanceDashboard = () => {
//   const [timeData, setTimeData] = useState([]);
//   const [completionData, setCompletionData] = useState([]);
//   const [accuracyData, setAccuracyData] = useState([]);
//   const [performanceData, setPerformanceData] = useState({});

//   useEffect(() => {
//     // Simulating API call to fetch data
//     const generateDummyData = () => {
//       // Time Performance Data - Orange gradient line chart
//       const timeValues = [65, 85, 55, 75, 50, 70];
//       setTimeData(timeValues);

//       // Task Completion Data - Yellow/Orange gradient line chart
//       const completionValues = [70, 75, 85, 80, 85, 75];
//       setCompletionData(completionValues);

//       // Accuracy Data - Gray line chart
//       const accuracyValues = [55, 60, 65, 70, 65, 60];
//       setAccuracyData(accuracyValues);

//       // Monthly Performance - Stacked bar chart
//       const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//       const performanceValues = {
//         primary: [70, 60, 45, 55, 35, 40, 50, 55, 45, 65, 55, 55],
//         secondary: [10, 15, 25, 10, 15, 10, 15, 10, 15, 15, 15, 10]
//       };
//       setPerformanceData({
//         labels: months,
//         primary: performanceValues.primary,
//         secondary: performanceValues.secondary
//       });
//     };

//     generateDummyData();
//   }, []);

//   const timeOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false
//       },
//       tooltip: {
//         enabled: false
//       }
//     },
//     elements: {
//       line: {
//         tension: 0.4,
//         borderWidth: 0,
//         backgroundColor: (context) => {
//           const ctx = context.chart.ctx;
//           const gradient = ctx.createLinearGradient(0, 0, 0, 180);
//           gradient.addColorStop(0, 'rgba(239, 121, 82, 0.7)');
//           gradient.addColorStop(1, 'rgba(252, 201, 176, 0.05)');
//           return gradient;
//         },
//         borderColor: 'rgba(239, 121, 82, 1)',
//         fill: true
//       },
//       point: {
//         radius: 0
//       }
//     },
//     scales: {
//       x: {
//         display: false,
//         grid: {
//           display: false
//         }
//       },
//       y: {
//         display: false,
//         grid: {
//           display: false
//         }
//       }
//     }
//   };

//   const completionOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false
//       },
//       tooltip: {
//         enabled: false
//       }
//     },
//     elements: {
//       line: {
//         tension: 0.4,
//         borderWidth: 0,
//         backgroundColor: (context) => {
//           const ctx = context.chart.ctx;
//           const gradient = ctx.createLinearGradient(0, 0, 0, 180);
//           gradient.addColorStop(0, 'rgba(255, 173, 51, 0.7)');
//           gradient.addColorStop(1, 'rgba(255, 229, 180, 0.05)');
//           return gradient;
//         },
//         borderColor: 'rgba(255, 173, 51, 1)',
//         fill: true
//       },
//       point: {
//         radius: 0
//       }
//     },
//     scales: {
//       x: {
//         display: false,
//         grid: {
//           display: false
//         }
//       },
//       y: {
//         display: false,
//         grid: {
//           display: false
//         }
//       }
//     }
//   };

//   const accuracyOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false
//       },
//       tooltip: {
//         enabled: false
//       }
//     },
//     elements: {
//       line: {
//         tension: 0.4,
//         borderWidth: 0,
//         backgroundColor: (context) => {
//           const ctx = context.chart.ctx;
//           const gradient = ctx.createLinearGradient(0, 0, 0, 180);
//           gradient.addColorStop(0, 'rgba(128, 128, 128, 0.7)');
//           gradient.addColorStop(1, 'rgba(211, 211, 211, 0.05)');
//           return gradient;
//         },
//         borderColor: 'rgba(128, 128, 128, 1)',
//         fill: true
//       },
//       point: {
//         radius: 0
//       }
//     },
//     scales: {
//       x: {
//         display: false,
//         grid: {
//           display: false
//         }
//       },
//       y: {
//         display: false,
//         grid: {
//           display: false
//         }
//       }
//     }
//   };

//   const barOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false
//       },
//       tooltip: {
//         enabled: false
//       }
//     },
//     scales: {
//       x: {
//         stacked: true,
//         grid: {
//           display: false,
//           drawBorder: false
//         },
//         ticks: {
//           display: false
//         }
//       },
//       y: {
//         stacked: true,
//         min: 0,
//         max: 100,
//         grid: {
//           color: 'rgba(200, 200, 200, 0.15)',
//           drawBorder: false
//         },
//         ticks: {
//           stepSize: 25,
//           callback: (value) => value === 0 ? '0' : value
//         }
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f8f9fa] p-4">
//       <div className="max-w-7xl mx-auto">
//         <header className="border-b border-[#f0703c] pb-2 mb-8">
//           <h1 className="text-4xl font-bold text-[#556677]">MY EVALUATION</h1>
//         </header>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           {/* Time Performance Card */}
//           <div className="bg-white rounded-lg p-5 shadow-sm">
//             <div className="flex justify-center mb-4">
//               <div className="w-16 h-16 rounded-full border-2 border-[#f0703c] flex items-center justify-center">
//                 <FiClock className="text-[#f0703c] text-2xl" />
//               </div>
//             </div>
//             <div className="h-32">
//               {timeData.length > 0 && (
//                 <Line 
//                   data={{
//                     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//                     datasets: [{
//                       data: timeData,
//                       borderColor: 'rgba(239, 121, 82, 1)',
//                     }]
//                   }}
//                   options={timeOptions}
//                 />
//               )}
//             </div>
//           </div>

//           {/* Task Completion Card */}
//           <div className="bg-white rounded-lg p-5 shadow-sm">
//             <div className="flex justify-center mb-4">
//               <div className="w-16 h-16 rounded-full border-2 border-[#ffad33] flex items-center justify-center">
//                 <BsFileEarmarkCheck className="text-[#ffad33] text-2xl" />
//               </div>
//             </div>
//             <div className="h-32">
//               {completionData.length > 0 && (
//                 <Line 
//                   data={{
//                     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//                     datasets: [{
//                       data: completionData,
//                       borderColor: 'rgba(255, 173, 51, 1)',
//                     }]
//                   }}
//                   options={completionOptions}
//                 />
//               )}
//             </div>
//           </div>

//           {/* Accuracy Card */}
//           <div className="bg-white rounded-lg p-5 shadow-sm">
//             <div className="flex justify-center mb-4">
//               <div className="w-16 h-16 rounded-full border-2 border-[#808080] flex items-center justify-center">
//                 <AiOutlineAim className="text-[#808080] text-2xl" />
//               </div>
//             </div>
//             <div className="h-32">
//               {accuracyData.length > 0 && (
//                 <Line 
//                   data={{
//                     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//                     datasets: [{
//                       data: accuracyData,
//                       borderColor: 'rgba(128, 128, 128, 1)',
//                     }]
//                   }}
//                   options={accuracyOptions}
//                 />
//               )}
//             </div>
//           </div>

//           {/* Status Card */}
//           <div className="bg-[#f0703c] rounded-lg p-5 text-white flex flex-col justify-between">
//             <div>
//               <h2 className="text-3xl font-bold mb-8">STATUS: APPROVED</h2>
//               <div className="space-y-4">
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-[#8bc34a] rounded-md flex items-center justify-center mr-2">
//                     <BsArrowUp className="text-white" />
//                   </div>
//                   <span className="text-3xl font-bold">3</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-[#f44336] rounded-md flex items-center justify-center mr-2">
//                     <BsArrowDown className="text-white" />
//                   </div>
//                   <span className="text-3xl font-bold">1</span>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-end">
//               <img 
//                 src={profileImage} 
//                 alt="Employee profile" 
//                 className="w-40 h-auto object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Bar Chart Card */}
//         <div className="mt-6 bg-white rounded-lg p-5 shadow-sm">
//           <div className="h-64">
//             {performanceData.labels && (
//               <Bar
//                 data={{
//                   labels: performanceData.labels,
//                   datasets: [
//                     {
//                       data: performanceData.primary,
//                       backgroundColor: '#f0703c',
//                       barThickness: 25,
//                       borderRadius: 0,
//                     },
//                     {
//                       data: performanceData.secondary,
//                       backgroundColor: '#808080',
//                       barThickness: 25,
//                       borderRadius: {
//                         topLeft: 3,
//                         topRight: 3,
//                         bottomLeft: 0,
//                         bottomRight: 0,
//                       },
//                     }
//                   ]
//                 }}
//                 options={barOptions}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PerformanceDashboard;






import React, { useEffect, useRef } from 'react';

// Import Chart.js through CDN rather than npm package
// This avoids the dependency optimization issue
import person from '../assets/person-image.png'
const PerformanceDashboard = () => {
    // References for chart canvases
    const timeChartRef = useRef(null);
    const completionChartRef = useRef(null);
    const accuracyChartRef = useRef(null);
    const barChartRef = useRef(null);

    // Chart instances refs to prevent memory leaks
    const chartInstances = useRef({});

    // Clean up chart instances before re-creating them
    const destroyCharts = () => {
        Object.values(chartInstances.current).forEach(chart => {
            if (chart) chart.destroy();
        });
    };

    useEffect(() => {
        // Load Chart.js from CDN
        const loadChartJS = async () => {
            if (window.Chart) {
                initCharts();
                return;
            }

            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';
            script.async = true;
            script.onload = () => initCharts();
            document.head.appendChild(script);
        };

        loadChartJS();

        // Destroy charts on component unmount
        return () => destroyCharts();
    }, []);

    const initCharts = () => {
        // Make sure Chart.js is loaded
        if (!window.Chart) return;

        const Chart = window.Chart;

        // Destroy any existing charts before creating new ones
        destroyCharts();

        // Time performance chart (orange area chart)
        if (timeChartRef.current) {
            const ctx = timeChartRef.current.getContext('2d');
            const gradient = ctx.createLinearGradient(0, 0, 0, 150);
            gradient.addColorStop(0, 'rgba(231, 242, 70, 0.7)');
            gradient.addColorStop(1, 'rgba(242, 124, 70, 0.05)');

            chartInstances.current.timeChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        data: [30, 60, 35, 65, 45, 70],
                        fill: true,
                        backgroundColor: gradient,
                        borderColor: 'transparent',
                        tension: 0.4,
                        pointRadius: 0
                    }]
                },
                options: createAreaChartOptions()
            });
        }

        // Task completion chart (yellow/orange area chart)
        if (completionChartRef.current) {
            const ctx = completionChartRef.current.getContext('2d');
            const gradient = ctx.createLinearGradient(0, 0, 0, 150);
            gradient.addColorStop(0, 'rgba(247, 171, 57, 0.7)');
            gradient.addColorStop(1, 'rgba(28, 27, 26, 0.05)');

            chartInstances.current.completionChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        data: [40, 55, 65, 75, 70, 60],
                        fill: true,
                        backgroundColor: gradient,
                        borderColor: 'transparent',
                        tension: 0.4,
                        pointRadius: 0
                    }]
                },
                options: createAreaChartOptions()
            });
        }

        // Accuracy chart (gray area chart)
        if (accuracyChartRef.current) {
            const ctx = accuracyChartRef.current.getContext('2d');
            const gradient = ctx.createLinearGradient(0, 0, 0, 150);
            gradient.addColorStop(0, 'rgba(160, 160, 160, 0.7)');
            gradient.addColorStop(1, 'rgba(160, 160, 160, 0.05)');

            chartInstances.current.accuracyChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        data: [50, 60, 65, 70, 65, 50],
                        fill: true,
                        backgroundColor: gradient,
                        borderColor: 'transparent',
                        tension: 0.4,
                        pointRadius: 0
                    }]
                },
                options: createAreaChartOptions()
            });
        }

        // Bar chart (stacked)
        if (barChartRef.current) {
            const ctx = barChartRef.current.getContext('2d');

            chartInstances.current.barChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                        {
                            label: 'Primary',
                            data: [75, 60, 45, 50, 35, 40, 50, 45, 45, 60, 55, 50],
                            backgroundColor: '#f26522',
                            barThickness: 22,
                            borderRadius: 0,
                            categoryPercentage: 0.7,
                            barPercentage: 1.0
                        },
                        {
                            label: 'Secondary',
                            data: [15, 15, 20, 15, 15, 10, 15, 10, 15, 20, 15, 15],
                            backgroundColor: '#A0A0A9',
                            barThickness: 22,
                            borderRadius: {
                                topLeft: 3,
                                topRight: 3
                            },
                            categoryPercentage: 0.7,
                            barPercentage: 1.0
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: false
                        }
                    },
                    scales: {
                        x: {
                            stacked: true,
                            display: false,
                            grid: {
                                display: false,
                                drawBorder: false
                            }
                        },
                        y: {
                            stacked: true,
                            min: 0,
                            max: 100,
                            border: {
                                display: false
                            },
                            ticks: {
                                padding: 10,
                                font: {
                                    family: "'Arial', sans-serif",
                                    size: 14,
                                    color: "#999"
                                },
                                stepSize: 25
                            },
                            grid: {
                                color: "rgba(200, 200, 200, 0.15)",
                                drawBorder: false
                            }
                        }
                    }
                }
            });
        }
    };

    // Common options for area charts
    const createAreaChartOptions = () => {
        return {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            },
            elements: {
                line: {
                    borderWidth: 0,
                }
            },
            scales: {
                x: {
                    display: false,
                    grid: {
                        display: false
                    }
                },
                y: {
                    display: false,
                    grid: {
                        display: false
                    }
                }
            }
        };
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="border-b border-[#F27C46] pb-2 mb-8">
                    <h1 className="text-4xl font-bold text-[#556677]">MY EVALUATION</h1>
                </div>

                {/* Top cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
                    {/* Time Performance Card */}
                    <div className="bg-white rounded-lg shadow-sm p-5">
                        <div className="flex justify-center mb-4">
                            <div className="w-[84px] h-[84px] rounded-full border border-[#F27C46] flex items-center justify-center">
                                <svg className="w-10 h-10 text-[#F27C46]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="h-32">
                            <canvas ref={timeChartRef} />
                        </div>
                    </div>

                    {/* Task Completion Card */}
                    <div className="bg-white rounded-lg shadow-sm p-5">
                        <div className="flex justify-center mb-4">
                            <div className="w-[84px] h-[84px] rounded-full border border-[#FFB670] flex items-center justify-center">
                                <svg className="w-10 h-10 text-[#FFB670]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                            </div>
                        </div>
                        <div className="h-32">
                            <canvas ref={completionChartRef} />
                        </div>
                    </div>

                    {/* Accuracy Card */}
                    <div className="bg-white rounded-lg shadow-sm p-5">
                        <div className="flex justify-center mb-4">
                            <div className="w-[84px] h-[84px] rounded-full border border-[#A0A0A0] flex items-center justify-center">
                                <svg className="w-10 h-10 text-[#A0A0A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="h-32">
                            <canvas ref={accuracyChartRef} />
                        </div>
                    </div>

                    {/* Status Card */}
                    <div className="bg-[#f26522] rounded-lg p-5 text-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl font-bold mb-8">STATUS: APPROVED</h2>
                            <div className='flex'>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <div className="w-9 h-9 bg-[#8BC34A] rounded-md flex items-center justify-center mr-3">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                            </svg>
                                        </div>
                                        <span className="text-3xl font-bold">3</span>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="w-9 h-9 bg-[#F44336] rounded-md flex items-center justify-center mr-3">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                            </svg>
                                        </div>
                                        <span className="text-3xl font-bold">1</span>
                                    </div>
                                </div>
                                 <img
                                        src={person}
                                        alt="Employee profile"
                                        className="w-[140%] h-auto object-cover"
                                    />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Performance Chart */}
                <div className="bg-white rounded-lg shadow-sm p-5">
                    <div className="h-64">
                        <canvas ref={barChartRef} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerformanceDashboard;
