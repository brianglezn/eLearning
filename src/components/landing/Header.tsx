import { Sidebar } from 'primereact/sidebar';
import { toast } from 'react-hot-toast';

import './Header.scss';
import { useState } from 'react';
import BarsIcon from '../icons/BarsIcon';
import RefreshIcon from '../icons/RefreshIcon';

function Header() {
    const [visibleSidebar, setVisibleSidebar] = useState(false);

    function handleRefresh() {
        toast.promise(
            fetch('https://elearning-back.onrender.com/ping')
                .then(response => {
                    if (response.ok) {
                        return response.text();
                    }
                    throw new Error('Network response was not ok.');
                }),
            {
                loading: 'Refreshing...',
                success: data => {
                    setTimeout(() => {
                        window.location.reload();
                        console.log('Response from /ping:', data);
                    }, 1000);
                    return `Response from backend OK`;
                },
                error: 'There has been a problem with your /ping'
            }
        );
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
                    <a onClick={handleRefresh}>
                        <RefreshIcon /></a>
                    <a className="auth" href="/login">Log In</a>
                </div>

                <div className="sideMenu">
                    <Sidebar visible={visibleSidebar} position="right" onHide={() => setVisibleSidebar(false)}>
                        <div className="sideMenuItems">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/courses">Courses</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">Cart</a></li>
                            </ul>
                            <ul>
                                <li><a href="/login">Log In</a></li>
                                <li><a href="/register">Register</a></li>
                            </ul>
                        </div>
                    </Sidebar>

                    <button className="sidebar-toggle-button" onClick={() => setVisibleSidebar(true)}>
                        <BarsIcon />
                    </button>
                </div>

            </div>
        </header >
    );
}

export default Header;
