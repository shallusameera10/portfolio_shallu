import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

function Temp() {
  let menu = [
    "Product & Services",
    "Tracking",
    "Locations",
    "Company",
    "Help Center",
    "Careers",
    "Flight Schedule ",
  ];
  return (
    <>
      <section className="xs:w-[100%] md:w-[95%] mx-auto py-[15px] flex items-center">
        <div className="max-[420px]:basis-[30%]  p-[10px] max-[600px]:bg-sky-300 ">
          <img
            src="/images/png_logo.png"
            alt="img"
            className="max-[420px]:w-[150px]"
          />
        </div>
        <div className="max-[420px]:hidden basis-[65%] flex justify-center items-center">
          <ul className="menus">
            {menu.map((ele) => (
              <>
                <li>
                  {ele}
                  <FaAngleDown className="inline" />
                </li>
              </>
            ))}
          </ul>
        </div>
        <div className="max-[420px]:block max-[420px]:basis-[15%] max-[2600px]:hidden basis-[10%] text-black text-[22px]">
          <FiMenu />
        </div>
        <div className="max-[420px]:basis-[15%] basis-[5%] flex justify-center">
          <div className="w-[50px] p-[12px] text-[22px] border-[1px] border-solid border-black text-black rounded-full">
            <IoIosSearch />
          </div>
        </div>
        <div className="max-[420px]:hidden basis-[12%] flex justify-center">
          <button type="button" className="primarybtn">
            Login to MyCargo
          </button>
        </div>
        <div className="max-[420px]:hidden basis-[10%] flex justify-center">
          <button type="button" className="secondarybtn">
            Get a Quote
          </button>
        </div>
      </section>
    </>
  );
}

export default Temp;
