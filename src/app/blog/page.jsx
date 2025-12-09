"use client";

import BlogCard from "../../components/BlogCard";
import { Search, Filter } from "lucide-react";
import { useState } from "react";

const fuelTips =
  "https://raw.createusercontent.com/f65761c3-3a24-4d96-86d2-04e2ce50d663/";
const evCharging =
  "https://raw.createusercontent.com/74077318-7dbb-4b25-bd81-0d396f3a9993/";
const oilQuality =
  "https://raw.createusercontent.com/bf2c8678-72d5-471e-977a-46adc60b4c4f/";
const solarEnergy =
  "https://raw.createusercontent.com/65649431-384f-4f10-8370-24aa69766035/";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const categories = [
    "Tous",
    "Énergie Solaire",
    "Mobilité Électrique",
    "Conseils",
    "Innovation",
    "Entretien",
  ];

  const articles = [
    {
      slug: "economie-carburant-conseils",
      title:
        "Comment réduire votre consommation de carburant en 5 étapes simples",
      excerpt:
        "Découvrez nos conseils d'experts pour économiser du carburant et réduire vos dépenses mensuelles tout en protégeant l'environnement.",
      image: fuelTips,
      date: "2025-01-15",
      category: "Conseils",
    },
    {
      slug: "revolution-vehicules-electriques-tchad",
      title: "La révolution des véhicules électriques arrive au Tchad",
      excerpt:
        "EnerTchad inaugure 8 nouvelles bornes de recharge rapide à N'Djaména. L'avenir de la mobilité est électrique.",
      image: evCharging,
      date: "2025-01-10",
      category: "Mobilité Électrique",
    },
    {
      slug: "choisir-huile-moteur-qualite",
      title: "Comment choisir l'huile moteur adaptée à votre véhicule",
      excerpt:
        "Guide complet pour sélectionner la meilleure huile moteur selon le type de véhicule, le climat et vos habitudes de conduite.",
      image: oilQuality,
      date: "2025-01-05",
      category: "Entretien",
    },
    {
      slug: "energie-solaire-entreprises",
      title:
        "L'énergie solaire: solution d'avenir pour les entreprises tchadiennes",
      excerpt:
        "Comment les panneaux solaires peuvent réduire vos coûts énergétiques de 60% et garantir une alimentation stable.",
      image: solarEnergy,
      date: "2024-12-28",
      category: "Énergie Solaire",
    },
    {
      slug: "maintenance-vehicule-saison-seche",
      title: "Maintenance automobile en saison sèche: les points essentiels",
      excerpt:
        "Protégez votre véhicule des rigueurs du climat sahélien avec notre checklist complète de maintenance saisonnière.",
      image: fuelTips,
      date: "2024-12-20",
      category: "Entretien",
    },
    {
      slug: "innovation-stations-service-connectees",
      title:
        "Nos stations-service connectées: l'innovation au service du client",
      excerpt:
        "Découvrez comment nos nouvelles technologies améliorent votre expérience: paiement mobile, suivi de consommation en temps réel.",
      image: evCharging,
      date: "2024-12-15",
      category: "Innovation",
    },
  ];

  const filteredArticles =
    selectedCategory === "Tous"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-[#1E5FA8] to-[#3AA655] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={fuelTips}
            alt="Blog"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <span className="inline-block bg-[#E6C34A] text-[#1E5FA8] px-6 py-2 rounded-full text-sm font-bold mb-4">
            Blog & Actualités
          </span>
          <h1 className="font-bold text-5xl md:text-6xl mb-6 font-poppins">
            Notre Blog
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Actualités, conseils et innovations dans le secteur de l'énergie au
            Tchad
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Search */}
            <div className="flex-1 min-w-64 max-w-md">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5FA8]"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2">
              <Filter size={20} className="text-[#1E5FA8] flex-shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? "bg-[#1E5FA8] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#1E5FA8]">
              {selectedCategory === "Tous"
                ? "Tous les articles"
                : selectedCategory}
            </h2>
            <p className="text-gray-600 mt-2">
              {filteredArticles.length} article
              {filteredArticles.length > 1 ? "s" : ""}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <BlogCard key={article.slug} {...article} />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-[#1E5FA8] mb-2">
                Aucun article trouvé
              </h3>
              <p className="text-gray-600">
                Essayez une autre catégorie ou recherche
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#E6C34A] to-[#d4a028]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#1E5FA8] font-poppins">
            Restez informés
          </h2>
          <p className="text-lg mb-8 text-[#1E5FA8]">
            Recevez nos derniers articles et actualités directement dans votre
            boîte mail
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 rounded-lg border-2 border-[#1E5FA8] focus:outline-none focus:ring-2 focus:ring-[#1E5FA8]"
            />
            <button className="bg-[#1E5FA8] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#164a8a] transition-all whitespace-nowrap">
              S'abonner
            </button>
          </div>
          <p className="text-xs mt-4 text-[#1E5FA8] opacity-80">
            Pas de spam. Désabonnement en un clic.
          </p>
        </div>
      </section>
    </div>
  );
}
