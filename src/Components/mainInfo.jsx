import React from "react";

const MainInfo = () => {
  return (
    <>
      <div className="container" id="home">
        <div className="left-home">
          <div>
            <p>
              Hey
              <img className="hello-image" src="./images/hell.gif" alt="divu" />
              ,<br />
              I'm <span className="my-name">Divyesh Mavadiya</span> <br />
              <span>And im into Web Development!</span>
              <p className="about-me">
                I have recently started my journey as a Web Developer. Web
                Development has
                <br />
                been into my interest since 2018 and am currently focusing more
                on Full-Stack Web Development!
                <br />
                My interest's? Making faster, user-friendly, smooth UI and
                better UX! <br />
                Talk less do more...shh.
              </p>
            </p>
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
