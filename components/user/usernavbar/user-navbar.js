import { user } from "@/src/constants/user";
import NavItems from "@/components/header/navitems";

const PersonalNavbar = ({
  state,
  dispatch
}) => {

  return (
    <div style={{ maxHeight: "100vh" }}>
      <ul className={`flex leading-none font-light flex-row justify-center gap-10 md:flex-col lg:gap-4 text-[1.2rem]`}>
        <li onClick={() => dispatch("about")} className={`${state.about ? "font-medium pointer-events-none" : "font-light"}`}>
          <span className="cursor-pointer">{state.about ? "● About" : "About"}</span>
        </li> 
         <li onClick={() => dispatch("experience")} className={`${state.experience ? "font-medium pointer-events-none" : "font-light"}`}>
          <span className="cursor-pointer">{state.experience ? "● Experience" : "Experience"}</span>
        </li>
        <li onClick={() => dispatch("projects")} className={`${state.projects ? "font-medium pointer-events-none" : "font-light"}`}>
          <span className="cursor-pointer">{state.projects ? "● Projects" : "Projects"}</span>
        </li>
      </ul>
    </div>
  );
};

export default PersonalNavbar;
