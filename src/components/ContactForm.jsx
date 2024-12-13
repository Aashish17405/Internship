import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('submitted')
  }


  return (
    <div className="max-w-4xl p-6 mx-auto bg-white rounded-lg">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">Get in touch!</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name *"
            className="w-full h-12 px-4 border border-gray-300 rounded-md text-[#5F5F5F]"
            aria-label="Full name"
            aria-required="true"
          />
        </div>

        <div>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address *"
            className="w-full h-12 px-4 border border-gray-300 rounded-md text-[#5F5F5F]"
            aria-label="Email"
            aria-required="true"
          />
        </div>

        <div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message *"
            className="w-full min-h-[135px] px-4 py-3 border border-gray-300 rounded-md  resize-none text-[#5F5F5F]"
            aria-label="Your message"
            aria-required="true"
          />
        </div>

        <button 
          type="submit"
          className="w-full h-12 font-medium text-white bg-[#006A4E] rounded-md "
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
