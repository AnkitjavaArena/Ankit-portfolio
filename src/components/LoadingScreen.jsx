import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
      <div className="w-14 h-14 border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin" />
      <p className="mt-6 text-white text-lg font-medium tracking-wide">
        Ankit Tripathi
      </p>
    </div>
  );
};

export default LoadingScreen;
