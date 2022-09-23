import React from "react";
import { Carousel } from "3d-react-carousal";
import { Link } from "react-router-dom";

const Projects = () => {
  let slides = [
    <div className="project-links">
      <img src="./images/portfolio.png" alt="1" />
      <Link
        target="_blank"
        rel="noopener noreferrer"
        to="https://github.com/codewithdivu/my-personal-portfolio"
      >
        <span></span>
        Source Code
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        to="https://github.com/codewithdivu/my-personal-portfolio"
      >
        <span></span>
        Live View
      </Link>
    </div>,
    <div className="project-links">
      <img src="./images/inote.png" alt="1" />
      <Link
        target="_blank"
        rel="noopener noreferrer"
        to="https://github.com/codewithdivu/I-Notes-webapp"
      >
        <span></span>
        Source Code
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        to="https://candid-praline-15cce8.netlify.app/"
      >
        <span></span>
        Live View
      </Link>
    </div>,
    <div className="project-links">
      <img src="./images/school.png" alt="1" />
      <Link
        target="_blank"
        rel="noopener noreferrer"
        to="https://github.com/codewithdivu/School-Administration-webApp"
      >
        <span></span>
        Source Code
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        to="https://school-administration.vercel.app/dashboard/app"
      >
        <span></span>
        Live View
      </Link>
    </div>,
    <div className="project-links">
      <img src="./images/meco.png" alt="1" />
      <Link
        target="_blank"
        rel="noopener noreferrer"
        to="https://github.com/codewithdivu/Meco"
      >
        <span></span>
        Source Code
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        to="https://meco.vercel.app/movies"
      >
        <span></span>
        Live View
      </Link>
    </div>,
  ];
  return (
    <div className="project">
      <Carousel slides={slides} autoplay={true} interval={10000} />
    </div>
  );
};

export default Projects;
