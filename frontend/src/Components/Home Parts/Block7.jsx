import React from "react";

const Block7 = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 md:px-8 lg:px-12">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-green-800">
      HUMAN HEALTH SUPPLEMENTS{" "}
        <span className="text-orange-600">AND PERSONAL CARE</span>
      </h1>
      <div 
        className="h-1 w-10/12 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-5/12 max-w-5xl rounded" 
        style={{ 
          background: "linear-gradient(to right, #ea580c, #15803d)" 
        }}
      ></div>
    </div>
  );
};

export default Block7;
