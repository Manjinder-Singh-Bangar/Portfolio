import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Card = ({ projectsArr }) => {
 
  return (
    <div className="max-h-fit min-h-[calc(100vh-104.2px)]">
      {
        projectsArr.map((item,) => {
          return (
          <section id="snapping" className="section">
            <div key={item.id} className="content flex flex-col justify-center items-center w-fit h-full">
              <div className="text-container overflow-hidden flex gap-6 w-[100%]  p-5 h-fit">
                <img
                  className="w-[50%] relative rounded-lg"
                  src={item.imgSrc}
                  alt=""
                />
                <div className="flex flex-col gap-3 text-white">
                  <h1>
                    {item.title}
                  </h1>
                  <p>
                    {item.body}
                  </p>
                  <Link to={item.projectSrc} className="bg-[#FEA55F] w-fit p-2">_view_project_overview</Link>
                </div>
              </div>
            </div>
          </section>)
        })
      }
    </div>
  );
};

export default Card;
