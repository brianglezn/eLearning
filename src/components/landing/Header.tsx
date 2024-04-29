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
                        <li><a href="#home">Home</a></li>
                        <li><a href="#courses">Courses</a></li>
                        <li><a href="#comunity">Comunity</a></li>
                    </ul>
                </nav>
                <div className="login">
                    <button onClick={() => console.log('Log In')}>Log In</button>
                </div>
            </div>
        </header >
    );
}

export default Header;
