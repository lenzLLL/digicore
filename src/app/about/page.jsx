"use client";

import { Award, Target, Lightbulb, Users, Heart, Zap, Leaf, Shield } from "lucide-react";

const heroImage =
  "https://raw.createusercontent.com/d979799f-e68c-4795-9838-15c0098f6471/";
const teamImage =
  "https://raw.createusercontent.com/1af55a56-938f-48cc-954b-a7d27089ddc2/";

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Nous investissons dans les technologies de pointe pour offrir les meilleures solutions",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Award,
      title: "Qualité",
      description:
        "Excellence dans tous nos produits et services, conformes aux normes internationales",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Heart,
      title: "Responsabilité Sociale",
      description: "Engagement envers nos clients, employés et la communauté",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Leaf,
      title: "Durabilité",
      description:
        "Transition énergétique et solutions respectueuses de l'environnement",
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  const stats = [
    { value: "50+", label: "Stations-service", icon: Zap },
    { value: "500K+", label: "Clients satisfaits", icon: Users },
    { value: "15 ans", label: "D'expérience", icon: Award },
    { value: "100%", label: "Qualité certifiée", icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">
        <img
          src={heroImage}
          alt="EnerTchad"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E5FA8]/80 via-[#1E5FA8]/60 to-[#3AA655]/70"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-6 inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/30">
            <span className="text-white font-semibold">Notre Histoire</span>
          </div>
          <h1 className="font-bold text-6xl md:text-7xl mb-6 leading-tight">
            À Propos de <span className="bg-gradient-to-r from-[#E6C34A] to-[#FFD700] bg-clip-text text-transparent">EnerTchad</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100">
            Bâtir l'avenir énergétique du Tchad ensemble
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E5FA8] mb-8">Notre Histoire</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Fondée en 2010, EnerTchad S.A. s'est établie comme un leader incontournable dans le secteur énergétique tchadien. Notre parcours a commencé avec une vision simple mais puissante : <span className="font-semibold text-[#3AA655]">fournir au Tchad une énergie fiable, de qualité et accessible à tous</span>.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Au fil des années, nous avons construit un réseau solide de stations-service à travers le pays, servant des millions de clients satisfaits. Nos opérations se sont étendues à chaque région, apportant l'excellence en matière de service et de qualité.
                  </p>
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Face aux défis climatiques et à la demande croissante d'énergie, nous nous sommes réinventés. Aujourd'hui, EnerTchad S.A. est bien plus qu'une entreprise pétrolière traditionnelle - nous sommes un acteur clé de la transition énergétique.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Notre engagement envers l'excellence, l'innovation et la responsabilité environnementale continue de guider chaque décision. Nous offrons carburants, recharge électrique, énergie solaire et des solutions innovantes qui façonnent l'avenir énergétique du Tchad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1E5FA8] mb-16">Notre Raison d'Être</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <div className="bg-gradient-to-br from-[#1E5FA8] to-[#164a8a] rounded-2xl p-12 text-white h-full transform hover:scale-105 transition-transform duration-300 shadow-xl">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-6">
                  <Target size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Notre Vision</h3>
                <p className="text-lg leading-relaxed opacity-95">
                  Être le leader incontournable du secteur énergétique en Afrique centrale, en offrant des solutions durables et innovantes qui transforment la vie des populations et accélèrent le développement économique du Tchad.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-[#3AA655] to-[#2d8242] rounded-2xl p-12 text-white h-full transform hover:scale-105 transition-transform duration-300 shadow-xl">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-6">
                  <Lightbulb size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Notre Mission</h3>
                <p className="text-lg leading-relaxed opacity-95">
                  Fournir une énergie fiable, de qualité supérieure et durable, tout en développant des services innovants qui répondent aux besoins diversifiés de nos clients, tout en respectant l'environnement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E5FA8] mb-4">Nos Valeurs Fondamentales</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident chaque décision et action chez EnerTchad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-[#E6C34A] overflow-hidden"
                >
                  <div className={`bg-gradient-to-br ${value.color} rounded-lg p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-[#1E5FA8] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E5FA8] via-[#164a8a] to-[#3AA655]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E6C34A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E6C34A] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div key={idx} className="text-center group">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-6 group-hover:bg-white/20 transition-all">
                    <StatIcon className="w-12 h-12 mx-auto text-[#E6C34A] group-hover:scale-125 transition-transform" />
                  </div>
                  <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-lg text-gray-100">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E5FA8] mb-6">Notre Équipe Exceptional</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Avec plus de 2000 employés dédiés à travers le Tchad, EnerTchad S.A. est fière de son équipe diverse et talentueuse. Nos collaborateurs sont le cœur de notre succès.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#3AA655] text-white">
                      <Users size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1E5FA8]">Formation Continue</h3>
                    <p className="text-gray-600">Investissement constant dans le développement professionnel</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#3AA655] text-white">
                      <Heart size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1E5FA8]">Culture d'Excellence</h3>
                    <p className="text-gray-600">Environnement inclusif et collaboratif qui valorise l'innovation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#3AA655] text-white">
                      <Award size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1E5FA8]">Reconnaissance</h3>
                    <p className="text-gray-600">Récompense et avancement basés sur le mérite et la performance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={teamImage}
                alt="Notre équipe"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#E6C34A]/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E5FA8] to-[#3AA655]"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Rejoignez l'Aventure <span className="text-[#E6C34A]">EnerTchad</span>
          </h2>
          <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
            Ensemble, créons le futur énergétique durable du Tchad et transformons la vie des populations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-[#E6C34A] text-[#1E5FA8] px-10 py-4 rounded-lg font-bold text-lg hover:bg-white transition-all transform hover:scale-105 shadow-lg"
            >
              Nous Contacter
            </a>
            <a
              href="/shop"
              className="inline-block bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-lg font-bold text-lg border-2 border-white hover:bg-white/20 transition-all"
            >
              Découvrir nos Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
