// pages/api/send-email.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'emmichandan333@gmail.com', // Your Gmail account
        pass: 'JEmmi@24' // Your Gmail password
      }
    });

    // Setup email data
    let mailOptions = {
      from: 'emmichandan333@gmail.com',
      to: 'emmichandan333@gmail.com', // Email where you want to receive messages
      subject: 'New Message from Contact Form',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
      // Send email
      const info = await transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Failed to send email.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
