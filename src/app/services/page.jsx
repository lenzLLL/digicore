"use client";

import {
  Fuel,
  Zap,
  Wrench,
  Leaf,
  Droplet,
  Sparkles,
  Clock,
  MapPin,
  Shield,
  Zap as Lightning,
  TrendingUp,
  Truck,
  Headset,
  Recycle,
  Flame,
  Wind,
} from "lucide-react";
import ServiceCard from "../../components/ServiceCard";

const evChargerImage =
  "https://raw.createusercontent.com/54cd1c2a-59f3-4545-a962-6bdc7b2fd1a9/";
const carWashImage =
  "https://raw.createusercontent.com/6f7e64de-7812-4733-bf78-e5f94d805ed9/";
const solarImage =
  "https://raw.createusercontent.com/5222af1a-cfb4-4e80-a98e-84c680d4ac32/";
const oilImage =
  "https://raw.createusercontent.com/6f7e64de-7812-4733-bf78-e5f94d805ed9/";

export default function Services() {
  const mainServices = [
    {
      icon: Fuel,
      title: "Station-Service",
      description:
        "Carburants de qualité supérieure, diesel et essence, disponibles 24/7 dans nos stations modernes et sécurisées.",
    },
    {
      icon: Truck,
      title: "Livraison Mobile de Carburant",
      description:
        "Service de livraison directe pour industriels et clients normaux - partout au Tchad",
    },
    {
      icon: Droplet,
      title: "Huiles Moteur",
      description:
        "Lubrifiants premium pour tous types de véhicules. Qualité certifiée internationale.",
    },
    {
      icon: Truck,
      title: "Import de Carburant",
      description:
        "Importation et distribution de carburant de qualité certifiée internationalement",
    },
    {
      icon: Fuel,
      title: "Carburants Routiers",
      description:
        "Essence (SP95, SP98, E10, E85) et Gazole (B7, B10, B30, GNR) pour mobilité moderne et véhicules lourds.",
    },
    {
      icon: Droplet,
      title: "Combustibles de Chauffage",
      description:
        "Fioul domestique, kérosène/jet fuel et GPL (propane, butane) pour usages résidentiels, aviation et industriels.",
    },
    {
      icon: Leaf,
      title: "Solaire photovoltaïque & thermique",
      description:
        "Production d’électricité et chauffage à partir du soleil. Solutions photovoltaïques et thermiques pour particuliers et entreprises.",
    },
    {
      icon: Wind,
      title: "Éolien",
      description:
        "Valorisation des vents pour une énergie propre et continue : études, installation et maintenance de turbines adaptées.",
    },
    {
      icon: Flame,
      title: "Bioénergie (biodigesteurs, biogaz, biomasse)",
      description:
        "Transformation des déchets organiques en énergie et fertilisants via biodigesteurs, biogaz et valorisation de la biomasse.",
    },
    {
      icon: Droplet,
      title: "Hydroélectricité",
      description:
        "Exploitation des ressources hydriques pour une production locale et fiable d'énergie : petites et moyennes centrales.",
    },
    {
      icon: TrendingUp,
      title: "Hybridation intelligente",
      description:
        "Intégration des renouvelables avec les réseaux existants (microgrids, stockage, contrôle) pour une efficacité maximale.",
    },
    {
      icon: Sparkles,
      title: "Laverie Auto",
      description:
        "Services de nettoyage automatisé et écologique. Respectueux de l'environnement et efficace.",
    },
    {
      icon: Wrench,
      title: "Maintenance Auto",
      description:
        "Services d'entretien et de réparation automobiles professionnels, effectués par nos techniciens certifiés.",
    },
    {
      icon: Recycle,
      title: "Traitement de Déchets",
      description:
        "Unité complète de traitement des déchets plastiques et ménagers avec solutions durables",
    },
    {
      icon: TrendingUp,
      title: "Produits Industriels",
      description:
        "Lubrifiants, solvants, asphalte, coke, combustibles lourds et pétrole lampant pour usages industriels.",
    },
    {
      icon: Sparkles,
      title: "Produits Pétrochimiques (PP)",
      description:
        "Polypropylène (PP) : matériau polyvalent pour emballages, textiles, pièces automobiles et équipements médicaux.",
    },
    {
      icon: Headset,
      title: "Assistance Technique",
      description:
        "Support technique 24/7 pour tous vos questions et problèmes",
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Disponibilité 24/7",
      description: "Services accessibles jour et nuit pour votre commodité",
    },
    {
      icon: MapPin,
      title: "Plusieurs Emplacements",
      description: "Réseau de stations réparties à travers le Tchad",
    },
    {
      icon: Shield,
      title: "Qualité Garantie",
      description: "Tous nos produits respectent les normes internationales",
    },
    {
      icon: Lightning,
      title: "Technologie Moderne",
      description: "Équipements dernière génération et connectés",
    },
  ];

  return (
    <div>
      {/* Hero Banner Section - Same as Blog */}
      <section className="relative py-12 md:py-32 px-4 overflow-hidden">
        <img
          src={solarImage}
          alt="Services EnerTchad"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-[#F5E6D3]/95"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="text-[#3AA655] font-bold text-sm uppercase tracking-widest inline-block mb-4 px-4 py-2 bg-green-100/50 rounded-full">
            ⚙️ Nos Services
          </span>
          <h1 className="text-2xl md:text-6xl font-bold text-[#1E5FA8] mb-4 md:mb-6">
            Découvrez Nos <span className="bg-gradient-to-r from-[#3AA655] to-[#E6C34A] bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-gray-700 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Solutions énergétiques et automobiles complètes pour tous vos besoins
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#003D7A] mb-8 md:mb-12 font-poppins">
            Services Disponibles
          </h2>

      
        </div>
      </section>

      {/* Detailed Services with Images */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Station-Service */}
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#1E5FA8] font-bold text-sm uppercase tracking-wide">Énergies Fossiles</span>
                <h3 className="text-2xl md:text-4xl font-bold text-[#1E5FA8] mb-3 md:mb-4 mt-2">Station-Service</h3>
                <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed text-sm md:text-lg">
                  Nos stations-service modernes offrent une expérience complète avec carburants de haute qualité, disponibles 24 heures sur 24.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Fuel className="w-5 h-5 text-[#1E5FA8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Diesel et essence ultra-pure certifiés</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Fuel className="w-5 h-5 text-[#1E5FA8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Paiement numérique sécurisé</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Fuel className="w-5 h-5 text-[#1E5FA8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Shop de commodités intégré</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Fuel className="w-5 h-5 text-[#1E5FA8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Aire de repos confortable</span>
                  </li>
                </ul>
              </div>
              <img src={evChargerImage} alt="Station-service" className="rounded-2xl shadow-xl w-full" />
            </div>
          </div>

          {/* Livraison Mobile */}
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <img src={oilImage} alt="Livraison mobile" className="rounded-2xl shadow-xl w-full" />
              <div>
                <span className="text-[#1E5FA8] font-bold text-sm uppercase tracking-wide">Énergies Fossiles</span>
                <h3 className="text-2xl md:text-4xl font-bold text-[#1E5FA8] mb-3 md:mb-4 mt-2">Livraison Mobile de Carburant</h3>
                <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed text-sm md:text-lg">
                  Service de livraison directe pour industriels et clients normaux partout au Tchad.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Truck className="w-5 h-5 text-[#1E5FA8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Livraison 24/7 sur site</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Truck className="w-5 h-5 text-[#1E5FA8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Tarifs compétitifs et transparents</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Truck className="w-5 h-5 text-[#1E5FA8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Quantités variables selon besoins</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Truck className="w-5 h-5 text-[#1E5FA8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Support client réactif</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Import de Carburant */}
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#1E5FA8] font-bold text-sm uppercase tracking-wide">Énergies Fossiles</span>
                <h3 className="text-4xl font-bold text-[#1E5FA8] mb-4 mt-2">Import de Carburant</h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Importation et distribution de carburant de qualité certifiée internationalement.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-[#1E5FA8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Certifications internationales garanties</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-[#1E5FA8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Contrôle qualité rigoureux</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-[#1E5FA8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Approvisionnement régulier assuré</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-[#1E5FA8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Logistique optimisée</span>
                  </li>
                </ul>
              </div>
              <img src={carWashImage} alt="Import carburant" className="rounded-2xl shadow-xl w-full" />
            </div>
          </div>

          {/* Énergie Solaire */}
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <img src={solarImage} alt="Énergie solaire" className="rounded-2xl shadow-xl w-full" />
              <div>
                <span className="text-[#3AA655] font-bold text-sm uppercase tracking-wide">Énergies Renouvelables</span>
                <h3 className="text-4xl font-bold text-[#3AA655] mb-4 mt-2">Énergie Solaire</h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Solutions d'énergie renouvelable clé en main pour particuliers et entreprises.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Leaf className="w-5 h-5 text-[#3AA655] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Panneaux haute performance avec garantie</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Leaf className="w-5 h-5 text-[#3AA655] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Batterie de stockage longue durée</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Leaf className="w-5 h-5 text-[#3AA655] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Installation professionnelle garantie</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Leaf className="w-5 h-5 text-[#3AA655] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Maintenance et monitoring 24/7</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recharge Électrique */}
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#3AA655] font-bold text-sm uppercase tracking-wide">Énergies Renouvelables</span>
                <h3 className="text-4xl font-bold text-[#3AA655] mb-4 mt-2">Recharge Électrique</h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Stations de recharge rapide pour véhicules électriques avec technologie dernière génération.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-[#3AA655] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Recharge rapide 30-80% en 30 min</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-[#3AA655] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Compatible tous véhicules électriques</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-[#3AA655] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Tarifs compétitifs et transparents</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-[#3AA655] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Application mobile de localisation</span>
                  </li>
                </ul>
              </div>
              <img src={evChargerImage} alt="Recharge électrique" className="rounded-2xl shadow-xl w-full" />
            </div>
          </div>

          {/* Biogaz */}
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <img src={solarImage} alt="Biogaz" className="rounded-2xl shadow-xl w-full" />
              <div>
                <span className="text-[#3AA655] font-bold text-sm uppercase tracking-wide">Énergies Renouvelables</span>
                <h3 className="text-4xl font-bold text-[#3AA655] mb-4 mt-2">Biogaz</h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Production et distribution de biogaz pour énergie domestique et industrielle, solution écologique et durable.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Flame className="w-5 h-5 text-[#3AA655] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Énergie écologique et renouvelable</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Flame className="w-5 h-5 text-[#3AA655] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Réduction des émissions de CO2</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Flame className="w-5 h-5 text-[#3AA655] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Tarifs avantageux long terme</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Flame className="w-5 h-5 text-[#3AA655] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Installation et support professionnels</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Maintenance Auto */}
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#E6C34A] font-bold text-sm uppercase tracking-wide">Services Complémentaires</span>
                <h3 className="text-4xl font-bold text-[#E6C34A] mb-4 mt-2">Maintenance Auto</h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Services d'entretien et de réparation automobiles professionnels effectués par nos techniciens certifiés.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Wrench className="w-5 h-5 text-[#E6C34A] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Techniciens qualifiés et certifiés</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Wrench className="w-5 h-5 text-[#E6C34A] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Diagnostic complet gratuit</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Wrench className="w-5 h-5 text-[#E6C34A] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Pièces détachées originales</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Wrench className="w-5 h-5 text-[#E6C34A] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Garantie sur les réparations</span>
                  </li>
                </ul>
              </div>
              <img src={carWashImage} alt="Maintenance auto" className="rounded-2xl shadow-xl w-full" />
            </div>
          </div>

          {/* Laverie Auto */}
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <img src={evChargerImage} alt="Laverie auto" className="rounded-2xl shadow-xl w-full" />
              <div>
                <span className="text-[#E6C34A] font-bold text-sm uppercase tracking-wide">Services Complémentaires</span>
                <h3 className="text-4xl font-bold text-[#E6C34A] mb-4 mt-2">Laverie Auto</h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Services de nettoyage automatisé et écologique respectueux de l'environnement et efficace.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Sparkles className="w-5 h-5 text-[#E6C34A] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Nettoyage automatisé haute technologie</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Sparkles className="w-5 h-5 text-[#E6C34A] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Produits écologiques certifiés</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Sparkles className="w-5 h-5 text-[#E6C34A] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Résultats professionnels garantis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Sparkles className="w-5 h-5 text-[#E6C34A] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Tarifs forfaitaires avantageux</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Traitement de Déchets */}
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#E6C34A] font-bold text-sm uppercase tracking-wide">Services Complémentaires</span>
                <h3 className="text-4xl font-bold text-[#E6C34A] mb-4 mt-2">Traitement de Déchets</h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Unité complète de traitement des déchets plastiques et ménagers avec solutions durables et responsables.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Recycle className="w-5 h-5 text-[#E6C34A] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Traitement des déchets plastiques</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Recycle className="w-5 h-5 text-[#E6C34A] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Gestion des déchets ménagers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Recycle className="w-5 h-5 text-[#E6C34A] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Recyclage optimisé et responsable</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Recycle className="w-5 h-5 text-[#E6C34A] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Normes environnementales respectées</span>
                  </li>
                </ul>
              </div>
              <img src={oilImage} alt="Traitement déchets" className="rounded-2xl shadow-xl w-full" />
            </div>
          </div>

          {/* Assistance Technique */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <img src={solarImage} alt="Assistance technique" className="rounded-2xl shadow-xl w-full" />
              <div>
                <span className="text-[#E6C34A] font-bold text-sm uppercase tracking-wide">Services Complémentaires</span>
                <h3 className="text-4xl font-bold text-[#E6C34A] mb-4 mt-2">Assistance Technique</h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Support technique 24/7 pour tous vos questions et problèmes avec nos services et produits.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Headset className="w-5 h-5 text-[#E6C34A] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Support 24/7 par téléphone</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Headset className="w-5 h-5 text-[#E6C34A] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Assistance WhatsApp et email</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Headset className="w-5 h-5 text-[#E6C34A] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Dépannage rapide et efficace</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Headset className="w-5 h-5 text-[#E6C34A] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Équipe technique qualifiée</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#003D7A] mb-12 font-poppins">
            Pourquoi nous choisir ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">
                  <benefit.icon size={40} className="text-[#FFB800]" />
                </div>
                <h3 className="font-bold text-lg text-[#003D7A] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#003D7A] mb-16 font-poppins">
            Pourquoi Choisir EnerTchad ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Livraison Gratuite */}
            <div className="bg-gradient-to-br from-[#E8F4F8] to-[#D4E8F0] p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1E5FA8] rounded-full flex items-center justify-center">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1E5FA8] mb-3">
                Livraison Gratuite
              </h3>
              <p className="text-gray-700">
                Nous existons pour vous faire plaisir
              </p>
            </div>

            {/* Paiement Facile */}
            <div className="bg-gradient-to-br from-[#F0F8E8] to-[#E0F0D4] p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#3AA655] rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#3AA655] mb-3">
                Paiement Facile
              </h3>
              <p className="text-gray-700">
                Urna est enim pellentesque
              </p>
            </div>

            {/* Suivez votre Commande */}
            <div className="bg-gradient-to-br from-[#FEF9E8] to-[#FCF0D4] p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#E6C34A] rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#E6C34A] mb-3">
                Suivez votre Commande
              </h3>
              <p className="text-gray-700">
                Nous travaillons pour votre tranquillité
              </p>
            </div>

            {/* Questions ? */}
            <div className="bg-gradient-to-br from-[#F8E8F4] to-[#F0D4E8] p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#D946A6] rounded-full flex items-center justify-center">
                <Headset className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#D946A6] mb-3">
                Vous avez des questions ?
              </h3>
              <p className="text-gray-700">
                Merci de les poser à notre équipe
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#003D7A] to-[#005A9C] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 font-poppins">
            Prêt à commencer ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous pour en savoir plus ou visiter une station
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#FFB800] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#FFA500] transition-colors"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </div>
  );
}
