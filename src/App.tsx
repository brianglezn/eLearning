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
import CourseX from './pages/landing/CourseX';
import DashBoard from './pages/dashBoard/DashBoard';
import Messages from './pages/dashBoard/Messages';
import Notifications from './pages/dashBoard/Notifications';
import Account from './pages/dashBoard/Account';
import MyCourses from './pages/courses/MyCourses';
import Shop from './pages/shop/Shop';
import ShopCourse from './pages/shop/ShopCourse';
import MyCart from './pages/shop/MyCart';
import MyFavorites from './pages/shop/MyFavorites';

import './App.scss';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { authToken } = useAuth();
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
          <Route path="/dashboard" element={<PrivateRoute><DashBoard /></PrivateRoute>}>
            <Route index element={<MyCourses />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:id" element={<ShopCourse />} />
            <Route path="account" element={<Account />} />
            <Route path="mycart" element={<MyCart />} />
            <Route path="myfavorites" element={<MyFavorites />} />
            <Route path="messages" element={<Messages />} />
            <Route path="community" element={<Community />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="mycourses" element={<MyCourses />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
