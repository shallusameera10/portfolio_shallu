import React from "react";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

function Companies() {
  let CompaniesList = [
    "/logos/Rocky_Mountain_Logo.png",
    "/logos/Rocky_Mountain_Logo.png",
  ];
  return (
    <>
      <div className="my-[70px]" id="work">
        <div className="border border-solid p-[5px_10px] my-[10px] rounded-full w-[340px] flex gap-[5px] items-center ">
          <HiOutlineOfficeBuilding /> Working As React Developer, In Infino
        </div>
        <h2 className="primaryHeading">
          Worked <span className="text-primary font-[600]">Companies</span>
        </h2>

        <div className="my-[20px] flex flex-wrap gap-[15px]">
          {CompaniesList.map((ele, index) => (
            <>
              <img src={ele} key={ele} alt={ele} className="my-[5px]" />
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Companies;
