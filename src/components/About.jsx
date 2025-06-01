import React from "react";
import profile from "../images/me.jpg"; // Ensure you have a profile image in the assets folder

export function About() {
    return (

        <div id="about" className="about-container">
            <h2 className="about-title">About Me</h2>
            <div className="about-description">
                <img src={profile} alt="Profile" className="about-image shadows"/>
                <p class name="about-text"> 
                    Hello, I'm Chris Woo, a Computer Science with Business Applications student at the University
                    of California, Riverside. I am in pursuit of becoming a full-time software engineer
                    who builds things that actually matter. Whether that be tools, apps, and experiences that 
                    make life easier, better, or more enjoyable. I want to create softawre that reaches people,
                    is useful, and is impactful. Right now, I am continuing to sharpen my skills, build projects,
                    and explore new technologies and frameworks.
                </p>
            </div>
        </div>
    );
}

// Hello, I'm Chris Woo, a Computer Science with Business Applications student at the University
// of California, Riverside. I am in pursuit of becoming a full-time software engineer
// who builds things that actually matter. Whether that be tools, apps, and experiences that 
// make life easier, better, or more enjoyable. I want to create softawre that reaches people,
// is useful, and is impactful. Right now, I am continuing to sharpen my skills, build projects,
// and explore new technologies and frameworks.