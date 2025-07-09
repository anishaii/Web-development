import { Navigate, useLocation } from 'react-router-dom';


const ProtectedRoute = ({ children, requireAuth = true }) => {

  const location = useLocation();

  const isAuthenticated = localStorage.getItem("token")

  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!requireAuth && isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;