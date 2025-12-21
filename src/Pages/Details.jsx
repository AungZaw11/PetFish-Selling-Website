import { useParams, Link } from "react-router-dom";
import { fishList } from "../components/FishData";

export default function FishDetail() {
  const { slug } = useParams();
  const fish = fishList.find((f) => f.slug === slug);

  if (!fish) {
    return (
      <div className="text-center py-20">
        <p className="text-xl">Fish not found</p>
        <Link to="/fish" className="text-teal-600 underline">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Link to="/fish" className="text-teal-600 mb-6 inline-block">
        ← Back to Collection
      </Link>

      <div className="bg-white rounded-xl shadow p-6">
        <img
          src={fish.image}
          alt={fish.name}
          className="w-full h-110 object-cover rounded-lg mb-6"
        />

        <h1 className="text-2xl font-bold mb-2">{fish.name}</h1>
        <span className="inline-block mb-4 text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          {fish.category}
        </span>

        <p className="text-gray-600 leading-relaxed">
          {fish.description}
        </p>
      </div>
    </div>
  );
}
