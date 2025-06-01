import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Navbar(){
    const location = useLocation();
    const navigate = useNavigate();

    const handleScrollNav = (targeId) => {
        if (location.pathname !== '/') {
            navigate('/');

            setTimeout (() => {
                const element = document.getElementById(targeId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 50);
        } else {
            const element = document.getElementById(targeId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">Chris Woo</Link>
            <div className="navbar-items">
                <Link to="/projects" className='navbar-link'>Projects</Link>
                {/* <a href="#about" className='navbar-link'>About</a>
                <a href="#contact" className='navbar-link'>Contact</a> */}
                <span className="navbar-link" onClick={() => handleScrollNav('about')}>About</span>
                <span className="navbar-link" onClick={() => handleScrollNav('contact')}>Contact</span>
            </div>
        </nav>
    );
}