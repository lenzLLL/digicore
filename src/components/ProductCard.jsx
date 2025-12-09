import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ id, image, name, category, price, description = "" }) {
  const { addToCart } = useCart();

  // Convertir le prix en nombre si c'est une string
  const numericPrice = typeof price === "string" 
    ? parseInt(price.replace(/[.,]/g, "")) 
    : price;

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price: numericPrice,
      image,
      category,
      description: description || name,
      quantity: 1,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group border-2 border-gray-100 hover:border-[#3AA655]">
      <div className="relative h-56 bg-gray-100 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-[#3AA655] text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
          {category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-[#1E5FA8] mb-3 line-clamp-2 text-lg">
          {name}
        </h3>
        <div className="flex justify-between items-center mt-4">
          <div>
            <span className="text-3xl font-bold text-[#1E5FA8]">{typeof price === "string" ? price : numericPrice.toLocaleString()}</span>
            <span className="text-gray-600 ml-1">F</span>
          </div>
          <button 
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-[#E6C34A] to-[#d4a028] text-white p-3 rounded-lg hover:shadow-xl transition-all group-hover:scale-110"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}



