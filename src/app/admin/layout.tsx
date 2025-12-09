"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { BarChart3, Package, ShoppingCart, Settings, LogOut, Menu, X, Bell, Clock, BookOpen } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleLogout = () => {
    // Clear any auth tokens/session data here
    localStorage.removeItem("adminToken"); // If using token storage
    // Redirect to home
    router.push("/");
  };

  const menuItems = [
    { href: "/admin", icon: BarChart3, label: "Tableau de bord" },
    { href: "/admin/products", icon: Package, label: "Produits" },
    { href: "/admin/orders", icon: ShoppingCart, label: "Commandes" },
    { href: "/admin/blog", icon: BookOpen, label: "Articles" },
  ];

  const isActive = (href: string) => {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  };

  return (
    <div className="flex h-screen bg-gray-50 flex-col md:flex-row">
      {/* Overlay for mobile */}
      {sidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:static w-72 bg-gradient-to-b from-[#1E5FA8] via-[#1a4d8f] to-[#164a8a] text-white transition-transform duration-300 h-screen overflow-y-auto z-40 shadow-2xl`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#E6C34A] to-[#f5d76e] bg-clip-text text-transparent">
              EnerTchad
            </h1>
            <p className="text-xs text-white/60 mt-1">Admin Panel</p>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-white/20 rounded-lg transition md:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-8 space-y-2 px-4">
          {menuItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => isMobile && setSidebarOpen(false)}
                className={`flex items-center space-x-4 px-4 py-3 rounded-lg transition-all duration-200 ${
                  active
                    ? "bg-white/20 border-l-4 border-[#E6C34A] shadow-lg"
                    : "hover:bg-white/10 border-l-4 border-transparent"
                }`}
              >
                <item.icon size={22} className={active ? "text-[#E6C34A]" : "text-white/80"} />
                <span className={`font-medium text-sm ${active ? "font-bold text-white" : "text-white/80"}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0d3a66] to-transparent p-4">
          <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-white/10 rounded-lg transition">
            <div className="w-10 h-10 bg-gradient-to-br from-[#E6C34A] to-[#d4a028] rounded-lg flex items-center justify-center font-bold text-[#1E5FA8] flex-shrink-0">
              A
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold">Admin</p>
              <p className="text-xs text-white/60">Administrateur</p>
            </div>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full md:w-auto overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white shadow-sm border-b border-gray-200 h-auto md:h-20 flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 py-3 md:py-0 sticky top-0 z-30 gap-4 md:gap-0">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 md:gap-0">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg transition md:hidden flex-shrink-0"
              >
                <Menu size={20} />
              </button>
              <h2 className="text-xl md:text-3xl font-bold text-[#1E5FA8]">
                {menuItems.find(item => isActive(item.href))?.label || "Tableau de bord"}
              </h2>
            </div>
            <p className="text-xs md:text-sm text-gray-500 mt-2 md:mt-1 flex items-center space-x-2">
              <Clock size={14} />
              <span className="hidden sm:inline">Mise à jour: {new Date().toLocaleDateString("fr-FR", { weekday: "long", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}</span>
              <span className="sm:hidden">{new Date().toLocaleDateString("fr-FR", { month: "short", day: "numeric" })}</span>
            </p>
          </div>
          <div className="flex items-center space-x-3 md:space-x-6 flex-shrink-0">
            <button className="relative p-2 text-gray-600 hover:text-[#1E5FA8] hover:bg-gray-100 rounded-lg transition">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button
              onClick={handleLogout}
              className="px-3 md:px-4 py-2 text-xs md:text-sm text-white bg-gradient-to-r from-[#1E5FA8] to-[#E6C34A] rounded-lg hover:shadow-lg transition font-semibold flex items-center space-x-2 whitespace-nowrap"
            >
              <LogOut size={16} />
              <span>Déconnexion</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-4 md:p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
