import "./header.css"

export function Header() { 
    return (
        <header>
            <div className="left">
                <p className="title">
                    <span className="top_part">Benedict <span className="last_name"> Onyango </span> <br /></span>
                    <span className="bottom_part">SOFTWARE ENGINEER</span>
                </p>
            </div>
            <div className="right">
                <ul className="nav_list">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </header>
    );
}