import Footer from '../../components/landing/Footer';
import './Login_Register.scss';

function ForgotPasswordToken() {
    
    return (
        <div className='login'>
            <header className="header">
                <a href="/" className="logo-link">
                    <div className="logo">
                        <img src="https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714402089/eLearning/logo_eLearning.png" alt="Logo" />
                        <h2>eLearning</h2>
                    </div>
                </a>
            </header>

            <section className="content">
                <div className="formContainer">
                    <h2 className='formTitle'>RESET PASSWORD</h2>
                    <form className='form' action="">
                        <input
                            className="formToken"
                            type="number"
                            placeholder="Verification Code"
                            required
                        />
                        <input
                            className="formPassword"
                            type="password"
                            placeholder="New Password"
                            required
                        />
                        <input
                            className="formPassword"
                            type="password"
                            placeholder="Confirm New Password"
                            required
                        />
                        <button className="formSubmit" type="submit">Change password</button>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default ForgotPasswordToken;
