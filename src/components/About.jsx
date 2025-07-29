import React, { useState, useEffect } from "react";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Owner & Curator",
      image: "👩‍💼",
      description: "Passionate about connecting readers with their perfect books since 2015."
    },
    {
      name: "Mike Chen",
      role: "Assistant Manager",
      image: "👨‍🎓",
      description: "Sci-fi enthusiast and coffee connoisseur who knows every corner of our store."
    },
    {
      name: "Emma Davis",
      role: "Children's Section Specialist",
      image: "👩‍🏫",
      description: "Former teacher who makes reading magical for our youngest customers."
    }
  ];

  const stats = [
    { number: "50k+", label: "Books in Stock" },
    { number: "15+", label: "Years Serving" },
    { number: "10k+", label: "Happy Readers" },
    { number: "200+", label: "Events Hosted" }
  ];

  return (
  <div className="min-h-screen bg-slate-900 dark:bg-gray-900">
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="absolute text-2xl animate-bounce opacity-20"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${Math.random() * 2 + 4}s`
        }}
      >
        📚
      </div>
    ))}
  </div>

  <div className="relative z-10">
    <section className="py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto transition-all duration-1000">
        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text text-pink-800 ">
          The Reading Nook
        </h1>
        <p className="text-xl text-gray-200 mb-8 leading-relaxed">
          Where stories come alive and readers find their home
        </p>
        <div className="text-6xl mb-8 animate-pulse">📖</div>
      </div>
    </section>

    {/* Our Story */}
    <section className="py-16 px-6 ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center ">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Our Story</h2>
          <p className="text-gray-200 leading-relaxed">
            Founded in 2008 in the heart of downtown, The Reading Nook began as a small dream...
          </p>
          <p className="text-gray-200 leading-relaxed">
            We believe that every book has the power to transport, transform, and inspire...
          </p>
        </div>
        <div className=" backdrop-blur-sm rounded-2xl p-8 shadow-xl bg-gray-200">
          <div className="text-center space-y-4 ">
            <div className="text-4xl">🏪</div>
            <h3 className="text-2xl font-semibold text-blue-900">Visit Our Store</h3>
            <p className="text-gray-600">
              123 Literary Lane<br />
              Booktown, BT 12345<br />
              Mon-Sat: 9AM-9PM<br />
              Sunday: 10AM-6PM
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* What We Offer */}
    <section className="py-16 px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-pink-800 mb-12">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["📚", "Curated Selection", "Handpicked books across all genres..."],
            ["☕", "Reading Café", "Cozy reading corners with freshly brewed..."],
            ["🎭", "Events & Readings", "Author readings, book clubs, and events..."],
            ["🎁", "Personal Service", "Book recommendations and gift wrapping..."],
            ["👶", "Kids Corner", "Story time and fun reading for all ages."],
            ["💌", "Book Club", "Join vibrant book-loving communities."]
          ].map(([icon, title, desc], i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4 text-center">{icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* By the Numbers */}
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-pink-800 mb-12">By the Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center bg-white/80 rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-700 mb-2">{stat.number}</div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-16 px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-pink-800 mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-4">{member.image}</div>
              <h3 className="text-xl font-semibold text-pink-800 mb-2">{member.name}</h3>
              <div className="text-blue-600 font-medium mb-3">{member.role}</div>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-800 mb-8">Our Mission</h2>
        <div className="bg-gradient-to-r from-blue-200 to-gray-400 text-white rounded-3xl p-8 shadow-2xl">
          <p className="text-lg leading-relaxed mb-6 text-gray-200">
            "To foster a love of reading in our community by providing a welcoming space..."
          </p>
          <div className="flex justify-center space-x-2 text-2xl">
            <span>📖</span>
            <span>🤍</span>
            <span>✨</span>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-800 mb-6">Ready to Explore?</h2>
        <p className="text-gray-200 mb-8">
          Come visit us and discover your next favorite book. We can't wait to meet you!
        </p>
        <div className="space-x-4">
          <button className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-200 shadow-lg">
            Visit Our Store
          </button>
          <button className="border-2 border-blue-500 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-200">
            Browse Online
          </button>
        </div>
      </div>
    </section>
  </div>
</div>


  );
}

export default About;