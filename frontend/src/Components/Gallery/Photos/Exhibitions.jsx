import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const exhibitionImages = [
  "https://source.unsplash.com/600x400/?exhibition",
  "https://source.unsplash.com/600x400/?art",
  "https://source.unsplash.com/600x400/?event",
  "https://source.unsplash.com/600x400/?gallery",
];

const Exhibitions = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Exhibitions</h1>
      <PhotoProvider>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {exhibitionImages.map((src, index) => (
            <PhotoView key={index} src={src}>
              <img src={src} alt="Exhibition" className="w-full h-64 object-cover rounded-lg shadow-md cursor-pointer"/>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
};

export default Exhibitions;
