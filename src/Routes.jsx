import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
 
import { AuthProvider } from "./contexts/auth";

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <AuthProvider>

            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/login" element={<LoginPage/>} />
            </Routes>
        </AuthProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;