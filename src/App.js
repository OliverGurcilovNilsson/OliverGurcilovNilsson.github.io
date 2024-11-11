import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Education from './components/Education';
import profileImage from './assets/images/cv-bild.jpeg';
import Portfolio from './components/Portfolio';

import Clock from './components/Clock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons';
import ContactForm from './components/ContactForm';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import geocroquetLandingImage from './assets/images/geocroquetLandingImage.png';
import OpOpImage from './assets/images/OpOpImage.png';
import WorkCard from "./WorkCard";
import colors from "tailwindcss/colors";

function App() {
    const projects = [
        { title: "Geocroquet", image: geocroquetLandingImage },
        { title: "OpOp", image: OpOpImage },
    ];
    const [currentPage, setCurrentPage] = useState('home');
    const [showPortfolio, setShowPortfolio] = useState(false);


    const [isContactFormOpen, setIsContactFormOpen] = useState(false);

    const openContactForm = () => setIsContactFormOpen(true);
    const closeContactForm = () => setIsContactFormOpen(false);



    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation when component mounts
        setTimeout(() => {
            setIsVisible(true);
        }, 300); // Optional delay before starting animations
    }, []);


    const [animateArrow, setAnimateArrow] = useState(false);

    const [darkMode, setDarkMode] = useState(true);
    const [themeColor, setThemeColor] = useState("#333"); // Default color for dark mode
    const [isHoveredEducation, setIsHoveredEducation] = useState(false);
    const [isHoveredProjects, setIsHoveredProjects] = useState(false);
    const [isHoveredContact, setIsHoveredContact] = useState(false);
    const [isHoveredWork, setIsHoveredWork] = useState(false);
    const [isHoveredSettings, setIsHoveredSettings] = useState(false);
    const [isHoveredAbout, setIsHoveredAbout] = useState(false);
    const [isHoveredHome, setIsHoveredHome] = useState(false);
    const [isHoveredFooter, setIsHoveredFooter] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleColorChange = (color) => {
        setThemeColor(color);
        document.documentElement.style.setProperty('--theme-border-color', color);
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    const handleMouseEnter = (e) => {
        e.target.style.borderColor = 'white';
        e.target.style.color = themeColor;
    };

    const handleMouseLeave = (e) => {
        e.target.style.borderColor = darkMode ? '#555' : '#888'; // Grey color for both modes
        e.target.style.color = darkMode ? 'white' : 'black';
    };


    useEffect(() => {
        // Change icon color based on the current mode
        const iconColor = darkMode ? 'white' : 'black';
        const socialButtons = document.querySelectorAll('.social-btn');

        // Update the color of each social button
        socialButtons.forEach((button) => {
            button.style.color = iconColor;
            button.style.borderColor = iconColor;
        });
    }, [darkMode]);


    const scrollToPassionProjects = () => {
        const passionProjectsElement = document.getElementById("passion-projects");
        if (passionProjectsElement) {
            passionProjectsElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
    };

    // Set the initial themeColor when the component mounts
    useEffect(() => {
        document.documentElement.style.setProperty('--theme-border-color', themeColor);
    }, [themeColor]);

    const startAnimation = () => {
        console.log("Animation started");
        setAnimateArrow(true);

        // Set up smooth scrolling effect
        const scrollDuration = 1000; // Match this duration with the arrow's animation duration (1s in this case)
        const targetScrollPosition = 3250; // Adjust this value based on your layout
        let startTime = null;

        const scrollStep = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            // Calculate the current scroll position based on animation progress
            const scrollPosition = Math.min((progress / scrollDuration) * targetScrollPosition, targetScrollPosition);

            window.scrollTo(0, scrollPosition);

            // Continue scrolling until duration completes
            if (progress < scrollDuration) {
                requestAnimationFrame(scrollStep);
            }
        };

        requestAnimationFrame(scrollStep);

        // Optionally reset the animation after it completes
        setTimeout(() => {
        }, scrollDuration);
    };

    // useEffect to scroll once showPortfolio becomes true
    useEffect(() => {
        if (showPortfolio) {
            const portfolioElement = document.getElementById("portfolio");
            if (portfolioElement) {
                portfolioElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [showPortfolio]); // Dependency array includes showPortfolio


    useEffect(() => {
        // Dynamically set the background color of the body element
        document.body.style.backgroundColor = darkMode ? "#1a1a1a" : "white";
        document.body.style.color = darkMode ? "white" : "black";
    }, [darkMode]);


    return (
        <div
            className="App"
            style={{
                backgroundColor: darkMode ? "#1a1a1a" : "white", // Dark or light background
                minHeight: '100vh',
                color: darkMode ? "white" : "black", // Dark or light text color
            }}
        >
            <div className="content-box">
                <div className="grid-container">
                    {currentPage === 'home' && (
                        <div
                            className={`home-content ${isVisible ? 'animate-box' : ''}`}
                            style={{
                                border: `4px solid ${isHoveredHome ? themeColor : darkMode ? '#555' : '#888'}`,
                                transition: 'border-color 0.3s',
                                backgroundColor: darkMode ? "#1a1a1a" : "white", // Dark or light background
                                color: darkMode ? "white" : "black", // Dark or light text color
                            }}
                            onMouseEnter={() => setIsHoveredHome(true)}
                            onMouseLeave={() => setIsHoveredHome(false)}


                        >
                            <div className="welcome-header">
                                <h3 style={{
                                    color: darkMode ? "white" : "black",
                                }}>
                                    Welcome
                                </h3>
                                <h4
                                    style={{
                                        color: darkMode ? "white" : "black",
                                    }}
                                >
                                    Hi, I'm Oliver, a software developer
                                </h4>
                                <p style={{
                                    color: darkMode ? "white" : "black",
                                }}>
                                    Lately my main focus has been full stack web development
                                </p>
                                <div className="social-icons">
                                    <button
                                        className="social-btn"
                                        style={{
                                            borderColor: darkMode ? 'white' : 'black',
                                            color: darkMode ? 'white' : 'black',
                                            backgroundColor: 'transparent',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => handleMouseEnter(e)}
                                        onMouseLeave={(e) => handleMouseLeave(e)}
                                    >
                                        <a
                                            href="https://github.com/OliverGurcilovNilsson"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{margin: '0 10px',  color: darkMode ? 'white' : 'black', fontSize: '1.5em'}}
                                        >
                                            <FontAwesomeIcon icon={faGithub}/>
                                        </a>
                                    </button>
                                    <button
                                        className="social-btn"
                                        style={{
                                            borderColor: darkMode ? 'white' : 'black',
                                            color: darkMode ? 'white' : 'black',
                                            backgroundColor: 'transparent',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => handleMouseEnter(e)}
                                        onMouseLeave={(e) => handleMouseLeave(e)}
                                    >
                                        <a
                                            href="https://www.linkedin.com/in/oliver-gurcilov-nilsson-1b1911178/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                margin: '0 10px',
                                                color: darkMode ? 'white' : 'black',
                                                fontSize: '1.5em'
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faLinkedin}
                                                style={{color: darkMode ? 'white' : 'black'}} // Adjust the icon color based on mode
                                            />
                                        </a>
                                    </button>
                                    <button
                                        className="social-btn"
                                        onClick={() => {
                                            window.location.href = 'mailto:olivergurcilovnilsson@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Oliver,';
                                        }}
                                        style={{
                                            borderColor: 'white',
                                            color: darkMode ? 'white' : 'black',
                                            padding: '0.8rem 2rem',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Get in touch
                                    </button>
                                </div>
                            </div>
                            <img src={profileImage} alt="Profile" className="profile-picture"/>
                        </div>
                    )}

                    <div
                        className={`grid-box ${isVisible ? 'animate-box' : ''} about-me`}
                        style={{
                            animationDelay: '0.2s',
                            border: `4px solid ${isHoveredAbout ? themeColor : darkMode ? '#555' : '#888'}`,
                            transition: 'border-color 0.3s',
                            backgroundColor: darkMode ? "#1a1a1a" : "white", // Dark or light background
                            color: darkMode ? "white" : "black", // Dark or light text color
                        }}
                        onMouseEnter={() => setIsHoveredAbout(true)}
                        onMouseLeave={() => setIsHoveredAbout(false)}
                    >

                        <h2>About me</h2>
                        <h4>Hi, I'm Oliver, a developer from Sweden</h4>
                        <p>I am passionate about creating captivating user experiences</p>
                        <p>I mainly use the following technologies </p>
                        <li>React</li>
                        <li>Node</li>
                        <li>Javascript</li>
                        <li>Java</li>
                        <li>Python</li>
                        <p>
                            I’m passionate about creating seamless interactions between frontend and backend systems. I love crafting intuitive, responsive interfaces on the frontend while ensuring robust, efficient logic on the backend to support smooth and reliable user experiences.
                        </p>
                    </div>


                    <div className="contact-settings-row">
                        <div
                            className={`grid-box ${isVisible ? 'animate-box' : ''}`}
                            style={{
                                animationDelay: '0.3s',
                                border: `4px solid ${isHoveredContact ? themeColor : darkMode ? '#555' : '#888'}`,
                                transition: 'border-color 0.3s',
                                backgroundColor: darkMode ? "#1a1a1a" : "white", // Dark or light background
                                color: darkMode ? "white" : "black", // Dark or light text color
                            }}
                            onMouseEnter={() => setIsHoveredContact(true)}
                            onMouseLeave={() => setIsHoveredContact(false)}
                        >
                            <h1>Contact me</h1>
                            <p>
                                <a
                                    href="mailto:olivergurcilovnilsson@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Oliver,"
                                    style={{textDecoration: 'none', color: darkMode ? 'white' : '#333'}}
                                >
                                    Oliver.gurcilovnilsson@gmail.com
                                </a>
                            </p>
                            <p>
                                <a
                                    href="https://www.linkedin.com/in/oliver-gurcilov-nilsson-1b1911178/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{textDecoration: 'none', color: 'inherit'}}
                                >
                                    LinkedIn
                                </a>
                            </p>

                            <p>
                                <a
                                    href="https://github.com/OliverGurcilovNilsson"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{textDecoration: 'none', color: 'inherit'}}
                                >
                                    GitHub
                                </a>
                            </p>


                        </div>

                        <div
                            className={`grid-box ${isVisible ? 'animate-box' : ''}`}
                            onClick={startAnimation}
                            style={{
                                animationDelay: '0.6s',
                                border: `4px solid ${isHoveredWork ? themeColor : darkMode ? '#555' : '#888'}`,
                                transition: 'border-color 0.3s',
                                backgroundColor: darkMode ? "#1a1a1a" : "white", // Dark or light background
                                color: darkMode ? "white" : "black", // Dark or light text color
                            }}
                            onMouseEnter={() => setIsHoveredWork(true)}
                            onMouseLeave={() => setIsHoveredWork(false)}
                        >

                            <h1>Work</h1>
                            <div className="work-card-container">
                                {projects.map((project, index) => (
                                    <WorkCard key={index} title={project.title} image={project.image}/>
                                ))}
                            </div>


                        </div>
                    </div>

                    <div className="past-present-future">
                        <div
                            className={`grid-box ${isVisible ? 'animate-box' : ''}`}
                            style={{
                                animationDelay: '0.9s',
                                border: `4px solid ${isHoveredEducation ? themeColor : darkMode ? '#555' : '#888'}`,
                                transition: 'border-color 0.3s',
                                backgroundColor: darkMode ? "#1a1a1a" : "white", // Dark or light background
                                color: darkMode ? "white" : "black", // Dark or light text color
                            }}
                            onMouseEnter={() => setIsHoveredEducation(true)}
                            onMouseLeave={() => setIsHoveredEducation(false)}
                        >
                            <h1>Education</h1>
                            Computer Science - Stockholm university
                        </div>

                        <div
                            id="passion-projects"
                            className={`grid-box ${isVisible ? 'animate-box' : ''}`}
                            style={{
                                animationDelay: '1s',
                                border: `4px solid ${isHoveredProjects ? themeColor : darkMode ? '#555' : '#888'}`,
                                transition: 'border-color 0.3s',
                                backgroundColor: darkMode ? "#1a1a1a" : "white",
                                color: darkMode ? "white" : "black",
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '80px', // Adjust height if needed
                            }}
                            onMouseEnter={() => setIsHoveredProjects(true)}
                            onMouseLeave={() => setIsHoveredProjects(false)}
                        >
                            <Clock/>
                        </div>


                        <div
                            className={`grid-box ${isVisible ? 'animate-box' : ''}`}
                            style={{
                                animationDelay: '1.1s',
                                border: `4px solid ${isHoveredSettings ? themeColor : darkMode ? '#555' : '#888'}`,
                                transition: 'border-color 0.3s',
                                backgroundColor: darkMode ? "#1a1a1a" : "white",
                                color: darkMode ? "white" : "black",
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '1rem',
                            }}
                            onMouseEnter={() => setIsHoveredSettings(true)}
                            onMouseLeave={() => setIsHoveredSettings(false)}
                        >
                            {/* Toggle Button for Dark/Light Mode */}
                            <button
                                className="toggle-btn"
                                onClick={toggleDarkMode}
                                style={{
                                    backgroundColor: "transparent",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: "1.5rem",
                                    color: darkMode ? "yellow" : "#333",
                                    transition: "color 0.3s",
                                }}
                                aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                            >
                                <FontAwesomeIcon icon={darkMode ? faSun : faMoon}/>
                            </button>

                            {/* Color Options */}
                            <div
                                className="color-options"
                                style={{
                                    display: 'flex',
                                    gap: '0.5rem',
                                    backgroundColor: darkMode ? '#333' : 'white', // Dark or light background
                                    padding: '0.5rem', // Optional padding to enhance appearance
                                    borderRadius: '10px' // Optional rounded corners
                                }}
                            >
                                <button className="color-btn" style={{backgroundColor: "#FF5A5F"}}
                                        onClick={() => handleColorChange("#FF5A5F")}></button>
                                <button className="color-btn" style={{backgroundColor: "#FFCC00"}}
                                        onClick={() => handleColorChange("#FFCC00")}></button>
                                <button className="color-btn" style={{backgroundColor: "#4A90E2"}}
                                        onClick={() => handleColorChange("#4A90E2")}></button>
                                <button className="color-btn" style={{backgroundColor: "#9B51E0"}}
                                        onClick={() => handleColorChange("#9B51E0")}></button>
                                <button className="color-btn" style={{backgroundColor: "#7ED321"}}
                                        onClick={() => handleColorChange("#7ED321")}></button>
                            </div>
                        </div>
                    </div>


                    <div
                        className={`footer-box ${isVisible ? 'animate-box' : ''}`}
                        style={{
                            border: `4px solid ${isHoveredFooter ? themeColor : darkMode ? '#555' : '#888'}`,
                            animationDelay: '1.2s',
                            backgroundColor: darkMode ? "#1a1a1a" : "#f0f0f0",
                            color: darkMode ? "white" : "black",
                            textAlign: 'center',
                            padding: '1.4rem',
                            paddingRight: '2.5rem',
                            borderRadius: '8px',
                            marginTop: '-0.5rem',
                            marginLeft: '4vw',
                            width: '100%',
                            maxWidth: '1200px',
                            transition: 'border-color 0.3s'
                        }}
                        onMouseEnter={() => setIsHoveredFooter(true)}
                        onMouseLeave={() => setIsHoveredFooter(false)}
                    >
                        © 2024 · Made with ♥️ using React by Oliver.
                    </div>

                </div>

                {animateArrow && <div className="arrow-animation"></div>} {/* Conditionally renders the arrow */}
                {currentPage === 'education' && <Education/>}
            </div>


            {/* Place Portfolio at the bottom, outside of conditional rendering */}
            <div
                id="portfolio"
                style={{
                    backgroundColor: darkMode ? "#1a1a1a" : "white", // Dark or light background
                    color: darkMode ? "white" : "black",
                    minHeight: '100vh',
                }}
            >
                <Portfolio
                    darkMode={darkMode}
                    themeColor={themeColor}
                    textColor={colors.red} // Explicitly pass text color
                />
            </div>

        </div>

    );
}

export default App;