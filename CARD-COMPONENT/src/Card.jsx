import ProfilePic from "./assets/DnaAngel.jpg"

function Card(){
    return(
        <div className="Card">
            <img src={ProfilePic} alt="Profile Pic" className="Profile"></img>
            <h2 className="Title-card">Hello World</h2>
            <p className="P-card">I'm practicing React using javascript</p>
        </div>
    );
}

export default Card 