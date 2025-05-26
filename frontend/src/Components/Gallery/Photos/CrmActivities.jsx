import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const crmImages = [
  "https://source.unsplash.com/600x400/?business",
  "https://source.unsplash.com/600x400/?marketing",
  "https://source.unsplash.com/600x400/?sales",
  "https://source.unsplash.com/600x400/?crm",
];

const CrmActivities = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">CRM Activities</h1>
      <PhotoProvider>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {crmImages.map((src, index) => (
            <PhotoView key={index} src={src}>
              <img src={src} alt="CRM Activities" className="w-full h-64 object-cover rounded-lg shadow-md cursor-pointer"/>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
};

export default CrmActivities;
