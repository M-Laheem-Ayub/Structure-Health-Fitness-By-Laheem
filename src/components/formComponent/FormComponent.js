// FormComponent.js
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './FormComponent.css';

const FormComponent = () => {
    const [verified, setVerified] = useState(false);

    const handleRecaptchaChange = (value) => {
        console.log('Captcha value:', value);
        setVerified(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (verified) {
            alert('Form submitted successfully!');
        } else {
            alert('Please complete the reCAPTCHA.');
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
                    <input type="text" placeholder="First Name" required />
                </div>

                <div className="form-group">
                    <input type="text" placeholder="Last Name" required />
                </div>

                <div className="form-group">
                    <input type="email" placeholder="Email" required />
                </div>

                <div className="form-group">
                    <input type="tel" placeholder="Phone" required />
                </div>

                <div className="form-group">
                    <select required>
                        <option value="">Lahore Gulberg</option>
                        <option value="lahore-dha">Lahore DHA</option>
                        <option value="lahore-johartown">Lahore Johar Town</option>
                    </select>
                </div>

                <div className="form-group captcha mb-5 pb-5">
                    <ReCAPTCHA
                        sitekey="6LdFVmkqAAAAAOIxY8c2uZdySGEYM1B8QRaeYAyA"
                        onChange={handleRecaptchaChange}
                    />
                </div>

                <div className="form-group d-flex justify-content-start align-items-center pt-4 pb-5">
                    <button type="submit" className="submit-btn mt-4" disabled={!verified}>
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormComponent;
