import React from "react";
import { IoImageOutline } from "react-icons/io5";

function Skills() {
  let skills = [
    {
      label: "Mobile Development Frameworks",
      images: [
        { title: "Android", img: "/logos/android.png" },
        { title: "X Code", img: "/logos/Xcode.png" },
        { title: "Swift", img: "/logos/swift.png" },
        { title: "React Native", img: "/logos/react.png" },
      ],
    },
    {
      label: "Programming Languages",
      images: [
        { title: "C++", img: "/logos/c++.png" },
        { title: "Kotlin", img: "/logos/kotlin.png" },
      ],
    },
    {
      label: "UI/UX Design",
      images: [
        { title: "Potoshop", img: "/logos/ps.png" },
        { title: "Adobe Illustrator", img: "/logos/ai.png" },
        { title: "Canva", img: "/logos/canva.png" },
        { title: "Figma", img: "/logos/figma.png" },
      ],
    },
    {
      label: "Web Development",
      images: [
        { title: "Javascript", img: "/logos/javascript.png" },
        { title: "Bootstrap", img: "/logos/bootstrap.png" },
        { title: "Css", img: "/logos/css.png" },
        { title: "HTML", img: "/logos/html.png" },
      ],
    },
    {
      label: "Backend Development",
      images: [
        { title: "Node js", img: "/logos/node_js.png" },
        { title: "Mongo DB", img: "/logos/mongo_db.png" },
        { title: "My Sql", img: "/logos/my_sql.png" },
      ],
    },
    {
      label: "Cloud Service",
      images: [{ title: "Firebase", img: "/logos/firebase.png" }],
    },
    {
      label: "CRM System",
      images: [{ title: "Wordpress", img: "/logos/wordpress.png" }],
    },
  ];
  return (
    <>
      <div className="my-[70px]" id="skills">
        <div className="border border-solid p-[5px_10px] my-[10px] rounded-full w-[90px] flex gap-[5px] items-center ">
          <IoImageOutline /> Skills
        </div>
        <h2 className="primaryHeading">
          My<span className="text-primary font-[600]"> Perks</span>
        </h2>
        {skills.map((ele, index) => (
          <>
            <div className="my-[20px]">
              <h5 className="text-[20px] ">
                {index + 1}. {ele.label}
              </h5>
              <div className="flex flex-wrap xs:gap-[10px] my-[10px]">
                {ele.images.map((item) => (
                  <>
                    <div className="xs:basis-[46%] md:basis-[22%] text-center">
                      <div className="text-center border border-solid p-[10px] border-light_grey rounded-xl mb-[10px]">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-[80px] mx-auto"
                        />
                      </div>
                      <p>{item.title}</p>
                    </div>
                  </>
                ))}
              </div>
              <div className="h-[1px] bg-green-950"></div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Skills;
