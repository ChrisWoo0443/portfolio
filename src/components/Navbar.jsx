import React from 'react';


export function Navbar(){
    return (
        <nav className="navbar">
            <a href="/" className="navbar-logo">Chris Woo</a>
            <div className="navbar-items">
                {/* <a href="#home" className='navbar-link'>Home</a> */}
                <a href="/projects" className='navbar-link'>Projects</a>
                <a href="#about" className='navbar-link'>About</a>
                <a href="#contact" className='navbar-link'>Contact</a>
            </div>
        </nav>
    );
}