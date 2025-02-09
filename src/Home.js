import React from "react";
import ProfileCard from "./components/ProfileCard";
import Aboutus from "./components/Aboutus";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Companies from "./components/Companies";
import Education from "./components/Education";
import SideMenu from "./components/SideMenu";
import ContactUs from "./components/ContactUs.js";
import Footer from "./components/Footer.js";

function Home() {
  return (
    <>
      <div className="wrapper">
        <div
          id="home"
          className="max-w-[100%] grid xs:grid-cols-1 md:grid-cols-[30%_70%] lg:grid-cols-[20%_68%_10%] xl:grid-cols-[20%_70%_8%] gap-[15px] p-[20px_10px] "
        >
          <div>
            <ProfileCard />
          </div>
          <div className="xs:w-[100%] lg:w-[85%]  xl:w-[88%] mx-auto md:px-[15px] lg:px-[80px] xl:px-[120px]">
            <Introduction />
            <Aboutus />
            <Skills />
            <Projects />
            <Companies />
            <Education />
            <ContactUs />
            <Footer />
          </div>
          <div className="xs:hidden lg:block">
            <SideMenu />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
