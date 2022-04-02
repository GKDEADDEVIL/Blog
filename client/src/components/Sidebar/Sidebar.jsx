import './Sidebar.css'

export default function Sidebar() {
    return (
    <div className = "sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About</span>
            <img
                src=" https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg"
                alt=""
            />
            <p>
                Velit exercitation irure nulla dolore. Consequat cillum occaecat duis qui officia irure velit dolore adipisicing irure nisi culpa sunt. Aliquip sunt qui esse cupidatat. Id nisi fug
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Hack</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Dev</li>
                    <li className="sidebarListItem">Games</li>
                    <li className="sidebarListItem">Write-ups</li>
                </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Follow Us On</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
            </div>
        </div>
    </div>
    )
}
