import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const farmersFairsImages = [
  "https://source.unsplash.com/600x400/?farmers",
  "https://source.unsplash.com/600x400/?agriculture",
  "https://source.unsplash.com/600x400/?organic",
  "https://source.unsplash.com/600x400/?crops",
];

const FarmersFairs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Farmers Fairs</h1>
      <PhotoProvider>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {farmersFairsImages.map((src, index) => (
            <PhotoView key={index} src={src}>
              <img src={src} alt="Farmers Fair" className="w-full h-64 object-cover rounded-lg shadow-md cursor-pointer"/>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
};

export default FarmersFairs;
