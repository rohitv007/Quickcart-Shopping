const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100">
      <div className="flex items-center space-x-2">
        <div className="w-12 h-12 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        <span className="text-2xl font-semibold text-gray-700">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
