import React, { useState } from 'react';
import './Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Portfolio = ({ darkMode, themeColor }) => {
    // Define the list of projects
    const projects = [
        {
            title: "Geocroquet!",
            description: "Geocroquet allows croquet to be played synchronously across the globe, initially an idea to allow players from different clubs to play tournaments.",
            stack: "React, Node.js, Firebase",
            duration: "6 months",
            videoSrc: "/videos/Screen Recording 2024-11-07 at 16.36.24.mov"
        },
        {
            title: "Donation Platform",
            description: "Currently working on a mobile app which facilitates donations to various beneficiaries",
            stack: "React Native",
            duration: "2 months",
            videoSrc: "/videos/opopVideo.mov"
        }
    ];

    // State to keep track of the current project index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the previous project
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    // Function to go to the next project
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    // Get the current project data
    const currentProject = projects[currentIndex];

    return (
        <div
            className="portfolio"
            style={{
                backgroundColor: darkMode ? "#1a1a1a" : "white",
                color: darkMode ? "white" : "black", // Ensuring text color is set
                border: `6px solid ${darkMode ? themeColor : "#ddd"}`,
                transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
                width: '100%',
                minHeight: '80vh',
                margin: '1rem auto',
                borderRadius: '8px',
                padding: '2rem',
                position: 'relative'
            }}
        >
            {/* Left arrow for navigation */}
            <button className="arrow-button left-arrow" onClick={handlePrev}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            {/* Project content */}
            <div>
                <h2>{currentProject.title}</h2>
                <p>{currentProject.description}</p>
                <p><strong>Client:</strong> {currentProject.client}</p>
                <p><strong>Stack:</strong> {currentProject.stack}</p>
                <p><strong>Duration:</strong> {currentProject.duration}</p>
                <p>This project required a full-stack approach and integrated complex features such as user authentication, real-time updates, and responsive design.</p>
            </div>

            {/* Project video */}
            <div className="portfolio-video">
                <video
                    src={currentProject.videoSrc}
                    controls
                    muted
                    autoPlay
                    loop
                    style={{
                        border: `2px solid ${darkMode ? "#444" : "#ccc"}`,
                        borderRadius: '8px'
                    }}
                ></video>
            </div>

            {/* Right arrow for navigation */}
            <button className="arrow-button right-arrow" onClick={handleNext}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    );
};

export default Portfolio;
