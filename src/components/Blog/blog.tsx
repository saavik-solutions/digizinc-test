import Navigation from '../Navigation/Navigation'; // Update the path to the actual location of Navigation
import MessageButton from '../Message/MessageButton'; 
import FooterSection from '../FooterSection/FooterSection'; 
const BlogPage: React.FC = () => {
    return (
      <div
        className="min-h-screen text-white flex flex-col items-center px-6 md:px-12 lg:px-24 w-full"
        style={{
          backgroundImage: "url('/about_us.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Navigation Bar */}
        <Navigation />
  
        {/* Hero Section */}
        <header className="text-center mt-35">
          <h1 className="text-4xl font-bold">The Creative Lab</h1>
          <h2 className="text-5xl font-extrabold text-[#FF2FD2] italic font-CedarvilleCursive">
            Insights, Trends & Inspiration
          </h2>
        </header>
  
        <section className="mt-8 px-6 md:px-12 lg:px-24 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="text-lg italic text-justify">
              Welcome to The Creative Lab, where ideas take shape and innovation meets execution. From cutting-edge design trends to marketing insights, UI/UX strategies, and 3D magic—this is your go-to space for creative intelligence.
            </p>
            <p className="text-lg italic text-justify">
              Stay ahead of the curve with expert articles, behind-the-scenes breakdowns, and actionable tips straight from the DigiZinc team. Because creativity isn’t just an art—it’s a strategy.
            </p>
          </div>
        </section>
  
        <header className="text-center mt-10">
          <h2 className="text-2xl font-extrabold">
            <span className=" text-[#FF2FD2]">Explore</span>. GET <span className="text-[#FF2FD2]">Inspired</span>. Create <span className=" text-[#FF2FD2]">Explore</span>. GET <span className="text-[#FF2FD2]">Boldly</span>
          </h2>
        </header>
  
        {/* Blog Section */}
        <section className="mt-15 w-full flex justify-center">
          <div className="flex flex-col items-start max-w-6xl w-full px-6 md:px-12 mx-auto">
            {/* Grid Layout for Image and Side Blogs */}
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 w-full">
              {/* Left Section (Large Feature Blog) */}
              <div className="relative w-[500px] left-[70px]">
                {/* Large Image */}
                <div className="w-full h-[300px] bg-gray-300 rounded-lg overflow-hidden">
                  <img 
                    src="/lorem_1.jpeg" 
                    alt="Feature Blog" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 w-[500px] text-white text-lg font-light left-[70px]">    
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard.
                </p>
                </div>
              </div>
  
              {/* Right Section (Side Blogs) */}
              <div className="space-y-4">
                {/* Card 1 */}
                <div className="relative flex items-center gap-x-4 bg-transparent rounded-lg p-3 w-full right-[70px]">  
                  <div className="w-24 h-24 bg-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
                    <img 
                      src="/lorem.jpeg" 
                      alt="Side Blog 1" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 text-white text-sm">
                    <h3 className="font-semibold text-base">Lorem Ipsum is simply dummy text</h3>
                    <p className="text-xs opacity-75">Lorem Ipsum has been the industry's standard.</p>
                  </div>
                </div>
  
                {/* Card 2 */}
                <div className="relative flex items-center gap-x-4 bg-transparent rounded-lg p-3 w-full right-[70px]">
                  <div className="w-24 h-24 bg-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
                    <img 
                      src="/lorem_2.jpeg" 
                      alt="Side Blog 2" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 text-white text-sm">
                    <h3 className="font-semibold text-base">Lorem Ipsum is simply dummy text</h3>
                    <p className="text-xs opacity-75">Lorem Ipsum has been the industry's standard.</p>
                  </div>
                </div>
  
                {/* Card 3 */}
                <div className="relative flex items-center gap-x-4 bg-transparent rounded-lg p-3 w-full right-[70px]">
                  <div className="w-24 h-24 bg-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
                    <img 
                      src="/lorem_3.jpeg" 
                      alt="Side Blog 3" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 text-white text-sm">
                    <h3 className="font-semibold text-base">Lorem Ipsum is simply dummy text</h3>
                    <p className="text-xs opacity-75">Lorem Ipsum has been the industry's standard.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Trending News Section */}
        <section className="mt-12 px-8 w-full">
            <h2 className="text-2xl font-bold text-white">
                Trending <span className="text-[#FF2FD2]">News</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                
                {/* Left Card with Image */}
                <div className="relative h-75 rounded-lg shadow-lg overflow-hidden">
                <img 
                    src="/lorem.jpeg" 
                    alt="Trending News 1" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 w-full bg-gray-400 bg-opacity-40 p-3 text-white text-sm font-semibold">
                    using Lorem Ipsum is that it has a more-or-less normal
                    <p className="text-xs opacity-75">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                </div>

                {/* Middle Card with Gradient + Image */}
                <div className="relative h-75 rounded-lg shadow-lg overflow-hidden">
                <img 
                    src="/lorem_2.jpeg" 
                    alt="Trending News 2" 
                    className="w-full h-full object-cover"
                /> 
                <div className="absolute bottom-0 w-full bg-gray-400 bg-opacity-40 p-3 text-white text-sm font-semibold">
                    using Lorem Ipsum is that it has a more-or-less normal
                    <p className="text-xs opacity-75">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                </div>

                {/* Right Card with Image */}
                <div className="relative h-75 rounded-lg shadow-lg overflow-hidden">
                <img 
                    src="lorem_3.jpeg" 
                    alt="Trending News 3" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 w-full bg-gray-400 bg-opacity-40 p-3 text-white text-sm font-semibold">
                    using Lorem Ipsum is that it has a more-or-less normal
                    <p className="text-xs opacity-75">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                </div>

            </div>
            </section>
        <MessageButton/>
        <section className="mt-14 w-screen">
            <FooterSection />
        </section>
      </div>
    );
  };
export default BlogPage;