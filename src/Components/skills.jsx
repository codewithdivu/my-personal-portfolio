import React from "react";

const Skills = () => {
  return (
    <>
      <section className="skills">
        <div className="skill-header">SKILLS</div>
        <div className="skill-div">
          <div className="first-row-skill">
            <div>
              <img src="./images/html.png" alt="html" />
              <p>HTML</p>
            </div>
            <div>
              <img src="./images/css.png" alt="css" />
              <p>CSS</p>
            </div>
            <div>
              <img src="./images/javascript.png" alt="javascript" />
              <p>JAVASCRIPT</p>
            </div>
          </div>
          <div className="second-row-skill">
            <div>
              <img src="./images/react.png" alt="react" />
              <p>REACT</p>
            </div>
            <div>
              <img src="./images/python.png" alt="python" />
              <p>PYTHON</p>
            </div>
            <div>
              <img src="./images/cpp.png" alt="cpp" />
              <p>C++</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
