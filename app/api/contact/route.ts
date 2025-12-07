import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const message = formData.get('message') as string;

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get files
    const files: File[] = [];
    const fileEntries = Array.from(formData.entries()).filter(([key]) => key.startsWith('file'));
    
    for (const [, file] of fileEntries) {
      if (file instanceof File && file.size > 0) {
        files.push(file);
      }
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      service: 'gmail',
      auth: {
         user: process.env.SMTP_USER,
         pass: process.env.SMTP_PASS,
      },
    });

    // Prepare attachments for nodemailer
    const attachments = await Promise.all(
      files.map(async (file) => {
        const buffer = Buffer.from(await file.arrayBuffer());
        return {
          filename: file.name,
          content: buffer,
          contentType: file.type,
        };
      })
    );

    // Email to your company
    const companyEmailOptions = {
      from: process.env.SMTP_USER,
      to: 'faye.le@starmarine.com.vn', // Your company email
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        ${files.length > 0 ? `<p><strong>Attachments:</strong> ${files.length} file(s)</p>` : ''}
      `,
      attachments,
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
        ${files.length > 0 ? `<p>We have also received your ${files.length} attached file(s).</p>` : ''}
        <br>
        <p>Best regards,</p>
        <p>Star Marine Furniture Team</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(companyEmailOptions);
    await transporter.sendMail(customerEmailOptions);

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