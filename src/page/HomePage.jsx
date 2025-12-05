import React, { useState } from "react";

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };
  return (
    <>
      <div className="pt-16">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Welcome to Our
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Amazing Platform
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Build something incredible with modern design and cutting-edge
                technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200">
                  Get Started Free
                </button>
                <button className="px-8 py-4 bg-white text-gray-800 rounded-full font-semibold border-2 border-gray-300 hover:border-purple-600 hover:shadow-lg transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen bg-white flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              About Us
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              We're passionate about creating beautiful, functional experiences
              that make a difference.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  title: "Fast",
                  icon: "⚡",
                  desc: "Lightning-fast performance",
                },
                { title: "Secure", icon: "🔒", desc: "Bank-level security" },
                {
                  title: "Scalable",
                  icon: "📈",
                  desc: "Grows with your needs",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-200"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
              Everything you need to succeed in one place
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Web Development",
                "Mobile Apps",
                "UI/UX Design",
                "Cloud Solutions",
                "Consulting",
                "Support",
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service}
                  </h3>
                  <p className="text-gray-600">
                    Professional {service.toLowerCase()} services tailored to
                    your needs.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen bg-white flex items-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
              Ready to start your project? Let's talk!
            </p>
            <div className="max-w-2xl mx-auto bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
