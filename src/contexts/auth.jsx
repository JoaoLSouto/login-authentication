import React, { createContext, useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";

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

    

    const login = (email, password) => {
        console.log("login auth", {email, password});

        // api criar uma session

        const loggedUser= {
            id: "123",
            email,
        };

        localStorage.setItem("user", JSON.stringify(loggedUser));

        if(password === "senha"){
            setUser(loggedUser);
            navigate("/");
        }

        setUser({ id:"123", email});
    };

    const logout = () => {
        console.log("logout");
        setUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider
            value={{ authenticaded: !!user, user, login, logout}}
        >
            {children}
        </AuthContext.Provider>
    );
};
