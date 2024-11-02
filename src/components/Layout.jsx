// Layout.jsx
import React, { useState } from 'react';
import Base from './Base.jsx';
import Matematicas from './Matematicas.jsx';
import CenteredBox from './CenteredBox.jsx';
import '../stylesheets/Layout/layout.scss';


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
                <h1>Placeholder 0</h1>
                <CenteredBox>
                    <h1>Placeholder 1</h1>
                <main className="layout__content">
                <Matematicas />
                </main>
                </CenteredBox>  
                  
            </div>
        </div>
    );
};

export default Layout;
