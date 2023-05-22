import React, { useState } from "react";
import "./JobCategories.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import men from '../../../images/men.svg'

const JobCategories = () => {
  const data = [
    {
      profile: "IT Engineer",
      available: "508+ Jobs",
    },
    {
      profile: "Sales",
      available: "508+ Jobs",
    },
    {
      profile: "Marketing",
      available: "508+ Jobs",
    },
    {
      profile: "UI/UX",
      available: "508+ Jobs",
    },
    {
      profile: "Graphics",
      available: "508+ Jobs",
    },
    {
      profile: "Data Entry",
      available: "50+ Jobs",
    },
    {
      profile: "Digital Marketing",
      available: "58+ Jobs",
    },
    {
      profile: "Engineer",
      available: "508+ Jobs",
    },
    {
      profile: "Engineer",
      available: "508+ Jobs",
    },
    {
      profile: "Sales",
      available: "508+ Jobs",
    },
    {
      profile: "Marketing",
      available: "508+ Jobs",
    },
    {
      profile: "UI/UX",
      available: "508+ Jobs",
    },
    {
      profile: "Graphics",
      available: "508+ Jobs",
    },
    {
      profile: "Data Entry",
      available: "50+ Jobs",
    },
    {
      profile: "Digital Marketing",
      available: "58+ Jobs",
    },
    {
      profile: "Engineer",
      available: "508+ Jobs",
    },
    {
      profile: "Engineer",
      available: "508+ Jobs",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 4 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 4 ? 0 : prevIndex + 1
    );
  };

  const visibledata = data.slice(
    currentIndex,
    currentIndex + 6 >= data.length ? undefined : currentIndex + 6
  );

  return (
    <div>
      <div className="textImgContainer">
        <div className="text">
          <h1>Top Job Categories</h1>
          
          {/* <img src={process.env.PUBLIC_URL + "men.svg"} alt="men" /> */}
          <p>Select a role and we'll show you relevent jobs for it!</p>

        </div>
        <div className="men">
          <img src={men} alt="men" />
        </div>
        <div className="jobCategoires">
          <div className="slider">
            <button onClick={goToPreviousSlide}>
              <FaArrowLeft />
            </button>
            <div className="data-row">
              {visibledata.map((image, index) => (
                <div className="dataBox" key={index}>
                  <h3>{image.profile}</h3>
                  <p> {image.available}</p>
                </div>
              ))}
            </div>
            <button onClick={goToNextSlide}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategories;
