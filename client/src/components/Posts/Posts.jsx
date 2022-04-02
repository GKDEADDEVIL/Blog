import { Link } from 'react-router-dom'
import Post from '../Post/Post'
import './Posts.css'

export default function Posts() {
    return (
    <div className = "posts">
        <Link className="link" to = "/post/123"><Post /></Link>
        <Link className="link" to = "/post/123"><Post /></Link>
        <Link className="link" to = "/post/123"><Post /></Link>
        <Link className="link" to = "/post/123"><Post /></Link>
        <Link className="link" to = "/post/123"><Post /></Link>
        <Link className="link" to = "/post/123"><Post /></Link>
    </div>
    )
}