import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, company, message } = await request.json();

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter (you'll need to configure this with your email service)
    const transporter = nodemailer.createTransport({
      // host: process.env.SMTP_HOST, // e.g., 'smtp.gmail.com'
      // port: parseInt(process.env.SMTP_PORT || '587'),
      // secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      service: 'gmail',
      auth: {
         user: process.env.SMTP_USER,
         pass: process.env.SMTP_PASS,
      },
    });

    // Email to your company
    const companyEmailOptions = {
      from: process.env.SMTP_USER,
      to: 'lamduynhatle@gmail.com', // Your company email
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Auto-reply email to the customer
    const customerEmailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting Star Marine Furniture',
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Dear ${fullName},</p>
        <p>Thank you for reaching out to Star Marine Furniture. We have received your message and will get back to you within 24 hours.</p>
        <p><strong>Your message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <br>
        <p>Best regards,</p>
        <p>Star Marine Furniture Team</p>
        <p>Email: faye.le@starmarine.com.vn</p>
        <p>Phone: +849 0669 4808</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(companyEmailOptions);
   //  await transporter.sendMail(customerEmailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}