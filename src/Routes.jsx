import React, {useContext} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
 
import { AuthProvider, AuthContext } from "./contexts/auth";

const AppRoutes = () => {
    const Private = ({children}) => {
        const {authenticaded, loading} = useContext(AuthContext);

        if (loading) {
            return <div className="loading">Carregando...</div>
        }

        if(!authenticaded) {
            return <Navigate to="/login"/>
        }
        return children;
    };
    return (
        <BrowserRouter>
        <AuthProvider>

            <Routes>
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/" element={<Private><HomePage/></Private>} />
            </Routes>
        </AuthProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;