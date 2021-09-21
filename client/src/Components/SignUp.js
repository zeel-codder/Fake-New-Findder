import React from 'react'
// import '../CSS/login.css';
import { useState } from 'react';
export const SignUp = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const Verify=(e)=>{
        e.preventDefault();
        console.log(email+" "+phone);
    }
    return (
        <>
            <div className="container1">
            <form action="POST" className="flex-column">
                <h1>Sing Up</h1>
               <input type="email" placeholder='Enter Email Here' onChange={(e)=>{setEmail(e.target.value)}}></input> <br/>
               <input type="text" placeholder='Enter Phone Number Here' onChange={(e)=>{setPhone(e.target.value)}}></input> <br/>
               <input type="password" placeholder='Enter Password Here' onChange={(e)=>{setPassword(e.target.value)}}></input><br/>
               <input type="password" placeholder='Re-Enter Password Here' onChange={(e)=>{setRepassword(e.target.value)}}></input><br/>
               <button onClick={Verify}>Sign Up</button>
            </form>
        </div>
        </>
    )
}
