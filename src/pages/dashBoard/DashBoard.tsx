import { Suspense, useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { Sidebar } from 'primereact/sidebar';
import toast from 'react-hot-toast';

import { getUserByToken } from '../../api/getUserByToken';
import { User } from '../../helpers/types';
import './DashBoard.scss';

function DashBoard() {
    const [visible, setVisible] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token || isTokenExpired(token)) {
            toast.error("Session expired. Please log in again.");
            navigate('/login');
        } else {
            const fetchUserData = async () => {
                try {
                    const userData = await getUserByToken();
                    setUser(userData);
                } catch (error) {
                    console.error('Failed to fetch user data:', error);
                    toast.error("Failed to fetch user data. Please log in again.");
                    localStorage.removeItem('token');
                    navigate('/login');
                }
            };

            fetchUserData();
        }
    }, [navigate]);

    const isTokenExpired = (token: string): boolean => {
        try {
            const { exp } = JSON.parse(atob(token.split('.')[1]));
            return Date.now() >= exp * 1000;
        } catch (error) {
            console.error('Error checking token expiration:', error);
            return true;
        }
    };

    const handleLogout = () => {
        try {
            localStorage.removeItem("token");
            toast.success("Session closed successfully");
            setTimeout(() => {
                navigate('/');
            }, 1000);
        } catch (error) {
            console.error('Error during logout:', error);
            toast.error('There was an error closing the session');
        }
    };

    const handleNavigation = (path: string) => {
        navigate(path);
        setVisible(false);
    };

    return (
        <div className="dashBoard">
            <div className="dashHeader">
                <div className="dashlogo">
                    <img src="https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714402089/eLearning/logo_eLearning.png" alt="Logo" />
                    <h2>eLearning</h2>
                </div>

                <div className="dashBtn">
                    <a onClick={() => handleNavigation('/dashboard/shop')}>
                        <span className="material-symbols-rounded">storefront</span>
                    </a>
                    <a onClick={() => handleNavigation('/dashboard/mycourses')}>
                        <span className="material-symbols-rounded">school</span>
                    </a>
                    <Avatar className="p-overlay-badge" onClick={() => setVisible(true)}>
                        <span className="material-symbols-rounded">person</span>
                        <Badge value="+10" />
                    </Avatar>
                </div>
            </div>

            <div className="dashContent">
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </div>

            <Sidebar
                className='sidebar'
                visible={visible}
                position="right"
                onHide={() => setVisible(false)}
                style={{ width: '350px' }}
            >
                <div className="sideProfile">
                    <div className="sideProfile-icon">
                        <Avatar className="p-overlay-badge" size='large'>
                            <span className="material-symbols-rounded">person</span>
                        </Avatar>
                    </div>
                    <div className="sideProfile-name">
                        <h3>{user ? `${user.username}` : 'Loading...'}</h3>
                        <p>{user ? user.email : 'Loading...'}</p>
                    </div>
                </div>

                <div className="sideAccount">
                    <ul>
                        <li>
                            <a onClick={() => handleNavigation('/dashboard/account')}>
                                <span className="material-symbols-rounded">person</span>
                                Account
                            </a>
                        </li>
                        <li>
                            <a onClick={() => handleNavigation('/dashboard/notifications')}>
                                <span className="material-symbols-rounded">notifications</span>
                                Notifications
                                <Badge value="+100" />
                            </a>
                        </li>
                        <li>
                            <a onClick={() => handleNavigation('/dashboard/messages')}>
                                <span className="material-symbols-rounded">message</span>
                                Messages
                                <Badge value="8" />
                            </a>
                        </li>
                        <li>
                            <a onClick={() => handleNavigation('/dashboard/community')}>
                                <span className="material-symbols-rounded">groups</span>
                                Community
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="sideCourses">
                    <ul>
                        <li>
                            <a onClick={() => handleNavigation('/dashboard/shop')}>
                                <span className="material-symbols-rounded">storefront</span>
                                Shop
                            </a>
                        </li>
                        <li>
                            <a onClick={() => handleNavigation('/dashboard/myfavorites')}>
                                <span className="material-symbols-rounded">favorite</span>
                                My Favorites
                            </a>
                        </li>
                        <li>
                            <a onClick={() => handleNavigation('/dashboard/mycart')}>
                                <span className="material-symbols-rounded">shopping_cart</span>
                                My Cart
                            </a>
                        </li>
                        <li>
                            <a onClick={() => handleNavigation('/dashboard/mycourses')}>
                                <span className="material-symbols-rounded">school</span>
                                My Courses
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="sideHelp">
                    <ul>
                        <li>
                            <a>
                                <span className="material-symbols-rounded">help</span>
                                Help
                            </a>
                        </li>
                        <li >
                            <a>
                                <span className="material-symbols-rounded">info</span>
                                About Us
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="sideLogout">
                    <button className='custom-button' onClick={handleLogout}>Log Out</button>
                </div>
            </Sidebar>
        </div>
    );
}

export default DashBoard;
