import React from 'react'
import '../CSS/signup.css';
export const SignUp = () => {
    return (
        <>
            <div className="container">
            <form action="POST">
               <input type="email" placeholder='Enter Email Here'></input> <br/>
               <input type="text" placeholder='Enter Phone Number Here'></input> <br/>
               <input type="password" placeholder='Enter Password Here'></input><br/>
               <input type="password" placeholder='Re-Enter Password Here'></input><br/>
               <button>Sign Up</button>
            </form>
        </div>
        </>
    )
}
