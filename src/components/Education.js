import React, { useState } from "react";
import { LiaSchoolSolid } from "react-icons/lia";

function Education() {
  const [activeIndex, setActiveIndex] = useState(0);
  let EducationExperienceData = [
    {
      title: "Education",
      data: [
        {
          title: "BSC.IT (Distance Education) - Currently pursuing",
          subtitle:
            "Lovely Professional University , Jalandhar - Delhi G.T. Road, Phagwara, Punjab (India)",
          year: "2021-2024",
        },
        {
          title: "BSC.IT (Distance Education) - Currently pursuing",
          subtitle:
            "Lovely Professional University , Jalandhar - Delhi G.T. Road, Phagwara, Punjab (India)",
          year: "2021-2024",
        },
        {
          title: "BSC.IT (Distance Education) - Currently pursuing",
          subtitle:
            "Lovely Professional University , Jalandhar - Delhi G.T. Road, Phagwara, Punjab (India)",
          year: "2021-2024",
        },
        {
          title: "BSC.IT (Distance Education) - Currently pursuing",
          subtitle:
            "Lovely Professional University , Jalandhar - Delhi G.T. Road, Phagwara, Punjab (India)",
          year: "2021-2024",
        },
      ],
    },
    {
      title: "Experience",
      data: [
        {
          title: "Rocky Mountain Technologies Pvt Ltd. ",
          subtitle: "Working as App Developer.",
          year: "2022-2024",
        },
        {
          title: "Rocky Mountain Technologies Pvt Ltd. ",
          subtitle: "Working as App Developer.",
          year: "2022-2024",
        },
        {
          title: "Rocky Mountain Technologies Pvt Ltd. ",
          subtitle: "Working as App Developer.",
          year: "2022-2024",
        },
        {
          title: "Rocky Mountain Technologies Pvt Ltd. ",
          subtitle: "Working as App Developer.",
          year: "2022-2024",
        },
      ],
    },
  ];
  const handleActive = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div className="my-[70px]" id="education">
        <div className="border border-solid p-[5px_10px] my-[10px] rounded-full w-[240px] flex gap-[5px] items-center ">
          <LiaSchoolSolid /> Education & Experience
        </div>
        <h2 className="primaryHeading">
          Education &{" "}
          <span className="text-primary font-[600]"> Experience</span>
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
        <div>
          {EducationExperienceData[activeIndex].data.map((ele, index) => (
            <>
              <div className="border border-solid hover:border-primary duration-[0.5s] border-light_grey my-[25px] rounded-xl p-[30px_15px]">
                <div className="xs:block md:flex  flex-wrap">
                  <div className="xs:basis-[100%] lg:basis-[80%] xl:basis-[85%]">
                    <div className="flex flex-wrap">
                      <div className="basis-[5%]">
                        <h2 className="xs:text-[20px] md:text-[22px] lg:md:text-[24px]">
                          {index + 1}.{" "}
                        </h2>{" "}
                      </div>
                      <div className="basis-[94%]">
                        <h2 className="xs:text-[20px] md:text-[22px] lg:md:text-[24px]">
                          {" "}
                          {ele.title}{" "}
                        </h2>
                        <p className="text-[16px] text-light_grey my-[5px]">
                          {ele.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="xs:basis-[100%]  lg:basis-[20%] xl:basis-[15%] text-right">
                    <p className="text-primary">({ele.year})</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Education;
