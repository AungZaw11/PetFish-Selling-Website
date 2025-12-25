import diver from "../assets/Legacy/diver.webp";
import clock from "../assets/Legacy/clock.svg";
import heart from "../assets/Legacy/heart.svg";
import people from "../assets/Legacy/people.svg";

function OurLegacy() {
  const values = [
    {
      icon: clock,
      title: "3 Years",
      desc: "Serving the community since 2022.",
    },
    {
      icon: heart,
      title: "Ethical Sourcing",
      desc: "We prioritize sustainability and health.",
    },
    {
      icon: people,
      title: "Community First",
      desc: "Building a network of passionate hobbyists.",
    },
  ];

  const stats = [
    { value: "3", label: "Years Experience" },
    { value: "1787", label: "Happy Customers" },
    { value: "3", label: "Species Available" },
    { value: "98%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="w-full bg-cyan-50">
      {/* HERO */}
      <section className="bg-[#003366] text-white px-4 py-20 text-center">
        <h1 className="text-3xl font-bold md:text-4xl">Our Legacy</h1>
        <p className="opacity-80 mt-3 text-sm text-blue-100 max-w-xl mx-auto md:text-base">
          Over 20 years of passion, expertise, and dedication to the aquarium
          hobby.
        </p>
      </section>

      {/* ABOUT */}
      <section className="px-4 py-14 max-w-6xl mx-auto">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
          {/* Text */}
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold text-blue-900 md:text-2xl">
              More Than Just a Store
            </h2>

            <p className="mt-4 leading-loose text-sm text-slate-700 md:text-base">
              Founded in 2003, AquaPrime started as a small basement breeding
              project and has grown into the country’s premier destination for
              rare and exotic fish. We believe that an aquarium is not just a
              decoration, but a living ecosystem that brings peace and nature
              into your home.
            </p>

            <p className="mt-3 leading-loose text-sm text-slate-700 md:text-base">
              Our team consists of marine biologists and lifelong hobbyists who
              personally vet every fish that enters our facility. We don’t just
              sell fish; we build relationships with our customers to ensure
              their success in the hobby.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={diver}
              alt="Diver with fish"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-4 pb-16 max-w-6xl mx-auto">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-sm"
            >
              {/* Icon */}
              <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                <img src={item.icon} alt={item.title} className="w-6 h-6" />
              </div>

              <h3 className="font-semibold text-blue-900">{item.title}</h3>
              <p className="mt-2 text-xs text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section className="px-4 pb-20 flex justify-center">
        <div className="w-full max-w-4xl">
          {/* no gap here */}
          <div className="flex flex-col sm:flex-row">
            {/* Video 1 */}
            <div className="w-full sm:w-1/2">
              <div className="relative aspect-[9/16] overflow-hidden shadow-lg">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/LcLcOp1Png4"
                  title="ငါးတောက်ခေါက်နဲ့ Wild Betta ဘယ်လိုခွဲမလဲ?"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 2 */}
            <div className="w-full sm:w-1/2">
              <div className="relative aspect-[9/16] overflow-hidden shadow-lg">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/n5aih2Wr4yQ"
                  title="ဖိုက်တာဆိုတာဘာလဲ?"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-4 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 text-center shadow-sm"
            >
              <p className="text-2xl font-bold text-cyan-500">{item.value}</p>
              <p className="mt-1 text-xs text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default OurLegacy;



