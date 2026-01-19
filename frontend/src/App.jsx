import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import DashboardPage from "./pages/DashboardPage";
import AuthPage from "./pages/AuthPage";
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  const {user} = useAuth();

  return (
      <Routes>
        <Route
        path="/login"
        element={user ? <Navigate to="/dashboard" replace /> : <AuthPage />}
        />
        <Route path="/" element={<Home />} />
        <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
  );
};

export default App;
