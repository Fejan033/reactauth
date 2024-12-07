import { useState } from 'react';
import { loginUser } from './firebaseAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await loginUser(email, password);
            navigate('/dashboard');
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
                <input
                    type="email"
                    placeholder="Email"
                    className="block w-full p-2 my-2 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="block w-full p-2 my-2 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 mt-4"
                    onClick={handleLogin}
                >
                    Login
                </button>
                <button
                    className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-4"
                    onClick={() => navigate('/register')}
                >
                    Register
                </button>
                {message && (
                    <p className="text-center mt-4 text-red-500">{message}</p>
                )}
            </div>
        </div>
    );
};

export default Login;
