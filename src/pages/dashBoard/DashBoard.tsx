import { Suspense, useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { Sidebar } from 'primereact/sidebar';
import { SpeedDial } from 'primereact/speeddial';
import toast from 'react-hot-toast';

import './DashBoard.scss';
import { getUserByToken } from '../../api/getUserByToken';
import { User } from '../../helpers/types';
import eLearningLogo from '../../assets/eLearningLogo-black.png';
import StoreIcon from '../../components/icons/StoreIcon';
import UserIcon from '../../components/icons/UserIcon';
import FavouriteIcon from '../../components/icons/FavouriteIcon';
import GraduationCapIcon from '../../components/icons/GraduationCapIcon';
import ShoppingCartIcon from '../../components/icons/ShoppingCartIcon';
import AnglesLeftIcon from '../../components/icons/AnglesLeftIcon';
import AnglesRightIcon from '../../components/icons/AnglesRightIcon';
import BellIcon from '../../components/icons/BellIcon';
import MessagesIcon from '../../components/icons/MessagesIcon';
import HelpIcon from '../../components/icons/HelpIcon';
import InfoIcon from '../../components/icons/InfoIcon';
import HomeIcon from '../../components/icons/HomeIcon';
import SettingsIcon from '../../components/icons/SettingsIcon';
import BarsIcon from '../../components/icons/BarsIcon';
import XCloseIcon from '../../components/icons/XCloseIcon';

function DashBoard() {
    const [visible, setVisible] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [navCollapsed, setNavCollapsed] = useState(false);
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

    const toggleNav = () => {
        setNavCollapsed(!navCollapsed);
    };

    const items = [
        {
            label: 'DashBoard',
            icon: <HomeIcon />,
            command: () => handleNavigation('/dashboard')
        },
        {
            label: 'My Courses',
            icon: <GraduationCapIcon />,
            command: () => handleNavigation('/dashboard/mycourses')
        },
        {
            label: 'Messages',
            icon: <MessagesIcon />,
            command: () => handleNavigation('/dashboard/messages')
        },
        {
            label: 'Shop',
            icon: <StoreIcon />,
            command: () => handleNavigation('/dashboard/shop')
        },
    ];

    return (
        <div className={`dashBoard ${navCollapsed ? 'collapsed' : ''}`}>
            <div className="dashHeader">
                <div className="dashHeader-container">
                    <div className="dashHeader-logo">
                        <img src={eLearningLogo} alt="Logo" />
                        <h2>eLearning</h2>
                    </div>

                    <div className="dashBtn">
                        <Avatar className="p-overlay-badge" onClick={() => setVisible(true)}>
                            <UserIcon />
                            <Badge /> {/* Si tiene notificaciones salga el Badge y si no hay no aparezaca */}
                        </Avatar>
                    </div>
                </div>
            </div>

            <div className="dashNav">
                <div className='dashNav-container'>
                    <div className="dashNav-lists">
                        <div>
                            <ul>
                                <li>
                                    <a onClick={() => handleNavigation('/dashboard')} data-tooltip="DashBoard">
                                        <HomeIcon />
                                        {!navCollapsed && 'DashBoard'}
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => handleNavigation('/dashboard/mycourses')} data-tooltip="My Courses">
                                        <GraduationCapIcon />
                                        {!navCollapsed && 'My Courses'}
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => handleNavigation('/dashboard/messages')} data-tooltip="Messages">
                                        <MessagesIcon />
                                        {!navCollapsed && 'Messages'}
                                        <Badge value="8" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <a onClick={() => handleNavigation('/dashboard/shop')} data-tooltip="Shop">
                                        <StoreIcon />
                                        {!navCollapsed && 'Shop'}
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => handleNavigation('/dashboard/myfavorites')} data-tooltip="WishList">
                                        <FavouriteIcon />
                                        {!navCollapsed && 'WishList'}
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => handleNavigation('/dashboard/mycart')} data-tooltip="My Cart">
                                        <ShoppingCartIcon />
                                        {!navCollapsed && 'My Cart'}
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div onClick={toggleNav} className='nav-btn'>
                        {navCollapsed ? <AnglesRightIcon /> : <AnglesLeftIcon />}
                    </div>
                </div>
            </div>

            <div className="dashMobileNav">
                <SpeedDial model={items} direction="up" style={{ right: 15, bottom: 15 }} showIcon={<BarsIcon />} hideIcon={<XCloseIcon />} transitionDelay={80} />
            </div>

            <div className="dashContent">
                <div className="dashContent-container">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet />
                    </Suspense>
                </div>
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
                            <UserIcon />
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
                                <UserIcon />
                                Account
                            </a>
                        </li>
                        <li>
                            <a onClick={() => handleNavigation('/dashboard/notifications')}>
                                <BellIcon />
                                Notifications
                                <Badge value="+100" />
                            </a>
                        </li>
                        <li>
                            <a onClick={() => handleNavigation('/dashboard/settings')}>
                                <SettingsIcon />
                                Settings
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="sideHelp">
                    <ul>
                        <li>
                            <a>
                                <HelpIcon />
                                Help
                            </a>
                        </li>
                        <li >
                            <a>
                                <InfoIcon />
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
