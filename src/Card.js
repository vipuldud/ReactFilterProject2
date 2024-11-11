const Card = ({ item }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
        <img
          className="w-full h-48 object-cover"
          src={item.foodImage}
          alt={item.foodName}
        />
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2 text-gray-800">{item.foodName}</h2>
          <p className="text-gray-600 text-base">{item.foodDescription}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2">
            {item.foodType}
          </span>
        </div>
      </div>
    );
  };
  
  export default Card;
  