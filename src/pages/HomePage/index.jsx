import React, { useContext} from "react";
import { AuthContext } from "../../contexts/auth";
const HomePage = () => {
    const { logout, authenticaded } = useContext(AuthContext);
    const handleLogout = () => {
        logout();
    }
    return (
    <>
        <h1>HomePage</h1>
        <p>{String(authenticaded)}</p>
        <button onClick={handleLogout}>Logout</button>    
    </>
    );
};


export default HomePage