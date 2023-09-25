import React from "react";
import picaso from "../picaso.webp";
const Hero = () => {
  return (
    <main className="w-screen h-[83vh] relative text-center">
      <img src={picaso} alt="bg_image" className="w-full h-full absolute" />
      <div className=" absolute bg-[rgb(0,0,0,0.7)] w-full h-full flex flex-col justify-center text-white">
        <h1 className="text-6xl font-bold pt-12 pb-3 px-0 ">
          PICASO: Creating images from text
        </h1>
        <p className="text-2xl ">Generate AI powered images, its fun</p>
      </div>
    </main>
  );
};

export default Hero;
