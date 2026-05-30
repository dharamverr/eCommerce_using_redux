const ProductShimmer = () => {
  return (
    
    <div className="max-w-[250px] border border-gray-400 rounded-[10px] overflow-hidden p-2 flex flex-col justify-between gap-3 animate-pulse">
      {/* Image */}
      <div className="flex justify-center items-center relative">
        <div className="absolute top-1 right-1 w-6 h-6 bg-gray-300 rounded-full"></div>

        <div className="w-[60%] h-[150px] bg-gray-300 rounded"></div>
      </div>

      {/* Title */}
      <div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      </div>

      {/* Rating & Price */}
      <div className="flex justify-between">
        <div className="h-4 bg-gray-300 rounded w-20"></div>
        <div className="h-5 bg-gray-300 rounded w-14"></div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center">
        <div className="h-8 bg-gray-300 rounded w-24"></div>
        <div className="h-8 bg-gray-300 rounded w-20"></div>
      </div>
    </div>
  );
};

export default ProductShimmer;