import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import './Home.css';

import ProductivityStats from '../components/ProductivityStats';  // Fixed import path

const Home = () => {
    const [activePage, setActivePage] = useState("Dashboard");
    const [notifications, setNotifications] = useState([]);

    const handleNewNotification = (message) => {
        setNotifications(prevNotifications => [...prevNotifications, message]);
    };

    return (
        <div className="home">
            <Sidebar setActivePage={setActivePage} />
            <div className="homeContainer">
                {activePage === "Dashboard" && <Widgets addNotification={handleNewNotification} />}
                
                {activePage === "ProductivityStats" && <ProductivityStats />}
            </div>
        </div>
    );
};

export default Home;
