require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://localhost:3000'
  ],
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.'
  }
});
app.use('/api/', limiter);

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'Laheem.ayub.dev@gmail.com',
    pass: process.env.GMAIL_PASS || 'rwos rpqs nxkj goqs'
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Email validation function
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation function
const isValidPhone = (phone) => {
  const phoneRegex = /^[+]?[0-9\s\-()]{10,}$/;
  return phoneRegex.test(phone);
};

// Send email function
const sendContactEmail = async (formData) => {
  const mailOptions = {
    from: `"${process.env.FROM_NAME || 'Structure Health & Fitness Gym Website'}" <${process.env.GMAIL_USER || 'Laheem.ayub.dev@gmail.com'}>`,
    to: process.env.GMAIL_USER || 'Laheem.ayub.dev@gmail.com',
    replyTo: formData.email, // This enables reply functionality
    subject: `New Contact Form Submission: ${formData.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <div style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 20px; border-radius: 10px 10px 0 0; color: white;">
          <h2 style="margin: 0; color: #ffd200; font-size: 24px;">🏋️ New Contact Form Submission</h2>
          <p style="margin: 10px 0 0 0; color: #cccccc;">Structure Health & Fitness</p>
        </div>
        
        <div style="padding: 20px; background: #f9f9f9;">
          <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="margin: 0 0 10px 0; color: #333; font-size: 18px;">📋 Contact Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #333;">${formData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${formData.email}" style="color: #007bff; text-decoration: none;">${formData.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Phone:</td>
                <td style="padding: 8px 0; color: #333;">${formData.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Subject:</td>
                <td style="padding: 8px 0; color: #333;">${formData.subject}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Date:</td>
                <td style="padding: 8px 0; color: #333;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 8px;">
            <h3 style="margin: 0 0 10px 0; color: #333; font-size: 18px;">💬 Message</h3>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; border-left: 4px solid #ffd200;">
              <p style="margin: 0; line-height: 1.6; color: #333;">${formData.message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
        </div>
        
        <div style="background: #1a1a1a; padding: 15px; border-radius: 0 0 10px 10px; text-align: center;">
          <p style="margin: 0; color: #cccccc; font-size: 12px;">This email was sent from the Structure Health & Fitness website contact form.</p>
          <p style="margin: 5px 0 0 0; color: #cccccc; font-size: 12px;">Reply to this email to respond to the customer directly.</p>
        </div>
      </div>
    `,
    text: `
New Contact Form Submission - Structure Health & Fitness

Contact Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Date: ${new Date().toLocaleString()}

Message:
${formData.message}

---
This email was sent from the Structure Health & Fitness website contact form.
Reply to this email to respond to the customer directly.
    `
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

// Contact form API endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message, captchaToken } = req.body;

    // Validation
    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    if (!isValidPhone(phone)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid phone number format'
      });
    }

    if (message.length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Message must be at least 10 characters long'
      });
    }

    // Simple reCAPTCHA validation (in production, verify with Google)
    if (!captchaToken) {
      return res.status(400).json({
        success: false,
        message: 'reCAPTCHA verification required'
      });
    }

    // Prepare form data
    const formData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      subject: subject.trim(),
      message: message.trim()
    };

    // Send email
    await sendContactEmail(formData);

    // Success response
    res.status(200).json({
      success: true,
      message: 'Email sent successfully. We will get back to you soon!'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Structure Health & Fitness Email Server is running',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// 404 handler
app.use((req, res) => {  // <-- Sirf '*' hataya hai
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Start server (Only for local development)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export for Vercel
module.exports = app;