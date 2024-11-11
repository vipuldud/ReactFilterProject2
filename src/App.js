import './App.css';
import FoodData from './FoodData';
import Card from './Card';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(FoodData);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All");

  const filterItems = (type) => {
    setFilterType(type);
    if (type === "All") {
      setItems(FoodData); // Show all items
    } else {
      const filteredItems = FoodData.filter((item) => item.foodType === type);
      setItems(filteredItems);
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    const filteredItems = FoodData.filter((item) =>
      item.foodName.toLowerCase().includes(e.target.value.toLowerCase()) &&
      (filterType === "All" || item.foodType === filterType)
    );
    setItems(filteredItems);
  };

  const handleDropdownChange = (e) => {
    const selectedType = e.target.value;
    filterItems(selectedType);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col items-center space-y-4 mb-6 md:flex-row md:justify-center md:space-y-0 md:space-x-4">
        
        {/* Dropdown for filtering */}
        <select
          value={filterType}
          onChange={handleDropdownChange}
          className="border border-gray-300 rounded py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
        >
          <option value="All">All</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
        
        {/* Filter buttons */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => filterItems("All")}
        >
          All
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => filterItems("Breakfast")}
        >
          Breakfast
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => filterItems("Lunch")}
        >
          Lunch
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => filterItems("Dinner")}
        >
          Dinner
        </button>

        {/* Search field */}
        <input
          type="text"
          placeholder="Search by food name..."
          value={search}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.foodId}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
