import React,{useState} from "react"
import "./Signup.css"
const SignUp =()=>{
    const [email,setEmail] =useState("")
    const handleSubmit=(e)=>{
          e.preventDefault()
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
    const handleEmail=(e)=>{
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    return (
      <div className="container">
      <div className="signup-container">
          <h3 className="text-center">Sign Up</h3>
          <form onSubmit={handleSubmit}>
              <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your full name" required/>
              </div>
              <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email"  autoComplete="email" placeholder="Enter your email" value={email} onChange={handleEmail} required/>
              </div>
              <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" autoComplete="new-password" id="password" placeholder="Enter your password" required/>
              </div>
              <div className="mb-3">
                    <label htmlFor="contact" className="form-label">Contact Number</label>
                    <input type="tel" className="form-control" id="contact" placeholder="Enter your contact number" required/>
                </div>
              <button type="submit" className="btn btn-primary w-100">Sign Up</button>
          </form>
          <p className="text-center mt-3">Already have an account? <a href="/login">Login</a></p>
      </div>
  </div>
  
    )
}
export default SignUp