import React from 'react';
import '../CSS/login.css';
export const Login = () => {
    return (
        <>
        <div className="container">
            <form action="POST">
               <input type="email" placeholder='Enter Email Here'></input> <br/>
               <input type="password" placeholder='Enter Password Here'></input><br/>
               <button>Login</button>
            </form>
        </div>
        </>
    )
}
