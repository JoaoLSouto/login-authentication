import React, { useState, useContext } from "react";
import "./styles.css";
import { AuthContext} from "../../contexts/auth";

const LoginPage = () => {
    const { authenticaded, login} = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", { email, password} );
        login(email, password); // integração com o context e API.
    };

    return (
        <div id="login">
            <h1 className="tittle">Login</h1>
            <p>{String(authenticaded)}</p>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        name="email"
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                    name="password" 
                    id="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="actions">
                    <button type="submite">Entrar</button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage