import React from 'react';
import { ChevronRight, Database, Cloud, Brain, Users, Settings } from 'lucide-react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import AnimatedNumber from '../components/AnimatedNumber';

const HomePage = () => {
  const services = [
    {
      icon: <Database className="w-12 h-12 text-[#4ae7ff]" />,
      title: "IT Infrastructure & Data",
      description: "Our specialists are here to guide you through every step of your IT system evolution."
    },
    {
      icon: <Cloud className="w-12 h-12 text-[#4ae7ff]" />,
      title: "Cloud & On-Premise Infrastructure",
      description: "From design to development, through production deployment and maintenance."
    },
    {
      icon: <Brain className="w-12 h-12 text-[#4ae7ff]" />,
      title: "AI Sector",
      description: "Our AI specialists guide you in evolving your AI strategy."
    }
  ];

  const interventions = [
    {
      title: "Expert Delegation-ATU",
      description: "To strengthen your teams or respond to specific technical needs."
    },
    {
      title: "ATG Service Center",
      description: "Supporting our clients in their business globally, prioritizing operational maintenance."
    },
    {
      title: "Fixed-Price Projects",
      description: "Migration and version upgrades, software integration, Move to cloud, MDM implementation, Cloud Data Platform..."
    }
  ];

  const stats = [
    { number: "100", label: "employees", suffix: "" },
    { number: "15", label: "revenue", suffix: " M" },
    { number: "100", label: "annual growth", suffix: " %" },
    { number: "70", label: "certified consultants", suffix: " %" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="relative h-screen flex items-center bg-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0c2637] mb-6">
              Your partner for innovative,<br />
              efficient and sustainable transformation
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Infrastructure, Data & AI
            </p>
            <button className="bg-[#4ae7ff] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#3bc5db] transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0c2637] mb-12 text-center">
            We cover all areas of expertise in the fields of
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group hover:shadow-xl transition-shadow duration-300 p-8 rounded-lg">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#4ae7ff] mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <Carousel />

      {/* Interventions Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0c2637] mb-12 text-center">
            Our Types of Interventions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {interventions.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-[#4ae7ff] mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0c2637] mb-12 text-center">
            Key Figures
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-[#4ae7ff] mb-2">
                  <AnimatedNumber 
                    value={parseInt(stat.number)} 
                    duration={2000}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;