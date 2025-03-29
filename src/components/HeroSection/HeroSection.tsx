import Navigation from "../Navigation/Navigation";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col items-center">
      {/* Background Image */}
      <img
        src="/Rectangle_106.png"
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />

      <Navigation />

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center w-full max-w-6xl mx-auto mt-30 px-8 lg:px-16">
        {/* Left Section - Text Image */}
        <div className="w-1/2 flex justify-center">
          <img
            src="/text.png"
            alt="Text"
            className="w-[50%] md:w-[80%] object-cover"
          />
        </div>

        {/* Right Section - GIF/Video */}
        <div className="w-1/2 flex justify-center">
          <img
            src="/cube.gif"
            alt="Animated Cube"
            className="w-full h-[550px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
