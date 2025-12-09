"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from "lucide-react";

const solarImage =
  "https://raw.createusercontent.com/5222af1a-cfb4-4e80-a98e-84c680d4ac32/";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+235 62 123 456", "+235 63 789 012"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@enertchad.td", "info@enertchad.td"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Avenue Nasser", "N'Djaména, Tchad"],
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E5FA8] via-[#164a8a] to-[#3AA655]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E6C34A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E6C34A] rounded-full blur-3xl"></div>
        </div>
        <img
          src={solarImage}
          alt="Contact EnerTchad"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-6 inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/30">
            <span className="text-white font-semibold">Nous Sommes Ici</span>
          </div>
          <h1 className="font-bold text-6xl md:text-7xl mb-6 leading-tight">
            Parlons <span className="text-[#E6C34A]">Ensemble</span>
          </h1>
          <p className="text-xl text-gray-100">
            Nous sommes disponibles 24/7 pour répondre à vos questions
          </p>
        </div>
      </section>

      {/* Contact Methods Cards */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-[#E6C34A]"
                >
                  <div className={`bg-gradient-to-br ${method.color} rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E5FA8] mb-4">
                    {method.title}
                  </h3>
                  <div className="space-y-2">
                    {method.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-lg font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#1E5FA8]/10 to-[#3AA655]/10 rounded-2xl p-8 border border-[#1E5FA8]/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-[#E6C34A]">
                    <Clock size={28} className="text-[#1E5FA8]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E5FA8] mb-2">Horaires d'Ouverture</h3>
                  <p className="text-gray-700 font-semibold mb-1">Lundi - Dimanche</p>
                  <p className="text-gray-600">Ouvert 24 heures / 24, 7 jours / 7</p>
                  <p className="text-sm text-gray-500 mt-2">Support client disponible 24/7</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#E6C34A]/10 to-[#FFD700]/10 rounded-2xl p-8 border border-[#E6C34A]/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-[#3AA655]">
                    <Globe size={28} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E5FA8] mb-2">Présence Nationale</h3>
                  <p className="text-gray-700 font-semibold mb-1">Partout au Tchad</p>
                  <p className="text-gray-600">50+ stations-service à travers le pays</p>
                  <p className="text-sm text-gray-500 mt-2">Accès facile et proximité garantie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E5FA8] mb-4">
              Envoyez-nous un Message
            </h2>
            <p className="text-xl text-gray-600">
              Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible
            </p>
          </div>

          {submitted && (
            <div className="mb-8 p-6 bg-green-50 border-2 border-green-500 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <MessageSquare className="text-green-600" size={24} />
                </div>
                <div>
                  <p className="text-green-800 font-bold text-lg">
                    Merci pour votre message !
                  </p>
                  <p className="text-green-700">
                    Nous vous recontacterons très bientôt. Nous apprécions votre confiance.
                  </p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-[#1E5FA8] mb-3"
                >
                  Votre Nom *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1E5FA8] focus:ring-2 focus:ring-[#1E5FA8]/20 transition-all"
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-[#1E5FA8] mb-3"
                >
                  Votre Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1E5FA8] focus:ring-2 focus:ring-[#1E5FA8]/20 transition-all"
                  placeholder="jean@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-bold text-[#1E5FA8] mb-3"
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1E5FA8] focus:ring-2 focus:ring-[#1E5FA8]/20 transition-all"
                  placeholder="+235 XX XXX XXX"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-bold text-[#1E5FA8] mb-3"
                >
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1E5FA8] focus:ring-2 focus:ring-[#1E5FA8]/20 transition-all"
                  placeholder="Sujet de votre message"
                />
              </div>
            </div>

            <div className="mt-8">
              <label
                htmlFor="message"
                className="block text-sm font-bold text-[#1E5FA8] mb-3"
              >
                Votre Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1E5FA8] focus:ring-2 focus:ring-[#1E5FA8]/20 transition-all resize-none"
                placeholder="Décrivez-nous votre demande en détail..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full mt-8 bg-gradient-to-r from-[#1E5FA8] to-[#3AA655] text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2 group"
            >
              <span>Envoyer le Message</span>
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-center text-gray-600 text-sm mt-6">
              * Champs obligatoires. Nous répondons à tous les messages dans les 24 heures.
            </p>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-r from-[#1E5FA8] to-[#3AA655]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Une Question ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Notre équipe dédiée est prête à vous aider et répondre à tous vos besoins
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+235621234"
              className="inline-block bg-white text-[#1E5FA8] px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Nous Appeler
            </a>
            <a
              href="mailto:contact@enertchad.td"
              className="inline-block bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-lg font-bold text-lg border-2 border-white hover:bg-white/20 transition-all"
            >
              Envoyer un Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
