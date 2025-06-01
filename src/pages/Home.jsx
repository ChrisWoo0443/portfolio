import React from 'react';
import { Navbar } from '../components/navbar.jsx';
import { Preview } from '../components/Preview.jsx';
import { About } from '../components/About.jsx';
import { Contact } from '../components/Contact.jsx';
import { ScrollToTop } from '../components/ScrollToTop.jsx';


import '../styles/styles.css';

const Home = () => {
    return (
        <div className = "home-container">
            <Navbar />
            <ScrollToTop />

            <header className="section-header" role="banner">
                <div className="header-logo">Personal Collection</div>
                <div className="header-content">
                    <h1 className="header-title">Project Showcase</h1>
                </div>
            </header>
            <Preview />  
    
            <About />
            <Contact />

            <footer className="footer">
                <div className="footer-name">
                    <p>Chris Woo</p>
                </div>
                <div className="footer-year">
                    <p>2025</p>
                </div>
            </footer>

        </div>
    );
};

export default Home;