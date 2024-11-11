import React from 'react';
import { ChevronRight, Globe, MessageSquare, Lock, Wrench, Shield } from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: "Infrastructure & Plateforme",
      description: "Deployment of a robust infrastructure supporting daily applications and tools."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-cyan-400" />,
      title: "Collaboration & Communication",
      description: "Integrated video conferencing tools, document sharing, and instant messaging."
    },
    {
      icon: <Lock className="w-8 h-8 text-cyan-400" />,
      title: "Mobility & Remote Access",
      description: "Secure access to company resources from anywhere in the world."
    },
    {
      icon: <Wrench className="w-8 h-8 text-cyan-400" />,
      title: "Technical Support",
      description: "High-level technical support for rapid resolution of digital issues."
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: "Security & Data Management",
      description: "Advanced security solutions aimed at safeguarding sensitive data."
    }
  ];

  const customerCases = [
    {
      type: "Small shop",
      challenge: "I want to offer a secure Wi-Fi connection to my customers, but I don't know how to do...",
      solution: "We install a secure Wi-Fi hostspot at the shop, ensuring both, a smooth connection for customers and a protection of your internal network against intrusions."
    },
    {
      type: "Big company",
      challenge: "I manage a company with more than 1000 devices (computers, smartphones, tablets) and I don't know how to update...",
      solution: "We implement a centralized management system (MDM) to automate and simplify updates for all your devices, ensuring that your IT equipment remains up to date and secure."
    }
  ];

  const offers = {
    audit: [
      "Digital Workplace discovery audit",
      "ITSM audit",
      "Active Directory audit",
      "Workstation and Smart devices audit"
    ],
    projects: [
      "Windows 11 migration project",
      "Azure AD migration project",
      "MDM solution deployment project",
      "Devices security project",
      "New application project deployment",
      "Custom project*"
    ],
    maintenance: [
      "Preventive Maintenance",
      "Corrective Maintenance",
      "Evolutionary Maintenance",
      "Customize Maintenance*"
    ]
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Revolutionize your work experience
            </h1>
            <p className="text-xl text-cyan-400 mb-8">
              Pioneers of a new digital offer, your preferred technology partner
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-8 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">ABOUT US</h2>
          <p className="text-lg text-gray-300 mb-6">
            We are dedicated to deliver expert, high-quality support to companies embracing the modern digital workplace. Leveraging our extensive experience, we provide tailored consulting services to help organizations navigate challenges and capitalize on opportunities.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">OUR SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Cases Section */}
      <section className="py-16 px-4 md:px-8 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">CUSTOMER CASE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {customerCases.map((case_, index) => (
              <div key={index} className="bg-slate-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">{case_.type}</h3>
                <div className="mb-4">
                  <p className="text-white font-medium mb-2">Challenge:</p>
                  <p className="text-gray-300 italic">&quot;{case_.challenge}&quot;</p>
                </div>
                <div>
                  <p className="text-white font-medium mb-2">HAIM Solution:</p>
                  <p className="text-gray-300">{case_.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Our OFFERS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-6">AUDIT</h3>
              <ul className="space-y-3">
                {offers.audit.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <ChevronRight className="w-4 h-4 text-cyan-400 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-6">PROJECTS</h3>
              <ul className="space-y-3">
                {offers.projects.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <ChevronRight className="w-4 h-4 text-cyan-400 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-6">MAINTENANCE</h3>
              <ul className="space-y-3">
                {offers.maintenance.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <ChevronRight className="w-4 h-4 text-cyan-400 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 bg-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">CONTACT</h2>
          <p className="text-2xl text-cyan-400 mb-4">+971 55 300 4675</p>
          <a href="https://www.haim.digital" className="text-xl text-cyan-400 hover:underline">
            www.haim.digital
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;