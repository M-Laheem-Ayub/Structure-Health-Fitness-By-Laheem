import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./KeepInTouchSec.css"; // Import CSS file
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function KeepInTouchSec() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        branch: "",
        message: ""
    });

    const [verified, setVerified] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [recaptchaError, setRecaptchaError] = useState(''); // New state for reCAPTCHA error
    const [errors, setErrors] = useState({}); // Create an object for error messages
    const navigate = useNavigate(); // Initialize navigate

    const handleRecaptchaChange = (value) => {
        setVerified(true);
        setRecaptchaError(''); // Clear reCAPTCHA error when verified
    };
    const validateFields = () => {
        const newErrors = {};
        Object.keys(formData).forEach((field) => {
            if (!formData[field]) {
                newErrors[field] = 'This field is required';
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear error for current field
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateFields();
        if (!isValid) return; // Stop submission if fields are invalid

        if (verified) {
            setIsSubmitting(true);
            setTimeout(() => {
                navigate('/thank-you'); // Redirect to thank-you page
            }, 2000); // 2 seconds delay
        } else {
            setRecaptchaError('Google reCAPTCHA verification failed, please try again later'); // Set reCAPTCHA error
        }
    };

    return (
        <div className="contact-form-container d-flex flex-column">
            <div className="contact-box-title pt-4">KEEP IN TOUCH!</div>
            <div className="row m-0 pt-5">
                <div className="col-12 col-md-9 pt-4 ps-0 ps-xl-5">
                    <form className="ps-xl-4 p-0 pb-5" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        {errors.name && <div className='Keep-touch-error-message'>{errors.name}</div>}
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && <div className='Keep-touch-error-message'>{errors.email}</div>}
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                        {errors.phone && <div className='Keep-touch-error-message'>{errors.phone}</div>}
                        <select
                            name="branch"
                            value={formData.branch}
                            onChange={handleInputChange}
                        >
                            <option value="" disabled>Select Branch</option>
                            <option value="branch1">LAHORE GULBERG</option>
                            <option value="branch2">LAHORE DHA</option>
                            <option value="branch3">LAHORE JOAR TOWN</option>
                        </select>
                        {errors.branch && <div className='Keep-touch-error-message'>{errors.branch}</div>}
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                        {errors.message && <div className='Keep-touch-error-message'>{errors.message}</div>}
                        <ReCAPTCHA
                            className='py-3'
                            sitekey="6LdFVmkqAAAAAOIxY8c2uZdySGEYM1B8QRaeYAyA"
                            onChange={handleRecaptchaChange}
                        />
                        {recaptchaError && <span className="recapcha-error-text">{recaptchaError}</span>} {/* Show reCAPTCHA error */}
                        <div className="form-group d-flex justify-content-start align-items-center pt-4 pb-5">
                            <button type="submit" className="submit-btn mt-5" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'SUBMIT'}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-12 col-md-3">
                    <div className="contact-info">
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                            <p>39-A Zafar Ali Road, Lahore, Pakistan</p>
                        </div>
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon" />
                            <p>03017417415</p>
                            <p>03219638524</p>
                            <p>03001234567</p>
                        </div>
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                            <p>info@structure.com.pk</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KeepInTouchSec;
