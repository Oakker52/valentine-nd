import React from "react";
import { assets } from "../public/assets";
import './index.css';

export default function YesPG() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-green-100 text-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: "url('./photo_2025-02-08_23-18-34.jpg')" }}
      ></div>
    
      {/* Content */}
      <div className="relative z-10 flex gap-4 w-full mb-2 justify-center max-w-4xl mx-auto px-4">
        <img
          className="w-[45%] sm:w-[45%] lg:w-[45%] xl:w-[35%] rounded-lg drop-shadow-lg"
          src={assets.img_1}
          alt=""
        />
        <img
          className="w-[45%] sm:w-[45%] lg:w-[45%] xl:w-[35%] rounded-lg drop-shadow-lg"
          src={assets.img_2}
          alt=""
        />
      </div>
    
      <h1 className="text-2xl font-tangerine font-bold z-10">I knew you would say <span className="text-pink-500">'YES'</span> 💖</h1>
      <h2 className="text-2xl font-tangerine z-10 text-pink-500">Now you are my Valentine</h2>
    
      <div className="relative z-10 flex gap-4 w-full justify-center mt-6 px-4">
        <img
          className="w-1/4 sm:w-1/4 md:w-1/4 lg:w-[20%] xl:w-[15%] h-[150px] xl:h-[160px] object-cover rounded-lg drop-shadow-md"
          src={assets.bimg1}
          alt=""
        />
        <img
          className="w-1/4 sm:w-1/4 md:w-1/4 lg:w-[20%] xl:w-[15%] h-[150px] xl:h-[160px] object-cover rounded-lg drop-shadow-md"
          src={assets.bimg2}
          alt=""
        />
        <img
          className="w-1/4 sm:w-1/4 md:w-1/4 lg:w-[20%] xl:w-[15%] h-[150px] xl:h-[160px] object-cover rounded-lg drop-shadow-md"
          src={assets.bimg3}
          alt=""
        />
        <img
          className="w-1/4 sm:w-1/4 md:w-1/4 lg:w-[20%] xl:w-[15%] h-[150px] xl:h-[160px] object-cover rounded-lg drop-shadow-md"
          src={assets.bimg4}
          alt=""
        />
      </div>
      <div className="absolute w-[30%] top-[20px] right-[20px] lg:w-[20%] xl:w-[20%] xl:right-[80px] xl:top-[100px]">
        <img src={assets.fimg1} alt="" />
      </div>
      <div className="absolute w-[25%] bottom-[20px] right-[20px] lg:w-[20%] xl:w-[15%]">
        <img src={assets.fimg2} alt="" />
      </div>
      <div className="absolute w-[25%] bottom-[20px] left-[20px] lg:w-[20%] xl:w-[15%]">
        <img src={assets.fimg3} alt="" />
      </div>
      <div className="absolute w-[25%] top-[20px] left-[20px] lg:w-[20%] xl:w-[15%] xl:left-[80px] xl:top-[100px]">
        <img src={assets.fimg4} alt="" />
      </div>
    </div>
  );
};
