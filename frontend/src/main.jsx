import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './styles/index.css';
import Dashboard from './pages/Dashboard.jsx';
import Sedes from './pages/Sedes.jsx';
import Mensajeria from './pages/Mensajeria.jsx';
import Reportes from './pages/Reportes.jsx';
import Login from './pages/Login.jsx'; // Import Login page
import ProtectedRoute from './components/ProtectedRoute.jsx'; // Import ProtectedRoute
import { AuthProvider } from './context/AuthContext.jsx'; // Import AuthProvider

function MainApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} /> {/* Login route */}
        <Route element={<ProtectedRoute />}> {/* Protected routes */}
          <Route path="/" element={<Dashboard />}>
            <Route index element={<div>Welcome to Dashboard!</div>} /> {/* Default content for the dashboard */}
            <Route path="sedes" element={<Sedes />} />
            <Route path="mensajeria" element={<Mensajeria />} />
            <Route path="reportes" element={<Reportes />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> {/* Wrap MainApp with AuthProvider */}
      <MainApp />
    </AuthProvider>
  </StrictMode>,
);
