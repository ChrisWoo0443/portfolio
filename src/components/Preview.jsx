import React from "react";
import largeImage from "../images/JobGPT_home.png";

export function Preview() {
    return (
        <div className="preview-container">
            <img src={largeImage} alt="JobGPT Home" className="preview-large"/>
        </div>
    );
}