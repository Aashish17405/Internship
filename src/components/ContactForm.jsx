import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.message) newErrors.message = 'Message is required.';
    
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    console.log('Form submitted:', formData);
    setFormData({ fullName: '', email: '', message: '' });
  };

  return (
    <div className="max-w-2xl p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">Get in touch!</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block mb-1 text-sm font-medium text-gray-600">
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label="Full name"
            aria-required="true"
          />
          {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-600">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label="Email"
            aria-required="true"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-600">
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here"
            className="w-full min-h-[160px] px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
            aria-label="Your message"
            aria-required="true"
          />
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>

        <button 
          type="submit" 
          className="w-full h-12 font-medium text-white transition duration-300 ease-in-out bg-[#3D7A81] rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
