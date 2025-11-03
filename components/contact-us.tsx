"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileUpload } from "@/components/ui/file-upload";

// Icons
const EmailIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

);

const OfficeIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
   </svg>
);

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: ""
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new FormData();
      
      // Add form fields
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('company', formData.company);
      formDataToSend.append('message', formData.message);
      
      // Add files
      selectedFiles.forEach((file, index) => {
        formDataToSend.append(`file${index}`, file);
      });

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: "",
          email: "",
          company: "",
          message: ""
        });
        setSelectedFiles([]);
        // Reset file input
        const fileInput = document.getElementById('file-upload-input') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-10 lg:py-20 bg-background" id="contact-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Get a Quotation or Schedule a Factory Visit
          </h2>
          <p className="text-muted-foreground mx-auto lg:text-lg">
            Reach out to discuss your product needs, request a detailed quotation, or arrange a factory visit to see our production in action.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Cards */}
          <div className="space-y-6">
            {/* Email Card */}
            <Card className="bg-muted border-border">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 text-primary">
                    <EmailIcon />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground mb-2">Get a response within 24 hours</p>
                    <p className="text-foreground font-medium">faye.le@starmarine.com.vn</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Card */}
            <Card className="bg-muted border-border">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 text-primary">
                    <OfficeIcon />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Office</h3>
                    <p className="text-sm text-muted-foreground mb-2">Schedule a factory visit</p>
                    <p className="text-foreground font-medium">
                      1787/7 Nguyen Duy Trinh Street, Long Phuoc Ward, Ho Chi Minh City
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-3">Send us a message</h3>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm lg:text-base font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm lg:text-base font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm lg:text-base font-medium text-foreground mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                  placeholder="Enter your company name"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm lg:text-base font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground resize-vertical"
                  placeholder="Tell us about your project or requirements..."
                />
              </div>

              {/* File Upload */}
              <FileUpload
                onFilesChange={setSelectedFiles}
                selectedFiles={selectedFiles}
                maxFiles={5}
                maxSizePerFile={5}
                acceptedFileTypes={[".pdf", ".doc", ".docx", ".xls", ".xlsx", ".jpg", ".jpeg", ".png"]}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full hover:cursor-pointer text-sm lg:text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800">
                    Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800">
                    Sorry, there was an error sending your message. Please try again or contact us directly at faye.le@starmarine.com.vn
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}