import { Star } from "lucide-react";

export default function TestimonialCard({ name, role, content, rating, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <img
            src={image}
            alt={name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h3 className="font-bold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
      </div>

      <div className="flex space-x-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={18} className="fill-[#E6C34A] text-[#E6C34A]" />
        ))}
      </div>

      <p className="text-gray-700 leading-relaxed italic">"{content}"</p>
    </div>
  );
}
