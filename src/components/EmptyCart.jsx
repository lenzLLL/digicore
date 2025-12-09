"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="bg-gray-100 p-8 rounded-full mb-6">
        <ShoppingCart size={48} className="text-gray-400" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Panier vide</h2>
      <p className="text-gray-600 text-center mb-8 max-w-sm">
        Vous n'avez pas encore ajouté de produits à votre panier. Explorez notre boutique pour trouver les produits que vous cherchez.
      </p>
      <Link
        href="/shop"
        className="bg-gradient-to-r from-[#1E5FA8] to-[#3AA655] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition"
      >
        Continuer les achats
      </Link>
    </div>
  );
}
