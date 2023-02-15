import React, { createContext, useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import {api, createSession} from "../services/api"
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem(['user']);

        if(recoveredUser) {
            setUser(JSON.parse(recoveredUser)); 
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        console.log("login auth", {email, password});
        const response = await createSession(email, password);

        console.log("login", response.data);
        // api criar uma session

        const loggedUser= response.data.user; 
        const token = response.data.token;

        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", token);
        
        api.defaults.headers.Authorization = `Bearer  ${token}`;

            setUser(loggedUser);
            navigate("/");
        

        setUser({ id:"123", email});
    };

    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login");
        api.defaults.headers.Authorization = null;
    };

    return (
        <AuthContext.Provider
            value={{ authenticaded: !!user, user, login, logout}}
        >
            {children}
        </AuthContext.Provider>
    );
};
