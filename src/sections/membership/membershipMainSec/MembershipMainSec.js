import React, { useState, useEffect } from 'react';
import './MembershipMainSec.css';
import { useNavigate } from 'react-router-dom';
// Graph ke liye imports
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

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
    commitmentLevel: 1,
    comments: '',
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
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

  useEffect(() => {
    const { weight, heightFeet, heightInches } = formData;
    if (weight && heightFeet && heightInches) {
      const heightInMeters = (parseInt(heightFeet) * 0.3048) + (parseInt(heightInches) * 0.0254);
      const bmiValue = parseFloat((weight / (heightInMeters ** 2)).toFixed(2));
      let category = '';
      if (bmiValue < 18.5) category = 'Underweight';
      else if (bmiValue < 25) category = 'Normal'; // Your logic: Normal < 25
      else if (bmiValue < 30) category = 'Overweight';
      else category = 'Obese';
      setFormData(prev => ({ ...prev, bmi: bmiValue, bmiCategory: category }));
    }
  }, [formData.weight, formData.heightFeet, formData.heightInches]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = {};
    if (!formData.name) newErrors.name = 'This field is required';
    if (!formData.email) newErrors.email = 'This field is required';
    if (!formData.gender) newErrors.gender = 'This field is required';
    if (!formData.phone) newErrors.phone = 'This field is required';
    if (!formData.branch) newErrors.branch = 'This field is required';
    // Physical measurements are required
    if (!formData.weight) newErrors.weight = 'Weight is required';
    if (!formData.heightFeet) newErrors.heightFeet = 'Height (feet) is required';
    if (!formData.heightInches) newErrors.heightInches = 'Height (inches) is required';
    // Fitness profile is required
    if (formData.fitnessGoals.length === 0) newErrors.fitnessGoals = 'Please select at least one fitness goal';
    if (!formData.smoking) newErrors.smoking = 'Please select smoking status';
    if (!formData.alcohol) newErrors.alcohol = 'Please select alcohol consumption status';
    // Occupation is optional - user can leave it blank

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Create detailed message from form data
      const fitnessGoalsText = formData.fitnessGoals.length > 0 ? formData.fitnessGoals.join(', ') : 'Not specified';
      
      const message = `
GYM MEMBERSHIP APPLICATION - DETAILED PROFILE

Personal Information:
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Gender: ${formData.gender}
• Occupation: ${formData.occupation}
• Country: ${formData.country}
• Preferred Branch: ${formData.branch}

Physical Information:
• Weight: ${formData.weight} kg
• Height: ${formData.heightFeet}'${formData.heightInches}"
• BMI: ${formData.bmi} (${formData.bmiCategory})

Fitness Profile:
• Fitness Goals: ${fitnessGoalsText}
• Smoking: ${formData.smoking || 'Not specified'}
• Alcohol Consumption: ${formData.alcohol || 'Not specified'}
• Commitment Level: ${formData.commitmentLevel}/10
• Comments: ${formData.comments || 'No additional comments'}

---
This is a comprehensive gym membership application submitted through the website.
Please review the details and contact the applicant for membership planning.
      `;

      // Call the backend API to send email
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: 'Gym Membership Application - Comprehensive Profile',
          message: message,
          captchaToken: 'verified' // Internal form
        })
      });

      const result = await response.json();

      if (result.success) {
        // Success - redirect to thank-you page
        setTimeout(() => {
          navigate('/thank-you');
        }, 1000);
      } else {
        // Error - show error message
        alert('Error: ' + result.message);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Error sending membership application:', error);
      alert('Network error. Please check if the email server is running.');
      setIsSubmitting(false);
    }
  };

  // --- Graph Data Logic (Updated Names) ---
  const getChartData = () => {
    const rawBmi = parseFloat(formData.bmi) || 0;
    const cat = formData.bmiCategory;
    
    // Labels short kar diye hain taake mobile pe overlap na ho
    return [
      { name: 'Under', bmi: cat === 'Underweight' ? rawBmi : 0 },      // Short for Underweight
      { name: 'Normal', bmi: cat === 'Normal' ? rawBmi : 0 },          // Short for Normal weight
      { name: 'Over', bmi: cat === 'Overweight' ? rawBmi : 0 },        // Short for Overweight
      { name: 'Obese', bmi: cat === 'Obese' ? rawBmi : 0 },            // Short for Obesity
    ];
  };

  const chartData = getChartData(); // Ye line pehle se hogi

  // --- Graph Component (Reusable) ---
  const renderBmiChart = () => (
    <div className='bmi-visual'>
      <h3 className="text-center text-warning mb-3 d-none d-md-block">BMI Graph</h3>
      <div className="chart-container-white graph-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 10, left: -20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="1 1" vertical={true} horizontal={true} stroke="#e0e0e0" />
            <XAxis 
              dataKey="name" 
              tickLine={false} 
              axisLine={{ stroke: '#e0e0e0' }} 
              tick={{ fill: '#666', fontSize: 10, fontWeight: 'bold' }} 
              interval={0} 
            />
            <YAxis 
              domain={[0, 40]} 
              axisLine={{ stroke: '#e0e0e0' }} 
              tickLine={false}
              tick={{ fill: '#666', fontSize: 12 }}
            />
            <Tooltip cursor={{fill: 'transparent'}} />
            <Legend verticalAlign="top" iconType="rect" wrapperStyle={{ fontSize: '12px' }} />
            <Bar 
              dataKey="bmi" 
              name="BMI" 
              fill="rgba(173, 216, 230, 0.5)" 
              stroke="rgba(135, 206, 235, 1)" 
              barSize={50} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {formData.bmi && (
        <div className='bmi-indicator text-center mt-3 d-none d-md-block'>
          <p style={{color:'#ffd200', fontWeight:'bold', fontSize:'1.2em'}}>
            Your BMI: {formData.bmi} - {formData.bmiCategory}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div className='fitness-form-bg'>
      <div className='container m-0'>
        <div className='row pt-5 '>
          <div className='col-md-6 col-12 m-0'>
            <form className="fitness-form text-start pt-5" onSubmit={handleSubmit}>
              
              {/* ... Baki uper k fields same rahenge ... */}
              <label>Your Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
              {errors.name && <p className="error">{errors.name}</p>}
              
              {/* ... Email, Gender, Occupation, etc ... */}
              <label>Your Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
              {errors.email && <p className="error">{errors.email}</p>}

              <label>Gender:</label>
              <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              <label>What is Your Occupation?</label>
              <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} />

              <label>Country:</label>
              <input type="text" name="country" value="Pakistan" disabled />

              <label>Phone:</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
              {errors.phone && <p className="error">{errors.phone}</p>}

              <label>Your Branch:</label>
              <select name="branch" value={formData.branch} onChange={handleChange}>
                <option value="">--Please choose an option--</option>
                <option value="Branch 1">Gulberg</option>
                <option value="Branch 2">DHA</option>
                <option value="Branch 3">Johar Town</option>
              </select>

              <div className="height-weight-section">
                <label id='fl'>Weight (kg):</label>
                <input type="number" name="weight" value={formData.weight} onChange={handleChange} />
                {errors.weight && <p className="error">{errors.weight}</p>}
                <label>Height (feet):</label>
                <input type="number" name="heightFeet" value={formData.heightFeet} onChange={handleChange} />
                {errors.heightFeet && <p className="error">{errors.heightFeet}</p>}
                <label id='tl'>Height (inches):</label>
                <input type="number" name="heightInches" value={formData.heightInches} onChange={handleChange} />
                {errors.heightInches && <p className="error">{errors.heightInches}</p>}
              </div>

              <label>BMI:</label>
              <input type="text" name="bmi" value={formData.bmi} readOnly />
              
              <label>BMI Category:</label>
              <input  type="text" name="bmiCategory" value={formData.bmiCategory} readOnly />

              <div className="d-block d-md-none ">
                 {renderBmiChart()}
              </div>

              <label>Fitness Goals:</label>
              <div className="checkbox-group">
                <label><input type="checkbox" name="fitnessGoals" value="weight loss" onChange={handleCheckboxChange} /> Weight Loss</label>
                <label><input type="checkbox" name="fitnessGoals" value="muscle gain" onChange={handleCheckboxChange} /> Muscle Gain</label>
                <label><input type="checkbox" name="fitnessGoals" value="overall health" onChange={handleCheckboxChange} /> Overall Health</label>
              </div>
              {errors.fitnessGoals && <p className="error">{errors.fitnessGoals}</p>}

              <label>Do You Smoke?</label>
              <div className="radio-group">
                <label><input type="radio" name="smoking" value="yes" onChange={handleChange} /> Yes</label>
                <label><input type="radio" name="smoking" value="no" onChange={handleChange} /> No</label>
                <label><input type="radio" name="smoking" value="sometimes" onChange={handleChange} /> Sometimes</label>
              </div>
              {errors.smoking && <p className="error">{errors.smoking}</p>}

              <label>Do You Consume Alcohol?</label>
              <div className="radio-group">
                <label><input type="radio" name="alcohol" value="yes" onChange={handleChange} /> Yes</label>
                <label><input type="radio" name="alcohol" value="no" onChange={handleChange} /> No</label>
                <label><input type="radio" name="alcohol" value="sometimes" onChange={handleChange} /> Sometimes</label>
              </div>
              {errors.alcohol && <p className="error">{errors.alcohol}</p>}

              <label>Commitment Level (1-10):</label>
              <input type="range" name="commitmentLevel" min="1" max="10" value={formData.commitmentLevel} onChange={handleChange} />
              <p>Current Level: {formData.commitmentLevel}</p>

              <div className="form-group d-flex justify-content-start align-items-center pt-4 pb-5">
                <button type="submit" className="submit-btn mt-5" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'SUBMIT'}
                </button>
              </div>
            </form>
          </div>
          <div className='col-md-6 col-12 mt-5 pt-5 d-none d-md-block'>
             {renderBmiChart()}
          </div>

        </div>
      </div>
    </div>
  );
};

export default MembershipMainSec;