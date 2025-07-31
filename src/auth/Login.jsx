import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Loader from '../components/Loader';

export const Login = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser?.loggedIn) {
            navigate('/');
        }
        
        return () => clearTimeout(timer);
    }, 
    [navigate]);

    const handleLogin = (event) => {
        event.preventDefault();
        setError('');

        if (!phone || !password) {
            setError('Please fill in all fields');
            return;
        }

        const phoneRegex = /^[0-9]{11}$/;
        const trimmedPhone = phone.trim();
        const trimmedPassword = password.trim();
        if (!phoneRegex.test(trimmedPhone)) {
            setError('Phone number must be 11 digits');
            return;
        }

        if(trimmedPassword.length < 8 || trimmedPassword.length > 16) {
            setError('Password must be between 8 to 16 characters');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(
            (user) => user.phone === trimmedPhone && user.password === trimmedPassword
        );

        if (user) {
            localStorage.setItem(
                'currentUser', 
                JSON.stringify({ phone: trimmedPhone, loggedIn: true })
            );
            navigate('/');
        } else {
            setError('Invalid phone number or password');
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            {isLoading && <Loader />}
            <Header/>
        </div>

    );
};

export default Login;