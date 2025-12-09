import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1E5FA8] to-[#164a8a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Entreprise */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo.png" 
                alt="EnerTchad Logo" 
                className="h-12 w-auto"
              />
              <h3 className="font-bold text-xl">EnerTchad</h3>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed mb-6">
              L'énergie qui fait avancer le Tchad. Distribution de carburant,
              énergies renouvelables et mobilité électrique.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-[#E6C34A] hover:text-[#1E5FA8] transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-[#E6C34A] hover:text-[#1E5FA8] transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-[#E6C34A] hover:text-[#1E5FA8] transition"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-[#E6C34A] hover:text-[#1E5FA8] transition"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Nos Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/services"
                  className="text-gray-200 hover:text-[#E6C34A] transition"
                >
                  Stations-service
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-200 hover:text-[#E6C34A] transition"
                >
                  Recharge électrique
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-200 hover:text-[#E6C34A] transition"
                >
                  Énergie solaire
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-200 hover:text-[#E6C34A] transition"
                >
                  Huiles moteur
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-200 hover:text-[#E6C34A] transition"
                >
                  Laverie automobile
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-200 hover:text-[#E6C34A] transition"
                >
                  Maintenance auto
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liens rapides</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/"
                  className="text-gray-200 hover:text-[#E6C34A] transition"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-200 hover:text-[#E6C34A] transition"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="/shop"
                  className="text-gray-200 hover:text-[#E6C34A] transition"
                >
                  Boutique
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-200 hover:text-[#E6C34A] transition"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-200 hover:text-[#E6C34A] transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Nous contacter</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Phone
                  size={18}
                  className="text-[#E6C34A] mt-1 flex-shrink-0"
                />
                <div>
                  <div className="text-gray-200">+235 62 123 456</div>
                  <div className="text-gray-300 text-xs">Lun - Dim: 24/7</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-[#E6C34A] mt-1 flex-shrink-0" />
                <div>
                  <div className="text-gray-200">contact@enertchad.td</div>
                  <div className="text-gray-300 text-xs">Réponse sous 24h</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="text-[#E6C34A] mt-1 flex-shrink-0"
                />
                <span className="text-gray-200">
                  Avenue Charles de Gaulle
                  <br />
                  N'Djaména, Tchad
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-center text-gray-300 text-sm">
              &copy; 2025 EnerTchad S.A. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-xs text-gray-300">
              <a href="#" className="hover:text-[#E6C34A] transition">
                Mentions légales
              </a>
              <a href="#" className="hover:text-[#E6C34A] transition">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-[#E6C34A] transition">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
