import { Link } from 'react-router-dom'
import './Register.css'

export default function Register() {
    return (
    <div className = "register">
        <span 
            className="registerTitle">
            Register
        </span>
        <form  
            className="registerForm">
            <label>Username</label>
            <input 
                type="text" 
                className="registerInput" 
                placeholder="Username"/>
            <label>Email</label>
            <input 
                type="text" 
                className="registerInput" 
                placeholder="Email ID"/>
            <label>Password</label>
            <input 
                type="password"  
                className="registerInput" 
                placeholder="Password"/>
            <button className="registerButton">
                Register
            </button>
            <button className="registerLoginButton">
            <Link className="link" to="/login">LOGIN</Link>
            </button>
        </form>
    </div>
    )
}
