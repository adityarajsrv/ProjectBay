import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import DashboardPage from "./pages/DashboardPage";
import AuthPage from "./pages/AuthPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import BootPage from "./pages/BootPage";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthPage />} />
      <Route
        path="/boot"
        element={
          <ProtectedRoute>
            <BootPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;
