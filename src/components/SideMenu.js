import React from "react";

function SideMenu() {
  let menuItem = [
    { title: "Intro", link: "#home" },
    { title: "Work", link: "#work" },
    { title: "Skills", link: "#skills" },
    { title: "Projects", link: "#projects" },
    { title: "About Me", link: "#about" },
    { title: "Education", link: "#education" },
    { title: "Contact Us", link: "#contactus" },
  ];
  return (
    <>
      <div className="fixed xs:w-[10%] xl:w-[8%]">
        <div className=" border border-light_grey border-1 rounded-xl p-[15px]">
          <ul className="sideMenu">
            {menuItem.map((ele, index) => (
              <>
                <a href={ele.link}>
                  {" "}
                  <li className="text-light_grey">
                    {index + 1}. {ele.title}
                  </li>
                </a>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
