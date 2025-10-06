

import React, { useState } from "react";

const Flowers = () => {
  const [flowers, setFlowers] = useState([
    { id: 1, name: "Rose", color: "Red", price: 100, img: "/rose flower2.webp" },
    { id: 2, name: "Marigold", color: "Orange", price: 50, img: "marigold1.jpg" },
    { id: 3, name: "Jasmine", color: "White", price: 70, img: "jas.jpg" },
    { id: 4, name: "Sunflower", color: "Yellow", price: 80, img: "sunflower1.jpeg" },
  ]);

  // ✅ Improved addToCart function
  const addToCart = (id) => {
    const target = flowers.find((f) => f.id === id);
    if (!target) return;

    // Update the state safely
    setFlowers((prev) =>
      prev.map((f) => (f.id === id ? { ...f, addedToCart: true } : f))
    );

    // Show alert message
    alert(`${target.name} added to cart!`);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
        🌼 Available Flowers
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {flowers.map((flower) => (
          <div
            key={flower.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={flower.img}
              alt={flower.name}
              className="w-full h-40 object-cover mb-3 rounded"
            />
            <h3 className="text-xl font-semibold mb-1">{flower.name}</h3>
            <p>Color: {flower.color}</p>
            <p>Price: ₹{flower.price}</p>

            <button
              onClick={() => addToCart(flower.id)}
              className={`mt-3 px-4 py-2 rounded text-white ${
                flower.addedToCart
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-700"
              }`}
              disabled={flower.addedToCart} // disable after adding
            >
              {flower.addedToCart ? "Added" : "Buy Now"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flowers;
