import React from 'react'
import ChatBot from '../../Common/ChatBot/chatbot';
import LeftSideNavbar from '../../Common/SideNavbar/leftSideNavbar';
import Navbar from '../../Common/Navbar/navbar';
import Pagination from "../../Common/Pagination/pagination";

// Import Images
import bell from "../../Assets/Images/navbar-img/bell.svg";
// import sort from "../../Assets/Images/navbar-img/SortAscending.svg";
import magnify from "../../Assets/Images/navbar-img/MagnifyingGlass.svg";
import RightSidebar from '../../Common/SideNavbar/rightSideNavbar';
import UserDetailaCard from '../../Common/UserDetailsCard/userdetailacard';

const ScheduleIcons = [{ nav_img: magnify }, { nav_img: bell }];
const ScheduleHeading = ["Order", "User Details"];

const UserDetails = () => {
    return (
        <>
            <div className='flex h-screen overflow-hidden'>
                {/* Left Sidebar */}
                <LeftSideNavbar />

                {/* Chatbot  */}
                <ChatBot />

                {/* Main Content Area */}
                <div className={`flex-grow py-4 px-9 me-6 transition-all duration-300 `} >

                    <div className="border-b">
                        <Navbar
                            icons={ScheduleIcons}
                            pageHeading={ScheduleHeading}
                        />
                    </div>

                    
                       <div className='h-4/5 overflow-auto hidden-scroll'>
                       <UserDetailaCard />
                       </div>
                         <Pagination/>
                     
                </div>


                {/* Right Sidebar */}
                <div className={`transition-all duration-300 ease-in-out relative rounded-l-3xl`}>
                    <RightSidebar />
                </div>
            </div>
        </>
    );
};

export default UserDetails;