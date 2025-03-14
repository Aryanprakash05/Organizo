import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ setActivePage }) => {
    const [activeItem, setActiveItem] = useState("Dashboard");

    const handleMenuClick = (page) => {
        setActiveItem(page);
        setActivePage(page);  // Updates the activePage in the parent component
    };

    return (
        <div className="sidebar">
            <div className="sidebarLogo">
                <h2>Organizo</h2>
            </div>
            <div className="sidebarMenu">
                <div 
                    className={`menuItem ${activeItem === "Dashboard" ? "active" : ""}`} 
                    onClick={() => handleMenuClick("Dashboard")}
                >
                    📋 Dashboard
                </div>
                <div 
                    className={`menuItem ${activeItem === "ProductivityStats" ? "active" : ""}`} 
                    onClick={() => handleMenuClick("ProductivityStats")}
                >
                    📊 Productivity Stats
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
