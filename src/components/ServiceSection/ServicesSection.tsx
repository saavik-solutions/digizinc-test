
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
const services = [
  { id: "01", name: "Branding", text: "Build a unique and memorable identity with logos, brand strategy, and visual consistency tailored to your business." },
  { id: "02", name: "Digital", text: "Stunning designs that communicate your vision, from social media creatives to print materials." },
  { id: "03", name: "3D Visuals", text: "High-quality 3D renderings and animations that bring products, spaces, and concepts to life." },
  { id: "04", name: "Website", text: "User-centered interfaces that enhance digital experiences, ensuring seamless navigation and engagement." },
  { id: "05", name: "Youtube", text: "Impactful ad creatives designed to boost engagement and conversions across digital platforms." },
];

const ServicesSection = () => {
  const [active, setActive] = useState<string | null>(null);
  const navigate = useNavigate();
  const servicesRef = useRef<HTMLElement | null>(null);
  return (
    <section
      ref={servicesRef}
      className="bg-black text-white py-20 px-4 bg-[url('/Rectangle_10.png')] bg-cover bg-center bg-no-repeat m-0 p-0 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto text-center m-0 p-0">
        <h2 className="text-5xl font-bold">
          Your creative project, our <br />
          wide range of <span className="text-pink-500">service</span>
        </h2>

        {/* Service Cards */}
        <div className="flex justify-center items-center gap-8 mt-15 m-0 p-0">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`py-1 px-1 rounded-md cursor-pointer overflow-hidden flex flex-col items-start justify-start p-2 m-0
                ${
                  active === service.id
                    ? "w-[50px] h-[400px] bg-black text-white border-2 border-white"
                    : "w-[400px] h-[400px] bg-white text-black"
                }`}
              initial={{ width: 50, height: 400 }}
              animate={{ width: active === service.id ? 400 : 70, height: 300 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onMouseEnter={() => setActive(service.id)}
              onMouseLeave={() => setActive(null)}
            >
              <p className="text-lg font-bold">{service.id}</p>
              {active !== service.id && (
                <span
                  className="text-lg font-bold text-purple-800 mt-40"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                    display: "flex",
                    alignItems: "flex-end",
                    height: "100vh",
                  }}
                >
                  {service.name}
                </span>
              )}
              {active === service.id && (
                <>
                  <p className="text-sm mt-1 font-extrabold">{service.name}</p>
                  <p className="mt-2 text-extrabold text-white">{service.text}</p>
                </>
              )}
            </motion.div>
          ))}
        </div>

        <p className="text-white text-4xl mt-8 font-bold">
          Didn't Find Your <span className="text-purple-500">Service</span> Above?
        </p>
        <p className="text-white max-w-lg mx-auto mt-5">
          Our portfolio includes a wide array of categories. Perhaps an opportunity to work with you can help us expand it further.
        </p>

        {/* Scroll to Service Section Button */}
        <button
          onClick={() => navigate("/contactus")} 
          className="mt-6 px-6 py-2 bg-black-800 text-white font-bold rounded-lg border border-white-500 hover:bg-white-500 hover:text-white transition"
        >
          LET'S <span className="text-purple-800 hover:text-white transition">VIEW</span>
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
