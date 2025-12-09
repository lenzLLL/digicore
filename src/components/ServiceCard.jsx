export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-8 border-2 border-transparent hover:border-[#E6C34A] group">
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#E6C34A] to-[#d4a028] rounded-xl mb-5 group-hover:scale-110 transition-transform shadow-md">
        <Icon size={28} className="text-white" />
      </div>
      <h3 className="font-bold text-xl text-[#1E5FA8] mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
