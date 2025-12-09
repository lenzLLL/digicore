import { MessageCircle, Phone, Mail } from "lucide-react";

export default function WhatsAppContact() {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-[#1E5FA8] to-[#3AA655] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E6C34A]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left side - Info */}
            <div className="bg-gradient-to-br from-[#1E5FA8] to-[#164a8a] p-12 text-white flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Parlons ensemble
              </h2>
              <p className="text-lg text-gray-100 mb-10 leading-relaxed">
                Vous avez des questions sur nos services? Notre équipe est disponible pour discuter de vos besoins énergétiques et trouver les meilleures solutions pour votre entreprise.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E6C34A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-[#1E5FA8]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Disponible sur WhatsApp</h3>
                    <p className="text-gray-100">Réponses instantanées 24/7</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E6C34A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#1E5FA8]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Support par téléphone</h3>
                    <p className="text-gray-100">+235 XX XX XX XX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E6C34A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#1E5FA8]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Formulaire de contact</h3>
                    <p className="text-gray-100">Accessible 24/7 en ligne</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - CTA Buttons */}
            <div className="p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <a
                  href="https://wa.me/235XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-gradient-to-r from-[#25D366] to-[#20BA58] text-white px-8 py-5 rounded-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105 text-lg group"
                >
                  <MessageCircle size={24} />
                  <span>Envoyer un WhatsApp</span>
                </a>

                <a
                  href="tel:+235XXXXXXXXX"
                  className="flex items-center justify-center space-x-3 bg-gradient-to-r from-[#1E5FA8] to-[#164a8a] text-white px-8 py-5 rounded-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105 text-lg"
                >
                  <Phone size={24} />
                  <span>Appeler maintenant</span>
                </a>

                <a
                  href="/contact"
                  className="flex items-center justify-center space-x-3 border-2 border-[#1E5FA8] text-[#1E5FA8] px-8 py-5 rounded-xl font-bold hover:bg-[#1E5FA8] hover:text-white transition-all transform hover:scale-105 text-lg"
                >
                  <Mail size={24} />
                  <span>Envoyer un message</span>
                </a>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center mb-4">
                    Temps de réponse moyen: 2-5 minutes
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-sm font-semibold text-gray-700">En ligne maintenant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
