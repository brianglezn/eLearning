import './Footer.scss';

function Footer() {

    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section logo">
                    {/* logo */}
                    <img src="/path-to-your-logo.png" alt="logo" />
                    <p>We are a passionate group of instructors helping thousands to start their journey with online courses.</p>
                </div>
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
                <div className="footer-section contact">
                    <h3>CONTACT</h3>
                    <p><a href="#">hola@brian-novoa.com</a></p>
                    {/* Añade aquí los iconos de redes sociales */}
                </div>
            </div>
            <div className="footer-bottom">
                <p>© {currentYear} All Rights Reserved. <a href="https://brian-novoa.com/">brian-novoa</a>®</p>
            </div>
        </footer>
    );
}

export default Footer;
