import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-950">
      <div className="w-14 h-14 border-4 border-slate-800 border-t-blue-500 rounded-full animate-spin motion-reduce:animate-none" />
      <p className="mt-6 text-white text-lg font-heading font-medium tracking-wide">
        Ankit Tripathi
      </p>
    </div>
  );
};

export default LoadingScreen;
