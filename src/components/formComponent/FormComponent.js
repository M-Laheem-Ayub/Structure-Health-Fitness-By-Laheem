import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';
import './FormComponent.css';

const FormComponent = () => {
    const [verified, setVerified] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
    });
    const [errors, setErrors] = useState({});
    const [recaptchaError, setRecaptchaError] = useState(''); // New state for reCAPTCHA error

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
        <div className="form-container mb-3 pb-4">
            <div className="form-header">Special Trial Offer</div>
            <div className="form-text text-light">
                Sign up to begin your 3 day trial membership for only 3,000 PKR
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={errors.firstName ? 'input-error' : ''}
                    />
                    {errors.firstName && <span className="error-text">{errors.firstName}</span>}
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={errors.lastName ? 'input-error' : ''}
                    />
                    {errors.lastName && <span className="error-text">{errors.lastName}</span>}
                </div>

                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={errors.email ? 'input-error' : ''}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <input
                        type="tel"
                        placeholder="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={errors.phone ? 'input-error' : ''}
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>

                <div className="form-group">
                    <select
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className={errors.location ? 'input-error' : ''}
                    >
                        <option value="">Select Location</option>
                        <option value="lahore-gulberg">Lahore Gulberg</option>
                        <option value="lahore-dha">Lahore DHA</option>
                        <option value="lahore-johartown">Lahore Johar Town</option>
                    </select>
                    {errors.location && <span className="error-text">{errors.location}</span>}
                </div>

                <div className="form-group captcha mb-5 pb-5">
                    <ReCAPTCHA
                        sitekey="6LdFVmkqAAAAAOIxY8c2uZdySGEYM1B8QRaeYAyA"
                        onChange={handleRecaptchaChange}
                    />
                    {recaptchaError && <span className="recapcha-error-text">{recaptchaError}</span>} {/* Show reCAPTCHA error */}
                </div>

                <div className="form-group d-flex justify-content-start align-items-center pt-4 pb-5">
                    <button type="submit" className="submit-btn mt-5" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'SUBMIT'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormComponent;
