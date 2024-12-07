import { useNavigate } from 'react-router-dom';

const Visitor = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
            <p className="text-lg text-gray-700 mb-8">Please log in or register to continue.</p>
            <div className="flex gap-4">
                <button
                    className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => navigate('/login')}
                >
                    Login
                </button>
                <button
                    className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    onClick={() => navigate('/register')}
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default Visitor;
