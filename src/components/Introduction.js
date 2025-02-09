import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
function Introduction() {
  return (
    <>
      <div>
        <div className="border border-solid p-[5px_10px] my-[10px] rounded-full w-[100px] flex gap-[5px] items-center ">
          <IoHomeOutline /> Home
        </div>
        <h2 className="primaryHeading">
          Hi, I'm <span className="text-primary font-[600]">Shallu</span>,
          skilled in{" "}
          <span className="text-primary font-[600]">
            Mobile App Development
          </span>
          .
        </h2>
        <p className="paragraph">
          Here to help you create impressive website by writing my
          web-development skills and will help you social media as well as with
          my potential work.
        </p>
        <div className="relative xs:w-[40%] lg:w-[20%] ml-auto my-[35px] cursor-pointer">
          <a href="#projects">
            <img
              src="/images/round-text.png"
              className="App-logo mx-auto"
              alt="logo"
            />
            <FaArrowDownLong className="absolute top-[40%] left-[44%] xs:text-[20px] md:text-[26px]" />
          </a>
        </div>
        <div className="flex w-[100%] gap-[20px] paragraph">
          <div className="basis-[40%]">
            <h2 className="xs:text-[50px]  lg:text-[60px]  text-primary">3+</h2>
            <h6>YEAR OF EXPERIENCE</h6>
          </div>
          <div className="basis-[45%]">
            <h2 className="xs:text-[50px]  lg:text-[60px] text-primary">10+</h2>
            <h6>PROJECT COMPLETED</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
