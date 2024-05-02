import { Sidebar } from 'primereact/sidebar';

import './Header.scss';
import { useState } from 'react';

function Header() {
    const [visibleSidebar, setVisibleSidebar] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src="https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714402089/eLearning/logo_eLearning.png" alt="Logo" />
                    <h2>eLearning</h2>
                </div>

                <nav className="menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/courses">Courses</a></li>
                        <li><a href="/community">Comunity</a></li>
                    </ul>
                </nav>

                <div className="login">
                    <a href="/login">Log In</a>
                </div>

                <div className="sideMenu">
                    <Sidebar visible={visibleSidebar} onHide={() => setVisibleSidebar(false)}>
                        <div className="sideMenuItems">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/courses">Courses</a></li>
                                <li><a href="/community">Community</a></li>
                                <li><a href="/login">Log In</a></li>
                            </ul>
                        </div>
                    </Sidebar>

                    <button className="sidebar-toggle-button" onClick={() => setVisibleSidebar(true)}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>

            </div>
        </header >
    );
}

export default Header;
