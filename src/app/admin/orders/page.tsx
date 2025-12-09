"use client";

import { useState } from "react";
import { Eye, Edit2, Trash2, Search, Filter } from "lucide-react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([
    {
      id: "#ORD-001",
      customer: "Jean Dupont",
      product: "Panneau Solaire 500W",
      amount: 450000,
      status: "Livré",
      date: "2025-12-08",
    },
    {
      id: "#ORD-002",
      customer: "Marie Martin",
      product: "Batterie 100Ah",
      amount: 250000,
      status: "En cours",
      date: "2025-12-07",
    },
    {
      id: "#ORD-003",
      customer: "Pierre Lefebvre",
      product: "Onduleur 3000W",
      amount: 380000,
      status: "En attente",
      date: "2025-12-06",
    },
    {
      id: "#ORD-004",
      customer: "Sophie Robert",
      product: "Kit Solaire Complet",
      amount: 899000,
      status: "Livré",
      date: "2025-12-05",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("Tous");

  const filteredOrders = orders.filter((o) => {
    const matchSearch =
      o.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = filterStatus === "Tous" || o.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const statuses = ["Tous", "Livré", "En cours", "En attente", "Annulée"];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#1E5FA8]">Gestion des Commandes</h1>
        <div className="text-right">
          <p className="text-gray-600">Total: {orders.length} commandes</p>
          <p className="text-2xl font-bold text-[#3AA655]">
            {(orders.reduce((sum, o) => sum + o.amount, 0) / 1000000).toFixed(1)}M FCFA
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4 space-y-4">
        <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-4 py-2">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher par client ou ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-100 flex-1 outline-none"
          />
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto pb-2">
          <Filter size={20} className="text-gray-600" />
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg font-semibold transition whitespace-nowrap ${
                filterStatus === status
                  ? "bg-gradient-to-r from-[#1E5FA8] to-[#E6C34A] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-[#1E5FA8] to-[#164a8a] text-white">
            <tr>
              <th className="text-left py-4 px-6 font-semibold">ID Commande</th>
              <th className="text-left py-4 px-6 font-semibold">Client</th>
              <th className="text-left py-4 px-6 font-semibold">Produit</th>
              <th className="text-left py-4 px-6 font-semibold">Montant</th>
              <th className="text-left py-4 px-6 font-semibold">Statut</th>
              <th className="text-left py-4 px-6 font-semibold">Date</th>
              <th className="text-left py-4 px-6 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="py-4 px-6">
                  <p className="font-semibold text-[#1E5FA8]">{order.id}</p>
                </td>
                <td className="py-4 px-6 text-gray-700">{order.customer}</td>
                <td className="py-4 px-6 text-gray-700">{order.product}</td>
                <td className="py-4 px-6">
                  <p className="font-semibold text-[#3AA655]">
                    {order.amount.toLocaleString()} FCFA
                  </p>
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      order.status === "Livré"
                        ? "bg-green-100 text-green-700"
                        : order.status === "En cours"
                        ? "bg-blue-100 text-blue-700"
                        : order.status === "En attente"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-600">{order.date}</td>
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
