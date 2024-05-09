import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Footer from '../../components/landing/Footer';

import './Login_Register.scss';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch('https://elearning-back.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                await response.json();
                navigate('/dashboard');
            } else if (response.status === 401) {
                console.log('Invalid credentials. Please try again.');
            } else {
                throw new Error(`Login failed with status: ${response.status}`);
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred during login. Please try again later.');
        }
    };

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
                    <h2 className='formTitle'>LOG IN</h2>
                    <form className='form' onSubmit={handleLogin}>
                        <input
                            className="formEmail"
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <input
                            className="formPassword"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                        <a className="formForgot" href="/forgotpassword">Forgot password?</a>
                        <button className="formSubmit" type="submit">Let's go!</button>
                        <p className="formChange">Don't have an account?<a href="/register">Sign up</a></p>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Login;

