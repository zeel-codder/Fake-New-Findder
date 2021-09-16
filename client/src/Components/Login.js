import React from 'react';
import '../CSS/login.css';
import { useState } from 'react';
export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Verify=(e)=>{
        e.preventDefault();
        console.log(email+" "+password);
        // User Authentication through Firebase
    }
    return (
        <>
        <div className="container1">
            <form action="POST">
               <input type="email" placeholder='Enter Email Here' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input> <br/>
               <input type="password" placeholder='Enter Password Here' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input><br/>
               <button onClick={Verify}>Login</button>
            </form>
        </div>

        </>
    )
}
