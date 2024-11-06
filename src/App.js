import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Education from './components/Education';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const handleNavigate = (page) => setCurrentPage(page);

    return (
        <div className="App">
            <Navbar onNavigate={handleNavigate}/>
            <header className="App-header">
                <div className="content-box">
                    {currentPage === 'home' && <h1>Welcome</h1>}
                    {currentPage === 'education' && <Education/>}

                    {currentPage === 'home' && (
                        <div className="social-icons">
                            <button className="social-btn">
                                <FontAwesomeIcon icon={faGithub} />
                            </button>
                            <button className="social-btn">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </button>
                            <button className="social-btn">
                                <FontAwesomeIcon icon={faDribbble} />
                            </button>
                            <button className="social-btn">
                                <FontAwesomeIcon icon={faSmile} />
                            </button>
                            <button className="social-btn">Book a call</button>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}

export default App;