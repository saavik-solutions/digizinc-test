interface TestimonialProps {
  text: string;
  description: string;
  author: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ 
  text, 
  description, 
  author, 
  role 
}) => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat p-6 rounded-lg shadow-lg text-white border border-purple-400/30 flex flex-col min-h-[280px] h-full w-96 snap-start transition-opacity duration-700 ease-in-out"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(26, 8, 38, 0.85), rgba(26, 8, 38, 0.85)), url('/Rectangle_25.png.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main Text */}
      <p className="text-base font-light text-center opacity-90 text-white">{text}</p>

      {/* Description */}
      <p className="text-sm opacity-80 mt-3 text-center text-white">{description}</p>

      {/* Profile Section */}
      <div className="flex items-center gap-3 mt-auto pt-5">
        {/* Author Details */}
        <div>
          <p className="text-base font-semibold text-white">{author}</p>
          <p className="text-xs opacity-70 text-white">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
