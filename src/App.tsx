import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/useAuth';

import Home from './pages/landing/Home';
import Courses from './pages/landing/Courses';
import Community from './pages/landing/Community';
import Login from './pages/landing/Login';
import Register from './pages/landing/Register';
import ForgotPassword from './pages/landing/ForgotPassword';
import ForgotPasswordToken from './pages/landing/ForgotPasswordToken';
import DashBoard from './pages/dashBoard/DashBoard';
import CourseX from './pages/landing/CourseX';

import './App.scss';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { authToken } = useAuth();
  console.log('Auth Token:', authToken);  // Verifica el token aquí
  return authToken ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseX />} />
          <Route path="/community" element={<Community />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/forgotpasswordtoken" element={<ForgotPasswordToken />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <DashBoard />
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
