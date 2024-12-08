import { useState } from "react";
import OsmoticTestingCard from "./TestCardPackage";
import { Link } from "react-router-dom";
import { testCard } from "../consonants";

const CardFilterContainer = () => {
  const [cards, setCards] = useState(testCard);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(testCard.map((card) => card.category))];

  const handleFilter = (category) => {
    setSelectedCategory(category);

    const filteredCards = testCard.filter(
      (card) => category === "All" || card.category === category
    );

    setCards(filteredCards);
  };

  const getIndexModValue = () => {
    const width = window.innerWidth;

    if (width <= 440) {
      return 1; // for screens smaller than or equal to 440px
    } else if (width <= 1024) {
      return 2; // for screens between 441px and 1024px
    } else {
      return 3; // for larger screens (desktops)
    }
  };

  const modValue = getIndexModValue();

  return (
    <div className="p-6 max-container h-[1200px] mx-auto">
      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`px-4 py-2 rounded transition-colors ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white"
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
               transition-all lg:w-[33.33%] w-full md:w-1/2 duration-500 ease-in-out
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

              transform: `translate(${(index % modValue) * 100}%, ${
                Math.floor(index / modValue) * 100
              }%)`,
              transition: "transform 0.5s ease-in-out, scale 0.5s ease-in-out",
            }}
          >
            <Link to={`/book-test/${card.id}?name=${card.name}`}>
              <OsmoticTestingCard
                name={card.testName}
                category={card.category}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardFilterContainer;
