import React from 'react';
import { Navbar } from '../components/navbar.jsx';
import { Preview } from '../components/Preview.jsx';
import { Contact } from '../components/Contact.jsx';
import { ScrollToTop } from '../components/ScrollToTop.jsx';

import '../styles/styles.css';

const Home = () => {
    return (
        <div className = "home-container">
            <Navbar />
            
            {/* <header className="header" role="banner">
                <div className="header-logo">Personal Collection</div>
                <div className="header-content">
                    <h1 className="header-title">Project Showcase</h1>
                </div>
            </header> */}

            <div className="scroll-container">
                <section className='section' id='home'>
                    <header className="section-header" role="banner">
                        <div className="header-logo">Personal Collection</div>
                        <div className="header-content">
                            <h1 className="header-title">Project Showcase</h1>
                        </div>
                    </header>
                </section>

                <section className='section' id='preview'>
                    <Preview />
                </section>

                <section className='section' id='contact'>
                    <Contact />
                </section>
            </div>


            {/* <Preview />
            <Contact /> */}
            <ScrollToTop />

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