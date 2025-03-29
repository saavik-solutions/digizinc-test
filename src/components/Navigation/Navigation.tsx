import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center max-w-7xl w-full mx-auto py-6 px-6 absolute top-0 left-0 right-0">
    <div className="text-lg font-bold text-white mr-16">
      <img src="/logo.png" alt="Digizinc Logo" className="mr-20 h-15 w-auto" />
    </div>
    <ul className="flex justify-between w-full ml-35">
      <li className="hover:text-purple-400 cursor-pointer text-white">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-purple-400 cursor-pointer text-white">
        <Link to="/about-us">About Us</Link>
      </li>
      <li className="hover:text-purple-400 cursor-pointer text-white">
        <Link to="/Casestudy">Works</Link>
      </li>
      <li className="hover:text-purple-400 cursor-pointer text-white">
        <Link to="/services">Services</Link>
      </li>
      <li className="hover:text-purple-400 cursor-pointer text-white">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="hover:text-purple-400 cursor-pointer text-white">
        <Link to="/careers">Careers</Link>
      </li>
      <li className="hover:text-purple-400 cursor-pointer text-white mr-20">
        <Link to="/contactus">Contact Us</Link>
      </li>
    </ul>
  </nav>  
  );
};

export default Navigation;
