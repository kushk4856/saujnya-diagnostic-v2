import { useState } from "react";
import OsmoticTestingCard from "./TestCardPackage";

const initialCards = [
  { id: 1, name: "Technology", category: "Work" },
  { id: 2, name: "Cooking", category: "Hobby" },
  { id: 3, name: "Fitness", category: "Health" },
  { id: 4, name: "Programming", category: "Work" },
  { id: 5, name: "Photography", category: "Hobby" },
  { id: 6, name: "Meditation", category: "Health" },
  { id: 7, name: "Design", category: "Work" },
  { id: 8, name: "Gardening", category: "Hobby" },
  { id: 9, name: "Nutrition", category: "Health" },
  { id: 10, name: "Data Science", category: "Work" },
];

const CardFilterContainer = () => {
  const [cards, setCards] = useState(initialCards);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(initialCards.map((card) => card.category)),
  ];

  const handleFilter = (category) => {
    setSelectedCategory(category);

    const filteredCards = initialCards.filter(
      (card) => category === "All" || card.category === category
    );

    setCards(filteredCards);
  };

  return (
    <div className="p-6 max-container h-screen mx-auto">
      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`px-4 py-2 rounded transition-colors ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`
               transition-all duration-500 ease-in-out
              absolute transform 
              ${
                index === 0
                  ? "scale-105 border-blue-500 z-10"
                  : "border-gray-200"
              }
            `}
            style={{
              top: 0,
              left: 0,
              width: "calc(33.3% - 1rem)", // Adjustment of grid
              transform: `translate(${(index % 3) * 100}%, ${
                Math.floor(index / 3) * 100
              }%)`,
              transition: "transform 0.5s ease-in-out, scale 0.5s ease-in-out",
            }}
          >
            <OsmoticTestingCard name={card.name} category={card.category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardFilterContainer;
