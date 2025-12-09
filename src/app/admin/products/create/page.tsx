"use client";

import { useState } from "react";
import { ArrowLeft, Upload, X } from "lucide-react";
import Link from "next/link";

export default function CreateProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    stock: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        setErrors((prev) => ({
          ...prev,
          image: "Veuillez sélectionner une image valide",
        }));
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          image: "L'image ne doit pas dépasser 5MB",
        }));
        return;
      }

      setFormData((prev) => ({
        ...prev,
        image: file,
      }));

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      setErrors((prev) => ({
        ...prev,
        image: "",
      }));
    }
  };

  const removeImage = () => {
    setFormData((prev) => ({
      ...prev,
      image: null,
    }));
    setImagePreview(null);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Le nom du produit est obligatoire";
    }
    if (!formData.description.trim()) {
      newErrors.description = "La description est obligatoire";
    }
    if (!formData.category) {
      newErrors.category = "La catégorie est obligatoire";
    }
    if (!formData.price) {
      newErrors.price = "Le prix est obligatoire";
    } else if (isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      newErrors.price = "Le prix doit être un nombre positif";
    }
    if (!formData.stock) {
      newErrors.stock = "Le stock est obligatoire";
    } else if (isNaN(Number(formData.stock)) || Number(formData.stock) < 0) {
      newErrors.stock = "Le stock doit être un nombre positif";
    }
    if (!imagePreview) {
      newErrors.image = "L'image du produit est obligatoire";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Produit créé:", formData);
      alert("Produit créé avec succès!");
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: "",
        description: "",
        category: "",
        price: "",
        stock: "",
        image: null,
      });
      setImagePreview(null);
    }, 1000);
  };

  const categories = [
    "Énergie",
    "Stockage",
    "Électrique",
    "Accessoires",
    "Services",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-8">
        <Link
          href="/admin/products"
          className="flex items-center space-x-2 text-[#1E5FA8] hover:text-[#164a8a] font-semibold mb-4 transition"
        >
          <ArrowLeft size={20} />
          <span>Retour aux produits</span>
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Créer un nouveau produit</h1>
        <p className="text-gray-600 mt-2">Remplissez les informations ci-dessous pour ajouter un nouveau produit</p>
      </div>

      {/* Form */}
      <div className="p-8">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Image Upload */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 sticky top-24">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Image du produit</h2>

                {!imagePreview ? (
                  <label className="block">
                    <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#1E5FA8] hover:bg-blue-50 transition cursor-pointer group">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4 group-hover:text-[#1E5FA8]" />
                      <p className="text-sm font-semibold text-gray-700 group-hover:text-[#1E5FA8]">
                        Cliquez pour uploader
                      </p>
                      <p className="text-xs text-gray-500 mt-2">ou glissez-déposez</p>
                      <p className="text-xs text-gray-400 mt-3">PNG, JPG, GIF (max 5MB)</p>
                    </div>
                  </label>
                ) : (
                  <div className="relative">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-64 object-cover rounded-xl"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition shadow-lg"
                    >
                      <X size={20} />
                    </button>
                    <label className="absolute bottom-2 left-2 right-2">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <div className="bg-white text-center py-2 rounded-lg font-semibold text-sm text-[#1E5FA8] hover:bg-gray-100 cursor-pointer transition">
                        Changer l'image
                      </div>
                    </label>
                  </div>
                )}
                {errors.image && (
                  <p className="text-red-500 text-sm mt-3 font-semibold">{errors.image}</p>
                )}
              </div>
            </div>

            {/* Right Column - Form Fields */}
            <div className="lg:col-span-2 space-y-6">
              {/* Nom du produit */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <label className="block text-sm font-bold text-gray-900 mb-3">
                  Nom du produit *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ex: Panneau Solaire 500W"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5FA8] transition ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                )}
              </div>

              {/* Description */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <label className="block text-sm font-bold text-gray-900 mb-3">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Décrivez votre produit en détail..."
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5FA8] transition resize-none ${
                    errors.description ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.description && (
                  <p className="text-red-500 text-sm mt-2">{errors.description}</p>
                )}
              </div>

              {/* Catégorie */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <label className="block text-sm font-bold text-gray-900 mb-3">
                  Catégorie *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5FA8] transition ${
                    errors.category ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Sélectionnez une catégorie</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-red-500 text-sm mt-2">{errors.category}</p>
                )}
              </div>

              {/* Prix et Stock */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    Prix (FCFA) *
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="0"
                    min="0"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5FA8] transition ${
                      errors.price ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.price && (
                    <p className="text-red-500 text-sm mt-2">{errors.price}</p>
                  )}
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    Stock (unités) *
                  </label>
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleInputChange}
                    placeholder="0"
                    min="0"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5FA8] transition ${
                      errors.stock ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.stock && (
                    <p className="text-red-500 text-sm mt-2">{errors.stock}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <Link
              href="/admin/products"
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Annuler
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 bg-gradient-to-r from-[#1E5FA8] to-[#E6C34A] text-white rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed ${
                isSubmitting ? "opacity-50" : ""
              }`}
            >
              {isSubmitting ? "Création en cours..." : "Créer le produit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
