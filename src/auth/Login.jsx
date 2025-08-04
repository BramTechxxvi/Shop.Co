import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Header from '../components/Header'

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
      <Header />

      <main className="flex-grow flex items-center justify-center p-6 pt-40">
        <div className="w-full max-w-md bg-stone-100 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 text-center uppercase">Login</h2>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Signup
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;