import React, { useState } from 'react';
import './MembershipMainSec.css';
import { useNavigate } from 'react-router-dom';

const MembershipMainSec = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    occupation: '',
    country: 'Pakistan',
    phone: '',
    branch: '',
    weight: '',
    heightFeet: '',
    heightInches: '',
    bmi: '',
    bmiCategory: '',
    fitnessGoals: [],
    smoking: '',
    alcohol: '',
    interestedInSession: '',
    activityLevel: '',
    eatingHabits: '',
    commitmentLevel: 50,
    comments: '',
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error on change
  };

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: prev[name].includes(value)
        ? prev[name].filter((item) => item !== value)
        : [...prev[name], value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Input validation
    const newErrors = {};
    if (!formData.name) newErrors.name = 'This field is required';
    if (!formData.email) newErrors.email = 'This field is required';
    if (!formData.gender) newErrors.gender = 'This field is required';
    if (!formData.occupation) newErrors.occupation = 'This field is required';
    if (!formData.phone) newErrors.phone = 'This field is required';
    if (!formData.branch) newErrors.branch = 'This field is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    console.log('Form Submitted:', formData);

    // Simulate form submission
    setTimeout(() => {
      // After submission, navigate to the thank-you page
      navigate('/thank-you'); // Use navigate instead of window.location.href
    }, 2000); // Redirect after 2 seconds
  };

  return (
    <div className='fitness-form-bg'>
      <div className='container m-0'>
        <div className='row pt-5 '>
          <div className='col-md-6 col-12 m-0'>
            <form className="fitness-form text-start pt-5" onSubmit={handleSubmit}>
              <label className=''>Your Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}

              <label>Your Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}

              <label>Gender:</label>
              <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <p className="error">{errors.gender}</p>}

              <label>What is Your Occupation?</label>
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
              />
              {errors.occupation && <p className="error">{errors.occupation}</p>}

              <label>Country:</label>
              <input type="text" name="country" value="Pakistan" disabled />

              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}

              <label>Your Branch:</label>
              <select name="branch" value={formData.branch} onChange={handleChange}>
                <option value="">--Please choose an option--</option>
                <option value="Branch 1">Gulberg</option>
                <option value="Branch 2">DHA</option>
                <option value="Branch 3">Johar Town</option>
              </select>
              {errors.branch && <p className="error">{errors.branch}</p>}

              <div className="height-weight-section">
                <label>Weight (kg):</label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                />

                <label>Height (feet):</label>
                <input
                  type="number"
                  name="heightFeet"
                  value={formData.heightFeet}
                  onChange={handleChange}
                />

                <label>Height (inches):</label>
                <input
                  type="number"
                  name="heightInches"
                  value={formData.heightInches}
                  onChange={handleChange}
                />
              </div>

              <label>BMI:</label>
              <input
                type="text"
                name="bmi"
                value={formData.bmi}
                onChange={handleChange}
              />

              <label>BMI Category:</label>
              <input
                type="text"
                name="bmiCategory"
                value={formData.bmiCategory}
                onChange={handleChange}
              />

              <label>Fitness Goals:</label>
              <div className="checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="fitnessGoals"
                    value="weight loss"
                    onChange={handleCheckboxChange}
                  />
                  Weight Loss
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="fitnessGoals"
                    value="muscle gain"
                    onChange={handleCheckboxChange}
                  />
                  Muscle Gain
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="fitnessGoals"
                    value="overall health"
                    onChange={handleCheckboxChange}
                  />
                  Overall Health
                </label>
              </div>

              <label>Do You Smoke?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="smoking"
                    value="yes"
                    onChange={handleChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="smoking"
                    value="no"
                    onChange={handleChange}
                  />
                  No
                </label>
                <label>
                  <input
                    type="radio"
                    name="smoking"
                    value="sometimes"
                    onChange={handleChange}
                  />
                  Sometimes
                </label>
              </div>

              <label>Do You Consume Alcohol?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="alcohol"
                    value="yes"
                    onChange={handleChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="alcohol"
                    value="no"
                    onChange={handleChange}
                  />
                  No
                </label>
                <label>
                  <input
                    type="radio"
                    name="alcohol"
                    value="sometimes"
                    onChange={handleChange}
                  />
                  Sometimes
                </label>
              </div>

              <label>Commitment Level (0-100):</label>
              <input
                type="range"
                name="commitmentLevel"
                min="0"
                max="100"
                value={formData.commitmentLevel}
                onChange={handleChange}
              />
              <p>Current Level: {formData.commitmentLevel}</p>

              <div className="form-group d-flex justify-content-start align-items-center pt-4 pb-5">
                <button type="submit" className="submit-btn mt-5" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'SUBMIT'}
                </button>
              </div>
            </form>
          </div>
          <div className='col-md-6  col-12  mt-5 pt-5'>
            <img className=' bmi-img bg-light' src={`${process.env.PUBLIC_URL}/assets/images/bmi.webp`} alt="BMI" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipMainSec;
