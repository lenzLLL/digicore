"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Search } from "lucide-react";

export default function ProductsPage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Panneau Solaire 500W",
      category: "Énergie",
      price: 450000,
      stock: 45,
      status: "Actif",
    },
    {
      id: 2,
      name: "Batterie 100Ah",
      category: "Stockage",
      price: 250000,
      stock: 28,
      status: "Actif",
    },
    {
      id: 3,
      name: "Onduleur 3000W",
      category: "Électrique",
      price: 380000,
      stock: 12,
      status: "Faible stock",
    },
    {
      id: 4,
      name: "Kit Solaire Complet",
      category: "Énergie",
      price: 899000,
      stock: 5,
      status: "Critique",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#1E5FA8]">Gestion des Produits</h1>
        <a
          href="/admin/products/create"
          className="bg-gradient-to-r from-[#1E5FA8] to-[#E6C34A] text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:shadow-lg transition"
        >
          <Plus size={20} />
          <span>Ajouter un produit</span>
        </a>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-4 py-2">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-100 flex-1 outline-none"
          />
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-[#1E5FA8] to-[#164a8a] text-white">
            <tr>
              <th className="text-left py-4 px-6 font-semibold">Produit</th>
              <th className="text-left py-4 px-6 font-semibold">Catégorie</th>
              <th className="text-left py-4 px-6 font-semibold">Prix</th>
              <th className="text-left py-4 px-6 font-semibold">Stock</th>
              <th className="text-left py-4 px-6 font-semibold">Statut</th>
              <th className="text-left py-4 px-6 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, idx) => (
              <tr
                key={product.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="py-4 px-6">
                  <p className="font-semibold text-gray-800">{product.name}</p>
                </td>
                <td className="py-4 px-6 text-gray-600">{product.category}</td>
                <td className="py-4 px-6">
                  <p className="font-semibold text-[#1E5FA8]">
                    {product.price.toLocaleString()} FCFA
                  </p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-semibold">{product.stock} units</p>
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      product.status === "Actif"
                        ? "bg-green-100 text-green-700"
                        : product.status === "Faible stock"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex space-x-3">
                    <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition">
                      <Edit2 size={18} />
                    </button>
                    <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
