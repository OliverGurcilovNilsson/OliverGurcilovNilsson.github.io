import React, { useState } from 'react';
import './PassionProjects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const PassionProjects = ({ darkMode, themeColor }) => {
    // Define the list of passion projects with image galleries
    const projects = [
        {
            title: "Photography Showcase",
            description: "A collection of my favorite landscape photos captured across various countries.",
            stack: "Photography, Adobe Lightroom",
            duration: "Ongoing",
            images: ["/images/photo1.jpg", "/images/photo2.jpg", "/images/photo3.jpg"]
        },
        {
            title: "Artistic Creations",
            description: "Digital artwork and illustrations exploring abstract concepts and color theory.",
            stack: "Digital Art, Adobe Illustrator",
            duration: "2 years",
            images: ["/images/art1.jpg", "/images/art2.jpg", "/images/art3.jpg"]
        }
    ];

    // State to keep track of the current project and image indices
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);

    // Function to navigate to the previous project
    const handlePrevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
        setImageIndex(0); // Reset image index on project change
    };

    // Function to navigate to the next project
    const handleNextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
        setImageIndex(0); // Reset image index on project change
    };

    // Function to navigate through images within the current project
    const handlePrevImage = () => {
        setImageIndex((prevIndex) => (prevIndex === 0 ? projects[currentIndex].images.length - 1 : prevIndex - 1));
    };

    const handleNextImage = () => {
        setImageIndex((prevIndex) => (prevIndex === projects[currentIndex].images.length - 1 ? 0 : prevIndex + 1));
    };

    // Get the current project and current image data
    const currentProject = projects[currentIndex];
    const currentImage = currentProject.images[imageIndex];

    return (
        <div
            className="passion-projects"
            style={{
                backgroundColor: darkMode ? "#1a1a1a" : "white",
                color: darkMode ? "white" : "black",
                border: `16px solid ${darkMode ? themeColor : "#ddd"}`,
                transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
                width: '100%',
                minHeight: '80vh',
                margin: '1rem auto',
                borderRadius: '8px',
                padding: '2rem',
                position: 'relative'
            }}
        >
            {/* Left arrow for navigating between projects */}
            <button className="arrow-button left-arrow" onClick={handlePrevProject}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            {/* Project content */}
            <div className="project-info">
                <h2>{currentProject.title}</h2>
                <p>{currentProject.description}</p>
                <p><strong>Tools:</strong> {currentProject.stack}</p>
                <p><strong>Duration:</strong> {currentProject.duration}</p>
            </div>

            {/* Image gallery with navigation arrows */}
            <div className="image-gallery">
                <button className="arrow-button image-arrow left" onClick={handlePrevImage}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <img
                    src={currentImage}
                    alt={`${currentProject.title} - Image ${imageIndex + 1}`}
                    className="project-image"
                    style={{
                        border: `2px solid ${darkMode ? "#444" : "#ccc"}`,
                        borderRadius: '8px'
                    }}
                />
                <button className="arrow-button image-arrow right" onClick={handleNextImage}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>

            {/* Right arrow for navigating between projects */}
            <button className="arrow-button right-arrow" onClick={handleNextProject}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    );
};

export default PassionProjects;
