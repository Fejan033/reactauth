import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Dashboard from './dashboard';
import Visitor from './Visitor';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Visitor />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
