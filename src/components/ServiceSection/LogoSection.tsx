import { motion } from "framer-motion";

const LogoSection = () => {
  return (
    <div className="w-full bg-gradient-to-r  from-black to-purple-900 py-6 px-4 flex items-center justify-center overflow-hidden">
      <p className="text-white text-sm uppercase tracking-wide mr-6">Trusted By</p>
      <div className="relative w-[80%] overflow-hidden">
        <motion.div
          className="flex space-x-10 min-w-max"
          animate={{ x: ["0%", "-100%"] }} 
          transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        >
          {/* Duplicate logos for infinite effect */}
          {[...Array(10)].map((_, index) => (
            <div key={index} className="flex space-x-10">
              <img src="/logo_1.webp" alt="Logo 1" className="h-10 object-contain" />
              <img src="/logo_2.webp" alt="Logo 2" className="h-10 object-contain" />
              <img src="/logo_3.webp" alt="Logo 3" className="h-10 object-contain" />
              <img src="/logo_4.webp" alt="Logo 4" className="h-10 object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoSection;
