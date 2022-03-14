import './Header.css'

export default function Header() {
    return (
    <div className = "header">
        <div className="headerTitles">
            <span className="headerTitleSm">Devil's Phoenix</span>
            <span className="headerTitleLg">BLOG</span>
        </div>
        <img
        className="headerImg"
        src="https://images.pexels.com/photos/10550012/pexels-photo-10550012.jpeg"
        alt=""
        />
    </div>
    )
}
