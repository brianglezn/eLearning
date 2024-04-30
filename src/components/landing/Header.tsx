import './Header.scss';

function Header() {
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
            </div>
        </header >
    );
}

export default Header;
