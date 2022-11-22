import React from 'react';
import {useState} from "react";
import {login, logout, registration} from "../utils/auth-service";

 const AuthComponent = () => {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    return (
        <div>
            <input type={'text'} placeholder={'Type your email'} onChange={(event) => setEmail(event.target.value)}/>
            <input type={'text'} placeholder={'Type your password'} onChange={(event) => setPassword(event.target.value)}/>
            <button onClick={() => login(email, password)}>Login</button>
            <button onClick={() => registration(email, password)}>Registration</button>
            <button onClick={()=> logout()}>Logout</button>
        </div>
    );
};

 export default AuthComponent;
