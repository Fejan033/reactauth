import { logoutUser } from './firebaseAuth';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logoutUser();
            navigate('/login');
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl">Welcome to the Dashboard</h1>
            <button className="p-2 bg-red-500 text-white mt-4" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
