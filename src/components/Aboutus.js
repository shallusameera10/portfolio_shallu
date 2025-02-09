import React from "react";
import { MdOutlinePerson } from "react-icons/md";

function Aboutus() {
  return (
    <>
      <div className="my-[70px]" id="about">
        <div className="border border-solid p-[5px_10px] my-[10px] rounded-full w-[120px] flex gap-[5px] items-center ">
          <MdOutlinePerson /> About Me
        </div>
        <h2 className="primaryHeading">
          On My <span className="text-primary font-[600]">Prossional</span>,
          Path
        </h2>
        <p className="paragraph">
          Hey there! 👋 I'm Shallu from Canada, a passionate Mobile App
          Developer with over 3 years of experience specializing in Flutter also
          versatile developer and designer with expertise in Kotlin, JavaScript,
          web development, and UI/UX design. Skilled in tools like Figma, Adobe
          Illustrator, and Photoshop, I bring creativity and functionality
          together to deliver impactful projects. Currently pursuing
          postgraduate studies at George Brown College, Toronto, I’m passionate
          about crafting intuitive solutions that blend innovation with design
          excellence. Let’s create something extraordinary!
        </p>
      </div>
    </>
  );
}

export default Aboutus;
