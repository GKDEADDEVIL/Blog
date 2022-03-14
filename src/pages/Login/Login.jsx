import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
    return (
    <div className = "login">
        <span className="loginTitle">Login</span>
        <form  className="loginForm">
            <label htmlFor="">Email</label>
            <input type="text" className="loginInput" id="" placeholder="Email ID"/>
            <label htmlFor="">Password</label>
            <input type="password"  className="loginInput" id="" placeholder="Password"/>
        <button className="loginButton">Login</button>
        <button className="loginRegisterButton">
            <Link className="link" to="/register">Register</Link>
        </button>
        </form>
    </div>
    )
}
