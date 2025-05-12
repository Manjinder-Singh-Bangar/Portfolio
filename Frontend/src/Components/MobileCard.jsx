import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const MobileCard = ({ title, body, projectSrc, imageSrc, tools = [], live }) => {
  

  return (
    <div 
      className="bg-[#011221] card rounded-lg border border-[#1E2D3D] transition-all hover:scale-[1.05] scale-[1]"
    >
      <div className="relative">
        <div className="grid grid-cols-6 gap-3 w-full place-content-end p-6 absolute">
          {tools.map((item, index) => (
            <img key={index} className="w-[30px] h-[30px] hover:scale-[1.3] transition-all scale-[1] relative" src={item} alt="" />
          ))}
        </div>
        <img className="rounded-t-lg" src={imageSrc} alt="" />
      </div>
      <div className="p-3 flex flex-col gap-3">
        <h1 className="text-[22px] font-bold text-white">{title}</h1>
        <p className="w-full text-[14px] text-gray-300">{body}</p>
        <div className="flex justify-between">
          <Link 
            to={projectSrc} 
            className="bg-[#FEA55F] p-3 w-fit text-white transition-all rounded-md 
            hover:bg-transparent hover:border hover:border-white"
          >
            _view_projects
          </Link>
          {
            live ? (
            <Link 
              target="_blank"
              to={live}
              className="bg-[#FEA55F] p-3 w-fit text-white transition-all rounded-md 
              hover:bg-transparent hover:border hover:border-white"
            >
              _view_live
            </Link>
            ): <></>
          }
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
