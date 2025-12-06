import React, { useState, useEffect } from 'react';
import './AlertBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons';

function AlertBox({ show, onClose, onFormSubmit }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        document.body.style.overflow = show ? 'hidden' : 'unset';
        return () => (document.body.style.overflow = 'unset');
    }, [show]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email) {
            setError('Both name and email are required.');
            return;
        }

        setError('');
        setLoading(true);
        
        try {
            // Call the backend API to send newsletter signup email
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    subject: 'Newsletter Subscription Request',
                    message: `Newsletter subscription request from ${name} (${email}). They want to receive fitness tips and updates.`,
                    captchaToken: 'verified' // Since this is internal form
                })
            });

            const result = await response.json();

            if (result.success) {
                setSuccess(true);
                setLoading(false);
                // Close the popup after showing success message
                setTimeout(() => {
                    onFormSubmit();
                    onClose();
                    setSuccess(false);
                    setName('');
                    setEmail('');
                }, 2000);
            } else {
                setError('Error: ' + result.message);
                setLoading(false);
            }
        } catch (error) {
            console.error('Error sending newsletter signup:', error);
            setError('Network error. Please try again later.');
            setLoading(false);
        }
    };

    if (!show) return null;

    return (
        <div className="custom-alert">
            <div className="cl">
                <div className="alert-content">
                    <div className="row bg-transparent justify-content-end">
                        <div className="col-1 d-flex justify-content-end">
                            <button className="close-button" onClick={onClose}>
                                <FontAwesomeIcon className="cross-icon" icon={faTimes} />
                            </button>
                        </div>
                    </div>
                    <div className="row my-bg-light">
                        <div className="col-12 col-md-6 overflow-hidden d-flex justify-content-center align-items-center">
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/alert_img.webp`}
                                alt="Alert"
                                className="alert-image"
                            />
                        </div>
                        <div className="col-12 col-md-6 pt-0 pt-md-5 mt-md-5 mt-0">
                            <div className="ps-5 text-start alert-heading">
                                ARE YOU EXCITED?
                            </div>
                            <div className="ps-5 pt-2 text-start alert-bold-text">
                                Sign Up For Our Insider Fitness Tips!
                            </div>
                            <div className="ps-5 pt-2 text-start alert-text">
                                Get the latest strategies and techniques from our performance coaches at Structure Health & Fitness direct to your inbox. Own your potential!
                            </div>
                            <form className="ps-4 ms-2 pe-4 pt-4 d-flex flex-column align-items-start" onSubmit={handleSubmit}>
                                <div className="input-container">
                                    <input
                                        className="alert-input"
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="input-container">
                                    <input
                                        className="alert-input"
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="input-btn border-0" disabled={loading}>
                                    {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Sign Up Now'}
                                </button>
                                {error && <div className="error-message">{error}</div>}
                                {success && <div className="success-message">✅ Successfully subscribed to our fitness newsletter!</div>}
                            </form>
                        </div>
                    </div>
                    <button className="close-button-2" onClick={onClose}>
                        No thanks, I'm not interested!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AlertBox;
