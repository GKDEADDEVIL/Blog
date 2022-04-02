import './Write.css'

export default function Write() {
    return (
    <div className="write">
        <img 
        className="writeImg" 
        src="https://images.pexels.com/photos/5759866/pexels-photo-5759866.jpeg" 
        alt="" 
        />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id = "fileInput" style={{display: 'none'}} />
                <input type="Text" className="writeInput" placeholder="Title" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Write Something..." type="text" className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
    )
}
