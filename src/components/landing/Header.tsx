import { Sidebar } from 'primereact/sidebar';

import './Header.scss';
import { useState } from 'react';

function Header() {
    const [visibleSidebar, setVisibleSidebar] = useState(false);

    function handleRefresh() {
        fetch('https://elearning-back.onrender.com/ping')
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                console.log('Response from /ping:', data);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }

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
                    </ul>
                </nav>

                <div className="btn">
                    <span className="material-symbols-rounded" onClick={handleRefresh}>refresh</span>
                    <span className="material-symbols-rounded">shopping_cart</span>
                    <a className="login" href="/login">Log In</a>
                </div>

                <div className="sideMenu">
                    <Sidebar visible={visibleSidebar} onHide={() => setVisibleSidebar(false)}>
                        <div className="sideMenuItems">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/courses">Courses</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">Cart</a></li>
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
