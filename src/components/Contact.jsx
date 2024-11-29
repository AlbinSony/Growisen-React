import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Section from './Section';

const Contact1 = () => {
  const [email, setEmail] = useState('');
  const [inquiry, setInquiry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:abc@example.com?subject=Newsletter%20Inquiry&body=Email:%20${encodeURIComponent(email)}%0A%0AInquiry:%20${encodeURIComponent(inquiry)}`;
    window.location.href = mailtoLink;
    setEmail('');
    setInquiry('');
  };
  
  return (
    <Section crosses id='contact' className="min-h-screen bg-n-8 text-white flex flex-col md:flex-row">
      {/* Left Side: Contact Information */}
      <div className="w-full md:w-1/2 p-6 md:p-12 md:border-r md:border-gray-800 flex flex-col space-y-6 md:space-y-8">
        {/* Contact Details */}
        <div className="bg-gray-900 p-6 md:p-8 rounded-xl border border-gray-700 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center">
            <Phone className="mr-4 text-blue-500" size={24} md:size={32} />
            Contact Information
          </h2>
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center">
              <Phone className="mr-4 text-green-500" size={20} md:size={24} />
              <span className="text-base md:text-xl">+91 7306144425</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-4 text-red-500" size={20} md:size={24} />
              <span className="text-base md:text-xl">growisen@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="bg-gray-900 p-6 md:p-8 rounded-xl border border-gray-700 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center">
            <MapPin className="mr-4 text-blue-500" size={24} md:size={32} />
            Our Location
          </h2>
          <div className="space-y-1 md:space-y-2">
            <p className="text-base md:text-xl">Cherthala , Alapuzha</p>
            <p className="text-base md:text-xl">Kerala</p>
            <p className="text-base md:text-xl">India</p>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="bg-gray-900 p-6 md:p-8 rounded-xl border border-gray-700 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center">
            <MapPin className="mr-4 text-blue-500" size={24} md:size={32} />
            Find Us
          </h2>
          <div className="w-full h-48 md:h-64 overflow-hidden rounded-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62930.33890294053!2d76.2997734846012!3d9.6685485620971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b087c467cde65bb%3A0x8c9e0c863e1cedbb!2sCherthala%2C%20Kerala!5e0!3m2!1sen!2sin!4v1732787965934!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              className="border-none"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Right Side: Newsletter Signup */}
      <div className="w-full md:w-1/2 p-6 md:p-12 flex items-center justify-center">
        <div className="w-full max-w-md bg-gray-900 rounded-xl border border-gray-700 shadow-2xl overflow-hidden">
          {/* Header Section */}
          <div className="text-center p-6 md:p-8">
            <Mail className="mx-auto mb-4 text-blue-500" size={48} md:size={64} />
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Stay Connected
            </h1>
            <p className="text-gray-400 text-sm md:text-base px-2 md:px-4">
              Subscribe to our newsletter and be the first to know about 
              our latest updates, insights, and exclusive offers.
            </p>
          </div>

          {/* Newsletter Form */}
          <form 
            onSubmit={handleSubmit} 
            className="px-6 md:px-8 pb-6 md:pb-8 space-y-4 md:space-y-6"
          >
            <div className="relative mb-4">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 md:p-4 pl-10 md:pl-12 bg-gray-800 text-white 
                  rounded-lg focus:outline-none 
                  focus:ring-2 focus:ring-blue-500"
              />
              <Mail
                className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 
                  text-gray-500"
                size={20} md:size={24}
              />
            </div>
            
            <div className="mb-4">
              <textarea
                placeholder="Have an inquiry? Write it here (optional)"
                value={inquiry}
                onChange={(e) => setInquiry(e.target.value)}
                className="w-full p-3 md:p-4 bg-gray-800 text-white 
                  rounded-lg focus:outline-none 
                  focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 md:p-4 rounded-lg 
                hover:bg-blue-700 transition duration-300 
                flex items-center justify-center space-x-2"
            >
              <Send size={16} md:size={20} />
              <span>Send Inquiry</span>
            </button>
          </form>

          {/* Footer Text */}
          <div className="text-center text-xs md:text-sm text-gray-500 pb-4 md:pb-6 px-4 md:px-8">
            We respect your privacy. Unsubscribe at any time.
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact1;