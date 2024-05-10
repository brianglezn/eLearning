import { useState } from 'react';

import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { Sidebar } from 'primereact/sidebar';

import './DashBoard.scss';

function DashBoard() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="dashBoard">
            <div className="dashHeader">
                <div className="dashlogo">
                    <img src="https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714402089/eLearning/logo_eLearning.png" alt="Logo" />
                    <h2>eLearning</h2>
                </div>
                <div className="dashMenu">.</div>

                <div className="dashBtn" onClick={() => setVisible(true)}>
                    <span className="material-symbols-rounded">shopping_cart</span>
                    <span className="material-symbols-rounded">favorite</span>
                    <Avatar className="p-overlay-badge">
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
                        <h3>Brian González Novoa</h3>
                        <p>brianglezn@gmail.com</p>
                    </div>
                </div>

                <div className="sideNotifications">
                    <ul>
                        <li><a href="#" >Notifications</a></li>
                        <li><a href="#">Messages</a></li>
                    </ul></div>
                <div className="sideCourses">
                    <ul>
                        <li><a href="#">My Courses</a></li>
                        <li><a href="#">My Favorites</a></li>
                        <li><a href="#">My Cart</a></li>
                    </ul>
                </div>
            </Sidebar>
        </div>
    );
}

export default DashBoard;
