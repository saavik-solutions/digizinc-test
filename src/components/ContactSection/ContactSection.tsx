import TestimonialSection from "../Testimonials/TestimonialSection"; 

const ContactSection = () => {
  return (
    <div 
      className="relative w-full bg-cover bg-center min-h-[90vh] flex flex-col items-center justify-center gap-16 py-12"
      style={{
        backgroundImage: "url('/Group.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Decorative Stars */}
      <img 
        src="/star.png" 
        alt="star" 
        className="absolute left-40 top-[200px] transform -translate-y-1/2 w-[10px] h-auto"
      />
      <img 
        src="/star.png" 
        alt="star" 
        className="absolute right-10 top-1/2 transform -translate-y-1/2 w-[30px] h-auto"
      />
      <img 
        src="/star.png" 
        alt="star" 
        className="absolute right-20 top-3/4 transform -translate-y-1/2 w-[20px] h-auto"
      />
      <img 
        src="/star.png" 
        alt="star" 
        className="absolute left-20 top-3/4 transform -translate-y-1/2 w-[20px] h-auto"
      />
      <img 
        src="/star.png" 
        alt="star" 
        className="absolute left-20 top-10 transform -translate-y-1/2 w-[30px] h-auto"
      />

      {/* What Our Clients Say Section */}
      <div className="w-full flex flex-col items-center gap-8">
        <TestimonialSection />
      </div>
    </div>
  );
};

export default ContactSection;
