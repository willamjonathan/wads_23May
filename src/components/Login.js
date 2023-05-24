import "../styles/Login.css";
import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { Link} from "react-router-dom";
// import '../styles/Link.css'
// import '../styles/Textfield.css'
import '../styles/Link.css'

function Login() {
const[username,setUsername]=useState("");
const[password,setPassword]=useState("");

    return(<div>
        <div class="Login">
                <div class = "header">
                    <div class = "title">
                        WADS_EXC6
                    </div>
                    <div class = "sub-title">
                        <ul>
                        <li>William Jonathan</li>
                        <li>Anisa Dzikra</li>
                        <li>Joanne T</li>
                        </ul>
                    </div>
                    <div class = "container">
                        <div class = "user-text sub-text">
                            Username:
                        </div>
                    <input
                    type = "text"
                    className="username textfield"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    placeholder="Username"
                    />
                        <div class = "sub-text">
                            Password:
                        </div>
                        <input
                    type = "text"
                    className="password textfield"
                    value={[password]}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Password"
                    />
                    <div class='button'>
                        LOGIN
                    </div>
                    </div>
                    
                </div>
            </div>
    </div>)
}

export default Login;