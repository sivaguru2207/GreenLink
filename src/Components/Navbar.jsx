import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-500 text-white p-4 flex justify-between items-center">
      {/* Logo / Brand */}
      <div className="text-2xl font-bold">GreenGrow</div>

      {/* Navigation Links */}
      <div className="flex gap-6">
        <Link to="/" className="hover:text-yellow-200">Home</Link>
        <Link to="/about" className="hover:text-yellow-200">About</Link>
        <Link to="/plants" className="hover:text-yellow-200">Plants</Link>
        <Link to="/flowers" className="hover:text-yellow-200">Flowers</Link>
      </div>
    </nav>
  );
};

export default Navbar;
