import React, { useEffect, useRef, useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    agreed: false,
  });

  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleInputChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      agreed: false,
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (contactRef.current) observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={contactRef}
      className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-200 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-purple-100 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gray-200 blur-2xl "></div>
      </div>


      <div
        className={`relative z-10 transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
      >
        <div className="max-w-md mx-auto">

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-pink-900 mb-2">Contact Us</h1>
            <p className="text-gray-700">Let's create something amazing together!</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200"
          >
            <div className="space-y-4">

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>


              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="flex rounded-xl border-2 border-gray-200 focus-within:border-gray-400 focus-within:ring-4 focus-within:ring-gray-100 
                               transition-all duration-300 transform bg-white/50 backdrop-blur-sm overflow-hidden">
                <select
                  id="country"
                  className="bg-transparent py-3 pl-4 pr-8 text-gray-700 focus:outline-none border-r border-gray-200"
                >
                  <option>🇺🇸 +1</option>
                  <option>🇬🇧 +44</option>
                  <option>🇮🇳 +91</option>
                  <option>🇩🇪 +49</option>
                </select>
                <input
                  id="phone-number"
                  type="text"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="123-456-7890"
                  className="block w-full px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none bg-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 resize-none"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>


              <div className="flex items-start space-x-2">
                <input
                  id="agreed"
                  name="agreed"
                  type="checkbox"
                  checked={formData.agreed}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 text-pink-600 rounded"
                  required
                />
                <label htmlFor="agreed" className="text-sm text-gray-700">
                  I agree to the{" "}
                  <span className="text-blue-600  cursor-pointer">privacy policy</span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-3 px-6 rounded-lg font-large
                           hover:from-pink-600 hover:to-black transform hover:scale-105 transition-all duration-300
                           "
              >
                Submit✨
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
