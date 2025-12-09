"use client";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);      // Menu mobile
  const [cartOpen, setCartOpen] = useState(false);  // Modal panier
  const { cart, cartCount, cartTotal, removeFromCart } = useCart();

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Boutique", href: "/shop" },
    { label: "Blog", href: "/blog" },
    { label: "À propos", href: "/about" },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* LOGO */}
            <a href="/" className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
            </a>

            {/* MENU DESKTOP */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-[#1E5FA8] px-4 py-2 font-medium transition-colors rounded-lg hover:bg-gray-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/contact"
                className="ml-4 text-gray-700 hover:text-[#1E5FA8] px-4 py-2 font-medium transition-colors rounded-lg hover:bg-gray-100"
              >
                Contact
              </a>
            </div>

            {/* PANIER + BOUTON ACHETER */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                className="relative text-[#1E5FA8]"
                onClick={() => setCartOpen(true)}
              >
                <ShoppingCart size={26} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>

              <a
                href="/shop"
                className="bg-[#1E5FA8] hover:bg-[#174a86] text-white px-6 py-2 rounded-lg font-bold transition-colors"
              >
                Acheter
              </a>
            </div>

            {/* BOUTON MOBILE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#1E5FA8]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* MENU MOBILE */}
          {isOpen && (
            <div className="md:hidden pb-6 border-t border-gray-200">
              <div className="space-y-1 py-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#1E5FA8] rounded-lg font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3 px-2">
                <button
                  onClick={() => setCartOpen(true)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-50 text-[#1E5FA8] rounded-lg font-semibold hover:bg-blue-100 transition-colors"
                >
                  <ShoppingCart size={20} /> Panier
                </button>

                <a
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full block text-center px-4 py-3 bg-gradient-to-r from-[#1E5FA8] to-[#3AA655] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Nous Contacter
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* 🛒 MODAL PANIER */}
      {cartOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] flex justify-end">
          <div className="w-80 bg-white h-full shadow-xl p-5 animate-slideLeft flex flex-col rounded-l-lg">

            {/* HEADER MODAL */}
            <div className="flex justify-between items-center mb-4 p-3 rounded-t-lg bg-[#1E5FA8]">
              <h2 className="text-xl font-bold text-white">Votre Panier</h2>
              <button onClick={() => setCartOpen(false)}>
                <X size={24} className="text-white"/>
              </button>
            </div>

            {/* LISTE DES PRODUITS */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-6">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500 py-8">Votre panier est vide</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b pb-2">
                    
                    {/* IMAGE + INFO PRODUIT */}
                    <div className="flex items-center gap-3">
                      <img 
                        src={item.image || "/placeholder.png"}
                        alt={item.name} 
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-gray-600">
                          {item.quantity} × {(item.price).toLocaleString()} CFA
                        </p>
                      </div>
                    </div>

                    {/* BOUTON SUPPRIMER */}
                    <div className="flex flex-col items-end gap-2">
                      <p className="font-bold text-[#1E5FA8]">{(item.price * item.quantity).toLocaleString()} CFA</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 text-xs"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* TOTAL */}
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total :</span>
              <span>{(cartTotal).toLocaleString()} CFA</span>
            </div>

            {/* BOUTON COMMANDER */}
            <button
              disabled={cart.length === 0}
              onClick={() => setCartOpen(false)}
              className={`block w-full py-3 rounded-lg text-center font-bold text-white transition-colors ${
                cart.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#1E5FA8] hover:bg-[#174a86]"
              }`}
            >
              {cart.length === 0 ? "Panier vide" : "Continuer"}
            </button>
          </div>
        </div>
      )}

      {/* ANIMATION */}
      <style>{`
        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slideLeft {
          animation: slideLeft 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
