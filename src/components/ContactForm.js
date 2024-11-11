import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './ContactForm.css';

const ContactForm = ({ closeForm }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! Your message has been sent.');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        closeForm();
    };

    // The contact form modal content
    const modalContent = (
        <div className="contact-form-overlay">
            <div className="contact-form-container">
                <button className="close-btn" onClick={closeForm}>&times;</button>
                <h2>Get in Touch</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                    />

                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />

                    <label>Subject:</label>
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Enter subject"
                        required
                    />

                    <label>Message:</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="5"
                        placeholder="Enter your message"
                        required
                    />

                    <button type="submit" className="submit-btn">Send</button>
                </form>
            </div>
        </div>
    );

    // Render using React Portal
    return ReactDOM.createPortal(modalContent, document.body);
};

export default ContactForm;
