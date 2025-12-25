import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { fishList } from "../components/FishData";
import { Thermometer, Droplet, Ruler, Clock, Users } from "lucide-react";

export default function FishDetail() {
  const { slug } = useParams();

  // always scroll to top when fish changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // find fish
  const fish = fishList.find((item) => item.slug === slug);

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

  const requirements = fish.requirements;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-10">
      {/* BACK BUTTON */}
      <Link to="/fish" className="text-teal-600 mb-4 inline-block text-sm">
        ← Back to Collection
      </Link>

      <div className="bg-white rounded-xl shadow p-4 sm:p-6 space-y-6">
        {/* IMAGE */}
        <div className="overflow-hidden rounded-lg">
          <img
            src={fish.image}
            alt={fish.name}
            className="w-full h[-420px] max-h-[60vh] object-cover m:h-72 md:h-96 rounded-lg bg-gray-100"
          />
        </div>

        {/* NAME & CATEGORY */}
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">{fish.name}</h1>
          <span className="inline-block mt-2 text-xs sm:text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            {fish.category}
          </span>
        </div>

        {/* ================= TANK REQUIREMENTS ================= */}
        {requirements ? (
          <div className="border rounded-xl p-4 sm:p-5 space-y-4">
            <h2 className="text-base sm:text-lg font-semibold">
              Tank Requirements
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <RequirementRow
                icon={Thermometer}
                title="Temperature"
                value={requirements.temperature}
              />
              <RequirementRow
                icon={Droplet}
                title="pH Level"
                value={requirements.ph}
              />
              <RequirementRow
                icon={Ruler}
                title="Tank Size"
                value={requirements.tankSize}
              />
              <RequirementRow
                icon={Clock}
                title="Lifespan"
                value={requirements.lifespan}
              />

              {/* TANK MATES */}
              <div className="flex gap-3 sm:col-span-2">
                <Users className="w-5 h-5 text-teal-600 mt-1" />
                <div>
                  <p className="text-xs text-gray-500">Compatible Tank Mates</p>
                  <p className="text-sm font-medium">{requirements.mates}</p>
                </div>
              </div>
            </div>

            {/* NOTES */}
            {requirements.notes && (
              <ul className="mt-4 list-disc pl-5 text-sm text-gray-600 space-y-1">
                {requirements.notes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            )}

            {/* BUY BUTTON */}
            <button
              onClick={() => (window.location.href = "https://t.me/Dueseller")}
              className="w-full mt-4 bg-teal-700 hover:bg-teal-800 text-white py-3 rounded-xl text-sm sm:text-base"
            >
              Buy Now
            </button>
          </div>
        ) : (
          <p className="text-gray-500 text-sm">
            Tank requirements not available for this fish.
          </p>
        )}
      </div>
    </div>
  );
}

/* ================= HELPER COMPONENT ================= */

function RequirementRow({ icon: Icon, title, value }) {
  if (!Icon || !value) return null;

  return (
    <div className="flex gap-3">
      <Icon className="w-5 h-5 text-teal-600 mt-1" />
      <div>
        <p className="text-xs text-gray-500">{title}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}
