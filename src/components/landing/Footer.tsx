import './Footer.scss';

function Footer() {

    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section logo">
                    <img src="https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714402089/eLearning/logo_eLearning.png" alt="Logo" />
                    <h2>eLearning</h2>
                </div>
                <div className="menus">
                    <div className="footer-section about">
                        <h3>ABOUT</h3>
                        <ul>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#reviews">Reviews</a></li>
                            <li><a href="#refunds">Refunds</a></li>
                            <li><a href="#roadmap">Roadmap</a></li>
                        </ul>
                    </div>
                    <div className="footer-section community">
                        <h3>COMMUNITY</h3>
                        <ul>
                            <li><a href="#podcast">Podcast</a></li>
                            <li><a href="#forum">Forum</a></li>
                            <li><a href="#discord">Discord</a></li>
                            <li><a href="#groups">Groups</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-section contact">
                    <h3>CONTACT</h3>
                    <p><a href="#">hola@brian-novoa.com</a></p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© {currentYear} All Rights Reserved. <a href="https://brian-novoa.com/">Brian Novoa</a>®</p>
            </div>
        </footer>
    );
}

export default Footer;
