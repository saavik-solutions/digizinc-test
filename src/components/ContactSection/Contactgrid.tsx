const ContactGrid = () => {
    return (
      <div 
        className="flex justify-center items-center min-h-screen p-8 bg-gradient-to-b from-black via-black to-purple-900"
      >
        <div className="grid grid-cols-3 grid-rows-3 gap-6 w-full max-w-5xl bg-opacity-10 shadow-lg rounded-lg p-10 backdrop-blur-md">
  
          {/* Title: Get in Touch (Col-span 2) */}
          <h2 className="col-span-2 text-4xl font-semibold text-white -mt-30">
            Get in <span className="text-purple-400">touch</span>
          </h2>
  
          {/* Office (Column 1, Row 2) */}
          <div className="col-start-1 row-start-2 text-white -mt-25">
            <p className="text-gray-300 text-sm">Office</p>
            <p className="text-sm text-white">Malakpet</p>
            <p className="text-sm text-white"> Hyderabad</p>
            <hr className="border-white w-[120px] h-[2px]" />
          </div>
  
          {/* Email (Column 1, Row 3) */}
          <div className="col-start-1 row-start-3 text-white -mt-20">
            <p className="text-gray-300 text-sm">Email</p>
            <p className="text-sm text-purple-300 underline">hey@digizinc.com</p>
          </div>
  
          {/* Phone (Column 2, Row 2-3) */}
          <div className="col-start-2 row-span-2 text-white -mt-25">
            <p className="text-gray-300 text-sm text-gray">Phone</p>
            <p className="text-sm text-gray mt-3">INDIA</p>
            <p className="text-sm text-white mt-2">+91 97015 63362</p>
            <p className="text-sm text-gray mt-3">USA</p>
            <p className="text-sm text-white mt-2">+1 (408) 741 6969</p>
            <p className="text-sm text-gray mt-3">DUBAI</p>
            <p className="text-sm text-white mt-2">0509323813</p>
          </div>
  
          {/* Image (Column 3, Entire 3 Rows) */}
          <div className="col-start-3 row-span-3 flex justify-center items-center -mt-50">
            <img 
              src="/sky.jpg" 
              alt="City View" 
              className="w-[250px] h-[350px] max-w-sm rounded-lg shadow-lg"
            />
          </div>
  
        </div>
      </div>
    );
  };
  
  export default ContactGrid;
  