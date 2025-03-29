import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

const ServicePackages = () => {
  const navigate = useNavigate(); // Initialize navigation hook

  const packages = useMemo(
    () => [
      {
        title: "STARTUP BRANDING PACKAGE. Perfect for new brands looking to establish a strong identity.",
        features: [
          "Logo Design",
          "Brand Strategy & Visual Identity",
          "Business Card & Stationery Design",
          "Brand Guidelines",
        ],
        bgImage: "/rocket.png",
      },
      {
        title: "SOCIAL MEDIA DOMINATION PACKAGE. For brands ready to rule social media.",
        features: [
          "Social Media Creative Assets (10 posts/month)",
          "Content Strategy & Copywriting",
          "Motion Graphics & Video Editing",
          "Banner & Display Ads",
        ],
        bgImage: "/media.png",
      },
      {
        title: "VIDEO & MOTION MASTERY PACKAGE. For brands that want to make an impact through video.",
        features: [
          "Explainer Videos",
          "Social Media Reels & Shorts",
          "Video Editing & Post-Production",
          "Cinematic Ad Production",
        ],
        bgImage: "/motion.png",
      },
      {
        title: "FULL CREATIVE SUITE. The ultimate package for businesses that need it all.",
        features: ["Branding", "Website UI/UX", "Social Media", "Ad Creatives", "Video & Motion"],
        bgImage: "/Package.png",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center py-12 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Group_146.png')" }}>
      <h2 className="text-white font-bold text-3xl text-center mb-6">
        TAILORED <span className="text-pink-500">CREATIVITY</span>, BUNDLED FOR <span className="text-pink-500">IMPACT</span>
      </h2>
      <p className="text-white text-center max-w-1xl">
        Why settle for one when you can have a power-packed creative solution? At Digizinc, our custom-curated packages bring together the best of branding, content, and digital experience—seamlessly, efficiently, and at the best value.
      </p>

      {/* Decorative Image */}
      <img src="/bigstar.png" alt="Star" className="absolute top-[1710px] left-[450px] w-12 h-12" loading="lazy" />

      <h2 className="text-white font-bold text-3xl text-center my-6 mt-10">
        SERVICE <span className="text-pink-500">PACKAGES</span>
      </h2>

      {/* Service Packages Container */}
      <div className="w-full max-w-5xl flex flex-col items-center gap-10">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="relative text-white p-6 rounded-xl shadow-lg border border-white w-[90%] md:w-[75%] bg-cover bg-center bg-no-repeat cursor-pointer group transition-transform hover:scale-105"
            style={{ backgroundImage: "url('/Rectangle_140.png')" }}
            onClick={() => navigate("/packageform")}
          >
            {/* Floating Icon outside the box */}
            <img
              src={pkg.bgImage}
              alt="Package Icon"
              className="absolute -top-7 -left-7 w-18 h-18 transition-transform group-hover:scale-110"
              loading="lazy"
            />

            <h2 className="text-2xl font-bold uppercase">{pkg.title}</h2>
            <ul className="list-disc list-inside mt-2 text-sm">
              {pkg.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              className="absolute right-4 bottom-4 bg-white text-purple-800 p-3 rounded-full shadow-md transition-transform hover:scale-105"
              onClick={(e) => {
                e.stopPropagation(); // Prevents the box click from triggering
                navigate("/packageform");
              }}
            >
              ➜
            </button>
          </div>
        ))}
      </div>
      <div className="items-center justify-center text-center mt-16 p-8 bg-gradient">
        <h2 className="text-white font-bold text-3xl">
          NEED SOMETHING <span className="text-pink-500">CUSTOM?</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mt-2">
          Every brand is unique, and so are its needs. Build a custom service package tailored to your requirements. Let's create something extraordinary together.
        </p>
        <button
          className="mt-6 px-6 py-3 bg-gray-300 text-purple-800 font-bold rounded-lg shadow-md hover:bg-gray-400 transition-all"
          onClick={() => navigate("/packageform")}
        >
          LET'S TALK
        </button>
      </div>
    </div>
  );
};

export default ServicePackages;
