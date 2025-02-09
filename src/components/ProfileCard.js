import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa6";

function ProfileCard() {
  return (
    <>
      <div className="xs:block md:fixed  xs:w-[100%] md:w-[30%]  lg:w-[25%] xxl:w-[15%]">
        <div className="border border-light_grey border-1 rounded-xl p-[30px] text-[22px]">
          <h1 className="text-primary text-[30px] font-[600]">Shallu</h1>
          <hr className="my-[20px]" />

          <div className="text-center ">
            <img
              src="/images/profile-pic3.png"
              alt="profile_pic"
              className="xs:w-[80%]  lg:w-[50%] m-auto mb-[15px]"
            />
            {/* <hr className="my-[20px]" /> */}
            <h3 className="secondaryHeading">Hi, This is</h3>
            <h3 className="text-primary secondaryHeading">
              Software Developer
            </h3>
            <h3 className="secondaryHeading"> from Toronto</h3>
            <p className="xs:text-[12px] sm:text-[14px] md:text-[18px] text-light_grey my-[10px]">
              My journey in coding is not just a career—it's my passion.
            </p>
            <button type="button" className="primaryBtn w-[90%]">
              My Resume
            </button>
            <button type="button" className="secondaryBtn w-[90%]">
              Contact Us
            </button>
          </div>
          <div className="flex gap-[10px] justify-around my-[15px] socialmediaicons">
            <FaLinkedin />
            <FaGithub />
            <FaStackOverflow />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
