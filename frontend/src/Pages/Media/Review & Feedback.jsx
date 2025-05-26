import React, { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    console.log({
      rating,
      review,
      name,
      email,
    });
    alert("Review submitted successfully!");
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800">Reviews and Feedback</h1>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="p-8 rounded-lg w-full md:w-1/2">
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-semibold mb-2">
                Your overall rating
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <i
                    key={value}
                    className={`${value <= rating ? "fas" : "far"} fa-star text-yellow-500 text-3xl cursor-pointer`}
                    onClick={() => handleRating(value)}
                  ></i>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-lg font-semibold mb-2">
                Your review
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
                placeholder="Please leave your review."
                value={review}
                onChange={(e) => setReview(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-lg font-semibold mb-2">
                Your name
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Tell us your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-lg font-semibold mb-2">
                Your email
              </label>
              <input
                type="email"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Tell us your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex justify-center">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
                type="button"
                onClick={handleSubmit}
              >
                SUBMIT YOUR REVIEW
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="/Assets/Media/ratings.jpg"
              alt="Review & Feedback"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
