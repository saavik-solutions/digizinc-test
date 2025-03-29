import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Navigation from "../Navigation/Navigation";
import FooterSection from "../FooterSection/FooterSection";
import Case from "./Case";
import MessageButton from "../Message/MessageButton";

const reviews = [
  {
    text: `"DigiZinc gave our restaurant a brand identity that truly stands out!"`,
    description:
      "The logo, menu design, and social media creatives crafted by their team have given our brand a fresh, premium look. Customers now recognize us instantly, and footfall has increased dramatically!",
    author: "Marco Bennett",
    role: "Founder, Urban Bites",
  },
  {
    text: `"Our product packaging is now as irresistible as our food!"`,
    description:
      "DigiZinc's creative approach to packaging design has elevated our brand image. The vibrant visuals and unique design have made our products pop off the shelves, boosting sales significantly!",
    author: "Priya Sharma",
    role: "Co-Founder, SpiceNest",
  },
  {
    text: `"Our website now reflects the cutting-edge tech we provide!"`,
    description:
      "DigiZinc revamped our website with a sleek, intuitive UI/UX that keeps visitors engaged. The modern, user-friendly design has increased inquiries and helped us land bigger clients!",
    author: "Ethan Carter",
    role: "CEO, NexaTech Solutions",
  },
  {
    text: `"Our ad campaigns have never looked this good!"`,
    description:
      "DigiZinc's visually stunning ad creatives have taken our digital marketing to the next level. The designs are bold, engaging, and perfectly aligned with our brand, leading to higher conversions and visibility.",
    author: "Sophia Lewis",
    role: "Marketing Head, CloudWave IT",
  },
  {
    text: `"Our social media now looks as delicious as our dishes!"`,
    description:
      "DigiZinc transformed our social media presence with mouthwatering visuals and a cohesive aesthetic. Engagement has skyrocketed, and we've seen a steady rise in reservations since the redesign!",
    author: "Daniel Wong",
    role: "Owner, The Gourmet Table",
  },
  {
    text: `"Our product packaging is now as irresistible as our food!"`,
    description:
      "DigiZinc's creative approach to packaging design has elevated our brand image. The vibrant visuals and unique design have made our products pop off the shelves, boosting sales significantly!",
    author: "Priya Sharma",
    role: "Co-Founder, SpiceNest",
  },
];

const Casestudy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content Wrapper */}
      <div
        className="flex-grow bg-cover bg-center px-8 py-16 relative"
        style={{
          backgroundImage: "url('/casestudy_section.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navigation />

        {/* CASE STUDY Heading */}
        <div className="relative flex items-center mt-20">
          <img
            src="/quotations.png"
            alt="Quote"
            className="absolute w-16 h-16 md:w-20 md:h-20 opacity-80"
          />
          <h1 className="text-5xl font-extrabold mt-5 text-white uppercase ml-5">
            Case Study
          </h1>
        </div>

        {/* Case Grid (Ensuring 2-row × 3-column layout) */}
        <div className="mt-10">
          <Case />
        </div>

        {/* Reviews Section */}
        <div className="relative flex items-center mt-20">
          <img
            src="/quotations.png"
            alt="Quote"
            className="absolute w-16 h-16 md:w-20 md:h-20 opacity-80"
          />
          <h1 className="text-5xl font-extrabold mt-10 text-white uppercase ml-5">
            The Reviews
          </h1>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#591C82] to-[#13061C] backdrop-blur-md p-6 rounded-xl shadow-lg text-white border border-gray-500"
            >
              <p className="text-lg font-semibold text-white">{review.text}</p>
              <p className="text-sm text-gray-200 mt-2">{review.description}</p>
              <div className="flex items-center mt-5">
                <FaUserCircle className="text-purple-400 text-3xl" />
                <span className="ml-3 text-white font-medium">
                  {review.author}
                </span>
              </div>
              <p className="text-sm text-gray-200 mt-2">{review.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Message Button */}
      <MessageButton />

      {/* Footer */}
      <FooterSection className="mt-auto w-full" />
    </div>
  );
};

export default Casestudy;
