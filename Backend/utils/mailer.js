// creating a mailer utility to send emails to the register user account
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
    auth: {
    user: process.env.EMAIL_USER, // your email address
    pass: process.env.EMAIL_PASS // your email password
    }
});
const sendEmail = async (to, subject, text) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text
    };
    
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
    }

module.exports = {
    sendEmail
};