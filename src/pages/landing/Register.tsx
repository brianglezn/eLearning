import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import Footer from '../../components/landing/Footer';
import './Login_Register.scss';

function Register() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch('https://elearning-back.onrender.com/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    name,
                    surname,
                    email,
                    password
                })
            });

            if (response.ok) {
                await response.json();
                toast.success('Registration successful!');
                navigate('/login');
            } else {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Failed to register');
            }
        } catch (error) {
            if (error instanceof Error) {
                toast.error(`Registration error: ${error.message}`);
                console.error('Registration error:', error.message);
            } else {
                toast.error('An unexpected error occurred');
                console.error('Unexpected registration error:', error);
            }
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
                    <h2 className='formTitle'>REGISTER</h2>
                    <form className='form' onSubmit={handleSubmit}>
                        <input
                            className="formUsername"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                        />
                        <input
                            className="formName"
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                        <input
                            className="formSurname"
                            type="text"
                            placeholder="Surname"
                            value={surname}
                            onChange={e => setSurname(e.target.value)}
                            required
                        />
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
