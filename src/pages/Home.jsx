import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import './Home.css';

const Home = () => {
    const [activePage, setActivePage] = useState("Dashboard");

    return (
        <div className="home">
            <Sidebar setActivePage={setActivePage} />
            <div className="homeContainer">
                {activePage === "Dashboard" && <Widgets />}
                {activePage === "Notifications" && (
                    <div className="notificationPage">
                        <h1>Notifications</h1>
                        <p>No new notifications at the moment.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
