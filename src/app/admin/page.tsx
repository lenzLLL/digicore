"use client";

import { BarChart3, TrendingUp, Package, ShoppingCart, ArrowUpRight, ArrowDownRight, Users, Zap } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Produits",
      value: "248",
      icon: Package,
      gradient: "from-[#1E5FA8] to-[#3a7ec8]",
      change: "+12%",
      positive: true,
      label: "vs mois dernier",
    },
    {
      title: "Commandes",
      value: "1,234",
      icon: ShoppingCart,
      gradient: "from-[#3AA655] to-[#5bc878]",
      change: "+8%",
      positive: true,
      label: "vs mois dernier",
    },
    {
      title: "Revenus Totaux",
      value: "45.2M",
      icon: Zap,
      gradient: "from-[#E6C34A] to-[#f5d76e]",
      change: "+23%",
      positive: true,
      label: "vs mois dernier",
    },
    {
      title: "Clients Actifs",
      value: "12.5K",
      icon: Users,
      gradient: "from-[#9333ea] to-[#c084fc]",
      change: "+15%",
      positive: true,
      label: "vs mois dernier",
    },
  ];


  const recentOrders = [
    {
      id: "#ORD-001",
      product: "Panneau Solaire 500W",
      customer: "Jean Dupont",
      status: "Livré",
      amount: "450,000 FCFA",
      date: "2025-12-08",
      icon: "✓",
    },
    {
      id: "#ORD-002",
      product: "Batterie 100Ah",
      customer: "Marie Martin",
      status: "En cours",
      amount: "250,000 FCFA",
      date: "2025-12-07",
      icon: "⏳",
    },
    {
      id: "#ORD-003",
      product: "Onduleur 3000W",
      customer: "Pierre Lefebvre",
      status: "En attente",
      amount: "380,000 FCFA",
      date: "2025-12-06",
      icon: "⚠️",
    },
  ];

  const topProducts = [
    { name: "Panneau Solaire 500W", sales: 156, revenue: "70.2M", trend: "+25%" },
    { name: "Batterie 100Ah", sales: 134, revenue: "33.5M", trend: "+18%" },
    { name: "Onduleur 3000W", sales: 98, revenue: "37.2M", trend: "+12%" },
  ];

  const monthlyData = [
    { month: "Jan", revenue: 2.5, orders: 45 },
    { month: "Fév", revenue: 3.1, orders: 58 },
    { month: "Mar", revenue: 3.8, orders: 72 },
    { month: "Avr", revenue: 3.5, orders: 65 },
    { month: "Mai", revenue: 4.2, orders: 85 },
    { month: "Juin", revenue: 4.0, orders: 78 },
    { month: "Juil", revenue: 4.7, orders: 92 },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 md:p-6 border border-gray-100"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-gray-600 text-xs md:text-sm font-medium">{stat.title}</p>
                  <p className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 md:mt-3">
                    {stat.value}
                  </p>
                  <div className="flex items-center space-x-2 mt-3">
                    <ArrowUpRight size={16} className="text-green-500" />
                    <span className="text-green-600 text-sm font-semibold">{stat.change}</span>
                    <span className="text-gray-500 text-xs">{stat.label}</span>
                  </div>
                </div>
                <div className={`bg-gradient-to-br ${stat.gradient} p-4 rounded-xl shadow-md`}>
                  <Icon className="text-white" size={28} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Revenu & Commandes</h3>
              <p className="text-xs md:text-sm text-gray-500 mt-1">Les 7 derniers mois</p>
            </div>
            <select className="px-3 md:px-4 py-2 border border-gray-200 rounded-lg text-xs md:text-sm text-gray-700 bg-white hover:bg-gray-50">
              <option>Derniers 7 mois</option>
              <option>Dernière année</option>
              <option>Tous les temps</option>
            </select>
          </div>

          <div className="space-y-6">
            {/* Revenue Chart */}
            <div>
              <p className="text-xs md:text-sm font-semibold text-gray-700 mb-3 md:mb-4">Revenus (Millions FCFA)</p>
              <div className="flex items-end justify-between h-40 md:h-48 gap-2 md:gap-3">
                {monthlyData.map((data, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-gradient-to-t from-[#1E5FA8] to-[#3a7ec8] rounded-t-lg hover:from-[#164a8a] hover:to-[#1E5FA8] transition-all" 
                      style={{ height: `${(data.revenue / 4.7) * 100}%` }} 
                    />
                    <span className="text-xs text-gray-600 mt-3 font-medium">{data.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-8">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6 md:mb-8">🏆 Produits Populaires</h3>
          <div className="space-y-5">
            {topProducts.map((product, idx) => (
              <div key={idx} className="border-b border-gray-100 pb-4 md:pb-5 last:border-b-0 last:pb-0">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2">
                  <p className="font-semibold text-gray-800 text-xs md:text-sm line-clamp-2">{product.name}</p>
                  <span className="text-green-600 text-xs font-bold whitespace-nowrap">{product.trend}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-gradient-to-r from-[#1E5FA8] to-[#E6C34A] h-2 rounded-full"
                    style={{ width: `${(product.sales / 156) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>{product.sales} ventes</span>
                  <span className="font-semibold text-[#1E5FA8]">{product.revenue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 md:p-8 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900">📋 Commandes Récentes</h3>
            <p className="text-xs md:text-sm text-gray-500 mt-1">Les 3 dernières commandes</p>
          </div>
          <a
            href="/admin/orders"
            className="text-[#1E5FA8] hover:text-[#E6C34A] text-xs md:text-sm font-bold flex items-center space-x-1 transition"
          >
            <span>Voir tout</span>
            <ArrowUpRight size={16} className="rotate-45" />
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs md:text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-3 md:py-4 px-3 md:px-8 font-bold text-gray-700 text-xs md:text-sm">Commande</th>
                <th className="text-left py-3 md:py-4 px-3 md:px-8 font-bold text-gray-700 text-xs md:text-sm hidden sm:table-cell">Produit</th>
                <th className="text-left py-3 md:py-4 px-3 md:px-8 font-bold text-gray-700 text-xs md:text-sm hidden md:table-cell">Client</th>
                <th className="text-left py-3 md:py-4 px-3 md:px-8 font-bold text-gray-700 text-xs md:text-sm">Statut</th>
                <th className="text-left py-3 md:py-4 px-3 md:px-8 font-bold text-gray-700 text-xs md:text-sm">Montant</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                  <td className="py-3 md:py-4 px-3 md:px-8">
                    <p className="font-bold text-[#1E5FA8] text-xs md:text-sm">{order.id}</p>
                    <p className="text-xs text-gray-500 mt-1">{order.date}</p>
                  </td>
                  <td className="py-3 md:py-4 px-3 md:px-8 text-gray-700 text-xs md:text-sm font-medium hidden sm:table-cell">
                    <p className="line-clamp-2">{order.product}</p>
                  </td>
                  <td className="py-3 md:py-4 px-3 md:px-8 text-gray-700 text-xs md:text-sm hidden md:table-cell">{order.customer}</td>
                  <td className="py-3 md:py-4 px-3 md:px-8">
                    <span
                      className={`px-2 md:px-3 py-1 rounded-full text-xs font-bold inline-flex items-center space-x-1 ${
                        order.status === "Livré"
                          ? "bg-green-100 text-green-700"
                          : order.status === "En cours"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      <span>{order.icon}</span>
                      <span className="hidden sm:inline">{order.status}</span>
                    </span>
                  </td>
                  <td className="py-3 md:py-4 px-3 md:px-8 font-bold text-[#3AA655] text-xs md:text-sm whitespace-nowrap">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
