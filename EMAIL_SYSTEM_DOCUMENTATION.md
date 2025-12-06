# Structure Health & Fitness Gym Website - Complete Email System Documentation

## Overview
The website now includes a complete email system using React (frontend) + Node.js + Express + Nodemailer (backend) for handling multiple types of form submissions and inquiries.

## System Architecture

### Frontend Components
- **KeepInTouchSec.js**: Main contact form for branch inquiries
- **FormComponent.js**: Trial membership form for 3-day trial offers
- **AlertBox.jsx**: Newsletter signup popup for fitness tips subscription
- **MembershipMainSec.js**: Comprehensive gym membership application form

### Backend Server
- **Location**: `/server` directory
- **Port**: 3001
- **API Endpoint**: `http://localhost:3001/api/contact`

## Email Configuration

### Gmail SMTP Settings
- **Email**: Laheem.ayub.dev@gmail.com
- **Password**: rwos rpqs nxkj goqs (16-digit app password)
- **Service**: Gmail SMTP
- **Security**: TLS/SSL encryption

### Environment Variables (.env file)
```env
# Email Server Configuration
PORT=3001

# Gmail Configuration
GMAIL_USER=Laheem.ayub.dev@gmail.com
GMAIL_PASS=rwos rpqs nxkj goqs

# Server Configuration
NODE_ENV=development

# CORS Origins
CORS_ORIGINS=http://localhost:3000,http://localhost:3001

# Email Templates
FROM_NAME=Structure Health & Fitness Gym Website
```

## API Endpoints

### POST /api/contact
Handles all contact form submissions, trial membership inquiries, and newsletter signups.

**Request Body:**
```json
{
  "name": "Full Name",
  "email": "user@example.com",
  "phone": "1234567890",
  "subject": "Gym Membership Inquiry",
  "message": "Message content...",
  "captchaToken": "verified"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Email sent successfully. We will get back to you soon!"
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "message": "Error description"
}
```

### GET /api/health
Health check endpoint for monitoring server status.

## Form Integration Details

### 1. KeepInTouchSec Component
**Location**: `src/sections/our branches/keep in touch sec/KeepInTouchSec.js`

**Purpose**: Main contact form for gym branch inquiries

**Fields**:
- Name (text input)
- Email (email input)
- Phone (text input)
- Branch (select dropdown: Lahore Gulberg, Lahore DHA, Lahore Johar Town)
- Subject (select dropdown with predefined options)
- Message (textarea)
- reCAPTCHA verification

**API Integration**:
- Sends data to `http://localhost:3001/api/contact`
- Handles async form submission
- Provides loading states and error handling
- Redirects to thank-you page on success
- Success email with all contact details

### 2. FormComponent (Trial Membership)
**Location**: `src/components/formComponent/FormComponent.js`

**Purpose**: 3-day trial membership form

**Fields**:
- First Name (text input)
- Last Name (text input)
- Email (email input)
- Phone (tel input)
- Location (select dropdown)
- Pre-filled subject: "3-Day Trial Membership Inquiry"
- Pre-filled message with offer details

**API Integration**:
- Combines firstName + lastName into full name
- Sends enhanced message with location and contact details
- Same error handling and success flow as KeepInTouchSec
- Specialized email for trial membership inquiries

### 3. AlertBox (Newsletter Signup)
**Location**: `src/components/alertBox/AlertBox.jsx`

**Purpose**: Fitness newsletter subscription popup

**Fields**:
- Name (text input)
- Email (email input)

**API Integration**:
- Subject: "Newsletter Subscription Request"
- Message: "Newsletter subscription request from [Name] ([Email]). They want to receive fitness tips and updates."
- Provides success confirmation message
- Auto-closes after successful subscription
- Simple validation and error handling

**Features**:
- Success message display with ✅ checkmark
- Automatic form reset after successful submission
- Popup auto-closes after 2 seconds of success

### 4. MembershipMainSec (Gym Membership Application)
**Location**: `src/sections/membership/membershipMainSec/MembershipMainSec.js`

**Purpose**: Comprehensive gym membership application with detailed profile

**Fields**:
- Personal: Name, Email, Phone, Gender, Occupation, Country
- Physical: Weight, Height (feet/inches), BMI (auto-calculated)
- Fitness: Goals (weight loss, muscle gain, overall health)
- Lifestyle: Smoking, Alcohol consumption, Commitment level (1-10)
- Comments section
- Branch selection

**API Integration**:
- Subject: "Gym Membership Application - Comprehensive Profile"
- Detailed formatted message with all profile information
- Auto-calculate BMI and category
- Comprehensive error validation
- Professional formatted email for membership review

**Features**:
- Real-time BMI calculation and visualization with charts
- Multiple validation levels (client and server)
- Comprehensive profile data formatting
- Professional membership application processing

## Security Features

### Backend Security
- **Helmet.js**: Security headers
- **CORS**: Configured for specific origins
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **Input Validation**: Email and phone- **reCAPTCHA**: Frontend verification required (where number format validation
 implemented)

### Email Security
- **Gmail App Password**: 16-character app-specific password
- **TLS Encryption**: Secure email transmission
- **Reply-to Header**: Enables direct replies to customers

## Email Template Features

### Professional HTML Email Design
- **Gym-branded header** with dark theme and yellow accents
- **Contact details table** with proper formatting
- **Message section** with highlighted styling
- **Professional footer** with company branding

### Reply Functionality
- **replyTo field**: Set to user's email address
- **One-click reply**: Recipients can reply directly to customer
- **Email tracking**: Message ID logging for debugging

### Subject Line Categories
- "Gym Membership Inquiry"
- "Personal Training"
- "Group Classes"
- "Nutrition Consultation"
- "General Inquiry"
- "Partnership Opportunity"
- "3-Day Trial Membership Inquiry"
- "Newsletter Subscription Request"
- "Gym Membership Application - Comprehensive Profile"

## Running the System

### 1. Start Backend Server
```bash
cd server
npm install
npm start
```
**Server runs on**: http://localhost:3001

### 2. Start Frontend
```bash
npm start
```
**Frontend runs on**: http://localhost:3000

### 3. Test All Email Forms
1. **KeepInTouchSec**: Navigate to Our Branches page → Fill form → Submit
2. **FormComponent**: On Home page → Fill trial membership form → Submit
3. **AlertBox**: Wait for popup or trigger manually → Fill newsletter signup → Submit
4. Check emails at Laheem.ayub.dev@gmail.com

## Monitoring & Debugging

### Server Logs
Check console for:
- Email sending confirmations with message IDs
- Error messages with detailed descriptions
- API request logs and response codes
- Newsletter subscription confirmations

### Success Indicators
- **Frontend**: Success messages, thank-you page redirects, form reset
- **Backend**: Email sent successfully logs with Gmail message IDs
- **Gmail**: Emails delivered to Laheem.ayub.dev@gmail.com

### Common Issues & Solutions
1. **Gmail Authentication Error**: Verify app password is correct and active
2. **CORS Error**: Check origin configuration in .env file
3. **Network Error**: Ensure both frontend (port 3000) and backend (port 3001) are running
4. **reCAPTCHA Error**: Verify site key configuration in form components
5. **Email Not Received**: Check Gmail inbox and spam folder

## Customization Options

### Adding New Form Types
1. Create new React component with form fields
2. Implement API call to `http://localhost:3001/api/contact`
3. Add appropriate subject line and message formatting
4. Include success/error handling

### Modifying Email Templates
1. Edit the `html` and `text` sections in `sendContactEmail()` function
2. Customize styling and branding for different form types
3. Add conditional formatting based on subject or form type

### Updating Form Fields
1. Modify frontend component validation
2. Update API request body structure
3. Enhance email template to display new fields
4. Adjust backend validation rules if needed

## File Structure
```
web-acm-project-by-laheem-ayub/
├── server/
│   ├── server.js           # Express email server
│   ├── package.json        # Backend dependencies
│   └── .env               # Environment variables
├── src/
│   ├── components/
│   │   ├── formComponent/
│   │   │   └── FormComponent.js          # Trial membership form
│   │   └── alertBox/
│   │       └── AlertBox.jsx              # Newsletter signup
│   └── sections/
│       ├── membership/
│       │   └── membershipMainSec/
│       │       └── MembershipMainSec.js  # Gym membership application
│       └── our branches/
│           └── keep in touch sec/
│               └── KeepInTouchSec.js     # Main contact form
├── EMAIL_SYSTEM_DOCUMENTATION.md        # This documentation
└── vercel.json                         # Deployment configuration
```

## Email Types Summary
1. **Contact Inquiries**: KeepInTouchSec → Branch inquiries, general questions
2. **Trial Membership**: FormComponent → 3-day trial signup requests
3. **Newsletter Signup**: AlertBox → Fitness tips and updates subscription
4. **Membership Application**: MembershipMainSec → Comprehensive gym membership applications

## Reply Management
- **All emails** are sent to Laheem.ayub.dev@gmail.com
- **replyTo header** is set to the customer's email
- **One-click reply** functionality works for all form types
- **Subject lines** clearly identify the type of inquiry

## Support & Maintenance
For system maintenance:
1. Monitor server logs regularly
2. Check email delivery rates
3. Test all forms periodically
4. Update dependencies as needed
5. Monitor Gmail account for any issues