import React, { Suspense, useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { Sidebar } from 'primereact/sidebar';
import toast from 'react-hot-toast';

import { getUserByToken } from '../../api/getUserByToken';
import { User } from '../../helpers/types';
const Shop = React.lazy(() => import('../shop/Shop'));
const MyCart = React.lazy(() => import('../shop/MyCart'));
const MyFavorites = React.lazy(() => import('../shop/MyFavorites'));
const Messages = React.lazy(() => import('./Messages'));
const Community = React.lazy(() => import('./Community'));
const Notifications = React.lazy(() => import('./Notifications'));
const MyCourses = React.lazy(() => import('./MyCourses'));
import './DashBoard.scss';

type Section = 'shop' | 'mycart' | 'myfavorites' | 'messages' | 'community' | 'notifications' | 'mycourses' | null;

function DashBoard() {
    const [visible, setVisible] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [searchParams, setSearchParams] = useSearchParams();
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

    useEffect(() => {
        if (!searchParams.get("section")) {
            setSearchParams({ section: 'mycourses' });
        }
    }, [searchParams, setSearchParams]);

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

    const handleNavigation = (section: Section) => {
        setSearchParams(section ? { section } : {});
        setVisible(false);
    };

    const section: Section = searchParams.get("section") as Section;

    return (
        <div className="dashBoard">
            <div className="dashHeader">
                <div className="dashlogo">
                    <img src="https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714402089/eLearning/logo_eLearning.png" alt="Logo" />
                    <h2>eLearning</h2>
                </div>

                <div className="dashBtn">
                    <span className="material-symbols-rounded" onClick={() => handleNavigation('shop')}>storefront</span>
                    <span className="material-symbols-rounded" onClick={() => handleNavigation('mycourses')}>school</span>
                    <Avatar className="p-overlay-badge" onClick={() => setVisible(true)}>
                        <span className="material-symbols-rounded">person</span>
                        <Badge value="+10" />
                    </Avatar>
                </div>
            </div>

            <div className="dashContent">
                {section === 'mycourses' && <MyCourses />}
                <Suspense fallback={<div>Loading...</div>}>
                    {section === 'shop' && <Shop />}
                    {section === 'mycart' && <MyCart />}
                    {section === 'myfavorites' && <MyFavorites />}
                    {section === 'messages' && <Messages />}
                    {section === 'community' && <Community />}
                    {section === 'notifications' && <Notifications />}
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

                <div className="sideNotifications">
                    <ul>
                        <li onClick={() => handleNavigation('notifications')}>
                            <span className="material-symbols-rounded">notifications</span>
                            <a href="#">Notifications</a>
                            <Badge value="+100" />
                        </li>
                        <li onClick={() => handleNavigation('messages')}>
                            <span className="material-symbols-rounded">message</span>
                            <a href="#">Messages</a>
                            <Badge value="8" />
                        </li>
                        <li onClick={() => handleNavigation('community')}>
                            <span className="material-symbols-rounded">groups</span>
                            <a href="#">Community</a>
                        </li>
                    </ul>
                </div>

                <div className="sideCourses">
                    <ul>
                        <li onClick={() => handleNavigation('shop')}>
                            <span className="material-symbols-rounded">storefront</span>
                            <a href="#">Shop</a>
                        </li>
                        <li onClick={() => handleNavigation('myfavorites')}>
                            <span className="material-symbols-rounded">favorite</span>
                            <a href="#">My Favorites</a>
                        </li>
                        <li onClick={() => handleNavigation('mycart')}>
                            <span className="material-symbols-rounded">shopping_cart</span>
                            <a href="#">My Cart</a>
                        </li>
                        <li onClick={() => handleNavigation('mycourses')}>
                            <span className="material-symbols-rounded">school</span>
                            <a href="#">My Courses</a>
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

const isTokenExpired = (token: string): boolean => {
    try {
        const { exp } = JSON.parse(atob(token.split('.')[1]));
        return Date.now() >= exp * 1000;
    } catch (error) {
        console.error('Error checking token expiration:', error);
        return true;
    }
};

export default DashBoard;
