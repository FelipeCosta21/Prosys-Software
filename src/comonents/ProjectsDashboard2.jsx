import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const ProjectsDashboard = () => {
    // Line chart data
    const lineChartData = {
        labels: ["September", "October", "November", "December"],
        datasets: [
            {
                label: "ACTUAL COSTS",
                data: [50, 55, 52, 53],
                borderColor: "#36A2EB",
                tension: 0.1,
                borderWidth: 2,
            },
            {
                label: "PFC",
                data: [70, 68, 63, 62],
                borderColor: "#3F48CC",
                tension: 0.1,
                borderWidth: 2,
            },
            {
                label: "INVOICED",
                data: [30, 40, 48, 50],
                borderColor: "#FF6384",
                tension: 0.1,
                borderWidth: 2,
            },
            {
                label: "PO",
                data: [90, 85, 82, 80],
                borderColor: "#800080",
                tension: 0.1,
                borderWidth: 2,
            },
        ],
    };

    const donutChartData = {
        labels: ["Financial", "Healthy"],
        datasets: [{
            data: [40, 60],
            backgroundColor: ["#006400", "#FFD700"],
            borderWidth: 0,
        }]
    };

    const Gauge = ({ value, label, color }) => {
        const rotation = value * 1.8; // 180 degrees = 100%
        const textColor = color === "teal" ? "text-teal-600" : "text-blue-600";
        const borderColor = color === "teal" ? "border-teal-600" : "border-blue-600";

        return (
            <div className="flex flex-col items-center">
                <h3 className="text-gray-700 font-medium text-sm sm:text-base">{label}</h3>
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
                    <div className="absolute w-full h-full rounded-full bg-gray-200 overflow-hidden"
                        style={{ clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0% 100%)" }}>
                    </div>

                    <div className="absolute w-full h-full rounded-full overflow-hidden"
                        style={{
                            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0% 100%)",
                            background: color === "teal" ? "conic-gradient(#0D9488 0deg, #e5e7eb 0deg)" : "conic-gradient(#0D9488 0deg, #e5e7eb 0deg)",
                            transform: `rotate(${rotation}deg)`
                        }}>
                    </div>
                    <div className={`absolute top-[10%] left-[10%] w-[80%] h-[80%] rounded-full bg-white flex items-center justify-center ${borderColor}`}>
                        <div className={`text-xl sm:text-2xl md:text-3xl font-bold ${textColor}`}>
                            {value}%
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="w-full bg-gray-50 min-h-screen font-sans">

            <div className=" py-3 text-center text-white">
                <h1 className="text-xl md:text-2xl text-black font-normal p-2 w-100 bg-yellow-300">Projects Overview Admin</h1>
            </div>
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">

                    <div className="flex items-center mb-4 md:mb-0">
                        <div className="mr-6">
                            <h2 className="text-blue-600 font-bold text-xl">INTROSYS</h2>
                            <p className="text-gray-500 text-xs">Global Control System Designers</p>
                        </div>
                        <div className="border-l pl-6 border-gray-300">
                            <div className="text-gray-700 font-medium">BUIM</div>
                            <div className="text-gray-600 text-sm">Project Management</div>
                            <div className="text-gray-600 text-sm">Report</div>
                        </div>
                    </div>

                    <div className="flex gap-2 mb-4 md:mb-0">
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm">
                            Overview
                        </button>
                        <button className="bg-blue-100 text-gray-700 px-6 py-2 rounded-full text-sm">
                            Projects
                        </button>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex flex-col">
                            <label className="text-gray-600 text-sm">Month</label>
                            <select className="border rounded px-2 py-1 w-32">
                                <option>December</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-600 text-sm">Year</label>
                            <select className="border rounded px-2 py-1 w-24">
                                <option>2024</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-5 rounded-md shadow-sm">
                        <h2 className="text-blue-800 font-medium mb-6">Projects</h2>
                        <div className="flex flex-col items-center">
                            <div className="relative w-48 h-48">
                                <Doughnut
                                    data={donutChartData}
                                    options={{
                                        cutout: '70%',
                                        plugins: {
                                            legend: {
                                                display: false
                                            }
                                        }
                                    }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-4xl font-bold">17</span>
                                </div>
                            </div>

                            <div className="flex justify-center gap-6 mt-4">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 rounded-full bg-green-800 mr-2"></div>
                                    <span className="text-sm text-gray-600">FINANCIAL</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                                    <span className="text-sm text-gray-600">HEALTHY</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-md shadow-sm md:col-span-2">
                        <h2 className="text-blue-800 font-medium mb-6">Annual Costs and Invoicing</h2>
                        <div className="h-60">
                            <Line
                                data={lineChartData}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: {
                                            position: 'bottom',
                                            labels: {
                                                padding: 20,
                                                usePointStyle: true,
                                            }
                                        }
                                    },
                                    scales: {
                                        y: {
                                            beginAtZero: false,
                                            grid: {
                                                display: false
                                            }
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-md shadow-sm md:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col items-center justify-center p-4">
                                <h3 className="text-blue-800 font-medium mb-2">PO + EC</h3>
                                <div className=" py-1 px-4 rounded font-bold text-xl">
                                    $X,XXX,XXX
                                </div>
                                <div className="text-gray-500 text-sm mt-2">m-1</div>
                            </div>

                            <div className="flex flex-col items-center justify-center p-4">
                                <h3 className="text-blue-800 font-medium mb-1">Customer payments</h3>
                                <h4 className="text-blue-800 font-medium mb-2">Invoicing</h4>
                                <div className=" py-1 px-4 rounded font-bold text-xl">
                                    $X,XXX,XXX
                                </div>
                                <div className="text-gray-500 text-sm mt-2">m-1</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-md shadow-sm md:col-span-3">
                        <h2 className="text-blue-800 font-medium mb-6">Budget</h2>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-blue-800 font-medium mb-2">Budget + EC</h3>
                                <div className=" py-1 px-4 rounded font-bold text-xl">
                                    $X,XXX,XXX
                                </div>
                                <div className="text-gray-500 text-sm mt-2">m-1</div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-blue-800 font-medium mb-2">PFC</h3>
                                <div className=" py-1 px-4 rounded font-bold text-xl">
                                    $X,XXX,XXX
                                </div>
                                <div className="text-gray-500 text-sm mt-2">m-1</div>
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <Gauge value={70.25} label="COMPLETION" color="teal" />
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <Gauge value={39.11} label="GROSS MARGIN" color="teal" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDashboard;
