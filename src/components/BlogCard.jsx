import { Calendar, Tag } from "lucide-react";

export default function BlogCard({
  slug,
  title,
  excerpt,
  image,
  date,
  category,
}) {
  return (
    <a href={`/blog/${slug}`}>
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden cursor-pointer group h-full border-2 border-transparent hover:border-[#E6C34A]">
        <div className="relative h-56 bg-gray-200 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3 bg-[#3AA655] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
            <Tag size={14} />
            <span>{category}</span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg text-[#1E5FA8] mb-2 line-clamp-2 group-hover:text-[#E6C34A] transition">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{excerpt}</p>
          <div className="flex items-center text-xs text-gray-500 space-x-2">
            <Calendar size={14} />
            <span>{new Date(date).toLocaleDateString("fr-FR")}</span>
          </div>
        </div>
      </div>
    </a>
  );
}
