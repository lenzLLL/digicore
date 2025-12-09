"use client";

import {
  Fuel,
  Zap,
  Wrench,
  Leaf,
  Droplet,
  Sparkles,
  TrendingUp,
  Shield,
  Clock,
  Users,
  Award,
  MapPin,
} from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import ProductCard from "../components/ProductCard";
import TestimonialCard from "../components/TestimonialCard";
import FAQSection from "../components/FAQSection";
import WhatsAppContact from "../components/WhatsAppContact";
import BlogSection from "../components/BlogSection";

const heroImage =
  "https://raw.createusercontent.com/d979799f-e68c-4795-9838-15c0098f6471/";
const evChargerImage =
  "https://raw.createusercontent.com/54cd1c2a-59f3-4545-a962-6bdc7b2fd1a9/";
const oilImage =
  "https://raw.createusercontent.com/6b48fe65-3ab6-4f4e-8a8d-3aa92bfcaa1c/";
const carWashImage =
  "https://raw.createusercontent.com/6f7e64de-7812-4733-bf78-e5f94d805ed9/";
const solarImage =
  "https://raw.createusercontent.com/5222af1a-cfb4-4e80-a98e-84c680d4ac32/";
const stationInterior =
  "https://raw.createusercontent.com/3f39c044-0768-47e4-bb23-aa1ba0217c9d/";
const teamImage =
  "https://raw.createusercontent.com/1af55a56-938f-48cc-954b-a7d27089ddc2/";

export default function Home() {
  const services = [
    {
      icon: Fuel,
      title: "Station-Service",
      description:
        "Carburants de qualité supérieure, diesel et essence, disponibles 24/7",
    },
    {
      icon: Zap,
      title: "Recharge Électrique",
      description: "Stations de recharge rapide pour véhicules électriques",
    },
    {
      icon: Wrench,
      title: "Maintenance Auto",
      description:
        "Services d'entretien et de réparation automobiles professionnels",
    },
    {
      icon: Leaf,
      title: "Énergie Solaire",
      description:
        "Solutions d'énergie renouvelable pour particuliers et entreprises",
    },
    {
      icon: Droplet,
      title: "Huiles Moteur",
      description: "Lubrifiants premium pour tous types de véhicules",
    },
    {
      icon: Sparkles,
      title: "Laverie Auto",
      description: "Services de nettoyage automatisé et écologique",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Huile Moteur Premium 5L",
      category: "Huile",
      price: "15,000",
      image: oilImage,
    },
    {
      id: 2,
      name: "Huile Diesel 200L",
      category: "Huile",
      price: "285,000",
      image: oilImage,
    },
    {
      id: 3,
      name: "Filtre à Air Auto",
      category: "Pièces",
      price: "8,500",
      image: oilImage,
    },
    {
      id: 4,
      name: "Kit Panneau Solaire 5kW",
      category: "Énergie",
      price: "2,500,000",
      image: solarImage,
    },
    {
      id: 5,
      name: "Batterie Solaire 200Ah",
      category: "Énergie",
      price: "450,000",
      image: solarImage,
    },
    {
      id: 6,
      name: "Huile Synthétique 10L",
      category: "Huile",
      price: "28,500",
      image: oilImage,
    },
  ];

  const stats = [
    { icon: MapPin, value: "15+", label: "Stations-Service" },
    { icon: Users, value: "50,000+", label: "Clients satisfaits" },
    { icon: Zap, value: "8", label: "Bornes électriques" },
    { icon: Award, value: "15 ans", label: "D'expérience" },
  ];

  const testimonials = [
    {
      name: "Mamadou Hassan",
      role: "Entrepreneur, N'Djamena",
      content: "EnerTchad a transformé mon activité commerciale. Leurs services sont fiables et leurs prix sont compétitifs. Je recommande vivement!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      name: "Amira Abdoulaye",
      role: "Directrice, Entreprise de Transport",
      content: "Les panneaux solaires installés par EnerTchad ont réduit nos coûts énergétiques de 40%. Une véritable révolution pour notre entreprise!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "Jean Pierre Dubois",
      role: "Propriétaire, Station-service",
      content: "Partenaire depuis 8 ans. EnerTchad offre un service de distribution impeccable et un support client exceptionnel. C'est du professionnalisme.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    {
      name: "Fatima Ali",
      role: "Responsable Parc Auto, ONG",
      content: "Les bornes de recharge électrique d'EnerTchad sont essentielles pour notre transition vers la mobilité verte. Excellent service!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <img
          src={heroImage}
          alt="EnerTchad"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E5FA8] via-[#1E5FA8]/60 to-transparent opacity-90"></div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <div className="inline-block bg-[#E6C34A] text-[#1E5FA8] px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
            ⚡ Leader de l'énergie au Tchad
          </div>
          <h1 className="font-bold text-5xl md:text-7xl mb-6 font-poppins leading-tight">
            EnerTchad S.A
          </h1>
          <p className="text-xl md:text-3xl mb-4 font-light">
            L'énergie qui fait avancer le Tchad
          </p>
          <p className="text-base md:text-lg mb-10 text-gray-200 max-w-2xl mx-auto">
            Distribution de carburant, énergies renouvelables, mobilité
            électrique et services automobiles de qualité supérieure
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/services"
              className="bg-[#E6C34A] text-[#1E5FA8] px-10 py-4 rounded-lg font-bold hover:bg-[#d4a028] transition-all shadow-xl text-lg"
            >
              Découvrir nos services
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold hover:bg-white hover:text-[#1E5FA8] transition-all text-lg"
            >
              Trouver une station
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E5FA8] via-[#1a5a8a] to-[#3AA655] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E6C34A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E6C34A] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center text-white group">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl mb-4 group-hover:bg-white/20 transition transform group-hover:scale-110">
                  <stat.icon className="w-14 h-14 mx-auto text-[#E6C34A] group-hover:text-white transition" />
                </div>
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-[#E6C34A] to-white bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-sm text-gray-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-[#F5E6D3] to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E6C34A]/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#3AA655] font-bold text-sm uppercase tracking-widest inline-block mb-4 px-4 py-2 bg-green-100/50 rounded-full">
              ✨ Nos Solutions
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1E5FA8] mb-6">
              Des Services <span className="bg-gradient-to-r from-[#3AA655] to-[#E6C34A] bg-clip-text text-transparent">Complets</span>
            </h2>
            <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de solutions énergétiques et services automobiles adaptés à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <div 
                  key={idx}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-[#E6C34A]"
                >
                  <div className="bg-gradient-to-br from-[#1E5FA8] to-[#164a8a] p-4 rounded-xl w-fit mb-6 group-hover:shadow-lg transition">
                    <ServiceIcon className="w-8 h-8 text-[#E6C34A]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1E5FA8] transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <a 
                    href="/services"
                    className="inline-flex items-center space-x-2 text-[#1E5FA8] font-bold group-hover:text-[#E6C34A] transition"
                  >
                    <span>En savoir plus</span>
                    <span className="transform group-hover:translate-x-1 transition">→</span>
                  </a>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <a
              href="/services"
              className="inline-block bg-gradient-to-r from-[#1E5FA8] to-[#3AA655] text-white px-12 py-4 rounded-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105 text-lg"
            >
              Voir tous les services
            </a>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={stationInterior}
                alt="Station moderne"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#E6C34A] p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold text-[#1E5FA8]">15+</div>
                <div className="text-sm text-[#1E5FA8] font-semibold">
                  Années d'excellence
                </div>
              </div>
            </div>
            <div>
              <span className="text-[#3AA655] font-semibold text-sm uppercase tracking-wide">
                À Propos de nous
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E5FA8] mb-6 font-poppins mt-2">
                Leader de l'énergie au Tchad
              </h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                EnerTchad S.A. est une entreprise tchadienne spécialisée dans la
                distribution de carburant, les énergies renouvelables et la
                mobilité électrique. Depuis 15 ans, nous accompagnons le
                développement du Tchad avec des solutions énergétiques
                innovantes et durables.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-[#3AA655] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#1E5FA8]">
                      Qualité certifiée
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Carburants aux normes internationales
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-[#3AA655] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#1E5FA8]">
                      Innovation continue
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Technologies de pointe pour vos besoins énergétiques
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-[#3AA655] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#1E5FA8]">Service 24/7</h3>
                    <p className="text-gray-600 text-sm">
                      Disponibilité permanente sur toutes nos stations
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="/about"
                className="inline-block bg-[#3AA655] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#2d8a45] transition-all"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#1E5FA8] to-[#164a8a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="text-[#E6C34A] font-semibold text-sm uppercase tracking-wide">
                Nos Atouts
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-poppins mt-2">
                Pourquoi choisir EnerTchad ?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white/10 p-5 rounded-xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-[#E6C34A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield size={24} className="text-[#1E5FA8]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      Sécurité garantie
                    </h3>
                    <p className="text-gray-200 text-sm">
                      Carburants certifiés et services conformes aux normes
                      internationales les plus strictes
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-white/10 p-5 rounded-xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-[#E6C34A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp size={24} className="text-[#1E5FA8]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      Rapidité & efficacité
                    </h3>
                    <p className="text-gray-200 text-sm">
                      Services 24/7, stations connectées, processus optimisés
                      pour votre confort
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-white/10 p-5 rounded-xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-[#E6C34A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf size={24} className="text-[#1E5FA8]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      Engagement environnemental
                    </h3>
                    <p className="text-gray-200 text-sm">
                      Installations modernes, énergies renouvelables, transition
                      écologique
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-white/10 p-5 rounded-xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-[#E6C34A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award size={24} className="text-[#1E5FA8]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      Excellence & fiabilité
                    </h3>
                    <p className="text-gray-200 text-sm">
                      15 ans d'expérience, expertise reconnue, approvisionnement
                      constant
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img
              src={evChargerImage}
              alt="Station de recharge"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-4 bg-[#F5E6D3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#3AA655] font-semibold text-sm uppercase tracking-wide">
              Notre Boutique
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E5FA8] mb-4 font-poppins mt-2">
              Nos Produits Premium
            </h2>
            <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
              Sélection de produits de haute qualité pour tous vos besoins
              énergétiques et automobiles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/shop"
              className="inline-block bg-gradient-to-r from-[#E6C34A] to-[#d4a028] text-[#1E5FA8] px-10 py-4 rounded-lg font-bold hover:shadow-2xl transition-all"
            >
              Voir la boutique complète
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-white to-[#F5E6D3] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#3AA655]/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#3AA655] font-bold text-sm uppercase tracking-widest inline-block mb-4 px-4 py-2 bg-green-100/50 rounded-full">
              💬 Ce que disent nos clients
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1E5FA8] mb-6">
              Témoignages de <span className="bg-gradient-to-r from-[#3AA655] to-[#E6C34A] bg-clip-text text-transparent">Nos Clients</span>
            </h2>
            <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
              Découvrez pourquoi des milliers de clients font confiance à EnerTchad pour leurs besoins énergétiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Team/Values Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#3AA655] font-semibold text-sm uppercase tracking-wide">
                Notre Équipe
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E5FA8] mb-6 font-poppins mt-2">
                Des Experts à Votre Service
              </h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Notre équipe de professionnels qualifiés est dédiée à vous
                offrir le meilleur service et les meilleures solutions
                énergétiques. Formés aux dernières technologies, nos experts
                vous accompagnent dans tous vos projets.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#E6C34A] rounded-full"></div>
                  <span className="text-gray-700">
                    Plus de 200 employés qualifiés
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#E6C34A] rounded-full"></div>
                  <span className="text-gray-700">
                    Formation continue aux nouvelles technologies
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#E6C34A] rounded-full"></div>
                  <span className="text-gray-700">
                    Service client disponible 24/7
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#E6C34A] rounded-full"></div>
                  <span className="text-gray-700">
                    Experts en énergies renouvelables
                  </span>
                </li>
              </ul>
            </div>
            <img
              src={teamImage}
              alt="Équipe EnerTchad"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* WhatsApp Contact Section */}
      <WhatsAppContact />

      {/* Blog Section */}
      <BlogSection />

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-[#E6C34A] to-[#d4a028]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-[#1E5FA8]">
            Rejoignez la révolution énergétique
          </h2>
          <p className="text-xl mb-10 text-[#1E5FA8] font-medium">
            Découvrez comment EnerTchad S.A. transforme le secteur de l'énergie
            au Tchad avec des solutions innovantes et durables
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-[#1E5FA8] text-white px-10 py-4 rounded-lg font-bold hover:bg-[#164a8a] transition-all shadow-xl"
            >
              Nous contacter
            </a>
            <a
              href="/services"
              className="inline-block border-2 border-[#1E5FA8] text-[#1E5FA8] px-10 py-4 rounded-lg font-bold hover:bg-[#1E5FA8] hover:text-white transition-all"
            >
              Explorer nos services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
