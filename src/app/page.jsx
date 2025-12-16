"use client";

import { useEffect, useState } from "react";
import {
  Fuel,
  Zap,
  Wrench,
  Leaf,
  Droplet,
  Sparkles,
  TrendingUp,
  Truck,
  Recycle,
  Headset,
  MessageCircle,
  MapPin,
  Users,
  Award,
  Clock,
  Shield,
  Wind,
  Flame,
} from "lucide-react";
import Promo from "../components/Promo";
import TestimonialCard from "../components/TestimonialCard";
import FAQSection from "../components/FAQSection";
import WhatsAppContact from "../components/WhatsAppContact";
import BlogSection from "../components/BlogSection";
import ProductCard from "../components/ProductCard";

const carWashImage =
  "https://raw.createusercontent.com/6f7e64de-7812-4733-bf78-e5f94d805ed9/";
const solarImage =
  "https://raw.createusercontent.com/5222af1a-cfb4-4e80-a98e-84c680d4ac32/";
const stationInterior =
  "https://raw.createusercontent.com/3f39c044-0768-47e4-bb23-aa1ba0217c9d/";
const teamImage =
  "https://raw.createusercontent.com/1af55a56-938f-48cc-954b-a7d27089ddc2/";
const evChargerImage =
  "https://raw.createusercontent.com/54cd1c2a-59f3-4545-a962-6bdc7b2fd1a9/";

export default function Home() {
  const whatsappNumber = "+23566298696";
  
  const services = [
    {
      icon: Fuel,
      title: "Station-Service",
      description:
        "Carburants de qualité supérieure, diesel et essence, disponibles 24/7",
      segment: "Énergies Fossiles",
    },
    {
      icon: Truck,
      title: "Livraison Mobile de Carburant",
      description:
        "Service de livraison directe pour industriels et clients normaux - partout au Tchad",
      segment: "Énergies Fossiles",
    },
    {
      icon: Droplet,
      title: "Huiles Moteur",
      description: "Lubrifiants premium pour tous types de véhicules",
      segment: "Énergies Fossiles",
    },
    {
      icon: Truck,
      title: "Import de Carburant",
      description:
        "Importation et distribution de carburant de qualité certifiée internationalement",
      segment: "Énergies Fossiles",
    },
    {
      icon: Fuel,
      title: "Carburants Routiers",
      description:
        "Essence (SP95, SP98, E10, E85) et Gazole (B7, B10, B30, GNR) pour mobilité et véhicules lourds.",
      segment: "Énergies Fossiles",
    },
    {
      icon: Droplet,
      title: "Combustibles de Chauffage",
      description:
        "Fioul domestique, kérosène/jet fuel et GPL (propane, butane) pour chauffage, cuisson et usages industriels.",
      segment: "Énergies Fossiles",
    },
    {
      icon: Leaf,
      title: "Énergie Solaire",
      description:
        "Solutions d'énergie renouvelable pour particuliers et entreprises",
      segment: "Énergies Renouvelables",
    },
    {
      icon: Wind,
      title: "Énergie Éolienne",
      description:
        "Solutions d'énergie éolienne pour entreprises et communautés : études, installation et maintenance de petites et moyennes turbines.",
      segment: "Énergies Renouvelables",
    },
    {
      icon: Zap,
      title: "Recharge Électrique",
      description: "Stations de recharge rapide pour véhicules électriques",
      segment: "Énergies Renouvelables",
    },
  
    {
      icon: Flame,
      title: "Biogaz",
      description:
        "Production et distribution de biogaz pour énergie domestique et industrielle",
      segment: "Services Complémentaires",
    },
    {
      icon: Sparkles,
      title: "Laverie Auto",
      description: "Services de nettoyage automatisé et écologique",
      segment: "Services Complémentaires",
    },
    {
      icon: TrendingUp,
      title: "Produits Industriels",
      description:
        "Lubrifiants, solvants, asphalte, coke, combustibles lourds et pétrole lampant pour usages industriels.",
      segment: "Services Complémentaires",
    },
    {
      icon: Sparkles,
      title: "Produits Pétrochimiques (PP)",
      description:
        "Polypropylène (PP) : matière polyvalente pour emballages, textiles, pièces automobiles et équipements médicaux.",
      segment: "Services Complémentaires",
    },
    {
      icon: Wrench,
      title: "Maintenance Auto",
      description:
        "Services d'entretien et de réparation automobiles professionnels",
      segment: "Services Complémentaires",
    },
    {
      icon: Recycle,
      title: "Traitement de Déchets",
      description:
        "Unité complète de traitement des déchets plastiques et ménagers avec solutions durables",
      segment: "Services Complémentaires",
    },
    {
      icon: Headset,
      title: "Assistance Technique",
      description:
        "Support technique 24/7 pour tous vos questions et problèmes",
      segment: "Services Complémentaires",
    },
    {
      icon: Leaf,
      title: "Biomasse solide",
      description:
        "Valorisation des résidus agricoles et forestiers en combustibles et granulés pour la production d'énergie locale.",
      segment: "Bioénergies",
    },
    {
      icon: Flame,
      title: "Biogaz",
      description:
        "Conception et mise en place de digesteurs pour la production de méthane à partir de déchets organiques.",
      segment: "Bioénergies",
    },
    {
      icon: Droplet,
      title: "Biocarburants liquides",
      description:
        "Production et distribution de biodiesel et bioéthanol à partir de ressources agricoles locales.",
      segment: "Bioénergies",
    },
    {
      icon: Zap,
      title: "Biohydrogène & Gaz de synthèse",
      description:
        "Solutions de production d'hydrogène et gaz synthétiques issus de la biomasse pour usages industriels et mobilité.",
      segment: "Bioénergies",
    },
  ];

  const lubricantItems = [
    {
      icon: Droplet,
      title: "Huiles Moteur",
      description: "Huiles minérales, semi-synthétiques et synthétiques premium pour moteurs essence et diesel (conformes SAE, API, ACEA).",
      gradientClass: "from-[#E6C34A] to-[#d4a028]",
    },
    {
      icon: Wrench,
      title: "Huiles de Transmission",
      description: "Boîtes manuelles, transmissions automatiques (ATF) et huiles pour ponts et engrenages (extrême pression).",
      gradientClass: "from-[#E6C34A] to-[#d4a028]",
    },
    {
      icon: Sparkles,
      title: "Graisses Industrielles",
      description: "Graisses au lithium/calcium, graisses au molybdène (MoS2) et graisses haute température pour paliers et engrenages.",
      gradientClass: "from-[#E6C34A] to-[#d4a028]",
    },
    {
      icon: Droplet,
      title: "Fluides Hydrauliques",
      description: "Huiles hydrauliques minérales, fluides synthétiques et fluides biodégradables pour systèmes hydrauliques.",
      gradientClass: "from-[#E6C34A] to-[#d4a028]",
    },
    {
      icon: Sparkles,
      title: "Lubrifiants Spécialisés",
      description: "Huiles de coupe et usinage, lubrifiants pour compresseurs, turbines et antigels/liquides de refroidissement.",
      gradientClass: "from-[#E6C34A] to-[#d4a028]",
    },
  ];

  const fieldItems = [
    {
      icon: Fuel,
      title: "Forage & Complétion",
      description: "Forage directionnel & horizontal, cimentation intelligente et acquisition de données en temps réel.",
      gradientClass: "from-[#1E5FA8] to-[#164a8a]",
    },
    {
      icon: Zap,
      title: "Production & Optimisation",
      description: "Systèmes de levage artificiel (ESP, Gas Lift, Rod Pump), gestion des flux multiphasiques et optimisation prédictive.",
      gradientClass: "from-[#1E5FA8] to-[#164a8a]",
    },
    {
      icon: Wrench,
      title: "Ingénierie & Maintenance",
      description: "Stimulation hydraulique (fracturation), intervention sur puits et maintenance prédictive conforme HSE.",
      gradientClass: "from-[#1E5FA8] to-[#164a8a]",
    },
    {
      icon: Wind,
      title: "Offshore & Subsea",
      description: "Ingénierie sous-marine (SURF), inspection et monitoring de pipelines, precommissioning & decommissioning sécurisé.",
      gradientClass: "from-[#1E5FA8] to-[#164a8a]",
    },
  ];

  const [products, setProducts] = useState([]);
  const [articles, setArticles] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setIsLoadingData(true);
      try {
        const [pRes, aRes] = await Promise.all([fetch('/api/products'), fetch('/api/blog')]);
        const [pJson, aJson] = await Promise.all([pRes.ok ? await pRes.json() : [], aRes.ok ? await aRes.json() : []]);
        if (!mounted) return;
        setProducts(Array.isArray(pJson) ? pJson : []);
        setArticles(Array.isArray(aJson) ? aJson : []);
      } catch (err) {
        console.error('Failed to load home data:', err);
        if (mounted) {
          setProducts([]);
          setArticles([]);
        }
      } finally {
        if (mounted) setIsLoadingData(false);
      }
    };

    load();
    return () => { mounted = false };
  }, []);

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
      <section className="relative h-[60vh] md:h-screen flex items-center justify-center text-white overflow-hidden">
        <img
          src={"/h10.jpg"}
          alt="EnerTchad"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E5FA8]/20 via-[#1E5FA8]/10 to-transparent opacity-60"></div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <div className="hidden md:inline-block bg-[#E6C34A] text-[#1E5FA8] px-4 py-1 rounded-full text-xs font-bold mb-4 shadow-lg">
            ⚡ Leader de l'énergie au Tchad
          </div>
          <h1 className="hidden md:block font-bold text-3xl md:text-7xl mb-4 md:mb-6 font-poppins leading-tight">
            EnerTchad S.A
          </h1>
          <p className="hidden md:block text-base md:text-3xl mb-3 md:mb-4 font-light">
            L'énergie qui fait avancer le Tchad
          </p>
          <p className="hidden md:block text-sm md:text-lg mb-6 md:mb-10 text-gray-200 max-w-2xl mx-auto">
            Distribution de carburant, énergies renouvelables, mobilité
            électrique et services automobiles de qualité supérieure
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center">
            <a
              href="/services"
              aria-label="Découvrir nos services"
              className="inline-flex items-center justify-center w-[50vw] md:w-auto px-4 py-2 md:px-10 md:py-4 bg-[#E6C34A] text-[#1E5FA8] rounded-lg font-bold hover:bg-[#d4a028] transition-all shadow-xl text-sm md:text-lg"
            >
              Découvrir nos services
            </a>
            <a
              href="/contact"
              aria-label="Trouver une station"
              className="inline-flex items-center justify-center w-[50vw] md:w-auto px-4 py-2 md:px-10 md:py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-[#1E5FA8] transition-all text-sm md:text-lg"
            >
              Trouver une station
            </a>
          </div>
        </div>

        {/* Scroll indicator (hidden on mobile) */}
        <div className="hidden md:block absolute md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 pointer-events-none">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-[#1E5FA8] via-[#1a5a8a] to-[#3AA655] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E6C34A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E6C34A] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center text-white group">
                <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-2xl mb-4 group-hover:bg-white/20 transition transform group-hover:scale-110">
                  <stat.icon className="w-10 h-10 md:w-14 md:h-14 mx-auto text-[#E6C34A] group-hover:text-white transition" />
                </div>
                <div className="text-2xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#E6C34A] to-white bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Segments */}
      <section className="py-8 md:py-32 px-4 bg-gradient-to-b from-[#F5E6D3] to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E6C34A]/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#3AA655] font-bold text-sm uppercase tracking-widest inline-block mb-4 px-4 py-2 bg-green-100/50 rounded-full">
              ✨ Nos Solutions
            </span>
            <h2 className="text-3xl md:text-6xl font-bold text-[#1E5FA8] mb-6">
              Des Services <span className="bg-gradient-to-r from-[#3AA655] to-[#E6C34A] bg-clip-text text-transparent">Complets</span>
            </h2>
            <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de solutions énergétiques et services automobiles adaptés à vos besoins
            </p>
          </div>

          {/* Énergies Fossiles Segment */}
          <div className="mb-24">
            {/* Intro avec image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-12 items-center mb-20 bg-gradient-to-br from-[#F5F9FF] to-white rounded-3xl p-2 lg:p-16">
              <div className="order-2 md:order-1">
                <div className="inline-block mb-6 px-4 py-2 bg-blue-100 rounded-full">
                  <span className="text-[#1E5FA8] font-bold text-xs uppercase tracking-widest">⛽ Carburants Premium 24/7</span>
                </div>
                <h3 className="text-2xl md:text-6xl font-bold text-[#1E5FA8] mb-6">Énergies Fossiles</h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  Nous fournissons des carburants de haute qualité, des services de livraison mobile et des solutions d'importation certifiées internationalement. Disponibles partout au Tchad avec un service fiable et professionnel.
                </p>
              </div>
              <img src={"/h8.jpg"} alt="Énergies Fossiles" className="order-1 md:order-2 rounded-3xl shadow-2xl w-full h-64 md:h-[500px] object-cover" />
            </div>

            <div className="flex items-center space-x-3 mb-8">
              <Fuel className="w-8 h-8 text-[#1E5FA8]" />
              <h3 className="text-2xl font-bold text-[#1E5FA8]">Nos Services</h3>
              <div className="flex-1 h-1 bg-gradient-to-r from-[#1E5FA8] to-transparent rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-6">
              {services.filter(s => s.segment === "Énergies Fossiles").map((service, idx) => {
                const ServiceIcon = service.icon;
                return (
                  <div 
                    key={idx}
                    className="group bg-white rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-[#1E5FA8]"
                  >
                    <div className="bg-gradient-to-br from-[#1E5FA8] to-[#164a8a] p-4 rounded-xl w-fit mb-4 md:mb-6 group-hover:shadow-lg transition">
                      <ServiceIcon className="w-6 md:w-8 h-6 md:h-8 text-[#E6C34A]" />
                    </div>
                    <h4 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-[#1E5FA8] transition line-clamp-1 md:line-clamp-none">
                      {service.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6 line-clamp-2 md:line-clamp-none">
                      {service.description}
                    </p>
                    <a 
                      href="/services"
                      className="inline-flex items-center space-x-2 text-[#1E5FA8] font-bold text-sm md:text-base group-hover:text-[#E6C34A] transition"
                    >
                      <span>En savoir plus</span>
                      <span className="transform group-hover:translate-x-1 transition">→</span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Énergies Renouvelables Segment */}
          <div className="mb-24">
            {/* Intro avec image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-12 items-center mb-8 md:mb-20 bg-gradient-to-br from-[#F0F8E8] to-white rounded-3xl p-2 lg:p-16">
              <img src={"/r.png"} alt="Énergies Renouvelables" className="rounded-3xl shadow-2xl w-full h-64 md:h-[500px] object-cover" />
              <div>
                <div className="inline-block mb-6 px-4 py-2 bg-green-100 rounded-full">
                  <span className="text-[#3AA655] font-bold text-xs uppercase tracking-widest">🌱 Solutions Durables & Écologiques</span>
                </div>
                <h3 className="text-2xl md:text-6xl font-bold text-[#3AA655] mb-6">Énergies Renouvelables</h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  EnerTchad s’engage à bâtir un avenir énergétique durable, inclusif et innovant.  
Nous intégrons les énergies renouvelables comme pilier stratégique de la transition énergétique et du développement continental. En réduisant les émissions de CO₂ et en contribuant aux objectifs ESG, nous favorisons l’autonomie énergétique des communautés et des industries, tout en créant de la valeur locale à travers l’emploi, la formation et l’inclusion, grâce à des innovations vertes et des solutions digitales dédiées au suivi et à l’optimisation des performances.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 mb-8">
              <Leaf className="w-8 h-8 text-[#3AA655]" />
              <h3 className="text-2xl font-bold text-[#3AA655]">Nos Services</h3>
              <div className="flex-1 h-1 bg-gradient-to-r from-[#3AA655] to-transparent rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-6">
              {services.filter(s => s.segment === "Énergies Renouvelables").map((service, idx) => {
                const ServiceIcon = service.icon;
                return (
                  <div 
                    key={idx}
                    className="group bg-white rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-[#3AA655]"
                  >
                    <div className="bg-gradient-to-br from-[#3AA655] to-[#2d8a45] p-4 rounded-xl w-fit mb-4 md:mb-6 group-hover:shadow-lg transition">
                      <ServiceIcon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                    </div>
                    <h4 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-[#3AA655] transition line-clamp-1 md:line-clamp-none">
                      {service.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6 line-clamp-2 md:line-clamp-none">
                      {service.description}
                    </p>
                    <a 
                      href="/services"
                      className="inline-flex items-center space-x-2 text-[#3AA655] font-bold text-sm md:text-base group-hover:text-[#1E5FA8] transition"
                    >
                      <span>En savoir plus</span>
                      <span className="transform group-hover:translate-x-1 transition">→</span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Services Complémentaires Segment */}
       

              {/* Bioénergies Segment (copied structure from other segments) */}
              <div className="mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-12 items-center mb-20 bg-gradient-to-br from-[#F0F8E8] to-white rounded-3xl p-2 lg:p-16">
                  <img src={"/b.png"} alt="Bioénergies" className="order-1 md:order-2 rounded-3xl shadow-2xl w-full h-64 md:h-[500px] object-cover" />
                  <div className="order-2 md:order-1">
                    <div className="inline-block mb-6 px-4 py-2 bg-green-100 rounded-full">
                      <span className="text-[#3AA655] font-bold text-xs uppercase tracking-widest">🔥 Bioénergies</span>
                    </div>
                    <h3 className="text-2xl md:text-6xl font-bold text-[#3AA655] mb-6">Bioénergies</h3>
                    <p className="text-gray-700 text-xl leading-relaxed">
                      Valorisation de la biomasse et production d'énergies renouvelables : biomasse solide, biogaz, biocarburants et solutions de biohydrogène adaptées aux territoires.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 mb-8">
                  <Leaf className="w-8 h-8 text-[#3AA655]" />
                  <h3 className="text-2xl font-bold text-[#3AA655]">Nos Services</h3>
                  <div className="flex-1 h-1 bg-gradient-to-r from-[#3AA655] to-transparent rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-6">
                  {services.filter(s => s.segment === "Bioénergies").map((service, idx) => {
                    const ServiceIcon = service.icon;
                    return (
                      <div 
                        key={idx}
                        className="group bg-white rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-[#3AA655]"
                      >
                        <div className="bg-gradient-to-br from-[#3AA655] to-[#2d8a45] p-4 rounded-xl w-fit mb-4 md:mb-6 group-hover:shadow-lg transition">
                          <ServiceIcon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                        </div>
                        <h4 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-[#3AA655] transition line-clamp-1 md:line-clamp-none">
                          {service.title}
                        </h4>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6 line-clamp-2 md:line-clamp-none">
                          {service.description}
                        </p>
                        <a 
                          href="/services"
                          className="inline-flex items-center space-x-2 text-[#3AA655] font-bold text-sm md:text-base group-hover:text-[#1E5FA8] transition"
                        >
                          <span>En savoir plus</span>
                          <span className="transform group-hover:translate-x-1 transition">→</span>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Lubrifiants Segment (structured like other segments) */}
              <div className="mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-12 items-center mb-20 bg-gradient-to-br from-[#FFF8F0] to-white rounded-3xl p-2 lg:p-16">
                  <div className="order-2 md:order-1">
                    <div className="inline-block mb-6 px-4 py-2 bg-yellow-100 rounded-full">
                      <span className="text-[#E6C34A] font-bold text-xs uppercase tracking-widest">🛢️ Lubrifiants</span>
                    </div>
                    <h3 className="text-2xl md:text-6xl font-bold text-[#E6C34A] mb-6">Lubrifiants</h3>
                    <p className="text-gray-700 text-xl leading-relaxed">
                      Gamme complète de lubrifiants pour véhicules, industrie et applications spécialisées — formulés pour la performance, la protection et la durabilité.
                    </p>
                  </div>
                  <img src={"/l.png"} alt="Lubrifiants" className="order-1 md:order-2 rounded-3xl shadow-2xl w-full h-64 md:h-[500px] object-cover" />
                </div>

                <div className="flex items-center space-x-3 mb-8">
                  <Wrench className="w-8 h-8 text-[#E6C34A]" />
                  <h3 className="text-2xl font-bold text-[#E6C34A]">Nos Produits Lubrifiants</h3>
                  <div className="flex-1 h-1 bg-gradient-to-r from-[#E6C34A] to-transparent rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-6 mb-6">
                  {lubricantItems.map((service, idx) => {
                    const ServiceIcon = service.icon;
                    return (
                      <div 
                        key={idx}
                        className="group bg-white rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-[#E6C34A]"
                      >
                        <div className={`bg-gradient-to-br ${service.gradientClass} p-4 rounded-xl w-fit mb-4 md:mb-6 group-hover:shadow-lg transition`}>
                          <ServiceIcon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                        </div>
                        <h4 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-[#E6C34A] transition line-clamp-1 md:line-clamp-none">
                          {service.title}
                        </h4>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6 line-clamp-2 md:line-clamp-none">
                          {service.description}
                        </p>
                        <a 
                          href="/services"
                          className="inline-flex items-center space-x-2 text-[#E6C34A] font-bold text-sm md:text-base group-hover:text-[#1E5FA8] transition"
                        >
                          <span>En savoir plus</span>
                          <span className="transform group-hover:translate-x-1 transition">→</span>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Services de Champs Pétroliers Segment */}
              <div className="mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-12 items-center mb-20 bg-gradient-to-br from-[#F7F8FF] to-white rounded-3xl p-2 lg:p-16">
                  <div className="order-2 md:order-1">
                    <div className="inline-block mb-6 px-4 py-2 bg-blue-100 rounded-full">
                      <span className="text-[#1E5FA8] font-bold text-xs uppercase tracking-widest">⛏ Forage & Production</span>
                    </div>
                    <h3 className="text-2xl md:text-6xl font-bold text-[#1E5FA8] mb-6">Services de Champs Pétroliers</h3>
                    <p className="text-gray-700 text-xl leading-relaxed">
                      Expertise complète pour le développement, la production et la maintenance des champs pétroliers onshore et offshore.
                    </p>
                  </div>
                  <img src={"/p.png"} alt="Champs pétroliers" className="order-1 md:order-2 rounded-3xl shadow-2xl w-full h-64 md:h-[500px] object-cover" />
                </div>

                <div className="flex items-center space-x-3 mb-8">
                  <Fuel className="w-8 h-8 text-[#1E5FA8]" />
                  <h3 className="text-2xl font-bold text-[#1E5FA8]">Nos Services</h3>
                  <div className="flex-1 h-1 bg-gradient-to-r from-[#1E5FA8] to-transparent rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-1.5 md:gap-6 mb-6">
                  {fieldItems.map((service, idx) => {
                    const ServiceIcon = service.icon;
                    return (
                      <div 
                        key={idx}
                        className="group bg-white rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-[#1E5FA8]"
                      >
                        <div className={`bg-gradient-to-br ${service.gradientClass} p-4 rounded-xl w-fit mb-4 md:mb-6 group-hover:shadow-lg transition`}>
                          <ServiceIcon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                        </div>
                        <h4 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-[#1E5FA8] transition line-clamp-1 md:line-clamp-none">
                          {service.title}
                        </h4>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6 line-clamp-2 md:line-clamp-none">
                          {service.description}
                        </p>
                        <a 
                          href="/services"
                          className="inline-flex items-center space-x-2 text-[#1E5FA8] font-bold text-sm md:text-base group-hover:text-[#E6C34A] transition"
                        >
                          <span>En savoir plus</span>
                          <span className="transform group-hover:translate-x-1 transition">→</span>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
                  <div className="mb-16">
            {/* Intro avec image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-12 items-center mb-20 bg-gradient-to-br from-[#FEF9E8] to-white rounded-3xl p-2 lg:p-16">
              <div className="order-2 md:order-1">
                <div className="inline-block mb-6 px-4 py-2 bg-yellow-100 rounded-full">
                  <span className="text-[#E6C34A] font-bold text-xs uppercase tracking-widest">🛠️ Automobile & Environnement</span>
                </div>
                <h3 className="text-2xl md:text-6xl font-bold text-[#E6C34A] mb-6">Services Complémentaires</h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  Complétez votre expérience EnerTchad avec nos services : maintenance automobile professionnelle, laverie écologique haute technologie et gestion responsable des déchets pour un Tchad plus vert.
                </p>
              </div>
              <img src={carWashImage} alt="Services Complémentaires" className="order-1 md:order-2 rounded-3xl shadow-2xl w-full h-64 md:h-[500px] object-cover" />
            </div>

            <div className="flex items-center space-x-3 mb-8">
              <Wrench className="w-8 h-8 text-[#E6C34A]" />
              <h3 className="text-2xl font-bold text-[#E6C34A]">Nos Services</h3>
              <div className="flex-1 h-1 bg-gradient-to-r from-[#E6C34A] to-transparent rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-6">
              {services.filter(s => s.segment === "Services Complémentaires").map((service, idx) => {
                const ServiceIcon = service.icon;
                return (
                  <div 
                    key={idx}
                    className="group bg-white rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-[#E6C34A]"
                  >
                    <div className="bg-gradient-to-br from-[#E6C34A] to-[#d4a028] p-4 rounded-xl w-fit mb-4 md:mb-6 group-hover:shadow-lg transition">
                      <ServiceIcon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                    </div>
                    <h4 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-[#E6C34A] transition line-clamp-1 md:line-clamp-none">
                      {service.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6 line-clamp-2 md:line-clamp-none">
                      {service.description}
                    </p>
                    <a 
                      href="/services"
                      className="inline-flex items-center space-x-2 text-[#E6C34A] font-bold text-sm md:text-base group-hover:text-[#1E5FA8] transition"
                    >
                      <span>En savoir plus</span>
                      <span className="transform group-hover:translate-x-1 transition">→</span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
              {/* CTA avec WhatsApp */}
        

    
        </div>
      </section>

      {/* Assistance Technique Section */}
      <section className="py-8 md:py-32 px-4 bg-gradient-to-b from-white via-[#F5F9FF] to-[#F0F8E8]">
        <div className="max-w-7xl mx-auto">
          {/* Intro avec image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-12 items-center mb-8 md:mb-20 bg-gradient-to-br from-[#FEF9E8] to-white rounded-3xl p-2 lg:p-16">
            <img src={"/h9.webp"} alt="Assistance Technique" className="rounded-3xl shadow-2xl w-full h-64 md:h-[500px] object-cover" />
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-yellow-100 rounded-full">
                <span className="text-[#E6C34A] font-bold text-xs uppercase tracking-widest">📞 Support Réactif & Professionnel</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold text-[#E6C34A] mb-6">Assistance Technique 24/7</h2>
              <p className="text-gray-700 text-xl leading-relaxed mb-8">
                EnerTchad est là pour vous 24 heures sur 24, 7 jours sur 7. Notre équipe technique qualifiée résout vos problèmes rapidement avec des solutions efficaces et un suivi personnalisé. Contactez-nous par téléphone, WhatsApp, email ou visitez nos stations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E6C34A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Headset className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1E5FA8] mb-1">Support Téléphonique</h4>
                    <p className="text-gray-700">Nos conseillers sont disponibles 24/7 pour répondre à vos questions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E6C34A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1E5FA8] mb-1">WhatsApp & Email</h4>
                    <p className="text-gray-700">Écrivez-nous sur WhatsApp ou email pour une réponse rapide</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E6C34A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1E5FA8] mb-1">Dépannage Express</h4>
                    <p className="text-gray-700">Interventions rapides et efficaces pour résoudre vos problèmes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-16">
            <div className="bg-white rounded-2xl p-3 md:p-10 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-[#E6C34A] to-[#d4a028] rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-[#1E5FA8] mb-3">Disponibilité 24/7</h4>
              <p className="text-gray-700 leading-relaxed">
                Notre équipe travaille jour et nuit pour assurer votre tranquillité et la continuité de nos services
              </p>
            </div>

            <div className="bg-white rounded-2xl p-3 md:p-10 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-[#E6C34A] to-[#d4a028] rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-[#1E5FA8] mb-3">Équipe Certifiée</h4>
              <p className="text-gray-700 leading-relaxed">
                Techniciens et conseillers qualifiés avec une expérience reconnue dans tous nos domaines
              </p>
            </div>

            <div className="bg-white rounded-2xl p-3 md:p-10 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-[#E6C34A] to-[#d4a028] rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-[#1E5FA8] mb-3">Qualité Garantie</h4>
              <p className="text-gray-700 leading-relaxed">
                Nous garantissons une résolution efficace et un suivi personnalisé pour chaque demande
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 px-4 -mt-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={"/h3.png"}
                alt="Station moderne"
                className="rounded-2xl shadow-2xl"
              />
              <div className="hidden md:block absolute -bottom-6 -right-6 bg-[#E6C34A] p-3 md:p-6 rounded-xl shadow-xl w-24 md:w-auto">
                <div className="text-2xl md:text-4xl font-bold text-[#1E5FA8]">15+</div>
                <div className="text-xs md:text-sm text-[#1E5FA8] font-semibold leading-tight">
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

      {/* Exploitation des Hydrocarbures */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[#1E5FA8] font-semibold text-sm uppercase tracking-wide">
              Exploitation des hydrocarbures
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E5FA8] mb-4 font-poppins mt-2">
              La société EnerTchad S.A a pour objet
            </h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed max-w-3xl mx-auto">
              L’exploration, la recherche, l’exploitation et la production
              d’hydrocarbures liquides et gazeux ; Le raffinage, la
              transformation et la valorisation des produits pétroliers et
              gaziers ;
            </p>
            <a
              href="/about"
              className="inline-block bg-[#1E5FA8] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#164a8a] transition-all"
            >
              Read More
            </a>
          </div>
        </div>
      </section>

      <Promo
        title="Roulez électrique, nous couvrons la distance."
        description={`EnerTchad déploie le premier réseau de bornes de recharge pour voitures électriques au Tchad, avec une station tous les 100 km pour vous garantir liberté et confort sur toutes vos routes. Que vous traversiez le pays pour les affaires ou les loisirs, vous trouvez toujours un point de recharge fiable, sécurisé et simple d’utilisation. Nos bornes sont adaptées aux réalités du terrain tchadien et permettent une recharge rapide afin de vous faire gagner du temps. Avec EnerTchad, choisir la voiture électrique n’est plus un risque, c’est un avantage : économies de carburant, moins de pollution et une expérience de conduite moderne, à la hauteur d’un Tchad tourné vers l’avenir.`}
        bullets={[
          "Station tous les 100 km",
          "Recharge rapide et sécurisée",
          "Compatibilité multi-normes",
          "Maintenance locale et support",
        ]}
        imageSrc={evChargerImage}
        imageAlt="Réseau de bornes EnerTchad"
        imageLeft={false}
        ctaText="En savoir plus"
        ctaHref="/services"
        wrapperClass="bg-gradient-to-r from-[#F5F9FF] to-white md:py-28"
        imageClass="rounded-2xl shadow-2xl w-full h-96 md:h-[560px] object-cover"
        titleClass="text-4xl md:text-6xl"
        descriptionClass="text-lg md:text-xl text-gray-700"
        ctaClass="inline-block bg-[#E6C34A] text-[#1E5FA8] px-8 py-4 rounded-lg font-bold hover:bg-[#d4a028] transition-all text-lg"
      />

      <Promo
        title="Zone de co-working pendant la charge"
        description={`Profitez d'un espace confortable et connecté pendant que votre véhicule se recharge. Nos stations proposent des zones de travail avec Wi‑Fi, prises électriques et boissons pour que vous puissiez rester productif.`}
        bullets={[
          "Wi‑Fi haut débit",
          "Prises et espaces de travail ergonomiques",
          "Boissons et encas disponibles",
          "Ambiance calme et sécurisée",
        ]}
        imageSrc={"/c.jpg"}
        imageAlt="Zone de co-working"
        imageLeft={false}
        ctaText="Voir les stations"
        ctaHref="/services"
        wrapperClass="bg-gradient-to-r from-[#F7FBFF] to-white md:py-28"
        imageClass="rounded-2xl shadow-2xl w-full h-96 md:h-[560px] object-cover"
        titleClass="text-4xl md:text-6xl"
        descriptionClass="text-lg md:text-xl text-gray-700"
        ctaClass="inline-block bg-[#1E5FA8] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#164a8a] transition-all text-lg"
      />

      <Promo
        title="Service de mobilité électrique"
        description={`EnerTchad propose des solutions de mobilité électrique complètes : location de véhicules électriques, navettes pour entreprises et solutions de flotte électrique adaptées à vos besoins.`}
        bullets={[
          "Location courte et longue durée",
          "Navettes et solutions pour entreprises",
          "Maintenance et support dédiés",
          "Intégration avec nos bornes de recharge",
        ]}
        imageSrc={evChargerImage}
        imageAlt="Mobilité électrique"
        imageLeft={true}
        ctaText="Découvrir la mobilité"
        ctaHref="/services"
        wrapperClass="bg-gradient-to-r from-[#F5F9FF] to-white md:py-28"
        imageClass="rounded-2xl shadow-2xl w-full h-96 md:h-[560px] object-cover"
        titleClass="text-4xl md:text-6xl"
        descriptionClass="text-lg md:text-xl text-gray-700"
        ctaClass="inline-block bg-[#1E5FA8] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#164a8a] transition-all text-lg"
      />

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
              src={"/h4.png"}
              alt="Station de recharge"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      {(!isLoadingData) && (
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

          {products.length > 0 ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id || product.slug || Math.random()} {...product} />
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
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold text-[#1E5FA8] mb-2">Aucun produit disponible</h3>
              <p className="text-gray-500 text-lg">Nous n'avons actuellement aucun produit en ligne. Revenez bientôt ou contactez-nous pour plus d'informations.</p>
            </div>
          )}
        </div>
      </section>
      )}

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

      {/* Blog Section - render with optional message when empty */}
      {(!isLoadingData) && <BlogSection articles={articles} />}

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
