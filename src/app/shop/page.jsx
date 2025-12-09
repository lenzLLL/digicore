"use client";

import { useState } from "react";
import { Search, ShoppingCart, Plus, Minus, X, Check } from "lucide-react";
import { useCart } from "../../context/CartContext";
import EmptyCart from "../../components/EmptyCart";
import ProductCard from "../../components/ProductCard";

const oilImage =
  "https://raw.createusercontent.com/6b48fe65-3ab6-4f4e-8a8d-3aa92bfcaa1c/";
const solarImage =
  "https://raw.createusercontent.com/5222af1a-cfb4-4e80-a98e-84c680d4ac32/";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const { 
    cart, 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    cartTotal, 
    cartCount 
  } = useCart();

  const products = [
    {
      id: 1,
      name: "Huile Moteur Premium 5L",
      category: "Huile",
      price: 15000,
      image: oilImage,
      description: "Huile moteur de qualité supérieure pour tous types de véhicules",
    },
    {
      id: 2,
      name: "Huile Diesel 200L",
      category: "Huile",
      price: 285000,
      image: oilImage,
      description: "Huile diesel en vrac pour stations-service",
    },
    {
      id: 3,
      name: "Huile Essence 5L",
      category: "Huile",
      price: 14500,
      image: oilImage,
      description: "Huile essence haute performance",
    },
    {
      id: 4,
      name: "Filtre à Air Auto",
      category: "Pièces",
      price: 8500,
      image: oilImage,
      description: "Filtre à air pour moteurs automobiles",
    },
    {
      id: 5,
      name: "Filtre à Huile",
      category: "Pièces",
      price: 6800,
      image: oilImage,
      description: "Filtre à huile moteur professionnel",
    },
    {
      id: 6,
      name: "Batterie Auto 12V",
      category: "Pièces",
      price: 35000,
      image: oilImage,
      description: "Batterie automobile 12V haute capacité",
    },
    {
      id: 7,
      name: "Kit Panneau Solaire 5kW",
      category: "Énergie",
      price: 2500000,
      image: solarImage,
      description: "Kit solaire complet 5kW avec installation",
    },
    {
      id: 8,
      name: "Kit Solaire Résidentiel 3kW",
      category: "Énergie",
      price: 1500000,
      image: solarImage,
      description: "Kit solaire résidentiel 3kW",
    },
    {
      id: 9,
      name: "Batterie Stockage 10kWh",
      category: "Énergie",
      price: 3200000,
      image: solarImage,
      description: "Batterie de stockage 10kWh pour système solaire",
    },
    {
      id: 10,
      name: "Additif Carburant",
      category: "Additifs",
      price: 5500,
      image: oilImage,
      description: "Additif carburant nettoyant et protecteur",
    },
    {
      id: 11,
      name: "Débactérisant Diesel",
      category: "Additifs",
      price: 4200,
      image: oilImage,
      description: "Débactérisant pour réservoirs diesel",
    },
    {
      id: 12,
      name: "Lubrifiant Chain Pro",
      category: "Lubrifiant",
      price: 9800,
      image: oilImage,
      description: "Lubrifiant professionnel pour chaînes",
    },
  ];

  const categories = [
    "Tous",
    "Huile",
    "Pièces",
    "Énergie",
    "Additifs",
    "Lubrifiant",
  ];

  const filteredProducts = products.filter((p) => {
    const matchCategory = selectedCategory === "Tous" || p.category === selectedCategory;
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      description: product.description,
      quantity: 1,
    });
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      setShowCart(false);
      setOrderPlaced(false);
    }, 3000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E5FA8] via-[#164a8a] to-[#3AA655]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E6C34A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E6C34A] rounded-full blur-3xl"></div>
        </div>
        <img
          src={solarImage}
          alt="Boutique EnerTchad"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-6 inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/30">
            <span className="text-white font-semibold text-sm">🛍️ NOTRE BOUTIQUE</span>
          </div>
          <h1 className="font-bold text-6xl md:text-7xl mb-6 leading-tight">
            Vos Produits <span className="text-[#E6C34A]">Essentiels</span>
          </h1>
          <p className="text-xl text-gray-100 mb-8">
            Qualité premium pour tous vos besoins énergétiques et automobiles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#E6C34A] text-[#1E5FA8] px-8 py-3 rounded-lg font-bold hover:bg-white transition-all transform hover:scale-105">
              Explorer nos Produits
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all">
              En Savoir Plus
            </button>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Search & Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
              <div className="flex-1 w-full relative">
                <Search
                  className="absolute left-4 top-3 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1E5FA8]"
                />
              </div>
              <button
                onClick={() => setShowCart(!showCart)}
                className="relative bg-gradient-to-r from-[#1E5FA8] to-[#3AA655] text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:shadow-lg transition"
              >
                <ShoppingCart size={20} />
                <span>Panier ({cartCount})</span>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#E6C34A] text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-[#1E5FA8] to-[#3AA655] text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-[#1E5FA8]">
                          {(product.price).toLocaleString()} FCFA
                        </span>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="bg-[#3AA655] text-white px-4 py-2 rounded-lg hover:bg-[#2d8242] transition font-semibold"
                        >
                          Ajouter
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12 col-span-3">
                  <p className="text-gray-500 text-lg">
                    Aucun produit trouvé dans cette catégorie.
                  </p>
                </div>
              )}
            </div>

            {/* Shopping Cart Sidebar - Always Visible */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Panier</h2>
                  <button
                    onClick={() => setShowCart(false)}
                    className="p-1 hover:bg-gray-100 rounded lg:hidden"
                  >
                    <X size={20} />
                  </button>
                </div>

                {orderPlaced && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-500 rounded-lg text-center">
                    <Check size={24} className="text-green-600 mx-auto mb-2" />
                    <p className="text-green-700 font-semibold">
                      Commande placée avec succès!
                    </p>
                  </div>
                )}

                {cart.length === 0 ? (
                  <EmptyCart />
                ) : (
                  <>
                    <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="border border-gray-200 rounded-lg p-3"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <span className="font-semibold text-sm line-clamp-2">
                              {item.name}
                            </span>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <X size={16} />
                            </button>
                          </div>
                          <p className="text-[#1E5FA8] font-bold mb-2">
                            {(item.price).toLocaleString()} FCFA
                          </p>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="p-1 bg-gray-200 rounded hover:bg-gray-300"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="p-1 bg-gray-200 rounded hover:bg-gray-300"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-200 pt-4 mb-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-bold">Total:</span>
                        <span className="text-2xl font-bold text-[#3AA655]">
                          {(cartTotal).toLocaleString()} FCFA
                        </span>
                      </div>
                      <button
                        onClick={handlePlaceOrder}
                        disabled={cart.length === 0}
                        className="w-full bg-gradient-to-r from-[#1E5FA8] to-[#3AA655] text-white py-3 rounded-lg font-bold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Passer la commande
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1E5FA8] mb-4">
            Des questions sur nos produits ?
          </h2>
          <p className="text-gray-600 mb-6">
            Notre équipe est disponible pour vous aider 24/7
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#1E5FA8] to-[#E6C34A] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </div>
  );
}
