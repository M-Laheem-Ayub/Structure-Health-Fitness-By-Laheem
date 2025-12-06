import React, { useState, useEffect } from 'react';
import './MembershipMainSec.css';
import { useNavigate } from 'react-router-dom';
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

    if (name === 'weight' || name === 'heightFeet' || name === 'heightInches') {
      setErrors((prev) => ({ ...prev, measurements: '' }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: prev[name].includes(value)
        ? prev[name].filter((item) => item !== value)
        : [...prev[name], value],
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  useEffect(() => {
    const { weight, heightFeet, heightInches } = formData;
    if (weight && heightFeet && heightInches) {
      const heightInMeters = (parseInt(heightFeet) * 0.3048) + (parseInt(heightInches) * 0.0254);
      const bmiValue = parseFloat((weight / (heightInMeters ** 2)).toFixed(2));
      let category = '';
      if (bmiValue < 18.5) category = 'Underweight';
      else if (bmiValue < 25) category = 'Normal';
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

    const missingMeasurements = [];
    if (!formData.weight && formData.weight !== 0 && formData.weight !== "0") missingMeasurements.push('Weight');
    if (!formData.heightFeet && formData.heightFeet !== 0 && formData.heightFeet !== "0") missingMeasurements.push('Height (feet)');
    if (!formData.heightInches && formData.heightInches !== 0 && formData.heightInches !== "0") missingMeasurements.push('Height (inches)');

    if (missingMeasurements.length > 0) {
      const msg =
        missingMeasurements.length === 3
          ? 'Please enter weight and height (feet & inches).'
          : `Please enter: ${missingMeasurements.join(', ')}.`;
      newErrors.measurements = msg;
    }

    if (formData.fitnessGoals.length === 0) newErrors.fitnessGoals = 'Please select at least one fitness goal';
    if (!formData.smoking) newErrors.smoking = 'Please select smoking status';
    if (!formData.alcohol) newErrors.alcohol = 'Please select alcohol consumption status';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
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
          captchaToken: 'verified'
        })
      });

      const result = await response.json();

      if (result.success) {
        setTimeout(() => {
          navigate('/thank-you');
        }, 1000);
      } else {
        alert('Error: ' + result.message);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Error sending membership application:', error);
      alert('Network error. Please check if the email server is running.');
      setIsSubmitting(false);
    }
  };

  const getChartData = () => {
    const rawBmi = parseFloat(formData.bmi) || 0;
    const cat = formData.bmiCategory;
    
    return [
      { name: 'Under', bmi: cat === 'Underweight' ? rawBmi : 0 },      
      { name: 'Normal', bmi: cat === 'Normal' ? rawBmi : 0 },        
      { name: 'Over', bmi: cat === 'Overweight' ? rawBmi : 0 },       
      { name: 'Obese', bmi: cat === 'Obese' ? rawBmi : 0 },         
    ];
  };

  const chartData = getChartData();

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
              
              <label>Your Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
              {errors.name && <p className="error">{errors.name}</p>}
              
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
                <label>Height (feet):</label>
                <input type="number" name="heightFeet" value={formData.heightFeet} onChange={handleChange} />
                <label id='tl'>Height (inches):</label>
                <input type="number" name="heightInches" value={formData.heightInches} onChange={handleChange} />
                
                {errors.measurements && <p className="error">{errors.measurements}</p>}
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
