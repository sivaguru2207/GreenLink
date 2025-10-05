import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // hook to navigate programmatically

  const features = [
    { id: 1, title: "👨‍🌾 Add Your Plants", desc: "Farmers can add and manage their plants easily." },
    { id: 2, title: "🪴 Explore Nursery", desc: "Users can browse plants available in different nurseries." },
    { id: 3, title: "❤️ Save Favorites", desc: "Mark and save your favorite plants for later." },
    { id: 4, title: "🌱 Learn Plant Care", desc: "Get tips and guides to care for your plants." },
  ];

  // Function for button
  const handleExploreClick = () => {
    navigate("/plants"); // Navigate to Plants page
  };

  return (
    <>
      {/* Hero Section */}
      <div className="p-10 text-center bg-green-100">
        <h1 className="text-5xl font-bold text-green-700 mb-4">Welcome to GreenGrow</h1>
        <p className="text-lg mb-6">Connecting Farmers, Nurseries, and Plant Lovers</p>
        <button
          onClick={handleExploreClick} // button function
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Explore Plants
        </button>
      </div>

      {/* Features Section */}
      <div className="p-10">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-green-50 p-10">
        <h2 className="text-3xl font-bold text-green-700 mb-4">About GreenGrow</h2>
        <p>
          GreenGrow is a platform that empowers farmers and nursery owners to manage and showcase their plants efficiently.
          Users can explore a variety of plants and flowers, learn about their care, and connect directly with local growers.
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-green-500 text-white p-6  mt-10 text-center">
        <p>© 2025 GreenGrow. All rights reserved.</p>
        <p>Contact: info@greengrow.com | Phone: +91-1234567890</p>
     
      </footer>
    </>
  );
};

export default Home;
