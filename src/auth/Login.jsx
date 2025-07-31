import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
}, [navigate]);

}