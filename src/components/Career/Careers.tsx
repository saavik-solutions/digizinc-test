import { memo} from "react";
import {
  FaLocationDot,
  FaBriefcase,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import Navigation from "../Navigation/Navigation";
import InternshipSection from "./InternshipSection";
import FooterSection from "../FooterSection/FooterSection";
import { useNavigate } from "react-router-dom";
import MessageButton from "../Message/MessageButton";
const jobListings = [
  { title: "Graphic Designer", location: "Dubai", type: "Part-Time" },
  { title: "UI/UX Designer", location: "Dubai", type: "Full-Time" },
  { title: "Video Editor", location: "Dubai", type: "Part-Time" },
  { title: "Social Media Manager", location: "Dubai", type: "Part-Time" },
  { title: "Content Writer", location: "Remote", type: "Full-Time" },
  { title: "SEO Analyst", location: "Dubai", type: "Part-Time" },
];

type JobCardProps = {
  title: string;
  location: string;
  type: string;
};

const JobCard = memo(({ title, location, type }: JobCardProps) => (
  <div className="flex justify-between items-center bg-purple-800/20 border border-gray-600 rounded-lg p-4 hover:bg-purple-700 transition duration-300">
    <span className="text-lg font-semibold text-white">{title}</span>
    <div className="flex items-center gap-4 text-sm text-gray-300">
      <span className="flex items-center gap-1">
        <FaLocationDot className="text-green-400" /> {location}
      </span>
      <span className="flex items-center gap-1">
        <FaBriefcase className="text-pink-400" /> {type}
      </span>
      <FaArrowUpRightFromSquare className="text-pink-400 cursor-pointer" />
    </div>
  </div>
));

const Careers = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen flex flex-col items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/carrers.jpg')" }}
    >
      <Navigation />

      {/* Header Section */}
      <div className="text-center mt-24 px-4 relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Not just a job, but your next <br />
          <span className="text-pink-500 italic font-CedarvilleCursive">
            creative adventure
          </span>
        </h1>
        <p className="mt-4 text-white">
          Fuel your passion. Elevate your skills. Join the disruption.
        </p>
      </div>

      {/* Life at Digizinc Section */}
      <div className="w-full flex flex-col items-center text-center px-4 mt-16 relative z-10">
        <h2 className="text-4xl font-bold text-white">
          <span className="text-pink-500">Life</span> at Digizinc.
        </h2>
        <div className="grid grid-cols-3 grid-rows-3 gap-4 p-4 w-full max-w-4xl mx-auto">
            <p className="italic text-gray-300 bg-purple-800/30 p-3 mt-6 col-span-2 row-span-1 w-123 h-15 ml-20 ">
              "Great ideas come from great minds working together"
            </p>
            <img
              src="/Rectangle_79.png"
              alt="Image 2"
              className="col-span-1 row-span-2 object-cover w-50 h-55 mt-6"
            />
            <img
              src="/Rectangle_80.png"
              alt="Image 3"
              className="col-span-1 row-span-2 object-cover w-50 h-70 -mt-9 ml-20"
            />
            <img
              src="/Rectangle_81.png"
              alt="Image 4"
              className="col-span-1 row-span-2 object-cover w-70 h-70 -mt-9 mr-100"
            />
            <img
              src="/Rectangle_82.png"
              alt="Image 5"
              className="col-span-1 row-span-1 object-cover w-50 h-30 -mt-2"
            />
            <img
              src="/Rectangle_83.png"
              alt="Image 6"
              className="col-span-3 row-span-1 object-cover w-177 h-20 ml-20"
            />
          </div>
      </div>
      {/* Open Positions Section */}
      <div className="mt-16 text-center w-full px-6 relative z-10">
        <h2 className="text-4xl font-bold text-white">
          Open <span className="text-pink-500">Positions.</span>
        </h2>
        <p className="text-white mt-2">
          Discover exciting career opportunities, competitive benefits, and a vibrant work culture.
        </p>
      </div>

      {/* Job Listings */}
      <div className="relative mt-10 w-full max-w-3xl h-61 overflow-y-auto custom-scrollbar">
        <div>
          {jobListings.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>

      {/* Not Finding a Role Section */}
      <div className="mt-10 text-center max-w-xl relative z-10">
        <p className="text-xl font-semibold text-white">
          Don’t see the role <span className="text-pink-400">you’re</span> looking for?
        </p>
        <p className="text-gray-300 mt-2">
          Relax! We would still love to hear from you. Please submit your profile to{" "}
          <a href="mailto:careers@digizinc.com" className="text-pink-400 font-medium">
            careers@digizinc.com
          </a>{" "}
          (no agencies please), and we will get in touch with you.
        </p>
      </div>

      {/* Submit Resume Button */}
      <button
        className="mt-6 mb-10 bg-purple-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-pink-600 transition duration-300"
        onClick={() => navigate("/Form")}
      >
        SUBMIT RESUME
      </button>
      <InternshipSection />
      <MessageButton />
      <FooterSection className="mt-auto" />
    </div>
  );
};

export default Careers;
