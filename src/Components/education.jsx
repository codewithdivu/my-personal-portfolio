import React from "react";

const Education = () => {
  return (
    <>
      <section className="education">
        <div className="education-heading">Education</div>
        <div className="education-div">
          <div className="education-subdiv">
            <div>
              <img src="./images/gecmodsa.jpg" alt="GEC-MODASA" />
            </div>
            <div>
              <p>
                BE Computer Engineering | Government Engineering College Modasa,
                <br />
                Modasa, Gujarat, India.
              </p>
              <span>Gujarat Techonological University</span>
              <p className="education-status persuing">Persuing 2020-2024</p>
            </div>
          </div>
          <div className="education-subdiv">
            <div>
              <img src="./images/lbs.png" alt="GEC-MODASA" />
            </div>
            <div>
              <p>
                HSC | Shri Lal Bahadur Shastri Vidyalaya(Boys),
                <br />
                Rajkot, Gujarat, India.
              </p>
              <span>
                Gujarat Secondary and Higher Secondary Education Board
              </span>

              <p className="education-status">Completed 2018-2020</p>
            </div>
          </div>
          <div className="education-subdiv">
            <div>
              <img src="./images/shethndr.jpg" alt="GEC-MODASA" />
            </div>
            <div>
              <p>
                SSC | Sheth NDR High School,
                <br />
                Madhavpur, Gujarat, India.
              </p>
              <span>
                Gujarat Secondary and Higher Secondary Education Board
              </span>

              <p className="education-status">Completed 2016-2018</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
