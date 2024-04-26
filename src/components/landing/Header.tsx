import './Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src="/path-to-your-logo.png" alt="Logo" />
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
