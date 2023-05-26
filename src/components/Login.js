import "../styles/Login.css";
import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { Link} from "react-router-dom";
// import '../styles/Link.css'
// import '../styles/Textfield.css'
import '../styles/Link.css'
import axios from 'axios';


function Login() {
const[username,setUsername]=useState("");
const[password,setPassword]=useState("");

const handleSubmit = (e) =>{
    e.preventDefault();
    const data = {
        username:username,
        password:password
    }
    axios
    .post("http://127.0.0.1:8000/user-login", data,{
        "accept":"application/json",
        "Content-Type": " application/x-www-form-urlencoded"
    })
    .then((response)=>{
        window.localStorage.setItem("access_token", response.data.access_token)
    }
    ).catch(function(error){
        console.log(error);
    })
}

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
                    <form onSubmit={ handleSubmit}>
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
                    type = "password"
                    className="password textfield"
                    value={[password]}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Password"
                    />
                    <div class='button'>
                        <button type ="submit" className = "btn">LOGIN</button>
                    </div>
                    </div>
                    </form>
                    
                </div>
            </div>
    </div>)
}

export default Login;
