import React from "react";
import {Link} from "react-scroll"; 

function Navbar() {
 
    return (
        <nav>
            <div>
                <ul>
                    <Link to="About">
                        <li>About</li>
                    </Link>
                    <Link to="Experience">
                        <li>Experience</li>
                    </Link>
                    <Link to="Work">
                        <li>Work</li>
                    </Link>
                    <Link to="Contact">
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;