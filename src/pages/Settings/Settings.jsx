import './Settings.css'
import Sidebar from './../../components/Sidebar/Sidebar'

export default function Settings() {
    return (
    <div className = "settings">
        <div className = "settingsWrapper">
            <div className = "settingsTitle">
                <span className = "settingsUpdateTitle">Update Your Account</span>
                <span className = "settingsUpdateTitle">Delete Account</span>
            </div>
            <form className = "settingsForm">
                <label>Profile Picture</label>
                <div className = "settingsPP">
                    <img src = "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg" alt = "" className />
                    <label htmlFor = "fileInput">
                    <i className="settingsPPIcon fa-solid fa-user"></i>
                    </label>
                    <input type = "file" id = "fileInput" style={{display: "none"}} />
                </div>
                <label>Username</label>
                <input type = "text" placeholder = "Phoenix" />
                <label>Email</label>
                <input type = "email" placeholder = "devilphoenix@gmail.com" />
                <label>Password</label>
                <input type = "password" name='password'/>
                <button className="settingsUpdate">Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
    )
}
