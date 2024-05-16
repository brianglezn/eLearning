import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { Sidebar } from 'primereact/sidebar';

import { getUserByToken } from '../../api/getUserByToken';

import './DashBoard.scss';

function DashBoard() {
    const [visible, setVisible] = useState(false);
    const [user, setUser] = useState({ name: '', surname: '', email: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await getUserByToken();
                setUser(userData);
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/');
    };

    return (
        <div className="dashBoard">
            <div className="dashHeader">

                <div className="dashlogo">
                    <img src="https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714402089/eLearning/logo_eLearning.png" alt="Logo" />
                    <h2>eLearning</h2>
                </div>

                <div className="dashBtn">
                    <span className="material-symbols-rounded">shopping_cart</span>
                    <span className="material-symbols-rounded">favorite</span>
                    <Avatar className="p-overlay-badge" onClick={() => setVisible(true)}>
                        <span className="material-symbols-rounded">person</span>
                        <Badge value="+10" />
                    </Avatar>
                </div>

            </div>

            <div className="dashContent">CONTENIDO</div>

            <Sidebar className='sidebar' visible={visible} position="right" onHide={() => setVisible(false)}>

                <div className="sideProfile">
                    <div className="sideProfile-icon">
                        <Avatar className="p-overlay-bage" size='large'>
                            <span className="material-symbols-rounded">person</span>
                        </Avatar>
                    </div>
                    <div className="sideProfile-name">
                        <h3>{user.name} {user.surname}</h3>
                        <p>{user.email}</p>
                    </div>
                </div>

                <div className="sideNotifications">
                    <ul>
                        <li><span className="material-symbols-rounded">notifications</span><a href="#">Notifications</a><Badge value="+100" /></li>
                        <li><span className="material-symbols-rounded">message</span><a href="#">Messages</a><Badge value="8" /></li>
                        <li><span className="material-symbols-rounded">groups</span><a href="#">Community</a></li>
                    </ul>
                </div>

                <div className="sideCourses">
                    <ul>
                        <li><span className="material-symbols-rounded">school</span><a href="#">My Courses</a></li>
                        <li><span className="material-symbols-rounded">favorite</span><a href="#">My Favorites</a></li>
                        <li><span className="material-symbols-rounded">shopping_cart</span><a href="#">My Cart</a></li>
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
