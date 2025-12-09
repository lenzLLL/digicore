"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Calendar, Tag, Share2 } from "lucide-react";

const fuelTips =
  "https://raw.createusercontent.com/f65761c3-3a24-4d96-86d2-04e2ce50d663/";
const evCharging =
  "https://raw.createusercontent.com/74077318-7dbb-4b25-bd81-0d396f3a9993/";
const oilQuality =
  "https://raw.createusercontent.com/bf2c8678-72d5-471e-977a-46adc60b4c4f/";
const solarEnergy =
  "https://raw.createusercontent.com/65649431-384f-4f10-8370-24aa69766035/";

export default function BlogDetail() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug;

  const articleData = {
    "economie-carburant-conseils": {
      title: "Comment réduire votre consommation de carburant en 5 étapes simples",
      image: fuelTips,
      date: "2025-01-15",
      category: "Conseils",
      author: "EnerTchad Team",
      content: `<h2>Introduction</h2><p>La consommation de carburant est une préoccupation majeure pour tous les propriétaires de véhicules. Voici 5 étapes simples pour réduire votre consommation et économiser de l'argent.</p><h2>1. Entretien régulier</h2><p>Un véhicule bien entretenu consomme moins de carburant. Assurez-vous que vos pneus sont correctement gonflés et que votre moteur est réglé régulièrement.</p><h2>2. Conduite économe</h2><p>Adopter une conduite douce et progressive peut réduire votre consommation de 15 à 20%. Évitez les accélérations brusques et les vitesses excessives.</p><h2>3. Réduire le poids du véhicule</h2><p>Chaque kilogramme supplémentaire augmente la consommation. Débarrassez-vous des objets inutiles dans votre coffre.</p><h2>4. Planifier vos trajets</h2><p>Regrouper les trajets et utiliser un GPS pour trouver la route la plus courte peut vous faire économiser significativement.</p><h2>5. Utiliser le carburant de qualité</h2><p>Chez EnerTchad, nous proposons des carburants de première qualité qui garantissent une meilleure économie et une meilleure performance.</p><h2>Conclusion</h2><p>Appliquer ces 5 conseils simples peut vous permettre d'économiser jusqu'à 30% sur votre consommation de carburant annuelle.</p>`,
    },
    "revolution-vehicules-electriques-tchad": {
      title: "La révolution des véhicules électriques arrive au Tchad",
      image: evCharging,
      date: "2025-01-10",
      category: "Mobilité Électrique",
      author: "EnerTchad Team",
      content: `<h2>Une nouvelle ère pour la mobilité</h2><p>EnerTchad est fière d'annoncer l'inauguration de 8 nouvelles bornes de recharge rapide à N'Djaména, marquant un tournant majeur dans la transition vers la mobilité électrique.</p><h2>Infrastructure de recharge de qualité</h2><p>Nos bornes de recharge rapide permettent de recharger un véhicule électrique en moins de 30 minutes. Elles sont équipées de la dernière technologie et disponibles 24/7.</p><h2>Avantages des véhicules électriques</h2><p>Les véhicules électriques offrent de nombreux avantages: zéro émission, coût de fonctionnement réduit, confort de conduite supérieur et entretien minimal.</p><h2>Impact environnemental</h2><p>La transition vers les véhicules électriques est essentielle pour réduire les émissions de carbone et combattre le changement climatique.</p><h2>Appel à l'action</h2><p>Rejoignez-nous dans cette révolution. Découvrez nos solutions de recharge et faites le pas vers une mobilité durable.</p>`,
    },
    "choisir-huile-moteur-qualite": {
      title: "Comment choisir l'huile moteur adaptée à votre véhicule",
      image: oilQuality,
      date: "2025-01-05",
      category: "Entretien",
      author: "EnerTchad Team",
      content: `<h2>Importance du choix de l'huile moteur</h2><p>L'huile moteur est le cœur du système de lubrification de votre véhicule. Choisir la bonne huile est crucial pour la longévité de votre moteur.</p><h2>Comprendre les normes</h2><p>Les huiles moteur sont classées selon différentes normes (API, ACEA) qui indiquent leur qualité et leur compatibilité avec votre véhicule.</p><h2>Viscosité et climat</h2><p>Au Tchad, avec son climat chaud, il est recommandé d'utiliser des huiles avec une viscosité adaptée. Nos experts peuvent vous conseiller sur le meilleur choix.</p><h2>Marques recommandées</h2><p>EnerTchad propose une sélection premium d'huiles moteur de marques réputées, testées et approuvées par nos mécaniciens.</p><h2>Entretien régulier</h2><p>Changez votre huile selon les recommandations du fabricant de votre véhicule pour assurer une protection optimale.</p>`,
    },
    "energie-solaire-entreprises": {
      title: "L'énergie solaire: solution d'avenir pour les entreprises tchadiennes",
      image: solarEnergy,
      date: "2024-12-28",
      category: "Énergie Solaire",
      author: "EnerTchad Team",
      content: `<h2>L'énergie solaire au Tchad</h2><p>Avec 300 jours de soleil par an, le Tchad dispose d'un potentiel solaire exceptionnel qui reste largement sous-exploité.</p><h2>Réduction des coûts</h2><p>Les panneaux solaires peuvent réduire vos coûts énergétiques de 60% en moyenne. C'est un investissement rentable sur le long terme.</p><h2>Indépendance énergétique</h2><p>Produire votre propre énergie vous rend indépendant des fluctuations du marché et assure une alimentation stable pour votre entreprise.</p><h2>Solutions personnalisées</h2><p>EnerTchad propose des solutions solaires adaptées à la taille et aux besoins spécifiques de votre entreprise.</p><h2>Installation et maintenance</h2><p>Notre équipe d'experts assure l'installation complète et la maintenance de vos systèmes solaires pour une performance optimale.</p>`,
    },
    "maintenance-vehicule-saison-seche": {
      title: "Maintenance automobile en saison sèche: les points essentiels",
      image: fuelTips,
      date: "2024-12-20",
      category: "Entretien",
      author: "EnerTchad Team",
      content: `<h2>Défis de la saison sèche</h2><p>La saison sèche au Tchad pose des défis particuliers pour les véhicules: poussière, chaleur intense et routes poussiéreuses.</p><h2>Checklist de maintenance</h2><p>Vérifiez régulièrement: filtre à air, pneus, système de refroidissement, batterie et brakes.</p><h2>Protection contre la poussière</h2><p>La poussière du Sahel peut endommager votre moteur. Changez vos filtres à air plus fréquemment pendant cette période.</p><h2>Gestion thermique</h2><p>Le système de refroidissement est crucial. Vérifiez régulièrement le liquide de refroidissement et assurez-vous que le radiateur fonctionne correctement.</p><h2>Services EnerTchad</h2><p>Nos mécaniciens qualifiés peuvent effectuer une inspection complète de votre véhicule pour garantir sa sécurité et sa performance.</p>`,
    },
    "innovation-stations-service-connectees": {
      title: "Nos stations-service connectées: l'innovation au service du client",
      image: evCharging,
      date: "2024-12-15",
      category: "Innovation",
      author: "EnerTchad Team",
      content: `<h2>La transformation numérique</h2><p>EnerTchad se modernise avec des stations-service connectées offrant une expérience client supérieure.</p><h2>Paiement mobile</h2><p>Payez facilement avec votre téléphone. Plus besoin de traîner de l'argent liquide. C'est sûr, rapide et transparent.</p><h2>Suivi de consommation</h2><p>Grâce à notre application mobile, suivez votre consommation de carburant en temps réel et recevez des alertes de maintenance.</p><h2>Programme de fidélité</h2><p>Gagnez des points à chaque achat et bénéficiez d'offres exclusives. Plus vous nous visitez, plus vous économisez.</p><h2>Service client 24/7</h2><p>Notre équipe de support est disponible 24 heures sur 24 pour répondre à vos questions et résoudre vos problèmes.</p>`,
    },
  };

  const article = articleData[slug];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1E5FA8] mb-4">Article non trouvé</h1>
          <button
            onClick={() => router.push("/blog")}
            className="bg-[#3AA655] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d8242] transition"
          >
            Retour au blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <button
        onClick={() => router.push("/blog")}
        className="fixed top-8 left-8 z-10 flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/100 transition font-semibold text-[#1E5FA8]"
      >
        <ArrowLeft size={20} />
        <span>Retour</span>
      </button>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-[#1E5FA8] mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-gray-600 mb-8">
            <div className="flex items-center space-x-2">
              <Calendar size={20} />
              <span>{new Date(article.date).toLocaleDateString("fr-FR")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Tag size={20} />
              <span className="bg-[#3AA655] text-white px-3 py-1 rounded-full text-sm font-semibold">
                {article.category}
              </span>
            </div>
          </div>

          <div className="border-t border-b border-gray-200 py-4 mb-8">
            <p className="text-gray-600">
              <span className="font-semibold text-gray-900">Auteur:</span> {article.author}
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div
          className="text-gray-700 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{
            __html: article.content
              .replace(/<h2>/g, '<h2 class="text-3xl font-bold text-[#1E5FA8] mt-8 mb-4">')
              .replace(/<p>/g, '<p class="text-lg">')
              .replace(/<\/p>/g, '</p>'),
          }}
        />

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <Share2 size={24} className="text-[#1E5FA8]" />
            <span className="font-semibold text-gray-900">Partager cet article</span>
          </div>
          <div className="flex space-x-4 mt-4">
            <a
              href={`https://facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' ? window.location.href : ''}`}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${typeof window !== 'undefined' ? window.location.href : ''}&text=${article.title}`}
              className="bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition"
            >
              Twitter
            </a>
            <a
              href={`https://wa.me/?text=${article.title} ${typeof window !== 'undefined' ? window.location.href : ''}`}
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </article>

      {/* Related Articles CTA */}
      <section className="bg-[#F5E6D3] py-16 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1E5FA8] mb-4">Vous avez aimé cet article?</h2>
          <p className="text-gray-700 mb-8">
            Découvrez d'autres articles intéressants sur notre blog
          </p>
          <button
            onClick={() => router.push("/blog")}
            className="bg-gradient-to-r from-[#1E5FA8] to-[#3AA655] text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition"
          >
            Voir tous les articles
          </button>
        </div>
      </section>
    </div>
  );
}
