import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Plants = () => {
  const [plants, setPlants] = useState([]);
  const navigate = useNavigate();

  // Fetch dummy plant data
  useEffect(() => {
    const fetchPlants = () => {
      const data = [
        { id: 1, name: "Tomato Plant", type: "Vegetable", price: 50, img: "tomato1.jpeg" },
        { id: 2, name: "Tulasi Plant", type: "Herb", price: 70, img: "tulasi.jpg" },
        { id: 3, name: "AloeVera Plant", type: "Succulent", price: 90, img: "aloevara.jpeg" },
        { id: 4, name: "Rose Plant", type: "Flower", price: 120, img: "rose1.jpeg" },
      ];
      setPlants(data);
    };

    fetchPlants();
  }, []);

  // Navigate to Plant Details page
  const goToPlantDetails = (id) => {
    navigate(`/plants/${id}`);
  };

  // Example Buy function
  const handleBuyClick = (id) => {
    alert(`Plant with ID ${id} added to cart!`);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">🌿 Available Plants</h2>
      {plants.length === 0 ? (
        <p className="text-center">Loading plants...</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plants.map((plant) => (
            <div
              key={plant.id}
              className="border p-4 rounded-lg shadow hover:shadow-lg cursor-pointer"
            >
              {/* Clicking image or name navigates to details */}
              <img
                src={plant.img}
                alt={plant.name}
                className="w-full h-40 object-cover mb-3 rounded"
                onClick={() => goToPlantDetails(plant.id)}
              />
              <h3
                className="text-xl font-semibold mb-1"
                onClick={() => goToPlantDetails(plant.id)}
              >
                {plant.name}
              </h3>
              <p>Type: {plant.type}</p>
              <p>Price: ₹{plant.price}</p>

              <button
                onClick={() => handleBuyClick(plant.id)}
                className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Plants;
