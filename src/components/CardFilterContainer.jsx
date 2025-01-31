import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OsmoticTestingCard from "./TestCardPackage";
import { Link } from "react-router-dom";
import { testCard } from "../consonants";

const CardFilterContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(testCard.map((card) => card.category))];

  const filteredCards = testCard.filter(
    (card) => selectedCategory === "All" || card.category === selectedCategory
  );

  return (
    <div className="p-6 max-container h-auto mx-auto">
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded transition-colors ${
              selectedCategory === category
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-800  hover:text-white relative before:absolute before:w-0 before:-z-10 before:rounded before:h-full before:bg-primary before:transition-all before:duration-500 before:ease-in-out hover:before:w-full before:content-[''] before:top-0 before:left-0"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        layout
      >
        <AnimatePresence>
          {filteredCards.map((card) => (
            <motion.div
              key={card.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <Link to={`/book-test/${card.id}?name=${card.name}`}>
                <OsmoticTestingCard
                  name={card.testName}
                  category={card.category}
                />
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CardFilterContainer;
