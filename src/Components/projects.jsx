import React from "react";
import { Carousel } from "3d-react-carousal";

const Projects = () => {
  let slides = [
    <div className="project-links">
      <img src="./images/portfolio.png" alt="1" />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/codewithdivu/my-personal-portfolio"
      >
        <span></span>
        Source Code
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/codewithdivu/my-personal-portfolio"
      >
        <span></span>
        Live View
      </a>
    </div>,
    <div className="project-links">
      <img src="./images/inote.png" alt="1" />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/codewithdivu/I-Notes-webapp"
      >
        <span></span>
        Source Code
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://candid-praline-15cce8.netlify.app/"
      >
        <span></span>
        Live View
      </a>
    </div>,
    <div className="project-links">
      <img src="./images/school.png" alt="1" />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/codewithdivu/School-Administration-webApp"
      >
        <span></span>
        Source Code
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://school-administration.vercel.app/dashboard/app"
      >
        <span></span>
        Live View
      </a>
    </div>,
    <div className="project-links">
      <img src="./images/meco.png" alt="1" />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/codewithdivu/Meco"
      >
        <span></span>
        Source Code
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://meco.vercel.app/movies"
      >
        <span></span>
        Live View
      </a>
    </div>,
  ];
  return (
    <div className="project">
      <Carousel slides={slides} autoplay={true} interval={10000} />
    </div>
  );
};

export default Projects;
