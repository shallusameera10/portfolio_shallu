import React, { useState } from "react";
import { CiBoxes } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let projectSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let EducationExperienceData = [
    {
      title: "App Development",
      projects: [
        {
          name: "Veg Food App",
          des: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          images: [
            "/screenshot/foodie_app.jpg",
            "/screenshot/foodie_app2.jpg",
            "/screenshot/foodie_app3.jpg",
            "/screenshot/foodie_app4.jpg",
            "/screenshot/foodie_app.jpg",
            "/screenshot/foodie_app2.jpg",
            "/screenshot/foodie_app3.jpg",
            "/screenshot/foodie_app4.jpg",
          ],
        },
        {
          name: "NonVeg Food App",
          des: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          images: [
            "/screenshot/foodie_app.jpg",
            "/screenshot/foodie_app2.jpg",
            "/screenshot/foodie_app3.jpg",
            "/screenshot/foodie_app4.jpg",
            "/screenshot/foodie_app.jpg",
            "/screenshot/foodie_app2.jpg",
            "/screenshot/foodie_app3.jpg",
            "/screenshot/foodie_app4.jpg",
          ],
        },
      ],
    },
    {
      title: "Web Development",
      projects: [
        {
          name: "Dilluminati",
          des: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          images: [
            "screenshot/Web/dilluminati/Dilluminati.jpg",
            "screenshot/Web/dilluminati/Dilluminati.jpg",
            "screenshot/Web/dilluminati/Dilluminati.jpg",
            "screenshot/Web/dilluminati/Dilluminati.jpg",
            "screenshot/Web/dilluminati/Dilluminati.jpg",
            "screenshot/Web/dilluminati/Dilluminati.jpg",
          ],
        },
        {
          name: "Food Order Website",
          des: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          images: [
            "screenshot/Web/foodie/foodie_web.jpg",
            "screenshot/Web/foodie/foodie_web.jpg",
            "screenshot/Web/foodie/foodie_web.jpg",
            "screenshot/Web/foodie/foodie_web.jpg",
            "screenshot/Web/foodie/foodie_web.jpg",
            "screenshot/Web/foodie/foodie_web.jpg",
            "screenshot/Web/foodie/foodie_web.jpg",
            "screenshot/Web/foodie/foodie_web.jpg",
          ],
        },
      ],
    },
    {
      title: "Social Media",
      projects: [
        {
          name: "Social Media Food App",
          des: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          images: [
            "/screenshot/foodie_app.jpg",
            "/screenshot/foodie_app2.jpg",
            "/screenshot/foodie_app3.jpg",
            "/screenshot/foodie_app4.jpg",
            "/screenshot/foodie_app.jpg",
            "/screenshot/foodie_app2.jpg",
            "/screenshot/foodie_app3.jpg",
            "/screenshot/foodie_app4.jpg",
          ],
        },
      ],
    },
  ];
  let projectSlides = [
    "screenshot/madchef.jpg",
    "screenshot/madchef.jpg",
    "screenshot/madchef.jpg",
    "screenshot/madchef.jpg",
  ];
  const handleActive = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="my-[70px]" id="projects">
        <div className="border border-solid p-[5px_10px] my-[10px] rounded-full w-[110px] flex gap-[5px] items-center ">
          <CiBoxes /> Projects
        </div>
        <h2 className="primaryHeading">
          Featured <span className="text-primary font-[600]">Projects </span>
        </h2>
        <br />
        <div className="flex ">
          {EducationExperienceData.map((ele, index) => (
            <>
              <div
                className={`${
                  activeIndex == index
                    ? "bg-primary text-white"
                    : "bg-transparent"
                } border bottom-solid border-light_grey p-[10px] rounded-t-lg group cursor-pointer`}
                onClick={() => handleActive(index)}
              >
                <p
                  className={` ${
                    activeIndex == index
                      ? "hover:text-white"
                      : " hover:text-primary"
                  } duration-[0.3s]`}
                >
                  {ele.title}
                </p>
              </div>
            </>
          ))}
        </div>
        <div className="slider-container">
          {EducationExperienceData[activeIndex].projects.map(
            (itemData, dataIndex) => (
              <>
                <div className="my-[30px]">
                  <h5 className="text-[20px] mb-[10px] ">
                    {dataIndex + 1}. {itemData.name}
                  </h5>
                  {EducationExperienceData[activeIndex].projects.name ==
                  "App Development" ? (
                    <>
                      <Slider {...projectSettings}>
                        {itemData.images?.map((item) => (
                          <>
                            <div className="p-[10px]">
                              <img
                                src={item}
                                alt={item}
                                className=" rounded-lg"
                              />
                            </div>
                          </>
                        ))}
                      </Slider>
                    </>
                  ) : (
                    <>
                      <Slider {...projectSettings}>
                        {itemData.images?.map((item) => (
                          <>
                            <div className="p-[10px]">
                              <img
                                src={item}
                                alt={item}
                                className=" rounded-lg"
                              />
                            </div>
                          </>
                        ))}
                      </Slider>
                    </>
                  )}
                </div>
              </>
            )
          )}
        </div>
      </div>
      <h2 className="primaryHeading">
        Featured <span className="text-primary font-[600]">Projects </span>
      </h2>
      <div className="slider-container mt-[15px]">
        <Slider {...settings}>
          {projectSlides.map((ele) => (
            <>
              <div className="xs:p-[0px] sm:p-[10px]">
                <img src={ele} alt={ele} className="rounded-lg" />
              </div>
            </>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Projects;
