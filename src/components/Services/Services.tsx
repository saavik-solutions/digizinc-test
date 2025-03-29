import Navigation from "../Navigation/Navigation";
import MessageButton from "../Message/MessageButton";
import FooterSection from "../FooterSection/FooterSection";
import { useNavigate} from "react-router-dom";
import ServicePackages from "./servicepackage";
const serviceCategories = [
  {
    title: "Branding & Identity",
    image: "/branding.png",
    services: [
      "Logo Design",
      "Brand Strategy & Positioning",
      "Visual Identity Development",
      "Brand Guidelines",
      "Corporate Rebranding",
      "Naming & Tagline Creation",
    ],
  },
  {
    title: "Graphic & Visual Design",
    image: "/graphics.png",
    services: [
      "Print & Digital Design",
      "Packaging Design",
      "Business Cards & Stationery",
      "Infographics & Data Design",
      "Editorial & Magazine Design",
    ],
  },
  {
    title: "Advertising & Marketing Creatives",
    image: "/advertise.png",
    services: [
      "Ad Campaign Design (Print, Digital, Social Media)",
      "Social Media Creatives & Ads",
      "Banner & Display Ads",
      "Brochure & Flyer Design",
      "Presentation & Pitch Deck Design",
    ],
  },
  {
    title: "Content Creation & Storytelling",
    image: "/content.png",
    services: [
      "Copywriting & Content Strategy",
      "Storytelling (Ads, Explainers, Social Media)",
      "Blog & Article Writing",
      "Social Media Captions & Content",
      "Product Descriptions & Sales Copy",
    ],
  },
  {
    title: "UI/UX & Digital Experience Design",
    image: "/ui.png",
    services: [
      "Website Design & Development",
      "App Interface Design",
      "Dashboards & SaaS UI Design",
      "Wireframing & Prototyping",
      "User Experience (UX) Audits",
    ],
  },
  {
    title: "Motion & Video Production",
    image: "/motion.png",
    services: [
      "Animation (2D, 3D, Motion Graphics)",
      "Video Editing & Post-Production",
      "Explainer Videos",
      "Brand & Story Videos",
      "Social Media Reels & Shorts",
      "Cinematic Ad Production",
    ],
  },
  {
    title: "Illustration & Custom Artwork",
    image: "/illustrations.png",
    services: [
      "Digital & Hand-drawn Illustrations",
      "Character Design",
      "Vector Art & Iconography",
      "Custom GIFs & Stickers",
      "Storyboarding for Ads/Videos",
    ],
  },
  {
    title: "Experiential & Interactive Design",
    image: "/experimental.png",
    services: [
      "3D Modeling & Rendering",
      "Interior & Exterior Rendering",
      "Virtual Experiences (VR)",
      "Architectural Visualization",
      "Product 3D Modeling",
    ],
  },
  {
    title: "Photography & Visual Content",
    image: "/photography.png",
    services: [
      "Product Photography",
      "Fashion & Lifestyle Shoots",
      "Corporate Headshots",
      "Editorial & Fashion",
      "Retouching & Image Manipulation",
    ],
  },
  {
    title: "Print & Packaging",
    image: "/packaging.png",
    services: [
      "Product Packaging Design",
      "Label & Sticker Design",
      "Billboards & Poster Design",
      "Book & Album Cover Design",
      "Trade Show Booth Design",
    ],
  },
];
const Services = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  return (
    <section
      className="relative min-h-screen w-full text-white overflow-hidden bg-center bg-no-repeat flex flex-col items-center"
      style={{
        backgroundImage: "url('/Group_145.png')",
        backgroundSize: "cover",
      }}
    >
      <Navigation />

      {/* Hero Section */}
      <div className="container mx-auto flex flex-col items-center justify-center h-[50vh] px-6 md:px-12 mt-10 text-center">
        <h1 className="text-4xl font-bold text-white">
          <img
            src="/plus.png"
            className="absolute top-[80px] left-[195px] w-20 h-20"
            alt="Plus"
          />
          UNLEASH <span className="text-[#FF2FD2]">CREATIVITY</span>, BUILD ICONIC{" "}
          <span className="text-[#FF2FD2]">BRANDS</span>
        </h1>
        <p className="mt-4 text-white max-w-2xl">
          Transform your brand with DigiZinc's powerhouse of creative services.
          Whether you need stunning visuals, a sleek website, or a full-scale
          brand identity – we craft experiences that make an impact.
        </p>
        <img
          src="/moon.png"
          className="absolute top-[80px] right-[100px] w-20 h-20"
          alt="Moon"
        />
        <img
          src="/music.png"
          className="absolute top-[250px] right-[0px] w-20 h-20"
          alt="Moon"
        />
      </div>

      {/* Services Section */}
      <div className="items-center justify-center text-center -mt-20">
        <h1 className="text-4xl font-bold text-white mt-10 mb-10">
          Our <span className="text-pink-500"> Services </span>
        </h1>
      </div>

      {/* Service Boxes */}
      <img
          src="/square.png"
          className="absolute top-[320px] left-[100px] w-20 h-20"
          alt="Moon"
        />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 max-w-6xl mx-auto">
        {serviceCategories.map((category, index) => (
          <div
            key={index}
            className={`relative bg-cover bg-center p-6 rounded-lg text-white shadow-lg cursor-pointer transition-transform transform hover:scale-105
              ${index === serviceCategories.length - 1 ? "lg:col-2" : ""}`}
            style={{
              backgroundImage: "url('/Rectangle_131.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            onClick={() => navigate("/contactus")} // Redirect on click
          >
            <div className="absolute -top-6 -left-5">
              <img
                src={category.image}
                alt={category.title}
                className="w-16 h-16"
              />
            </div>
            <h2 className="text-xl font-bold mb-4 mt-6">{category.title}</h2>
            <ul className="text-sm space-y-2">
              {category.services.map((service, i) => (
                <li key={i} className="list-disc ml-4">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col items-center mt-5">
        <ServicePackages />
      </div>
      <MessageButton />

      {/* Footer Section with Proper Margin */}
      <div className="w-full">
        <FooterSection />
      </div>
    </section>
  );
};
export default Services;