import React from 'react';
import { FaHome, FaUserCog, FaProjectDiagram, FaTasks, FaChartBar } from 'react-icons/fa';
import { BsFileEarmark } from 'react-icons/bs';
import { FaMoneyBillWave, FaShoppingCart } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react'

const Sidebar = () => {



    const [open, setOpen] = useState(false)
    const dropdownRef = useRef(null)

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [dropdownRef])



    return (
        <div className="p-4 h-screen bg-[#B3B3B3] flex flex-col items-center py-8">
            {/* Dashboard Icon */}
            <div className="flex flex-col items-center mb-8">
                <div className="text-[#F26522] mb-2">
                    <FaHome size={35} />
                </div>
                <span className="text-xs text-white text-center">Dashboard</span>
            </div>

            {/* Admin Icon */}
            <div className="flex flex-col items-center mb-8">
                <div className="text-white mb-2">
                    <FaUserCog size={35} />
                </div>
                <span className="text-xs text-white text-center">Admin</span>
            </div>

            {/* Projects Icon */}
            <div className="flex flex-col items-center mb-8">
                <div className="text-white mb-2">
                    
                      <button onClick={() => setOpen(prev => !prev)}
                    >
                        <FaProjectDiagram size={35} />
                         Projects</button>
                
                </div>
                
                  
                

 {open && (
        <div className="bg-white border ">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
          </ul>
        </div>
      )}


            </div>

            {/* Tasks Icon */}
            <div className="flex flex-col items-center mb-8">
                <div className="text-white mb-2">
                    <FaTasks size={35} />
                </div>
                <span className="text-xs text-white text-center">Tasks</span>
            </div>

            {/* Analytics Icon */}
            <div className="flex flex-col items-center mb-8">
                <div className="text-white mb-2">
                    <FaChartBar size={35} />
                </div>
                <span className="text-xs text-white text-center">Analytics</span>
            </div>

            {/* Administration Icon */}
            <div className="flex flex-col items-center mb-8">
                <div className="text-white mb-2">
                    <BsFileEarmark size={35} />
                </div>
                <span className="text-xs text-white text-center">Administration</span>
            </div>

            {/* Sales Icon */}
            <div className="flex flex-col items-center mb-8">
                <div className="text-white mb-2">
                    <FaMoneyBillWave size={35} />
                </div>
                <span className="text-xs text-white text-center">Sales</span>
            </div>

            {/* Purchase Icon */}
            <div className="flex flex-col items-center mb-8">
                <div className="text-white mb-2">
                    <FaShoppingCart size={35} />
                </div>
                <span className="text-xs text-white text-center">Purchase</span>
            </div>
        </div>
    );
};

export default Sidebar;
