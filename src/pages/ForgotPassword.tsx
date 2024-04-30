import Footer from '../components/landing/Footer';

import './Login_Register.scss';

function ForgotPassword() {
    return (
        <div className='login'>
            <header className="header">
                <a href="/">
                    <div className="logo">
                        <img src="https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714402089/eLearning/logo_eLearning.png" alt="Logo" />
                        <h2>eLearning</h2>
                    </div>
                </a>
            </header>

            <section className="content">
                <div className="formContainer">
                    <h2 className='formTitle'>FORGOT PASSWORD</h2>
                    <form className='form' action="">
                        <input
                            className="formEmail"
                            type="email"
                            placeholder="E-mail"
                            required
                        />
                        <button className="formSubmit" type="submit">Let's go!</button>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default ForgotPassword;
