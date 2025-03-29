const FooterSection = ({ className = "" }: { className?: string }) => {
  return (
    <footer className={`w-full  bg-[#591C82] text-center text-white py-8 mt-auto ${className}`}>
      <p className="opacity-70 text-sm">IN SEARCH FOR SOME ACTION</p>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-4 text-sm">
        {["LinkedIn", "YouTube", "Instagram", "Facebook", "Twitter"].map(
          (platform, index) => (
            <a
              key={index}
              href="#"
              className="hover:text-purple-300 transition duration-300"
            >
              {platform}
            </a>
          )
        )}
      </div>

      {/* Footer Text */}
      <p className="mt-4 opacity-70 text-xs">.made with love.</p>
      <p className="mt-2 text-xs">&copy; Saavik Solution 2025</p>
    </footer>
  );
};

export default FooterSection;
