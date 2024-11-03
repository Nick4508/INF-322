// Layout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Base from './Base.jsx';
import '../stylesheets/Layout/layout.scss';
// import home from '../pages/Home.jsx';


const Layout = () => {
    const [activeSection, setActiveSection] = useState(null);

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="layout">
            <header className="layout__header">
                <Base />  
            </header>
            <div className="layout__main">
                
                  <Outlet />
            </div>
        </div>
    );
};

export default Layout;
