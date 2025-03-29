import FooterSection from "../FooterSection/FooterSection";
import Navigation from "../Navigation/Navigation";
import State from "../Aboutus/State";
import MessageButton from "../Message/MessageButton";
interface achievement {
  title: string;
  description: string;
}
const achievement = [
  {
    title: "First Brand to Believe in DigiZinc",
    description:
      "EAOverseas was the first to place their trust in DigiZinc, marking the start of our creative journey. Their confidence in our vision set the foundation for the innovative and impactful design solutions we continue to deliver.",
  },
  {
    title: "Trusted by Emerging Brands",
    description:
      "Startups and businesses have trusted DigiZinc for their digital presence, and we continue to empower brands with innovative design solutions.",
  },
];
const AboutUs = () => {
  return (
    <div
  className="min-h-screen text-white flex flex-col items-center px-6 md:px-12 lg:px-24"
  style={{
    background: "url('/about_us.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>
      <Navigation />
      {/* Header Section */}
      <header className="text-center py-10 mt-25">
        <h1 className="text-6xl font-bold text-white">
          We are <span className="text-[#FF2FD2]">Zincnites</span>
        </h1>
        <p className="text-2xl mt-2 text-white">We Craft digital stories that spark</p>
        <p className="text-lg font-semibold text-[#AB2FFF]">connections and drive growth</p>
      </header>
      {/* Info Section */}
      <section
          className="w-[950px] h-[400px] border border-gray-500 rounded-2xl p-6 shadow-lg backdrop-blur-md text-white mt-5"
          style={{
            backgroundImage: "url('/Rectangle_57.png')", // Replace with actual image path
            backgroundSize: "100% 100%", // Ensures the image stretches exactly to fit the section
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents repeating
          }}
        >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <p className="text-justify leading-relaxed text-xl mt-5">
            At <span className="text-pink-500 font-semibold">DigiZinc</span>,  we bring together creativity, strategy, and innovation 
            to craft compelling digital experiences. As a creative agency, we specialize in branding, design, advertising, and content creation, 
            helping businesses establish a unique and impactful presence.
            </p>
            <p className="text-justify leading-relaxed text-xl mt-5">
            Whether it’s visual identity, social media campaigns, performance marketing, 
            or high-converting creatives, we tailor solutions that resonate with your audience and drive results.
            </p>
        </div>
        <p className="leading-relaxed text-center text-xl mt-6">
        Our team of forward-thinking creatives is committed to pushing boundaries, 
        turning ideas into stunning visuals, and helping brands stand out in a crowded digital world—one 
        project at a time.
        </p>
        </section>
      {/* State Section */}
      <State/>

      {/* What We Do Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-6 text-white">
        {/* Title Section */}
        <div className="relative flex justify-center items-center">
          {/* Quotation Image Behind the Text */}
          <img 
            src="/quotations.png" 
            alt="Quote" 
            className="absolute w-16 h-16 md:w-20 md:h-20 left-[0px] top-[3px] opacity-80"
          />
          {/* Title */}
          <h2 className="text-5xl font-extrabold relative flex items-center mt-7">
            <span className="text-white">How </span>
            <span className="text-pink-500 ml-3"> We </span>
            <span className="text-white ml-3"> Work </span>
          </h2>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {[
            { step: "STEP 01", title: "Discover" },
            { step: "STEP 02", title: "Strategy" },
            { step: "STEP 03", title: "Execution" },
            { step: "STEP 04", title: "Growth" },
          ].map((item, index) => (
            <div
              key={index}
              className="w-56 h-64 flex flex-col items-center justify-center text-center p-6 rounded-lg shadow-lg border border-gray-700 
                        transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_0px_20px_rgba(255,105,180,0.6)]"
              style={{
                backgroundImage: "url('/Rectangle_115.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backdropFilter: "blur(10px)",
              }}
            >
              <p className="text-sm text-pink-500 font-bold">{item.step}</p>
              <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>
      <section
          className="w-[950px] h-[500px] border border-gray-500 rounded-2xl p-6 shadow-lg backdrop-blur-md text-white mt-5"
          style={{
            backgroundImage: "url('/Rectangle_57.png')", // Replace with actual image path
            backgroundSize: "100% 100%", // Ensures the image stretches exactly to fit the section
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents repeating
          }}
        >
        {/* Title Section */}
        <div className="relative flex justify-center items-center mb-6">
          {/* Quotation Icon */}
          <img 
            src="/quotations.png" 
            alt="Quote" 
            className="absolute w-16 h-16 md:w-20 md:h-20 left-[200px] top-[3px] opacity-80"
          />

          {/* Heading */}
          <h2 className="text-5xl font-extrabold relative flex items-center mt-6">
            <span className="text-white">Our</span>
            <span className="text-pink-500 ml-3">Achievement</span>
          </h2>
        </div>

        {/* Achievements Section (Scrollable) */}
        <div className="w-full flex justify-center items-center space-x-6 p-6 overflow-hidden mt-20">
          {/* Multiple Achievement Boxes */}
          {achievement.map((item, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center bg-no-repeat p-6 rounded-lg shadow-lg text-white 
                        border border-purple-400/50 flex flex-row items-center h-[250px] w-[450px] 
                        transition-transform duration-300 ease-in-out"
              style={{
                backgroundImage: "url('/Rectangle_115.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Achievement Image */}
              <img
                src={`/coin.png`} // Replace with your image path
                alt={`coin`}
                className="w-[160px] h-[170px] object-cover rounded-md shadow-md"
              />

              {/* Text Section (Beside Image) */}
              <div className="ml-4 flex flex-col">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm mt-2 opacity-80 text-justify">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    <MessageButton/>
    <section className="mt-12 w-screen">
      <FooterSection />
    </section>
    </div>
  );
};

export default AboutUs;
