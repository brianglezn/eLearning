import Footer from '../../components/landing/Footer';

import './Login_Register.scss';

function Register() {
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
                    <h2 className='formTitle'>REGISTER</h2>
                    <form className='form' action="">
                        <input
                            className="formUsername"
                            type="username"
                            placeholder="Username"
                            required
                        />
                        <input
                            className="formName"
                            type="name"
                            placeholder="Name"
                            required
                        />
                        <input
                            className="formSurname"
                            type="surname"
                            placeholder="Surname"
                            required
                        />
                        <input
                            className="formEmail"
                            type="email"
                            placeholder="E-mail"
                            required
                        />
                        <input
                            className="formPassword"
                            type={"password"}
                            placeholder="Password"
                            required
                        />
                        <button className="formSubmit" type="submit">Let's go!</button>
                        <p className="formChange">Already have an account?<a href="/login">Sign in</a></p>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Register;
