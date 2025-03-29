import Navigation from "../Navigation/Navigation";
import FooterSection from "../FooterSection/FooterSection";
import { useNavigate } from "react-router-dom";
import MessageButton from "../Message/MessageButton";
const packageform = () => {
  const navigate= useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/thank-you');
  };

  return (
    <div
        className="min-h-screen min-w-full text-white bg-gradient-to-b from-[#0a021e] to-[#200046] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/contact_us.png')", // Ensure your image is large enough
        }}
      >
      {/* Navigation Bar */}
      <Navigation />

      {/* Main Container */}
      <div className="flex flex-col items-center justify-center px-6 py-12">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mt-16">
          Let’s Build Something{" "}
        </h2>
        <h2>
          <span className="text-4xl md:text-5xl font-bold text-center text-[#C449Cf] italic font-CedarvilleCursive">
            Extraordinary...
          </span>
        </h2>

        {/* Form Box */}
        <div className="relative w-full max-w-3xl mt-15">
          <div className="absolute inset-0 bg-cover bg-center rounded-2xl shadow-2xl"
          style={{backgroundImage: "url('/Rectangle_63.png')",
          }}></div>
          <div className="relative z-10 bg-gradient-to-b from-purple-900/60 to-purple-700/30 backdrop-blur-lg p-8 md:p-12 rounded-2xl text-white border border-purple-500">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Selected Package</label>
                <input 
                  type="text" 
                  placeholder="Auto filled based on user's choice" 
                  className="w-full px-4 py-3 text-left border border-purple-400 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex items-center gap-4">
                <label className="text-sm font-semibold text-white">Need Customization</label>
                <select className="px-4 py-2 border border-purple-400 rounded-md text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none">
                  <option value="" className="text-black">Choose</option>
                  <option value="Yes" className="text-black">Yes</option>
                  <option value="No" className="text-black">No</option>
                </select>
              </div>
            </div>
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">First Name*</label>
                <input 
                  type="text" 
                  placeholder="Enter your first name" 
                  className="w-full px-4 py-3 text-left border border-purple-400 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Last Name*</label>
                <input 
                type="text" 
                placeholder="Enter your last name" 
                className="w-full px-4 py-3 text-left border border-purple-400 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Email*</label>
                <input 
                    type="text" 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-3 text-left border border-purple-400 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone*</label>
                <input 
                  type="text" 
                  placeholder="Enter your phone number" 
                  className="w-full px-4 py-3 text-left border border-purple-400 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Company / Website</label>
                <input 
                  type="text" 
                  placeholder="your company or website name" 
                  className="w-full px-4 py-3 text-left border border-purple-400 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Designation</label>
                <input 
                type="text" 
                placeholder="Enter your designation" 
                className="w-full px-4 py-3 text-left border border-purple-400 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              </div>
            </div>
            {/* Company & Message */}
            
            <div className="col-span-2 w-full">
              <label className="block text-sm font-semibold mb-2">Your Message</label>
              <textarea 
                placeholder="Enter your message" 
                className="w-full h-[102px] resize-none rounded-md border border-purple-400 bg-transparent text-white p-3"
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="flex justify-center">
              <button 
                type="submit" 
                className="relative px-6 py-3 rounded-md text-lg font-bold transition-all duration-300 bg-white text-purple-950 border border-purple-400 shadow-md hover:bg-purple-500 hover:text-white"
              > 
                SUBMIT
                <div className="absolute inset-0 rounded-md blur-[10px] bg-[#591C82]opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
              </button>
          </div>
          </form>
        </div>
        </div>
      </div>
      <MessageButton/>
      <FooterSection/>
    </div>
  );
};

export default packageform;
