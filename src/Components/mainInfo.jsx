import React from "react";
import { Typewriter } from "react-simple-typewriter";
// import "react-simple-typewriter/dist/index.css";

const MainInfo = () => {
  return (
    <>
      <div className="container" id="home">
        <div className="left-home">
          <div>
            <p className="profile-txt">
              Hey
              <img
                className="hello-image"
                src="./images/hello.gif"
                alt="divu"
              />
              ,<br />
              I'm{" "}
              <span className="my-name">
                {/* <Typewriter
                  loop
                  cursor
                  cursorStyle=""
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  words={["Mavadiya Divyesh"]}
                />{" "} */}
                Mavadiya Divyesh
              </span>{" "}
              <br />
              <span className="about-txt">
                And i am a{" "}
                <Typewriter
                  loop
                  cursor
                  cursorStyle=""
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  words={[
                    "Student",
                    "Software Developer",
                    "Full-Stack Developer",
                  ]}
                />{" "}
              </span>
              <p className="about-me">
                I have recently started my journey as a Web Developer. Web
                Development has
                <br />
                been into my interest since 2021 and am currently focusing more
                on Full-Stack Web Development!
                <br />
                My interest's? Making faster, user-friendly, smooth UI and
                better UX! <br />
                Talk less do more...shh.
              </p>
            </p>
          </div>
          <div className="social-menu">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/divyesh-mavadiya-a8a995201/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/codewithdivu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/codewithdivu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram" />
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/Divyesh_017"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-home">
          <img className="profile-image" src="./images/divyesh.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default MainInfo;
