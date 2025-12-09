"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Search, Eye } from "lucide-react";

export default function BlogPage() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "L'énergie solaire: L'avenir du Tchad",
      category: "Énergie",
      author: "Ahmed Hassan",
      status: "Publié",
      date: "2025-12-15",
      views: 1234,
    },
    {
      id: 2,
      title: "Mobilité électrique: La révolution commence",
      category: "Mobilité",
      author: "Fatima Abdoulaye",
      status: "Publié",
      date: "2025-12-12",
      views: 856,
    },
    {
      id: 3,
      title: "Maintenance auto: 5 conseils pour prolonger la vie de votre véhicule",
      category: "Maintenance",
      author: "Jean Pierre Dubois",
      status: "Brouillon",
      date: "2025-12-08",
      views: 0,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter((a) =>
    a.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#1E5FA8]">Gestion des Articles</h1>
        <a
          href="/admin/blog/create"
          className="bg-gradient-to-r from-[#1E5FA8] to-[#E6C34A] text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:shadow-lg transition"
        >
          <Plus size={20} />
          <span>Ajouter un article</span>
        </a>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-4 py-2">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher un article..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-100 flex-1 outline-none"
          />
        </div>
      </div>

      {/* Articles Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-[#1E5FA8] to-[#164a8a] text-white">
            <tr>
              <th className="text-left py-4 px-6 font-semibold">Titre</th>
              <th className="text-left py-4 px-6 font-semibold">Catégorie</th>
              <th className="text-left py-4 px-6 font-semibold">Auteur</th>
              <th className="text-left py-4 px-6 font-semibold">Statut</th>
              <th className="text-left py-4 px-6 font-semibold">Vues</th>
              <th className="text-left py-4 px-6 font-semibold">Date</th>
              <th className="text-left py-4 px-6 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredArticles.map((article) => (
              <tr
                key={article.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="py-4 px-6">
                  <p className="font-semibold text-gray-800">{article.title}</p>
                </td>
                <td className="py-4 px-6 text-gray-600">{article.category}</td>
                <td className="py-4 px-6 text-gray-600">{article.author}</td>
                <td className="py-4 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      article.status === "Publié"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {article.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <p className="font-semibold">{article.views} vues</p>
                </td>
                <td className="py-4 px-6 text-gray-600">{article.date}</td>
                <td className="py-4 px-6">
                  <div className="flex space-x-3">
                    <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition">
                      <Eye size={18} />
                    </button>
                    <button className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition">
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
