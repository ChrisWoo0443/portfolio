import React from "react";

export function Contact() {
    return (
        <div id="contact" className="contact-container">
            <h2 className="contact-title">Contact Me</h2>
            <p className="contact-description">
                If you have any questions or would like to get in touch, feel free to reach out!
            </p>
            <div className="contact-details">
                <p className="contact-phone">
                    <strong>Phone:</strong> (415) 969-1348
                </p>

                <p className="contact-email">
                    <strong>Email: </strong>
                    <a href="mailto:chris.woo1348@gmail.com">
                        chris.woo1348@gmail.com
                    </a>
                </p>

                <p className="contact-linkedin">
                    <strong>LinkedIn: </strong> 
                    <a href="https://www.linkedin.com/in/chris-woo-007269253/" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/chris-woo-007269253/
                    </a>
                </p>

                <p className="contact-github">
                <strong>GitHub: </strong>
                    <a href="https://www.github.com/ChrisWoo0443" target="_blank" rel="noopener noreferrer">
                        github.com/ChrisWoo0443
                    </a>
                </p>

                <p className="contact-instagram">
                    <strong>Instagram: </strong>
                    <a href="https://www.instagram.com/chris.woo04/" target="_blank" rel="noopener noreferrer">
                        instagram.com/chris.woo04
                    </a>
                </p>
                
            </div>
        </div>
    );
}


// put linkedin, instagram, github, email, phone number 