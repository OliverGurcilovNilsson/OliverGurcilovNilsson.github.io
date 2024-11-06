import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Education from './components/Education'; // Correctly import Education

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const handleNavigate = (page) => setCurrentPage(page);

    return (
        <div className="App">
            <Navbar onNavigate={handleNavigate} />
            <header className="App-header">
                {currentPage === 'home' && <h1>Welcome to My Portfolio</h1>}
                {currentPage === 'education' && <Education />}
            </header>
        </div>
    );
}

export default App;