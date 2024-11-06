import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Education from './components/Education';

function App() {
    const [page, setPage] = useState('home');

    const renderPage = () => {
        switch (page) {
            case 'education':
                return <Education />;
            case 'home':
            default:
                return (
                    <div className="home">
                        <h1>Welcome to My Portfolio</h1>
                        <p>Explore my background and work.</p>
                    </div>
                );
        }
    };

    return (
        <div className="App">
            <Navbar onNavigate={setPage} />
            <header className="App-header">
                {renderPage()}
            </header>
        </div>
    );
}

export default App;
