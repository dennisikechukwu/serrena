import React from 'react';
import Video from "../images/banner.mp4";

const BackgroundVideo = () => {
  return (
    <div className="relative w-full xs:h-[50vh] sm:h-[50vh] lg:h-screen mt-6">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={Video}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Text Overlay */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full p-10 max-w-xl text-white">
        <h1 className="text-4xl font-bold mb-4">Serrena Exclusive Deal</h1>
        <p className="text-lg mb-6">
          Discover the epitome of style with Serrena Exclusives. Elevate your wardrobe with premium brands, where luxury meets fashion. Immerse yourself in a world of unparalleled elegance. Explore now!
        </p>
        <a
          href="#shop"
          className="text-lg font-semibold inline-flex items-center hover:underline"
        >
          Visit Shop &rarr;
        </a>
      </div>

      {/* Overlay to make text stand out */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
    </div>
  );
};

export default BackgroundVideo;
