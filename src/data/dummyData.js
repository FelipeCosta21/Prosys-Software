// // // src/data/dummyData.js
// // import { FaLaptop, FaUsers, FaFileAlt, FaHourglassHalf, FaProjectDiagram, FaToggleOn } from 'react-icons/fa';

// // export const projectsData = [
// //     {
// //         id: 1,
// //         name: "Project 1",
// //         bgColor: "bg-teal-700",
// //         iconBgColor: "bg-purple-600",
// //         iconType: "laptop",
// //         chartData: {
// //             labels: ['Organic Search', 'Direct', 'Social', 'Referral'],
// //             datasets: [
// //                 {
// //                     data: [45, 25, 20, 10],
// //                     backgroundColor: ['#ef4444', '#f97316', '#fb923c', '#fed7aa'],
// //                     borderWidth: 0,
// //                 },
// //             ],
// //         },
// //         detailsTitle: "Project Flex n Gate",
// //         dateRange: "24/02/2024 - 2/05/2025",
// //         tasks: [
// //             {
// //                 id: 1,
// //                 name: "01. Offline",
// //                 level: 0,
// //                 hasChildren: true,
// //                 expanded: false,
// //                 completed: true,
// //                 startDate: "1/7/2024",
// //                 endDate: "1/7/2024",
// //                 duration: "1 dia"
// //             },
// //             {
// //                 id: 2,
// //                 name: "02. Virtual Commissioning",
// //                 level: 0,
// //                 hasChildren: true,
// //                 expanded: true,
// //                 completed: true,
// //                 startDate: "1/7/2024",
// //                 endDate: "1/7/2024",
// //                 duration: "1 dia"
// //             },
// //             {
// //                 id: 3,
// //                 name: "02.1 ZONA 4",
// //                 level: 1,
// //                 hasChildren: true,
// //                 expanded: false,
// //                 completed: true,
// //                 info: true,
// //                 startDate: "1/7/2024",
// //                 endDate: "1/7/2024",
// //                 duration: "1 dia"
// //             },
// //             {
// //                 id: 4,
// //                 name: "02.1.1 LH",
// //                 level: 2,
// //                 hasChildren: true,
// //                 expanded: false,
// //                 completed: true,
// //                 startDate: "1/7/2024",
// //                 endDate: "1/7/2024",
// //                 duration: "1 dia"
// //             },
// //             {
// //                 id: 5,
// //                 name: "02.1.1.1 PLC",
// //                 level: 3,
// //                 completed: true,
// //                 startDate: "1/7/2024",
// //                 endDate: "1/7/2024",
// //                 duration: "1 dia",
// //                 assignee: { initials: "EA", name: "Esteban Abarca" }
// //             },
// //             {
// //                 id: 6,
// //                 name: "02.1.1.2 Robot",
// //                 level: 3,
// //                 completed: true,
// //                 startDate: "1/7/2024",
// //                 endDate: "1/7/2024",
// //                 duration: "1 dia",
// //                 assignee: { initials: "LP", name: "Luis Perez" }
// //             },
// //             {
// //                 id: 7,
// //                 name: "02.1.2 RH",
// //                 level: 2,
// //                 hasChildren: true,
// //                 expanded: false,
// //                 completed: true,
// //                 startDate: "1/7/2024",
// //                 endDate: "1/7/2024",
// //                 duration: "1 dia"
// //             }
// //         ]
// //     },
// //     {
// //         id: 2,
// //         name: "Project 2",
// //         bgColor: "bg-teal-700",
// //         iconBgColor: "bg-purple-600",
// //         icon: <FaUsers className="text-white text-5xl" />,
// //         chartData: {
// //             labels: ['Organic Search', 'Direct', 'Social', 'Referral'],
// //             datasets: [
// //                 {
// //                     data: [35, 30, 25, 10],
// //                     backgroundColor: ['#ef4444', '#f97316', '#fb923c', '#fed7aa'],
// //                     borderWidth: 0,
// //                 },
// //             ],
// //         },
// //         detailsTitle: "Project Smart Factory",
// //         dateRange: "15/01/2024 - 30/06/2024",
// //         tasks: [
// //             {
// //                 id: 1,
// //                 name: "01. Preparation",
// //                 level: 0,
// //                 hasChildren: true,
// //                 expanded: true,
// //                 completed: true,
// //                 startDate: "15/1/2024",
// //                 endDate: "30/1/2024",
// //                 duration: "15 dias"
// //             },
// //             {
// //                 id: 2,
// //                 name: "02. Implementation",
// //                 level: 0,
// //                 hasChildren: true,
// //                 expanded: true,
// //                 completed: false,
// //                 startDate: "1/2/2024",
// //                 endDate: "30/4/2024",
// //                 duration: "90 dias"
// //             },
// //             {
// //                 id: 3,
// //                 name: "02.1 Hardware Setup",
// //                 level: 1,
// //                 hasChildren: true,
// //                 expanded: false,
// //                 completed: true,
// //                 info: true,
// //                 startDate: "1/2/2024",
// //                 endDate: "28/2/2024",
// //                 duration: "28 dias"
// //             },
// //             {
// //                 id: 4,
// //                 name: "02.2 Software Integration",
// //                 level: 1,
// //                 hasChildren: true,
// //                 expanded: false,
// //                 completed: false,
// //                 startDate: "1/3/2024",
// //                 endDate: "30/4/2024",
// //                 duration: "60 dias"
// //             },
// //             {
// //                 id: 5,
// //                 name: "03. Testing",
// //                 level: 0,
// //                 hasChildren: true,
// //                 expanded: false,
// //                 completed: false,
// //                 startDate: "1/5/2024",
// //                 endDate: "31/5/2024",
// //                 duration: "31 dias"
// //             },
// //             {
// //                 id: 6,
// //                 name: "04. Deployment",
// //                 level: 0,
// //                 completed: false,
// //                 startDate: "1/6/2024",
// //                 endDate: "30/6/2024",
// //                 duration: "30 dias",
// //                 assignee: { initials: "JD", name: "John Doe" }
// //             }
// //         ]
// //     },
// //     {
// //         id: 3,
// //         name: "Project 3",
// //         bgColor: "bg-teal-700",
// //         iconBgColor: "bg-pink-600",
// //         icon: <FaFileAlt className="text-white text-5xl" />,
// //         chartData: {
// //             labels: ['Organic Search', 'Direct', 'Social', 'Referral'],
// //             datasets: [
// //                 {
// //                     data: [50, 20, 15, 15],
// //                     backgroundColor: ['#ef4444', '#f97316', '#fb923c', '#fed7aa'],
// //                     borderWidth: 0,
// //                 },
// //             ],
// //         }
// //     },
// //     {
// //         id: 4,
// //         name: "Project 4",
// //         bgColor: "bg-teal-700",
// //         iconBgColor: "bg-teal-500",
// //         icon: <FaHourglassHalf className="text-white text-5xl" />,
// //         chartData: {
// //             labels: ['Organic Search', 'Direct', 'Social', 'Referral'],
// //             datasets: [
// //                 {
// //                     data: [40, 30, 20, 10],
// //                     backgroundColor: ['#ef4444', '#f97316', '#fb923c', '#fed7aa'],
// //                     borderWidth: 0,
// //                 },
// //             ],
// //         }
// //     },
// //     {
// //         id: 5,
// //         name: "Project 5",
// //         bgColor: "bg-teal-700",
// //         iconBgColor: "bg-teal-700",
// //         icon: <FaProjectDiagram className="text-white text-5xl" />,
// //         chartData: {
// //             labels: ['Organic Search', 'Direct', 'Social', 'Referral'],
// //             datasets: [
// //                 {
// //                     data: [30, 35, 25, 10],
// //                     backgroundColor: ['#ef4444', '#f97316', '#fb923c', '#fed7aa'],
// //                     borderWidth: 0,
// //                 },
// //             ],
// //         }
// //     },
// //     {
// //         id: 6,
// //         name: "Project 6",
// //         bgColor: "bg-teal-700",
// //         iconBgColor: "bg-teal-800",
// //         icon: <FaToggleOn className="text-white text-5xl" />,
// //         chartData: {
// //             labels: ['Organic Search', 'Direct', 'Social', 'Referral'],
// //             datasets: [
// //                 {
// //                     data: [25, 25, 25, 25],
// //                     backgroundColor: ['#ef4444', '#f97316', '#fb923c', '#fed7aa'],
// //                     borderWidth: 0,
// //                 },
// //             ],
// //         }
// //     }
// // ];




// // src/data/dummyData.js
// export const projectsData = [
//   {
//     id: 1,
//     name: "Project 1",
//     bgColor: "bg-teal-700",
//     iconBgColor: "bg-purple-600",
//     iconType: "laptop",
//     chartData: {
//       labels: ['Organic Search', 'Direct', 'Social', 'Referral'],
//       datasets: [
//         {
//           data: [45, 25, 20, 10],
//           backgroundColor: ['#ef4444', '#f97316', '#fb923c', '#fed7aa'],
//           borderWidth: 0,
//         },
//       ],
//     },
//     detailsTitle: "Project Flex n Gate",
//     dateRange: "24/02/2024 - 2/05/2025",
//     tasks: [
//       {
//         id: 1,
//         name: "01. Offline",
//         level: 0,
//         hasChildren: true,
//         expanded: false,
//         completed: true,
//         startDate: "1/7/2024",
//         endDate: "1/7/2024",
//         duration: "1 dia",
//         percentComplete: 100
//       },
//       {
//         id: 2,
//         name: "02. Virtual Commissioning",
//         level: 0,
//         hasChildren: true,
//         expanded: true,
//         completed: true,
//         startDate: "1/7/2024",
//         endDate: "1/7/2024",
//         duration: "1 dia",
//         percentComplete: 100
//       },
//       {
//         id: 3,
//         name: "02.1 ZONA 4",
//         level: 1,
//         hasChildren: true,
//         expanded: true,
//         completed: true,
//         info: true,
//         startDate: "1/7/2024",
//         endDate: "1/7/2024",
//         duration: "1 dia",
//         percentComplete: 100
//       },
//       {
//         id: 4,
//         name: "02.1.1 LH",
//         level: 2,
//         hasChildren: true,
//         expanded: true,
//         completed: true,
//         startDate: "1/7/2024",
//         endDate: "1/7/2024",
//         duration: "1 dia",
//         percentComplete: 100
//       },
//       {
//         id: 5,
//         name: "02.1.1.1 PLC",
//         level: 3,
//         completed: true,
//         startDate: "1/7/2024",
//         endDate: "1/7/2024",
//         duration: "1 dia",
//         percentComplete: 100,
//         assignee: { initials: "EA", name: "Esteban Abarca" }
//       },
//       {
//         id: 6,
//         name: "02.1.1.2 Robot",
//         level: 3,
//         completed: true,
//         startDate: "1/7/2024",
//         endDate: "1/7/2024",
//         duration: "1 dia",
//         percentComplete: 100,
//         assignee: { initials: "LP", name: "Luis Perez" }
//       },
//       {
//         id: 7,
//         name: "02.1.2 RH",
//         level: 2,
//         hasChildren: true,
//         expanded: false,
//         completed: true,
//         startDate: "1/7/2024",
//         endDate: "1/7/2024",
//         duration: "1 dia",
//         percentComplete: 100
//       }
//     ]
//   },
//   {
//     id: 2,
//     name: "Project 2",
//     bgColor: "bg-teal-700",
//     iconBgColor: "bg-purple-600",
//     iconType: "users",
//     chartData: {
//       labels: ['Organic Search', 'Direct', 'Social', 'Referral'],
//       datasets: [
//         {
//           data: [35, 30, 25, 10],
//           backgroundColor: ['#ef4444', '#f97316', '#fb923c', '#fed7aa'],
//           borderWidth: 0,
//         },
//       ],
//     },
//     detailsTitle: "Project Smart Factory",
//     dateRange: "15/01/2024 - 30/06/2024",
//     tasks: [
//       {
//         id: 1,
//         name: "01. Planning",
//         level: 0,
//         hasChildren: true,
//         expanded: true,
//         completed: true,
//         startDate: "15/1/2024",
//         endDate: "30/1/2024",
//         duration: "15 dias",
//         percentComplete: 100
//       },
//       {
//         id: 2,
//         name: "02. Implementation",
//         level: 0,
//         hasChildren: true,
//         expanded: true,
//         completed: false,
//         startDate: "1/2/2024",
//         endDate: "30/4/2024",
//         duration: "90 dias",
//         percentComplete: 65
//       },
//       {
//         id: 3,
//         name: "02.1 Hardware Setup",
//         level: 1,
//         hasChildren: true,
//         expanded: true,
//         completed: true,
//         info: true,
//         startDate: "1/2/2024",
//         endDate: "28/2/2024",
//         duration: "28 dias",
//         percentComplete: 100
//       },
//       {
//         id: 4,
//         name: "02.2 Software Integration",
//         level: 1,
//         hasChildren: false,
//         expanded: false,
//         completed: false,
//         startDate: "1/3/2024",
//         endDate: "30/4/2024",
//         duration: "60 dias",
//         percentComplete: 45,
//         assignee: { initials: "JS", name: "John Smith" }
//       },
//       {
//         id: 5,
//         name: "03. Testing",
//         level: 0,
//         hasChildren: true,
//         expanded: false,
//         completed: false,
//         startDate: "1/5/2024",
//         endDate: "31/5/2024",
//         duration: "31 dias",
//         percentComplete: 0
//       },
//       {
//         id: 6,
//         name: "04. Deployment",
//         level: 0,
//         hasChildren: false,
//         completed: false,
//         startDate: "1/6/2024",
//         endDate: "30/6/2024",
//         duration: "30 dias",
//         percentComplete: 0,
//         assignee: { initials: "JD", name: "Jane Doe" }
//       }
//     ]
//   },
//   {
//     id: 3,
//     name: "Project 3",
//     bgColor: "bg-teal-700",
//     iconBgColor: "bg-pink-600",
//     iconType: "file",
//     chartData: {
//       labels: ['Organic Search', 'Direct', 'Social', 'Referral'],
//       datasets: [
//         {
//           data: [50, 20, 15, 15],
//           backgroundColor: ['#ef4444', '#f97316', '#fb923c', '#fed7aa'],
//           borderWidth: 0,
//         },
//       ],
//     },
//     detailsTitle: "Project Documentation",
//     dateRange: "01/03/2024 - 15/08/2024",
//     tasks: [
//       {
//         id: 1,
//         name: "01. Requirement Analysis",
//         level: 0,
//         hasChildren: true,
//         expanded: false,
//         completed: true,
//         startDate: "1/3/2024",
//         endDate: "15/3/2024",
//         duration: "15 dias",
//         percentComplete: 100
//       },
//       {
//         id: 2,
//         name: "02. Document Creation",
//         level: 0,
//         hasChildren: true,
//         expanded: false,
//         completed: false,
//         startDate: "16/3/2024",
//         endDate: "30/6/2024",
//         duration: "106 dias",
//         percentComplete: 70
//       }
//     ]
//   },
//   {
//     id: 4,
//     name: "Project 4",
//     bgColor: "bg-teal-700",
//     iconBgColor: "bg-teal-500",
//     iconType: "hourglass",
//     chartData: {
//       labels: ['Organic Search', 'Direct', 'Social', 'Referral'],
//       datasets: [
//         {
//           data: [40, 30, 20, 10],
//           backgroundColor: ['#ef4444', '#f97316', '#fb923c', '#fed7aa'],
//           borderWidth: 0,
//         },
//       ],
//     },
//     detailsTitle: "Project Timeline",
//     dateRange: "01/01/2024 - 31/12/2024",
//     tasks: [
//       {
//         id: 1,
//         name: "01. Phase One",
//         level: 0,
//         hasChildren: true,
//         expanded: false,
//         completed: true,
//         startDate: "1/1/2024",
//         endDate: "31/3/2024",
//         duration: "90 dias",
//         percentComplete: 100
//       },
//       {
//         id: 2,
//         name: "02. Phase Two",
//         level: 0,
//         hasChildren: true,
//         expanded: false,
//         completed: false,
//         startDate: "1/4/2024",
//         endDate: "30/6/2024",
//         duration: "91 dias",
//         percentComplete: 45
//       }
//     ]
//   },
//   {
//     id: 5,
//     name: "Project 5",
//     bgColor: "bg-teal-700",
//     iconBgColor: "bg-teal-700",
//     iconType: "projectDiagram",
//     chartData: {
//       labels: ['Organic Search', 'Direct', 'Social', 'Referral'],
//       datasets: [
//         {
//           data: [30, 35, 25, 10],
//           backgroundColor: ['#ef4444', '#f97316', '#fb923c', '#fed7aa'],
//           borderWidth: 0,
//         },
//       ],
//     },
//     detailsTitle: "Project Network",
//     dateRange: "15/02/2024 - 15/11/2024",
//     tasks: [
//       {
//         id: 1,
//         name: "01. Network Design",
//         level: 0,
//         hasChildren: false,
//         completed: true,
//         startDate: "15/2/2024",
//         endDate: "15/3/2024",
//         duration: "29 dias",
//         percentComplete: 100,
//         assignee: { initials: "RT", name: "Robert Thompson" }
//       },
//       {
//         id: 2,
//         name: "02. Network Implementation",
//         level: 0,
//         hasChildren: false,
//         completed: false,
//         startDate: "16/3/2024",
//         endDate: "15/9/2024",
//         duration: "183 dias",
//         percentComplete: 35,
//         assignee: { initials: "MM", name: "Mary Miller" }
//       }
//     ]
//   },
//   {
//     id: 6,
//     name: "Project 6",
//     bgColor: "bg-teal-700",
//     iconBgColor: "bg-teal-800",
//     iconType: "toggle",
//     chartData: {
//       labels: ['Organic Search', 'Direct', 'Social', 'Referral'],
//       datasets: [
//         {
//           data: [25, 25, 25, 25],
//           backgroundColor: ['#ef4444', '#f97316', '#fb923c', '#fed7aa'],
//           borderWidth: 0,
//         },
//       ],
//     },
//     detailsTitle: "Project Control Systems",
//     dateRange: "01/04/2024 - 31/10/2024",
//     tasks: [
//       {
//         id: 1,
//         name: "01. System Design",
//         level: 0,
//         hasChildren: false,
//         completed: true,
//         startDate: "1/4/2024",
//         endDate: "30/4/2024",
//         duration: "30 dias",
//         percentComplete: 100
//       },
//       {
//         id: 2,
//         name: "02. System Implementation",
//         level: 0,
//         hasChildren: false,
//         completed: false,
//         startDate: "1/5/2024",
//         endDate: "31/8/2024",
//         duration: "123 dias",
//         percentComplete: 60,
//         assignee: { initials: "AJ", name: "Alex Johnson" }
//       }
//     ]
//   }
// ];




// dummyData.js
// export const projectsData = [
//   {
//     id: 1,
//     name: "Project 1",
//     iconBgColor: "bg-purple-600",
//     iconType: "laptop", 
//     chartData: {
//       labels: ['Organic Search', 'Direct', 'Social', 'Referral'],
//       datasets: [
//         {
//           data: [45, 25, 20, 10],
//           backgroundColor: ['#ef4444', '#f97316', '#fb923c', '#fed7aa'],
//           borderWidth: 0,
//         },
//       ],
//     },
//     detailsTitle: "Project Flex n Gate",
//     dateRange: "24/02/2024 - 2/05/2025",
//     tasks: [
//       {
//         id: 1,
//         name: "01. Offline",
//         level: 0,
//         hasChildren: true,
//         expanded: false,
//         completed: true,
//         startDate: "1/7/2024",
//         endDate: "1/7/2024",
//         duration: "1 dia"
//       },
//       {
//         id: 2,
//         name: "02. Virtual Commissioning",
//         level: 0,
//         hasChildren: true,
//         expanded: true,
//         completed: true,
//         startDate: "1/7/2024",
//         endDate: "1/7/2024",
//         duration: "1 dia"
//       },
//       {
//         id: 3,
//         name: "02.1 ZONA 4",
//         level: 1,
//         hasChildren: true,
//         expanded: true,
//         completed: true,
//         info: true,
//         startDate: "1/7/2024",
//         endDate: "1/7/2024",
//         duration: "1 dia"
//       },
//       {
//         id: 4,
//         name: "02.1.1 LH",
//         level: 2,
//         hasChildren: true,
//         expanded: true,
//         completed: true,
//         startDate: "1/7/2024",
//         endDate: "1/7/2024",
//         duration: "1 dia"
//       },
//       {
//         id: 5,
//         name: "02.1.1.1 PLC",
//         level: 3,
//         completed: true,
//         startDate: "1/7/2024",
//         endDate: "1/7/2024",
//         duration: "1 dia",
//         assignee: { initials: "EA", name: "Esteban Abarca" }
//       },
//       {
//         id: 6,
//         name: "02.1.1.2 Robot",
//         level: 3,
//         completed: true,
//         startDate: "1/7/2024",
//         endDate: "1/7/2024",
//         duration: "1 dia",
//         assignee: { initials: "LP", name: "Luis Perez" }
//       },
//       {
//         id: 7,
//         name: "02.1.2 RH",
//         level: 2,
//         hasChildren: true,
//         expanded: false,
//         completed: true,
//         startDate: "1/7/2024",
//         endDate: "1/7/2024",
//         duration: "1 dia"
//       }
//     ]
//   },
//   {
//     id: 2,
//     name: "Project 2",
//     iconBgColor: "bg-purple-600",
//     iconType: "users",
//     chartData: {
//       labels: ['Organic Search', 'Direct', 'Social', 'Referral'],
//       datasets: [
//         {
//           data: [35, 30, 25, 10],
//           backgroundColor: ['#ef4444', '#f97316', '#fb923c', '#fed7aa'],
//           borderWidth: 0,
//         },
//       ],
//     },
//     detailsTitle: "Project Smart Factory",
//     dateRange: "15/01/2024 - 30/06/2024",
//     tasks: [
//       {
//         id: 1,
//         name: "01. Planning",
//         level: 0,
//         hasChildren: true,
//         expanded: true,
//         completed: true,
//         startDate: "15/1/2024",
//         endDate: "30/1/2024",
//         duration: "15 dias"
//       },
//       {
//         id: 2,
//         name: "02. Implementation",
//         level: 0,
//         hasChildren: true,
//         expanded: true,
//         completed: false,
//         startDate: "1/2/2024",
//         endDate: "30/4/2024",
//         duration: "90 dias"
//       }
//     ]
//   },
//   {
//     id: 3,
//     name: "Project 3",
//     iconBgColor: "bg-pink-600",
//     iconType: "file",
//     chartData: {
//       labels: ['Organic Search', 'Direct', 'Social', 'Referral'],
//       datasets: [
//         {
//           data: [50, 20, 15, 15],
//           backgroundColor: ['#ef4444', '#f97316', '#fb923c', '#fed7aa'],
//           borderWidth: 0,
//         },
//       ],
//     }
//   },
//   {
//     id: 4,
//     name: "Project 4",
//     iconBgColor: "bg-teal-500",
//     iconType: "hourglass",
//     chartData: {
//       labels: ['Organic Search', 'Direct', 'Social', 'Referral'],
//       datasets: [
//         {
//           data: [40, 30, 20, 10],
//           backgroundColor: ['#ef4444', '#f97316', '#fb923c', '#fed7aa'],
//           borderWidth: 0,
//         },
//       ],
//     }
//   },
//   {
//     id: 5,
//     name: "Project 5",
//     iconBgColor: "bg-teal-700",
//     iconType: "projectDiagram",
//     chartData: {
//       labels: ['Organic Search', 'Direct', 'Social', 'Referral'],
//       datasets: [
//         {
//           data: [30, 35, 25, 10],
//           backgroundColor: ['#ef4444', '#f97316', '#fb923c', '#fed7aa'],
//           borderWidth: 0,
//         },
//       ],
//     }
//   },
//   {
//     id: 6,
//     name: "Project 6",
//     iconBgColor: "bg-teal-800",
//     iconType: "toggle",
//     chartData: {
//       labels: ['Organic Search', 'Direct', 'Social', 'Referral'],
//       datasets: [
//         {
//           data: [25, 25, 25, 25],
//           backgroundColor: ['#ef4444', '#f97316', '#fb923c', '#fed7aa'],
//           borderWidth: 0,
//         },
//       ],
//     }
//   }
// ];























// dummyData.js
export const projectsData = [
    {
        id: 1,
        name: "Project 1",
        iconBgColor: "bg-purple-600",
        iconType: "laptop",
        chartData: {
            labels: ['Organic Search', 'Direct', 'Social', 'Referral'],
            datasets: [
                {
                    data: [45, 25, 20, 10],
                    backgroundColor: ['#ef4444', '#f97316', '#fb923c', '#fed7aa'],
                    borderWidth: 0,
                },
            ],
        },
        detailsTitle: "Project Flex n Gate",
        dateRange: "24/02/2024 - 2/05/2025",
        tasks: [
            {
                id: 1,
                name: "01. Offline",
                level: 0,
                hasChildren: true,
                expanded: false,
                completed: true,
                startDate: "1/7/2024",
                endDate: "1/7/2024",
                duration: "1 dia"
            },
            {
                id: 2,
                name: "02. Virtual Commissioning",
                level: 0,
                hasChildren: true,
                expanded: true,
                completed: true,
                startDate: "1/7/2024",
                endDate: "1/7/2024",
                duration: "1 dia"
            },
            {
                id: 3,
                name: "02.1 ZONA 4",
                level: 1,
                hasChildren: true,
                expanded: true,
                completed: true,
                info: true,
                startDate: "1/7/2024",
                endDate: "1/7/2024",
                duration: "1 dia"
            },
            {
                id: 4,
                name: "02.1.1 LH",
                level: 2,
                hasChildren: true,
                expanded: true,
                completed: true,
                startDate: "1/7/2024",
                endDate: "1/7/2024",
                duration: "1 dia"
            },
            {
                id: 5,
                name: "02.1.1.1 PLC",
                level: 3,
                completed: true,
                startDate: "1/7/2024",
                endDate: "1/7/2024",
                duration: "1 dia",
                assignee: { initials: "EA", name: "Esteban Abarca" }
            },
            {
                id: 6,
                name: "02.1.1.2 Robot",
                level: 3,
                completed: true,
                startDate: "1/7/2024",
                endDate: "1/7/2024",
                duration: "1 dia",
                assignee: { initials: "LP", name: "Luis Perez" }
            },
            {
                id: 7,
                name: "02.1.2 RH",
                level: 2,
                hasChildren: true,
                expanded: false,
                completed: true,
                startDate: "1/7/2024",
                endDate: "1/7/2024",
                duration: "1 dia"
            }
        ],
        graficos: {
            estado: {
                title: "Estado",
                remainingTasks: 703,
                statusChart: {
                    naoIniciado: 25,
                    emCurso: 5,
                    emAtraso: 10,
                    concluido: 60
                }
            },
            grupo: {
                title: "Grupo",
                barData: {
                    labels: ["To Do", "Done", "Doing"],
                    datasets: [
                        {
                            label: "Não Iniciado",
                            data: [800, 0, 0],
                            backgroundColor: "#777777"
                        },
                        {
                            label: "Em Atraso",
                            data: [120, 0, 0],
                            backgroundColor: "#dc2626"
                        },
                        {
                            label: "Em Curso",
                            data: [0, 0, 30],
                            backgroundColor: "#3b82f6"
                        },
                        {
                            label: "Concluído",
                            data: [0, 80, 40],
                            backgroundColor: "#16a34a"
                        }
                    ]
                }
            },
            esforcoData: {
                title: "Esforço por pessoa",
                pagination: "1 - 10 de 11",
                chartData: {
                    labels: ["Person 1", "Person 2", "Person 3"],
                    datasets: [
                        {
                            data: [15000, 0, 0],
                            backgroundColor: "#16a34a"
                        }
                    ]
                }
            }
        },
        quadro: {
            columns: [
                {
                    id: "todo",
                    title: "To Do",
                    tasks: [
                        {
                            id: 1,
                            content: 'Indicador paso de la secuencia "Paso seleccionado"'
                        },
                        {
                            id: 2,
                            content: 'Indicador paso de la secuencia "Puntero del programa"'
                        },
                        {
                            id: 3,
                            content: 'Indicador direccion del bit "Salida"'
                        }
                    ]
                },
                {
                    id: "doing",
                    title: "Doing",
                    tasks: [],
                    completedCount: 28
                },
                {
                    id: "done",
                    title: "Done",
                    tasks: [],
                    completedCount: 92
                }
            ]
        },
        pessoas: {
            members: [
                {
                    id: 1,
                    name: "Alex Johnson",
                    avatar: "/avatars/alex.jpg",
                    stats: {
                        incomplete: 32,
                        delayed: 5,
                        progress: 68
                    }
                },
                {
                    id: 2,
                    name: "Patricia Garcia",
                    avatar: "/avatars/patricia.jpg",
                    stats: {
                        incomplete: 28,
                        delayed: 3,
                        progress: 72
                    }
                }
            ],
            tasks: [
                {
                    title: "To Do",
                    count: 42,
                    expanded: true,
                    items: [
                        {
                            id: 1,
                            content: "Develop control algorithms"
                        },
                        {
                            id: 2,
                            content: "Design user interface"
                        },
                        {
                            id: 3,
                            content: "Test control systems"
                        }
                    ]
                },
                {
                    title: "Concluídas",
                    count: 35,
                    expanded: false,
                    items: []
                }
            ]
        }

    },
    {
        id: 2,
        name: "Project 2",
        iconBgColor: "bg-purple-600",
        iconType: "users",
        chartData: {
            labels: ['Organic Search', 'Direct', 'Social', 'Referral'],
            datasets: [
                {
                    data: [35, 30, 25, 10],
                    backgroundColor: ['#ef4444', '#f97316', '#fb923c', '#fed7aa'],
                    borderWidth: 0,
                },
            ],
        },
        detailsTitle: "Project Smart Factory",
        dateRange: "15/01/2024 - 30/06/2024",
        tasks: [
            {
                id: 1,
                name: "01. Planning",
                level: 0,
                hasChildren: true,
                expanded: true,
                completed: true,
                startDate: "15/1/2024",
                endDate: "30/1/2024",
                duration: "15 dias"
            },
            {
                id: 2,
                name: "02. Implementation",
                level: 0,
                hasChildren: true,
                expanded: true,
                completed: false,
                startDate: "1/2/2024",
                endDate: "30/4/2024",
                duration: "90 dias"
            }
        ],
        graficos: {
            estado: {
                title: "Estado",
                remainingTasks: 543,
                statusChart: {
                    naoIniciado: 30,
                    emCurso: 15,
                    emAtraso: 5,
                    concluido: 50
                }
            },
            grupo: {
                title: "Grupo",
                barData: {
                    labels: ["To Do", "Done", "Doing"],
                    datasets: [
                        {
                            label: "Não Iniciado",
                            data: [600, 0, 0],
                            backgroundColor: "#777777"
                        },
                        {
                            label: "Em Atraso",
                            data: [80, 0, 0],
                            backgroundColor: "#dc2626"
                        },
                        {
                            label: "Em Curso",
                            data: [0, 0, 50],
                            backgroundColor: "#3b82f6"
                        },
                        {
                            label: "Concluído",
                            data: [0, 120, 20],
                            backgroundColor: "#16a34a"
                        }
                    ]
                }
            },
            esforcoData: {
                title: "Esforço por pessoa",
                pagination: "1 - 8 de 8",
                chartData: {
                    labels: ["Person A", "Person B", "Person C"],
                    datasets: [
                        {
                            data: [12000, 8000, 3000],
                            backgroundColor: "#16a34a"
                        }
                    ]
                }
            }
        },
        quadro: {
            columns: [
                {
                    id: "todo",
                    title: "To Do",
                    tasks: [
                        {
                            id: 1,
                            content: 'Setup hardware infrastructure'
                        },
                        {
                            id: 2,
                            content: 'Install software components'
                        },
                        {
                            id: 3,
                            content: 'Configure network settings'
                        }
                    ]
                },
                {
                    id: "doing",
                    title: "Doing",
                    tasks: [
                        {
                            id: 4,
                            content: 'Test system integration'
                        }
                    ],
                    completedCount: 15
                },
                {
                    id: "done",
                    title: "Done",
                    tasks: [],
                    completedCount: 45
                }
            ]
        },
        pessoas: {
            members: [
                {
                    id: 1,
                    name: "Maria Rodriguez",
                    avatar: "/avatars/maria.jpg",
                    stats: {
                        incomplete: 35,
                        delayed: 5,
                        progress: 60
                    }
                },
                {
                    id: 2,
                    name: "John Smith",
                    avatar: "/avatars/john.jpg",
                    stats: {
                        incomplete: 42,
                        delayed: 8,
                        progress: 45
                    }
                }
            ],
            tasks: [
                {
                    title: "To Do",
                    count: 65,
                    expanded: true,
                    items: [
                        {
                            id: 1,
                            content: "Configure server environment"
                        },
                        {
                            id: 2,
                            content: "Implement database architecture"
                        },
                        {
                            id: 3,
                            content: "Develop API endpoints"
                        }
                    ]
                },
                {
                    title: "Concluídas",
                    count: 12,
                    expanded: false,
                    items: []
                }
            ]
        }
    },
    {
        id: 3,
        name: "Project 3",
        iconBgColor: "bg-pink-600",
        iconType: "file",
        chartData: {
            labels: ['Organic Search', 'Direct', 'Social', 'Referral'],
            datasets: [
                {
                    data: [50, 20, 15, 15],
                    backgroundColor: ['#ef4444', '#f97316', '#fb923c', '#fed7aa'],
                    borderWidth: 0,
                },
            ],
        },
        detailsTitle: "Project Documentation",
        dateRange: "01/03/2024 - 15/08/2024",
        tasks: [
            {
                id: 1,
                name: "01. Requirements Analysis",
                level: 0,
                hasChildren: true,
                expanded: false,
                completed: true,
                startDate: "1/3/2024",
                endDate: "15/3/2024",
                duration: "15 dias"
            },
            {
                id: 2,
                name: "02. Documentation Creation",
                level: 0,
                hasChildren: true,
                expanded: false,
                completed: false,
                startDate: "16/3/2024",
                endDate: "30/6/2024",
                duration: "106 dias"
            }
        ],
        graficos: {
            estado: {
                title: "Estado",
                remainingTasks: 325,
                statusChart: {
                    naoIniciado: 40,
                    emCurso: 10,
                    emAtraso: 15,
                    concluido: 35
                }
            },
            grupo: {
                title: "Grupo",
                barData: {
                    labels: ["To Do", "Done", "Doing"],
                    datasets: [
                        {
                            label: "Não Iniciado",
                            data: [450, 0, 0],
                            backgroundColor: "#777777"
                        },
                        {
                            label: "Em Atraso",
                            data: [100, 0, 0],
                            backgroundColor: "#dc2626"
                        },
                        {
                            label: "Em Curso",
                            data: [0, 0, 75],
                            backgroundColor: "#3b82f6"
                        },
                        {
                            label: "Concluído",
                            data: [0, 200, 25],
                            backgroundColor: "#16a34a"
                        }
                    ]
                }
            },
            esforcoData: {
                title: "Esforço por pessoa",
                pagination: "1 - 5 de 5",
                chartData: {
                    labels: ["Person X", "Person Y", "Person Z"],
                    datasets: [
                        {
                            data: [9000, 7500, 6000],
                            backgroundColor: "#16a34a"
                        }
                    ]
                }
            }
        },
        quadro: {
            columns: [
                {
                    id: "todo",
                    title: "To Do",
                    tasks: [
                        {
                            id: 1,
                            content: 'Create user manuals'
                        },
                        {
                            id: 2,
                            content: 'Document API usage'
                        }
                    ]
                },
                {
                    id: "doing",
                    title: "Doing",
                    tasks: [
                        {
                            id: 3,
                            content: 'Draft technical specifications'
                        }
                    ],
                    completedCount: 8
                },
                {
                    id: "done",
                    title: "Done",
                    tasks: [],
                    completedCount: 22
                }
            ]
        },
        pessoas: {
            members: [
                {
                    id: 1,
                    name: "Sarah Johnson",
                    avatar: "/avatars/sarah.jpg",
                    stats: {
                        incomplete: 28,
                        delayed: 7,
                        progress: 55
                    }
                }
            ],
            tasks: [
                {
                    title: "To Do",
                    count: 32,
                    expanded: true,
                    items: [
                        {
                            id: 1,
                            content: "Write getting started guide"
                        },
                        {
                            id: 2,
                            content: "Create installation documentation"
                        }
                    ]
                },
                {
                    title: "Concluídas",
                    count: 18,
                    expanded: false,
                    items: []
                }
            ]
        }
    },
    {
        id: 4,
        name: "Project 4",
        iconBgColor: "bg-teal-500",
        iconType: "hourglass",
        chartData: {
            labels: ['Organic Search', 'Direct', 'Social', 'Referral'],
            datasets: [
                {
                    data: [40, 30, 20, 10],
                    backgroundColor: ['#ef4444', '#f97316', '#fb923c', '#fed7aa'],
                    borderWidth: 0,
                },
            ],
        },
        detailsTitle: "Project Timeline",
        dateRange: "01/01/2024 - 31/12/2024",
        tasks: [
            {
                id: 1,
                name: "01. Phase One",
                level: 0,
                hasChildren: true,
                expanded: false,
                completed: true,
                startDate: "1/1/2024",
                endDate: "31/3/2024",
                duration: "90 dias"
            },
            {
                id: 2,
                name: "02. Phase Two",
                level: 0,
                hasChildren: true,
                expanded: false,
                completed: false,
                startDate: "1/4/2024",
                endDate: "30/6/2024",
                duration: "91 dias"
            }
        ],
        graficos: {
            estado: {
                title: "Estado",
                remainingTasks: 482,
                statusChart: {
                    naoIniciado: 35,
                    emCurso: 20,
                    emAtraso: 5,
                    concluido: 40
                }
            },
            grupo: {
                title: "Grupo",
                barData: {
                    labels: ["To Do", "Done", "Doing"],
                    datasets: [
                        {
                            label: "Não Iniciado",
                            data: [500, 0, 0],
                            backgroundColor: "#777777"
                        },
                        {
                            label: "Em Atraso",
                            data: [50, 0, 0],
                            backgroundColor: "#dc2626"
                        },
                        {
                            label: "Em Curso",
                            data: [0, 0, 150],
                            backgroundColor: "#3b82f6"
                        },
                        {
                            label: "Concluído",
                            data: [0, 300, 50],
                            backgroundColor: "#16a34a"
                        }
                    ]
                }
            },
            esforcoData: {
                title: "Esforço por pessoa",
                pagination: "1 - 7 de 7",
                chartData: {
                    labels: ["Person A", "Person B", "Person C", "Person D"],
                    datasets: [
                        {
                            data: [11000, 8500, 7000, 5500],
                            backgroundColor: "#16a34a"
                        }
                    ]
                }
            }
        },
        quadro: {
            columns: [
                {
                    id: "todo",
                    title: "To Do",
                    tasks: [
                        {
                            id: 1,
                            content: 'Milestone 3 planning'
                        },
                        {
                            id: 2,
                            content: 'Milestone 4 resource allocation'
                        }
                    ]
                },
                {
                    id: "doing",
                    title: "Doing",
                    tasks: [
                        {
                            id: 3,
                            content: 'Milestone 2 execution'
                        }
                    ],
                    completedCount: 18
                },
                {
                    id: "done",
                    title: "Done",
                    tasks: [],
                    completedCount: 32
                }
            ]
        },
        pessoas: {
            members: [
                {
                    id: 1,
                    name: "Michael Chen",
                    avatar: "/avatars/michael.jpg",
                    stats: {
                        incomplete: 42,
                        delayed: 8,
                        progress: 65
                    }
                },
                {
                    id: 2,
                    name: "Emma Wilson",
                    avatar: "/avatars/emma.jpg",
                    stats: {
                        incomplete: 35,
                        delayed: 5,
                        progress: 70
                    }
                }
            ],
            tasks: [
                {
                    title: "To Do",
                    count: 48,
                    expanded: true,
                    items: [
                        {
                            id: 1,
                            content: "Complete phase 2 planning"
                        },
                        {
                            id: 2,
                            content: "Schedule team retrospective"
                        },
                        {
                            id: 3,
                            content: "Prepare milestone presentation"
                        }
                    ]
                },
                {
                    title: "Concluídas",
                    count: 25,
                    expanded: false,
                    items: []
                }
            ]
        }
    },
    {
        id: 5,
        name: "Project 5",
        iconBgColor: "bg-teal-700",
        iconType: "projectDiagram",
        chartData: {
            labels: ['Organic Search', 'Direct', 'Social', 'Referral'],
            datasets: [
                {
                    data: [30, 35, 25, 10],
                    backgroundColor: ['#ef4444', '#f97316', '#fb923c', '#fed7aa'],
                    borderWidth: 0,
                },
            ],
        },
        detailsTitle: "Project Network",
        dateRange: "15/02/2024 - 15/11/2024",
        tasks: [
            {
                id: 1,
                name: "01. Network Design",
                level: 0,
                hasChildren: false,
                completed: true,
                startDate: "15/2/2024",
                endDate: "15/3/2024",
                duration: "29 dias",
                assignee: { initials: "RT", name: "Robert Thompson" }
            },
            {
                id: 2,
                name: "02. Network Implementation",
                level: 0,
                hasChildren: false,
                completed: false,
                startDate: "16/3/2024",
                endDate: "15/9/2024",
                duration: "183 dias",
                assignee: { initials: "MM", name: "Mary Miller" }
            }
        ],
        graficos: {
            estado: {
                title: "Estado",
                remainingTasks: 378,
                statusChart: {
                    naoIniciado: 45,
                    emCurso: 10,
                    emAtraso: 10,
                    concluido: 35
                }
            },
            grupo: {
                title: "Grupo",
                barData: {
                    labels: ["To Do", "Done", "Doing"],
                    datasets: [
                        {
                            label: "Não Iniciado",
                            data: [550, 0, 0],
                            backgroundColor: "#777777"
                        },
                        {
                            label: "Em Atraso",
                            data: [90, 0, 0],
                            backgroundColor: "#dc2626"
                        },
                        {
                            label: "Em Curso",
                            data: [0, 0, 85],
                            backgroundColor: "#3b82f6"
                        },
                        {
                            label: "Concluído",
                            data: [0, 250, 25],
                            backgroundColor: "#16a34a"
                        }
                    ]
                }
            },
            esforcoData: {
                title: "Esforço por pessoa",
                pagination: "1 - 6 de 6",
                chartData: {
                    labels: ["Person X", "Person Y", "Person Z", "Person W"],
                    datasets: [
                        {
                            data: [13000, 10500, 8000, 6500],
                            backgroundColor: "#16a34a"
                        }
                    ]
                }
            }
        },
        quadro: {
            columns: [
                {
                    id: "todo",
                    title: "To Do",
                    tasks: [
                        {
                            id: 1,
                            content: 'Install network equipment'
                        },
                        {
                            id: 2,
                            content: 'Configure firewalls'
                        },
                        {
                            id: 3,
                            content: 'Test VPN connectivity'
                        }
                    ]
                },
                {
                    id: "doing",
                    title: "Doing",
                    tasks: [],
                    completedCount: 12
                },
                {
                    id: "done",
                    title: "Done",
                    tasks: [],
                    completedCount: 25
                }
            ]
        },
        pessoas: {
            members: [
                {
                    id: 1,
                    name: "Robert Thompson",
                    avatar: "/avatars/robert.jpg",
                    stats: {
                        incomplete: 38,
                        delayed: 12,
                        progress: 58
                    }
                },
                {
                    id: 2,
                    name: "Mary Miller",
                    avatar: "/avatars/mary.jpg",
                    stats: {
                        incomplete: 45,
                        delayed: 8,
                        progress: 52
                    }
                }
            ],
            tasks: [
                {
                    title: "To Do",
                    count: 55,
                    expanded: true,
                    items: [
                        {
                            id: 1,
                            content: "Setup network infrastructure"
                        },
                        {
                            id: 2,
                            content: "Configure routers and switches"
                        },
                        {
                            id: 3,
                            content: "Install security appliances"
                        }
                    ]
                },
                {
                    title: "Concluídas",
                    count: 28,
                    expanded: false,
                    items: []
                }
            ]
        }
    },
    {
        id: 6,
        name: "Project 6",
        iconBgColor: "bg-teal-800",
        iconType: "toggle",
        chartData: {
            labels: ['Organic Search', 'Direct', 'Social', 'Referral'],
            datasets: [
                {
                    data: [25, 25, 25, 25],
                    backgroundColor: ['#ef4444', '#f97316', '#fb923c', '#fed7aa'],
                    borderWidth: 0,
                },
            ],
        },
        detailsTitle: "Project Control Systems",
        dateRange: "01/04/2024 - 31/10/2024",
        tasks: [
            {
                id: 1,
                name: "01. System Design",
                level: 0,
                hasChildren: false,
                completed: true,
                startDate: "1/4/2024",
                endDate: "30/4/2024",
                duration: "30 dias"
            },
            {
                id: 2,
                name: "02. System Implementation",
                level: 0,
                hasChildren: false,
                completed: false,
                startDate: "1/5/2024",
                endDate: "31/8/2024",
                duration: "123 dias",
                assignee: { initials: "AJ", name: "Alex Johnson" }
            }
        ],
        graficos: {
            estado: {
                title: "Estado",
                remainingTasks: 257,
                statusChart: {
                    naoIniciado: 30,
                    emCurso: 25,
                    emAtraso: 5,
                    concluido: 40
                }
            },
            grupo: {
                title: "Grupo",
                barData: {
                    labels: ["To Do", "Done", "Doing"],
                    datasets: [
                        {
                            label: "Não Iniciado",
                            data: [300, 0, 0],
                            backgroundColor: "#777777"
                        },
                        {
                            label: "Em Atraso",
                            data: [40, 0, 0],
                            backgroundColor: "#dc2626"
                        },
                        {
                            label: "Em Curso",
                            data: [0, 0, 180],
                            backgroundColor: "#3b82f6"
                        },
                        {
                            label: "Concluído",
                            data: [0, 220, 60],
                            backgroundColor: "#16a34a"
                        }
                    ]
                }
            },
            esforcoData: {
                title: "Esforço por pessoa",
                pagination: "1 - 4 de 4",
                chartData: {
                    labels: ["Person A", "Person B", "Person C"],
                    datasets: [
                        {
                            data: [14000, 9000, 7000],
                            backgroundColor: "#16a34a"
                        }
                    ]
                }
            }
        },
        quadro: {
            columns: [
                {
                    id: "todo",
                    title: "To Do",
                    tasks: [
                        {
                            id: 1,
                            content: 'Install control panels'
                        },
                        {
                            id: 2,
                            content: 'Program control logic'
                        }
                    ]
                },
                {
                    id: "doing",
                    title: "Doing",
                    tasks: [
                        {
                            id: 3,
                            content: 'Design control interfaces'
                        }
                    ],
                    completedCount: 15
                },
                {
                    id: "done",
                    title: "Done",
                    tasks: [],
                    completedCount: 32
                }
            ]
        },
        pessoas: {
            members: [
                {
                    id: 1,
                    name: "Alex Johnson",
                    avatar: "/avatars/alex.jpg",
                    stats: {
                        incomplete: 32,
                        delayed: 5,
                        progress: 68
                    }
                },
                {
                    id: 2,
                    name: "Patricia Garcia",
                    avatar: "/avatars/patricia.jpg",
                    stats: {
                        incomplete: 28,
                        delayed: 3,
                        progress: 72
                    }
                }
            ],
            tasks: [
                {
                    title: "To Do",
                    count: 42,
                    expanded: true,
                    items: [
                        {
                            id: 1,
                            content: "Develop control algorithms"
                        },
                        {
                            id: 2,
                            content: "Design user interface"
                        },
                        {
                            id: 3,
                            content: "Test control systems"
                        }
                    ]
                },
                {
                    title: "Concluídas",
                    count: 35,
                    expanded: false,
                    items: []
                }
            ]
        }
    }
];
