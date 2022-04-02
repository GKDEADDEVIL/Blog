import './Post.css'

export default function Post() {
    return (
    <div className = "post">
        <img className="postImg"
            src="https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="" 
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Hack</span>
            </div>
            <span className="postTitle">
                Amet minim dolore officia quis.
            </span>
            <hr />
            <span className="postDate">1 Hour Ago</span>
        </div>
        <p className="postDesc">
            Aliqua enim aliqua consequat cupidatat culpa tempor reprehenderit. Quis commodo aliqua pariatur ex mollit fugiat et mollit. Non minim ex amet anim voluptate veniam ex officia consequat consectetur culpa ea. Sunt elit mollit consectetur sunt irure ea minim aute. Laboris qui voluptate laboris velit enim nulla ad aute. Mollit pariatur quis incididunt aliqua culpa. Magna elit laboris velit dolor duis minim adipisicing.
        </p>
    </div>
    )
}
