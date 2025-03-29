import React from "react";
import { useNavigate } from "react-router-dom";

const InternshipSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 flex justify-center items-center min-h-screen rounded-md bg-black">
      <div className="max-w-6xl mx-auto px-10 md:flex md:items-center md:justify-between gap-12">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Internships at 
            </h2>
          <h2><span className="text-[#FF2FD2] text-4xl md:text-5xl font-bold">DigiZinc</span>
          </h2>
          <p className="mt-6 text-white text-lg leading-relaxed">
            Kickstart your career with DigiZinc! We offer internship opportunities for passionate individuals looking to gain hands-on experience in the digital marketing landscape.
          </p>
          <p className="mt-6 text-white text-lg">
            Students can submit applications using the form below.
          </p>
          <p className="mt-6 text-white text-lg">
            Colleges & institutions can connect with us via{" "}
            <a href="mailto:hr@digizinc.com" className="text-pink-400 underline">
              hr@digizinc.com
            </a>.
          </p>
          <button
            onClick={() => navigate("/Form")}
            className="mt-8 bg-purple-600 hover:bg-purple-700 text-white py-4 px-10 rounded-xl shadow-md transition duration-300 transform hover:scale-105"
          >
            APPLY FOR INTERNSHIPS
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
          <div className="w-full max-w-lg h-[450px] relative rounded-3xl shadow-xl overflow-hidden">
            <img
              src="/Rectangle.png"
              alt="Internship at DigiZinc"
              className="w-full h-full object-cover rounded-3xl"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
