"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Quels sont les horaires d'ouverture des stations EnerTchad?",
      answer: "Nos stations-service sont ouvertes 24 heures sur 24, 7 jours sur 7. Vous pouvez nous rendre visite à tout moment pour vos besoins en carburant et services automobiles.",
    },
    {
      question: "Comment fonctionne le système de recharge électrique?",
      answer: "Nos bornes de recharge rapide permettent de recharger votre véhicule électrique en 30 à 45 minutes. Il suffit de vous identifier avec votre carte de membre ou une application mobile dédiée.",
    },
    {
      question: "Quels types de carburants proposez-vous?",
      answer: "Nous proposons du carburant diesel et essence de qualité supérieure, conformes aux normes internationales. Nous avons aussi des lubrifiants premium et des huiles moteur spécialisées.",
    },
    {
      question: "Comment puis-je installer des panneaux solaires chez moi?",
      answer: "Contactez notre équipe de vente au 235-40-XX-XX. Nous effectuerons une étude gratuite de votre installation et vous proposerons un devis personnalisé.",
    },
    {
      question: "Offrez-vous des contrats d'entretien automobile?",
      answer: "Oui, nous proposons des contrats d'entretien complets pour tous types de véhicules. Nos mécaniciens certifiés utilisent des pièces de qualité originale.",
    },
    {
      question: "Quelle est votre politique de garantie?",
      answer: "Tous nos produits et services sont garantis. Les panneaux solaires bénéficient d'une garantie 25 ans, les batteries 10 ans, et nos services automobiles 12 mois.",
    },
  ];

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-[#F5E6D3] to-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#3AA655] font-bold text-sm uppercase tracking-widest inline-block mb-4 px-4 py-2 bg-green-100/50 rounded-full">
            ❓ Questions Fréquentes
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1E5FA8] mb-6">
            FAQ - <span className="bg-gradient-to-r from-[#3AA655] to-[#E6C34A] bg-clip-text text-transparent">Questions Réponses</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            Trouvez les réponses aux questions les plus fréquemment posées par nos clients
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#E6C34A] transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <h3 className="text-lg font-bold text-gray-900 text-left group-hover:text-[#1E5FA8]">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`text-[#1E5FA8] flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-8 pb-6 text-gray-700 leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
