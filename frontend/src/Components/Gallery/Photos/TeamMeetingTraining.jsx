import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const teamMeetingImages = [
  "https://source.unsplash.com/600x400/?meeting",
  "https://source.unsplash.com/600x400/?conference",
  "https://source.unsplash.com/600x400/?teamwork",
  "https://source.unsplash.com/600x400/?office",
];

const TeamMeetingTraining = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Team Meeting & Training</h1>
      <PhotoProvider>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {teamMeetingImages.map((src, index) => (
            <PhotoView key={index} src={src}>
              <img src={src} alt="Team Meeting" className="w-full h-64 object-cover rounded-lg shadow-md cursor-pointer"/>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
};

export default TeamMeetingTraining;
