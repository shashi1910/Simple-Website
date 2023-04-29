import React, { useEffect, useState } from 'react'
import './style.css'

const Signup = () => {
  const [isSignedIn, setIsSignedIn]=useState(false);
  useEffect(()=>{
    alert(`Thankyou for signing in`)
  }, [isSignedIn])

  const handelFunction=(event) =>{
    event.preventDefault();
    setIsSignedIn(true)    
  }
  return (
    <div class="signup">
        <form>
            <h2>Sign Up</h2>
            <label id='name'>Name</label>
            <input htmlFor="name"></input>
            <label id='email'>Email</label>
            <input type="email" />
            <label>Password</label>
            <input type = "password" />
            <button type='Submit' onClick={handelFunction}>Submit</button>
        </form>
    </div>
  )
}

export default Signup