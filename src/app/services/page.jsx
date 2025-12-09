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
} from "lucide-react";
import ServiceCard from "../../components/ServiceCard";

const evChargerImage =
  "https://raw.createusercontent.com/54cd1c2a-59f3-4545-a962-6bdc7b2fd1a9/";
const carWashImage =
  "https://raw.createusercontent.com/6f7e64de-7812-4733-bf78-e5f94d805ed9/";
const solarImage =
  "https://raw.createusercontent.com/5222af1a-cfb4-4e80-a98e-84c680d4ac32/";

export default function Services() {
  const mainServices = [
    {
      icon: Fuel,
      title: "Station-Service",
      description:
        "Carburants de qualité supérieure, diesel et essence, disponibles 24/7 dans nos stations modernes et sécurisées.",
    },
    {
      icon: Zap,
      title: "Recharge Électrique",
      description:
        "Stations de recharge rapide pour véhicules électriques. Technologie dernière génération, compatible tous modèles.",
    },
    {
      icon: Wrench,
      title: "Maintenance Auto",
      description:
        "Services d'entretien et de réparation automobiles professionnels, effectués par nos techniciens certifiés.",
    },
    {
      icon: Leaf,
      title: "Énergie Solaire",
      description:
        "Solutions d'énergie renouvelable pour particuliers et entreprises. Installation et maintenance complètes.",
    },
    {
      icon: Droplet,
      title: "Huiles Moteur",
      description:
        "Lubrifiants premium pour tous types de véhicules. Qualité certifiée internationale.",
    },
    {
      icon: Sparkles,
      title: "Laverie Auto",
      description:
        "Services de nettoyage automatisé et écologique. Respectueux de l'environnement et efficace.",
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
      <section className="relative py-32 px-4 overflow-hidden">
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
          <h1 className="text-5xl md:text-6xl font-bold text-[#1E5FA8] mb-6">
            Découvrez Nos <span className="bg-gradient-to-r from-[#3AA655] to-[#E6C34A] bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            Solutions énergétiques et automobiles complètes pour tous vos besoins
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#003D7A] mb-12 font-poppins">
            Services Disponibles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Station-Service Detail */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-[#003D7A] mb-4 font-poppins">
              Station-Service EnerTchad
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Nos stations-service offrent une expérience complète avec
                  carburants de haute qualité, disponibles 24 heures sur 24.
                  Bénéficiez de:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
                    <span className="text-gray-700">
                      Diesel et essence ultra-pure
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
                    <span className="text-gray-700">
                      Paiement numérique sécurisé
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
                    <span className="text-gray-700">
                      Shop de commodités intégré
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
                    <span className="text-gray-700">
                      Aire de repos confortable
                    </span>
                  </li>
                </ul>
              </div>
              <img
                src={evChargerImage}
                alt="Station-service"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Recharge Électrique Detail */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-[#003D7A] mb-4 font-poppins">
              Recharge Électrique EV
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <img
                src={carWashImage}
                alt="Recharge électrique"
                className="rounded-lg shadow-lg w-full"
              />
              <div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Prêt à passer à l'électrique ? Notre réseau de recharge
                  moderne vous accueille :
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
                    <span className="text-gray-700">
                      Recharge rapide 30-80% en 30 min
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
                    <span className="text-gray-700">
                      Compatible tous véhicules électriques
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
                    <span className="text-gray-700">
                      Tarifs compétitifs et transparents
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
                    <span className="text-gray-700">
                      Application mobile de localisation
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Énergie Solaire Detail */}
          <div>
            <h3 className="text-3xl font-bold text-[#003D7A] mb-4 font-poppins">
              Solutions d'Énergie Solaire
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Investissez dans l'avenir avec nos solutions solaires clé en
                  main :
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
                    <span className="text-gray-700">
                      Panneaux solaires haute performance
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
                    <span className="text-gray-700">
                      Batterie de stockage longue durée
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
                    <span className="text-gray-700">
                      Installation professionnelle garantie
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
                    <span className="text-gray-700">
                      Maintenance et support 24/7
                    </span>
                  </li>
                </ul>
              </div>
              <img
                src={solarImage}
                alt="Énergie solaire"
                className="rounded-lg shadow-lg w-full"
              />
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
