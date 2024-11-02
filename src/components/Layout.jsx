// Layout.jsx
import React, { useState } from 'react';
import Base from './Base.jsx';
import Matematicas from './Matematicas.jsx';


const Layout = () => {
    const [activeSection, setActiveSection] = useState(null);

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="layout">
            <header className="layout__header">
                <Base />    
                <Matematicas />
            </header>
            <div className="layout__main">
                <main className="layout__content">
                  
                </main>
            </div>
        </div>
    );
};

export default Layout;
