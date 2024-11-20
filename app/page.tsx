import React from 'react';
import { ChevronRight, Database, Cloud, Brain, Users, Settings } from 'lucide-react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

const HomePage = () => {
  const services = [
    {
      icon: <Database className="w-12 h-12 text-blue-600" />,
      title: "Infrastructure IT & Data",
      description: "Nos spécialistes sont là pour vous guider à chaque étape de l'évolution de votre SI."
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-600" />,
      title: "Infrastructures Cloud & On Premise",
      description: "De la conception au développement en passant par la mise en production et la maintenance."
    },
    {
      icon: <Brain className="w-12 h-12 text-blue-600" />,
      title: "Secteur IA",
      description: "Nos spécialistes en intelligence artificielle vous guident dans l'évolution de votre stratégie IA."
    }
  ];

  const interventions = [
    {
      title: "Délégation d'experts-ATU",
      description: "Afin de renforcer vos équipes ou de répondre à des besoins techniques spécifiques."
    },
    {
      title: "Centre de services ATG",
      description: "Accompagner nos clients sur un métier dans sa globalité, en priorisant le maintien en condition opérationnelle."
    },
    {
      title: "Réalisation au forfait",
      description: "Migration et montée de version, integration logiciel, Move to cloud, mise en place MDM, data Cloud Platform..."
    }
  ];

  const stats = [
    { number: "100", label: "collaborateurs" },
    { number: "15 M", label: "chiffre d'affaires" },
    { number: "100 %", label: "croissance annuelle" },
    { number: "70 %", label: "de consultants certifiés" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="relative h-screen flex items-center bg-gradient-to-r from-blue-900 to-blue-700 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Votre partenaire pour une transformation<br />
              innovante, performante et durable
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Infrastructure, Data & IA
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
              En savoir plus
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Nous couvrons l'ensemble des métiers d'expertise dans les domaines de
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group hover:shadow-xl transition-shadow duration-300 p-8 rounded-lg">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <Carousel />

      {/* Interventions Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Nos types d'interventions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {interventions.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Quelques chiffres...
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;